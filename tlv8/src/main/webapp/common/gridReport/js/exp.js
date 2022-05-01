var dbkey;
var table;
var relation;
var labels;
var where;
var orderby;

function getUrlParam(param) {
	dbkey = param.dbkey;
	table = param.table;
	relation = param.relation;
	labels = param.labels;
	where = param.where;
	orderby = param.orderby;
	setTimeout(initIMP, 100);
}

// 页面初始化
function initIMP() {// 接入参数
	$("#dbkey").val(dbkey);
	$("#table").val(table);
	$("#relation").val(relation);
	$("#labels").val(labels);
	$("#where").val(where);
	$("#orderby").val(orderby);
	initSelectList(relation, labels);
}

// 设置列表
function initSelectList(relation, labels) {
	if (!relation)
		return;
	var Cell = relation.split(",");
	var label = labels.split(",");
	var List = '<table class="table table-striped table-bordered table-hover" '
			+ ' style="width:100%;" id="selectCellData_table">'
			+ '<thead><tr>'
			+ '<th width="30px" style="text-align:center;">'
			+ '<input type="checkbox" onclick="allselect(this)" checked=true/></th> '
			+ '<th width="45%"  align="center">字段</th> '
			+ '<th align="center">列名</th></tr></thead>';
	for (var i = 0; i < Cell.length; i++) {
		if (Cell[i] != "No" && Cell[i] != "master_check") {
			List += "<tr><td style='text-align:center;'>"
					+ "<input type='checkbox' onclick='checkCell(this,\""
					+ Cell[i] + "\")' checked=true/></td>" + "<td>" + Cell[i]
					+ "</td>" + "<td>" + label[i] + "</td>" + "</tr>";
		}
	}
	List += "</table>";
	document.getElementById("selectCellView").innerHTML = List;
}

function allselect(obj) {
	if (!obj)
		return;
	var checkbox = document.getElementsByTagName("input");
	for (var i = 0; i < checkbox.length; i++) {
		if (checkbox[i].type == "checkbox") {
			checkbox[i].checked = obj.checked;
		}
	}
	if (obj.checked) {
		document.getElementById("relation").value = relation;
		document.getElementById("labels").value = labels;
	} else {
		document.getElementById("relation").value = "";
		document.getElementById("labels").value = "";
	}
}

function checkCell(obj, cell) {
	if (!obj || !cell)
		return;
	var dataTable = document.getElementById("selectCellData_table");
	var chekTr = dataTable.getElementsByTagName("tr");
	var screlation = "";
	var sclabels = "";
	for (var i = 1; i < chekTr.length; i++) {
		var checkTd = chekTr[i].getElementsByTagName("td");
		var checked = checkTd[0].getElementsByTagName("input")[0].checked;
		if (checked) {
			screlation += "," + checkTd[1].innerHTML;
			sclabels += "," + checkTd[2].innerHTML;
		}
	}
	screlation = screlation.replace(",", "");
	sclabels = sclabels.replace(",", "");
	document.getElementById("relation").value = screlation;
	document.getElementById("labels").value = sclabels;
}

// 开始导出
function expinit() {
	document.getElementById("impstatesetting").style.display = "";
	document.getElementById("impMainview").style.display = "none";
	document.getElementById("submitItem").click();
	J$("importform").submit();
	// document.forms[0].submit();
	setTimeout('ReadyStateChange()', 5000);
}

function ReadyStateChange(event) {
	tlv8.portal.dailog.dailogEngin();
}

function cancell() {
	tlv8.portal.dailog.dailogCancel();
}