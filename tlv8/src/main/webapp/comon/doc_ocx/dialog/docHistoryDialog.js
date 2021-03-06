var docHostPath;
var fileID;
var docAccess;
var isPrintDoc = true;
var currDocVersion;
var docID;
var staticGrid;
var firsetRowid;
var getUrlParam = function(data) {
	fileID = data.fileID;
	docHostPath = data.docPath;
	docID = data.docID;
	if (staticGrid) {
		var sql = "select SDOCVERSIONID,SDOCNAME,SSIZE,SPERSONNAME,SDEPTNAME,STIME from SA_DOCLOG where SDOCID='"
				+ docID
				+ "' and SACCESSTYPE != 'download' order by SDOCVERSIONID";
		var r = tlv8.sqlQueryActionforJson("system", sql);
		// var response = justep.Doc.getAccessRecord(docID, false, true, true);
		var response = r.data;
		if (r.flag == "false") {
			alert(r.messgae);
			return;
		}
		if (response) {
			staticGrid.clearData();
			for (var i = 0; i < response.length; i++) {
				var json = {};
				json.rowid = new UUID().toString();
				if (i == 0) {
					firsetRowid = json.rowid;
				}
				json.number = i + 1;
				json.SDOCVERSIONID = response[i].SDOCVERSIONID;
				json.SDOCNAME = response[i].SDOCNAME;
				json.SSIZE = response[i].SSIZE;
				json.SPERSONNAME = response[i].SPERSONNAME;
				json.SDEPTNAME = response[i].SDEPTNAME;
				json.STIME = response[i].STIME;
				staticGrid.addData(json);
			}
			staticGrid.selectRowById(firsetRowid);
		}
	}
	initParam(data.access);
	if (!(typeof data.isPrint === "undefined" || data.isPrint == null))
		isPrintDoc = data.isPrint;
};

function refreshData() {
	var response = justep.Doc.getAccessRecord(docID, false, true, true);
	if (response) {
		staticGrid.clearData();
		for (var i = 0; i < response.length; i++) {
			var json = {};
			json.rowid = new UUID().toString();
			json.number = i + 1;
			json.SDOCVERSIONID = response[i].SDOCVERSIONID;
			json.SDOCNAME = response[i].SDOCNAME;
			json.SSIZE = response[i].SSIZE;
			json.SPERSONNAME = response[i].SPERSONNAME;
			json.SDEPTNAME = response[i].SDEPTNAME;
			json.STIME = response[i].STIME;
			staticGrid.addData(json);
		}
	}
}
function initParam(access) {
	docAccess = typeof access === "undefined" || access == null ? 32768
			: access;
	if (!((docAccess % 8) >= 4)) {
		J$("downloadDoc").disabled = true;
	}
}

function browseDocByType(type) {
	try {
		var historyRecord = staticGrid;
		var rowId = historyRecord.selectedRow.id;
		var docVersion = historyRecord.getValue(rowId, "SDOCVERSIONID");
		var docName = historyRecord.getValue(rowId, "SDOCNAME");
		justep.Doc.browseDocByFileID("/root", docName, fileID, docVersion,
				type, 'History', isPrintDoc);
	} catch (e) {
		alert("??????????????????!" + e.message);
	}
}

function browseDoc() {
	browseDocByType("content");
}

$(document).ready(function() {
	staticGrid = new StaticGrid("historyRecordNav"); // ????????????
	var labs = [ {
		id : 'number',
		name : '??????',
		width : 30
	}, {
		id : 'SDOCVERSIONID',
		name : 'DocVersion',
		width : 0
	}, {
		id : 'SDOCNAME',
		name : '??????',
		width : 220
	}, {
		id : 'SSIZE',
		name : '??????(??????)',
		width : 60
	}, {
		id : 'SPERSONNAME',
		name : '?????????',
		width : 60
	}, {
		id : 'SDEPTNAME',
		name : '???????????????',
		width : 100
	}, {
		id : 'STIME',
		name : '????????????',
		width : 120
	} ];
	staticGrid.init(labs); // ?????????
});

function browseRevisionDoc() {
	try {
		var historyRecord = staticGrid;
		var rowId = historyRecord.selectedRow.id;
		var docName = historyRecord.getValue(rowId, "SDOCNAME");
		var isDoc = '.doc.docx.xls.xlsx.ppt.mpp.vsd.'
				.indexOf(String(/\.[^\.]+$/.exec(docName)) + '.') >= 0;
		if (isDoc) {
			browseDocByType("revision");
		} else {
			alert("???" + docName + "?????????????????????????????????");
		}
	} catch (e) {
		alert("????????????????????????!");
	}
}

function deleteVersion() {
	var historyRecord = staticGrid;
	var rowId = historyRecord.selectedRow.id;
	justep.Doc.deleteVersion(docHostPath, fileID, rowId, '-1');
	refreshData();
}
function deleteCurrentVersion() {
	var historyRecord = staticGrid;
	var rowId = historyRecord.selectedRow.id;
	var docVersion = historyRecord.getValue(rowId, "sDocVersionID");
	justep.Doc.deleteVersion(docHostPath, fileID, rowId, docVersion);
	refreshData();
}

function downloadDoc() {
	try {
		var historyRecord = staticGrid;
		var rowId = historyRecord.selectedRow.id;
		var docVersion = historyRecord.getValue(rowId, "sDocVersionID");
		justep.Doc.downloadDocByFileID(docHostPath, fileID, docVersion);
	} catch (e) {
		alert("??????????????????!");
	}
}

function listSelect() {

}

function tabPage1Select() {
	try {
		var historyRecord = staticGrid;
		var rowId = historyRecord.selectedRow.id;
		var docVersion = historyRecord.getValue(rowId, "SDOCVERSIONID");
		if (!rowId || docVersion == currDocVersion)
			return true;
		currDocVersion = docVersion;
	} catch (e) {
		return;
	}
	var a = "";
	try {
		var arr = justep.Doc.browseFileComment("/root", fileID, docVersion);
		arr = JSON.parse(arr);
		for (var i = 0; i < arr.length; i++) {
			var item = arr[i];
			var revisionType = "????????????";
			if (item.Type == 1) {
				revisionType = "??????";
			} else if (item.Type == 2) {
				revisionType = "??????";
			}
			var content = item.Text ? ("\r\n??????:" + item.Text) : '';
			a += "??????:" + item.Index + "; ????????????:" + revisionType + "; ?????????:"
					+ item.Author + "; ????????????:" + item.Date + ";" + content
					+ "\r\n\r\n";
		}
	} catch (e) {
	}
	$("#commentArea").val(a);
}

function tabselected(title, index) {
	switch (index) {
	case 0:
		listSelect();
		break;
	case 1:
		tabPage1Select();
		break;
	default:
		break;
	}
}
