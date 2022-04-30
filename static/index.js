function isPhone(log) {
	var info = navigator.userAgent;
	var sencePhone = /mobile/i.test(info);
	if (log) { console.log(sencePhone); }
	return sencePhone;
}
var screenW, screenH;
function getWindow(log) {
	screenW = window.innerWidth
		|| document.documentElement.clientWidth
		|| document.body.clientWidth;
	screenH = window.innerHeight
		|| document.documentElement.clientHeight
		|| document.body.clientHeight;
	if (log) { console.log(screenW + "*" + screenH); }
}
function senceReset() {
	getWindow();
	document.getElementById("header").style.height = (screenH * 0.90) + "px";
	document.getElementById("header").style.marginTop = (screenH * 0.05) + "px";
	setTimeout("senceReset()", 10);
}

window.onload = function () {
	document.getElementById("load").style.display="none";
	if(isPhone(true)){
		alert("您好，用于齐谐者暂时不适配移动端\n在移动端网页可能会不美观\n感谢您的访问！");
	}
	getWindow(true);
	senceReset();
}