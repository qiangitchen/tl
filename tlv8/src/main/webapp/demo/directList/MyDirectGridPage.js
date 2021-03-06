/*=======主表配置======*/
var Maingrid;
var MainData = new tlv8.Data();
function getData() {
	MainData.setDbkey("oa");//指定使用数据库连接
	MainData.setTable("oa_re_dayreport");
	MainData.setFormId("direct_form");//主表关联form
	var d = document.getElementById("direct_from_grid");
	var labelid = "No,FTITLE,FCREATEPERSONNAME,FCREATETIME";//设置字段
	var labels = "No.,标题,姓名,时间";//设置标题
	var labelwidth = "40,80,80,80";//设置宽度
	var datatype = "ro,string,string,date";//设置字段类型
	var dataAction = {
		"queryAction" : "getGridAction",
		"savAction" : "saveAction",
		"deleteAction" : "deleteAction"
	};
	var maingrid = new tlv8.createGrid(d, labelid, labels, labelwidth,
			dataAction, "100%", "100%", MainData, 20, "", "", "", datatype,
			"false", "true");
	maingrid.grid.settoolbar(true, true, true, true);//设置按钮显示{新增、保存、刷新、删除}
	maingrid.grid.seteditModel(true);//设置是否可编辑
	Maingrid = maingrid.grid;
	Maingrid.refreshData();
}

/*======从表配置======*/
var SubData = new tlv8.Data();
var subGrid;
function getData2() {
	SubData.setDbkey("oa");//指定使用数据库连接
	SubData.setTable("oa_re_dayreportdetail");
	var d = document.getElementById("direct_from_subgrid");
	var labelid = "No,FCONTENT,FPLANDATE,FOTHERPERSON";//设置字段
	var labels = "No.,内容,计划时间,参与人";//设置标题
	var labelwidth = "40,280,140,180";//设置宽度
	var datatype = "ro,string,date,string";//设置字段类型
	var dataAction = {
		"queryAction" : "getGridAction",
		"savAction" : "saveAction",
		"deleteAction" : "deleteAction"
	};
	var maingrid = new tlv8.createGrid(d, labelid, labels, labelwidth,
			dataAction, "100%", "100%", SubData, 20, "", "direct_form", "FMASTERID", datatype,
			"false", "true");
	maingrid.grid.settoolbar(true, false, true, true);//设置按钮显示{新增、保存、刷新、删除}
	maingrid.grid.seteditModel(true);//设置是否可编辑
	subGrid = maingrid.grid;
}

/*
*从表值改变时改变主表按钮状态
*/
function cheng_stae_bar(){
	document.getElementById("direct_from_grid").grid.settoolbar("no", true, "no", "no");//no 代表不改变
}

/*
*主表换行时刷新从表
*/
function refresh_child_data(){
	document.getElementById("direct_from_subgrid").grid.refreshData(); 
}

function bodyResize() {
	getData();
	getData2();
}