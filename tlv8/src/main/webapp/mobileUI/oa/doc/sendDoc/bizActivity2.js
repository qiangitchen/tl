var mainData;

var flwCompent;
// 流程配置
var setting = {
	autosaveData : false, // 自动保存数据
	autoclose : true, // 自动关闭页面
	autofilter : true, // 自动过滤数据
	autorefresh : true, // 自动刷新数据
	autoselectext : false, // 自动获取执行人
	item : {// 按钮配置
		audit : true, // 审批按钮
		back : true,// 回退按钮
		out : true,// 流转按钮
		transmit : false,// 转发按钮
		pause : false,// 暂停按钮
		stop : false// 终止按钮
	}
};

function initBody() {
	mainData = new tlv8.Data();
	mainData.setDbkey("oa");
	mainData.setTable("OA_DC_SENDDOC");
	mainData.setFormId("DATA_FORM");
	
	flwCompent = new tlv8.flw("task_execute", mainData, setting);
}

$(document).ready(function() {
	initBody();
	var sData1 = getParamValueFromUrl("sData1");
	$("#DATA_FORM").attr("rowid", sData1);
	mainData.refreshData();
	getOpinionData(sData1);
});

function afRefresh() {
	var FTEMPLATE = mainData.getValueByName("FDOCFILE");
	if (FTEMPLATE && FTEMPLATE != "") {
		FTEMPLATE = translateDocInfo(FTEMPLATE);
		FTEMPLATE = FTEMPLATE[0];
		var docName = FTEMPLATE.filename;
		var fileID = FTEMPLATE.fileID;
		var html = "<label class='ui-lable-info'>" + docName + "</label>"
				+ "<a href=\"#popupMenu\" onclick=\"browseSourceDoc('" + fileID
				+ "')\">查看文件</a>";
		$("#FDOCFILE_showdiv").html(html);
	}
	var FATTACHMENT = mainData.getValueByName("FATTACHMENT");
	if (FATTACHMENT && FATTACHMENT != "") {
		FATTACHMENT = translateDocInfo(FATTACHMENT);
		var html = "";
		for (var i = 0; i < FATTACHMENT.length; i++) {
			var docName = FATTACHMENT[i].filename;
			var fileID = FATTACHMENT[i].fileID;
			html += i + 1 + ".<label class='ui-lable-info'>" + docName
					+ "</label>"
					+ "<a href=\"#popupMenu\" onclick=\"browseSourceDoc('"
					+ fileID + "')\">查看文件</a><br/>";
		}
		$("#FATTACHMENT_showdiv").html(html);
	} else {
		$("#FATTACHMENT_showdiv").html("");
	}
}
