window.onload=function(){
	let sobj=scrollobj();
	const fanhui=$(".fix img")[0];
	fanhui.onclick=function(){
		animate(sobj,{scrollTop:0},500);
	}

	xialadaohang(".daohanglan",".xuangxiang",1);

	zylunbo(".banner a img",".banner",".banner a",[],".lunbodian",".zuo",".you",2000,"active")

}