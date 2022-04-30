var screenW, screenH;
function getWindow(log) {
	screenW = window.innerWidth
		|| document.documentElement.clientWidth
		|| document.body.clientWidth;
	screenH = window.innerHeight
		|| document.documentElement.clientHeight
		|| document.body.clientHeight;
	if (log) {
		console.log(screenW + "+" + screenH);
	}
}
async function hitokoto(){
	const res = await fetch("https://v1.hitokoto.cn/?c=i&encode=json").then(res => res.json());
	console.log(res.hitokoto);
}
hitokoto();
function senceReset() {
	getWindow();
	if (location.pathname.match(/\/Slouchwind\/about/g) == "/Slouchwind/about") {
		document.getElementsByClassName("userImg")[0].style.marginLeft = (screenW / 2 - document.getElementsByClassName("userImg")[0].width / 2) + "px";
		document.getElementsByClassName("name")[0].style.marginLeft = (screenW / 2 - document.getElementsByClassName("name")[0].clientWidth / 2) + "px";
	}
	setTimeout("senceReset()", 0);
}
window.onload = function () {
	senceReset();
	getWindow(true);
	if (screenW <= 520) {
		document.getElementById("time").style.display = "none";
	}
	document.getElementById("load").style.display = "none";
}
