var togofullScreen = function(othis) {
	var SCREEN_FULL = 'layui-icon-screen-full', SCREEN_REST = 'layui-icon-screen-restore', iconElem = $(
			othis).children("i");

	if (iconElem.hasClass(SCREEN_FULL)) {
		fullScreen();
		iconElem.addClass(SCREEN_REST).removeClass(SCREEN_FULL);
	} else {
		exitScreen();
		iconElem.addClass(SCREEN_FULL).removeClass(SCREEN_REST);
	}
};
function fullScreen() {
	var ele = document.documentElement, reqFullScreen = ele.requestFullScreen
			|| ele.webkitRequestFullScreen || ele.mozRequestFullScreen
			|| ele.msRequestFullscreen;
	if (typeof reqFullScreen !== 'undefined' && reqFullScreen) {
		reqFullScreen.call(ele);
	}
}
function exitScreen() {
	var ele = document.documentElement
	if (document.exitFullscreen) {
		document.exitFullscreen();
	} else if (document.mozCancelFullScreen) {
		document.mozCancelFullScreen();
	} else if (document.webkitCancelFullScreen) {
		document.webkitCancelFullScreen();
	} else if (document.msExitFullscreen) {
		document.msExitFullscreen();
	}
}
var obj = null;
var office = null;
var dataObj = new Object;

function verify(obj)
{
    console.info(obj);
}

function init(tagID, w, h) {
	if (office != undefined)
        office.Application.Quit();
    var iframe;
    iframe = document.getElementById(tagID);
    var codes = [];
    codes.push('<object name="rpcet" id="rpcet_id" type="application/x-et" wpsshieldbutton="false" width="100%" height="100%">');
    codes.push('<param name="quality" value="high" />');
    codes.push('<param name="bgcolor" value="#ffffff" />');
    codes.push('<param name="Enabled" value="1" />');
    codes.push('<param name="allowFullScreen" value="true" />');
    codes.push('</object>');
    iframe.innerHTML = codes.join("");
    office = document.getElementById("rpcet_id");
    window.onbeforeunload = function () {
        office.Application.Quit();
    };
	return office.Application;
}

function Init(tagID) {
    if (office != undefined)
        office.Application.Quit();
    var iframe;
    iframe = document.getElementById(tagID);
    var codes = [];
    codes.push('<object name="rpcet" id="rpcet_id" type="application/x-et" wpsshieldbutton="false" width="100%" height="100%">');
    codes.push('<param name="quality" value="high" />');
    codes.push('<param name="bgcolor" value="#ffffff" />');
    codes.push('<param name="Enabled" value="1" />');
    codes.push('<param name="allowFullScreen" value="true" />');
    codes.push('</object>');
    iframe.innerHTML = codes.join("");
    office = document.getElementById("rpcet_id");
    window.onbeforeunload = function () {
        office.Application.Quit();
    };
	return office.Application;
}

var app = null;
//????????????????????????ET
function InitEt() {
    app = Init("et");
    if (!app) {
        // ????????????
        office.setAttribute('data', 'newfile.et');
        var Interval_control = setInterval(
            function () {
                if (app) {
                    clearInterval(Interval_control);
                    AddFile();
                }
            }, 500);
    }
     else {
		setTimeout(function (){
			AddFile();
		},200);
    //RegisterBeforeCloseEvent();
	}
}

function printwps() {
    app.print();
}

function AddFile(){
	var app = office.Application;
	app.openDocumentRemote_s(template, false);
	//var workbook = app.Workbooks.Add();
	//verify(workbook);
	//alert(workbook.Name);
}

function setUserName(username) {
    app.setUserName(username);
}

//???????????????????????????
function showRevision0() {
    app.showRevision(0);
}

//??????????????????
function showRevision1() {
    app.showRevision(1);
}

//??????????????????
function showRevision2() {
    app.showRevision(2);
}

function saveAs() {
    var aa = app.saveAs();
}

//??????????????????/???????????????????????????????????????????????????
function menuvisibleF() {
	var aa = app.ActiveDocument.CommandBars.get_Item("File").Controls.get_Item("??????????????????(&L)").Visible = false;
	var bb = app.ActiveDocument.CommandBars.get_Item("File").Controls.get_Item("??????????????????(&E)").Visible = false;
}

function menuvisibleT() {
	var aa = app.ActiveDocument.CommandBars.get_Item("File").Controls.get_Item("??????????????????(&L)").Visible = true;
	var bb = app.ActiveDocument.CommandBars.get_Item("File").Controls.get_Item("??????????????????(&E)").Visible = true;
}

//???????????????
function setToolbarAllVisibleT() {
    var aa = app.setToolbarAllVisible(true);
}

//???????????????
function setToolbarAllVisibleF() {
	var aa = app.setToolbarAllVisible(false);
	layui.layer.alert(aa);
}

//??????????????????
function getText() {
    var ret = app.ActiveDocument.Content.Text;
    ret = ret.replace(/\r/g, '\r\n');
    return ret;
}

//????????????
function enableProtectT() {
    app.enableProtect(true);
}

//????????????
function enableProtectF() {
    app.enableProtect(false);
}

//????????????
function enableCut() {
    var aa = app.enableCut(false);
}

//????????????
function enableCopy() {
    var aa = app.enableCopy(false);
}

//??????????????????
function fileVisible() {
    var ret = app.showCommandByName("Menu Bar", 1, false);
}

//????????????????????????
function EnterInkDraw() {
    var aa = app.EnterInkDraw();
    layui.layer.alert(aa);
}

//????????????????????????
function ExitInkDraw() {
    var aa = app.ExitInkDraw();
    layui.layer.alert(aa);
}

//????????????
function appFullScreen() {
    app.FullScreen();
}

function def_callBackFun(a) {
	var callerName = tlv8.RequestURLParam.getParam("callerName");
	tlv8.portal.callBack(callerName,"rahgereditercalback");
}