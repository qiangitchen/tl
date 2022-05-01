/*==数据源===此项为必须定义==*/
var currentgrid;
var data = new tlv8.Data();
data.setDbkey("system");//指定使用数据库连接
data.setTable("SA_VPNLOG_VIEW");//指定grid对应的表
		
/*====*/
var currentgrid;
function getData() {
	var d = document.getElementById("main-grid-view");
	var labelid = "No,SCODE,SNAME,SFNAME,SLOGINTIME";//设置字段
	var labels = "No.,登陆账号,用户名,用户单位,登陆时间";//设置标题
	var labelwidth = "40,80,80,380,140";//设置宽度
	var datatype = "ro,string,string,string,datetime";//设置字段类型
	var dataAction = {
		"queryAction" : "getGridAction",//查询动作
		"savAction" : "saveAction",//保存动作
		"deleteAction" : "deleteAction"//删除动作
	};
	var maingrid = new tlv8.createGrid(d, labelid, labels, labelwidth,
		dataAction, "100%", "100%", data, 20, "", "", "", datatype,
		"false", "true");
	//设置按钮显示{新增、保存、刷新、删除}
	maingrid.grid.settoolbar(false, false, true, false);
	//设置是否可编辑
	maingrid.grid.seteditModel(false);
	currentgrid = maingrid.grid;
	maingrid.grid.setExcelexpBar(true);
	currentgrid.insertNum = true;//新增向下(默认新增在第一行)
	currentgrid.refreshData();//刷新数据
}