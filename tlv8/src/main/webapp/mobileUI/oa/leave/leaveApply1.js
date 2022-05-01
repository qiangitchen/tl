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
		stop : false
	// 终止按钮
	}
};

function initBody() {
	mainData = new tlv8.Data();
	mainData.setDbkey("oa");
	mainData.setTable("oa_leave");
	mainData.setFormId("MAIN_DATA_FORM");

	flwCompent = new tlv8.flw("task_execute", mainData, setting);
}

$(document).ready(function() {
	initBody();
	var sData1 = getParamValueFromUrl("sData1");
	if (sData1 && sData1 != "") {
		$("#MAIN_DATA_FORM").attr("rowid", sData1);
		mainData.refreshData();
		getOpinionData(sData1);
	} else {
		$("#FCREATORFNAME").val(justep.Context.getCurrentPersonFName());
		$("#FCREATORNAME").val(justep.Context.getCurrentPersonName());
		$("#FCREATORFID").val(justep.Context.getCurrentPersonFID());
		$("#FCREATORID").val(justep.Context.getCurrentPersonID());
		$("#FCREATEDATE").val(tlv8.System.Date.sysDateTime());
	}
});

function afRefresh() {
	// 数据刷新之后处理
}

function doDataSaveaAtion() {
	mainData.saveData();
}