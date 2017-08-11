"use strict"

window.onload=function(){
	
	
	
//	nav_hidden
//	获取title及li
	let nav_li=document.querySelectorAll('.nav_all .contain div .left');
//	console.log(nav_li);
	let div=document.querySelector('.nav_all .contain div');
//	console.log(div.offsetWidth);
//	console.log(div);
	let nav_hidden_ul=document.querySelector('.nav_hidden .hidden');
	let nav_hidden_li=document.querySelectorAll('.nav_hidden .hidden > li');
//	console.log(nav_hidden_li);
	
//	鼠标移上去,让其显示高度
	div.onmouseover=function(){
		animate(nav_hidden_ul,{height:230},300);
	}
	
//	鼠标移到每一个nav_li,让当前的hidden_li显示
	nav_li.forEach(function(val,index){
		val.onmousemove=function(){
			nav_hidden_li.forEach(function(value){
				value.classList.remove('li_first');
			});
			nav_hidden_li[index].classList.add('li_first');
		}
	});
	
//	鼠标移上去,让其显高度消失
	div.onmouseout=function(){
		animate(nav_hidden_ul,{height:0},300);
	}
	
	
//	nav_hidden	
	
	
	
	
	//	banner

	let banners=document.querySelector('.main_banner');
	let banner_img=document.querySelectorAll('.main_banner .banner_all img');
	let banner_circles=document.querySelectorAll('.main_banner .bottom .big > li');

	let banner_left=document.querySelector('.main_banner div.left');
	let banner_right=document.querySelector('.main_banner div.right');
	let banner_times=setInterval(bannermove,2000);
	
	
	let m=0;
	let banner_flag=true;
//	自动轮播
	function bannermove(ways='rights'){
		if(ways=='rights'){
			m++;
			if(m>=banner_img.length){
				m=0;
			}
		}else if(ways=='lefts'){
			m--;
			if(m<0){
				m=banner_img.length-1;
			}
		}
		
		
		banner_img.forEach(function(value){
			value.classList.remove('first_img');
		});
		banner_img[m].classList.add('first_img');
		banner_circles.forEach(function(value){
			value.classList.remove('small_one');
		});
		banner_circles[m].classList.add('small_one');
	}
	
	
	banners.onmouseover=function(){
		clearInterval(banner_times);
	}
	banners.onmouseout=function(){
		banner_times=setInterval(bannermove,2000);
	}
	
	
//	circles
	let banner_circles_times;
	banner_circles.forEach(function(value,index){
		value.onmouseover=function(){
			
			banner_circles_times=setTimeout(function(){
				banner_img.forEach(function(value){
					value.classList.remove('first_img');
				});
				banner_img[index].classList.add('first_img');
				banner_circles.forEach(function(value){
					value.classList.remove('small_one');
				});
				banner_circles[index].classList.add('small_one');
//				this.classList.add('min_circle');

//指向当前的圆圈,让当前图片的下标m为当前圆圈的下标
				m=index;//？？？？？
			},500);
		}
		value.onmouseout=function(){
			clearTimeout(banner_circles_times);
		}
	});
	
	
//	left——right
	
	banner_left.onclick=function(){
		if(banner_flag){
			banner_flag=false;
			bannermove('lefts');
		}
	}
	
	banner_right.onclick=function(){
		if(banner_flag){
			banner_flag=false;
			bannermove();
		}
	}
	
	
	
	banner_img.forEach(function(value){
		value.addEventListener('transitionend',function(){
			banner_flag=true;
		});
	});

//	banner	





//	banner_left_hidden	


//	获取左侧列表
	let banner_left_title=document.querySelectorAll('.main_banner .banner_left .left_one');
//	获取左侧隐藏的
	let banner_left_li=document.querySelectorAll('.main_banner .left_hidden > li');
	
//	鼠标移到左侧列表让隐藏的显示
	banner_left_title.forEach(function(value,index){
		value.onmouseover=function(){
			banner_left_li[index].style.display='block';
		}
	});
//	鼠标移到左侧列表让隐藏的显示，移到显示的上面，让其显示
	banner_left_li.forEach(function(value,index){
		value.onmouseover=function(){
			value.style.display='block';
		}
	});
//	鼠标移出左侧列表让显示的隐藏
	banner_left_title.forEach(function(value,index){
		value.onmouseout=function(){
			banner_left_li[index].style.display='none';
		}
	});
//	鼠标移出显示的让显示的隐藏
	banner_left_li.forEach(function(value,index){
		value.onmouseout=function(){
			value.style.display='none';
		}
	});

//	banner_left_hidden	




//	floor_one
//	获取小于号.大于号,及每个li,及宽度
	let floor_one_left=document.querySelector('.floor_one .top .top_left');
	let floor_one_right=document.querySelector('.floor_one .top .top_right');
	let floor_one_all=document.querySelector('.floor_one');
	
//	console.log(floor_one_all);
//	console.log(floor_one_right);
//	console.log(floor_one_left);
	let floor_one_li=document.querySelectorAll('.floor_one .contain ul > li');
	let floor_one_ul=document.querySelector('.floor_one .contain > ul');
//	console.log(floor_one_li.length);
	let width=floor_one_li[0].offsetWidth;

//	首先给两个开关为true;
	let fone_one_flag=true;
	let fone_two_flag=true;
	let floor_one_n=0;
	let floor_one_m=0;
//	用setInterval
	let time_one=setInterval(floor_onemove,12000);
//	console.log(time_one);
	function floor_onemove(){
		console.log(3);
		//	定义两个下标
		
		floor_one_m=floor_one_n+1;
		
		if(floor_one_m>=floor_one_li.length){
			floor_one_m=0;
		}
		
//		向右动画
		floor_one_li[floor_one_m].style.left=-width+'px';
		animate(floor_one_li[floor_one_n],{left:width},1000);
		animate(floor_one_li[floor_one_m],{left:0},1000);
		floor_one_left.classList.remove('com');
		floor_one_right.classList.add('com');

		
//		向左动画
		let t=setTimeout(function(){
			animate(floor_one_li[floor_one_m],{left:-width},1000);
			animate(floor_one_li[floor_one_n],{left:0},1000);
//			console.log(1);
			floor_one_right.classList.remove('com');
			floor_one_left.classList.add('com');
		},8000);
//		floor_one_n=floor_one_m;
	}
	
//	鼠标移到ul上清除时间
	floor_one_all.onmouseover=function(){
		clearInterval(time_one);
//		console.log(4);
	}
//	鼠标移走ul，执行时间函数
	floor_one_all.onmouseout=function(){
		time_one=setInterval(floor_onemove,12000);
//		console.log(5);
	}



	
//	设置双开关来控制点击左侧及右侧
//	首先给两个开关为true;
//	点击左侧将开关one赋值为false;等点击右侧动画完成后开启one开关
//	点击右侧将开关two赋值为false;等点击左侧动画完成后开启two开关
	fone_one_flag=true;
	fone_two_flag=true;
	//	点击左侧，向右动
	
	floor_one_left.onclick=function(){
		if(fone_one_flag){
			fone_one_flag=false;
			floor_one_m=floor_one_n+1;
//			console.log(1);
//			点击左侧,右移动画
			floor_one_li[floor_one_n].style.left='0';
			floor_one_li[floor_one_m].style.left=-width+'px';
			animate(floor_one_li[floor_one_n],{left:width},800);
			animate(floor_one_li[floor_one_m],{left:0},800,function(){
				fone_two_flag=true;
			});
			floor_one_left.classList.remove('com');
			floor_one_right.classList.add('com');
			
			floor_one_n=floor_one_m;
		}
		
	}



//	点击右侧，向左动
	floor_one_right.onclick=function(){
		if(fone_two_flag){
			fone_two_flag=false;
			floor_one_m=floor_one_n-1;
//			console.log(2);
	//		点击右侧，左移动画
			floor_one_li[floor_one_n].style.left=width+'px';;
			floor_one_li[floor_one_m].style.left='0';
			animate(floor_one_li[floor_one_m],{left:-width},800);
			animate(floor_one_li[floor_one_n],{left:0},800,function(){
				fone_one_flag=true;
			});
			floor_one_right.classList.remove('com');
			floor_one_left.classList.add('com');
			
			floor_one_n=floor_one_m;
		}
		
	}
	
	
	
	
	
//	floor_one








//	floor_three

	//获取要的a元素
	
function table(parent){
	let bar_one=parent.querySelectorAll(".top .title > div");

	//获取要的。right_two元素
	let bar_two=parent.querySelectorAll(".contain .con_right_ul > li");

	//循环给每一个a添加鼠标移入事件
	bar_one.forEach(function (value,index){
		value.onmouseover=function(){
			
			//鼠标移入后给a移除类名
			bar_one.forEach(function (value,index){
				value.classList.remove('floor_title');
			});
			//鼠标移入后给a添加类名,
			this.classList.add('floor_title');
			
			//鼠标移入后给right_two移除类名,让其不显示
			bar_two.forEach(function (value,index){
				value.classList.remove('con_right_li');
//				value.style.display="none";
			});
			//鼠标移入后给right_two添加类名,让其显示
			bar_two[index].classList.add('con_right_li');
//			bar_two[index].style.display="block";
		}
	});
}
	
	let parent_three=document.querySelector('.floor_three');
	table(parent_three);
	
	let parent_four=document.querySelector('.floor_four');
	table(parent_four);
	
	let parent_five=document.querySelector('.floor_five');
	table(parent_five);
	
//	floor_three	




//floor_six
//	获取小于号.大于号,及每个li,及宽度
	let floor_six_left=document.querySelector('.floor_six .top .left');
	let floor_six_right=document.querySelector('.floor_six .top .right');

//	console.log(floor_oneall_right);
//	console.log(floor_one_right);
//	console.log(floor_one_left);
	let floor_six_li=document.querySelectorAll('.floor_six .contain ul > li');
	let floor_six_ul=document.querySelector('.floor_six .contain > ul');
//	console.log(floor_one_li.length);
	let widths=floor_six_li[0].offsetWidth;



//	首先给两个开关为true;
	let fsix_one_flag=true;
	let fsix_two_flag=false;
//	设置双开关来控制点击左侧及右侧
//	首先给两个开关为true;
//	点击左侧将开关one赋值为false;等点击右侧动画完成后开启one开关
//	点击右侧将开关two赋值为false;等点击左侧动画完成后开启two开关

	let fsix_one_n=0;
	let fsix_one_m=0;
	//	点击左侧，向右动	
	floor_six_left.onclick=function(){
		if(fsix_one_flag){
			fsix_two_flag=true;
			fsix_one_m=fsix_one_n+1;
//			console.log(1);
//			点击左侧,右移动画
			floor_six_li[fsix_one_n].style.left='0';
			floor_six_li[fsix_one_m].style.left=-widths+'px';
			animate(floor_six_li[fsix_one_n],{left:widths},800);
			animate(floor_six_li[fsix_one_m],{left:0},800);
//			如果fsix_one_m大于长度减1,将小于号颜色去掉,并且将开关一赋值为false,让点击他没反应
			if(fsix_one_m>=floor_six_li.length-1){
				floor_six_left.classList.remove('com');
				fsix_one_flag=false;
			}
//			每次动画给右小于号加颜色
			floor_six_right.classList.add('com');
			
//			每次将移动过的m值给了n，因为m每次都移动到ul当中
			fsix_one_n=fsix_one_m;
		}
		
	}


//	点击右侧，向左动
	floor_six_right.onclick=function(){
		if(fsix_two_flag){
			fsix_one_flag=true;
			
			fsix_one_m=fsix_one_n-1;
//			console.log(2);
	//		点击右侧，左移动画
			floor_six_li[fsix_one_m].style.left=widths+'px';;
			floor_six_li[fsix_one_n].style.left='0';
			animate(floor_six_li[fsix_one_n],{left:-widths},800);
			animate(floor_six_li[fsix_one_m],{left:0},800);
//			如果fsix_one_m小于=0,将大于号颜色去掉,并且将开关二赋值为false,让点击他没反应
			if(fsix_one_m<=0){
				floor_six_right.classList.remove('com');
				fsix_two_flag=false;
			}
//			每次动画给左小于号加颜色
			floor_six_left.classList.add('com');
			
//			每次将移动过的m值给了n，因为m每次都移动到ul当中
			fsix_one_n=fsix_one_m;
		}
		
	}

//floor_six






//floor_eight_contnt

	function table_eight(parent){
		
	//	获取小于号.大于号,及每个li,及宽度
		let floor_eight_left=parent.querySelector('.left_only ');
		let floor_eight_right=parent.querySelector('.right_only');
		let floor_eight_small=parent.querySelectorAll('.bottom_only .big_only .s_one');
	//	console.log(floor_oneall_right);
	//	console.log(floor_one_right);
	//	console.log(floor_one_left);
		let floor_eight_li=parent.querySelectorAll('ul:nth-child(2) > li');
	//	let floor_eight_ul=document.querySelector('.floor_six .contain > ul');
	//	console.log(floor_one_li.length);
		let widthes=floor_eight_li[0].offsetWidth;
	
	
	
	//	首先给两个开关为true;
		let feight_one_flag=false;
		let feight_two_flag=true;
	//	设置双开关来控制点击左侧及右侧
	//	首先给两个开关为true;
	//	点击左侧将开关one赋值为false;等点击右侧动画完成后开启one开关
	//	点击右侧将开关two赋值为false;等点击左侧动画完成后开启two开关
	
		let feight_one_n=0;
		let feight_one_m=0;
		
		//	点击右侧，向左动
		floor_eight_right.onclick=function(){
			if(feight_two_flag){
				feight_one_flag=true;
				
				feight_one_m=feight_one_n+1;
	//			console.log(2);
		//		点击右侧，左移动画
				floor_eight_li[feight_one_m].style.left=widthes+'px';;
				floor_eight_li[feight_one_n].style.left='0';
				animate(floor_eight_li[feight_one_n],{left:-widthes},500);
				animate(floor_eight_li[feight_one_m],{left:0},500);
	//			如果feight_one_m大于=0,将小于号颜色去掉,并且将开关二赋值为false,让点击他没反应
				if(feight_one_m>=floor_eight_li.length-1){
					feight_two_flag=false;
				}
	//			给图片上的圆圈加背景及border
				floor_eight_small.forEach(function(val){
					val.classList.remove('small');
				});
				floor_eight_small[feight_one_m].classList.add('small');
				
	//			每次将移动过的m值给了n，因为m每次都移动到ul当中
				feight_one_n=feight_one_m;
			}
			
		}
	
		
		
		
		//	点击左侧，向右动	
		floor_eight_left.onclick=function(){
			if(feight_one_flag){
				feight_two_flag=true;
				feight_one_m=feight_one_n-1;
	//			console.log(1);
	//			点击左侧,右移动画
				floor_eight_li[feight_one_n].style.left='0';
				floor_eight_li[feight_one_m].style.left=-widthes+'px';
				animate(floor_eight_li[feight_one_n],{left:widthes},500);
				animate(floor_eight_li[feight_one_m],{left:0},500);
	//			如果feight_one_m小于长度减0,将大于号颜色去掉,并且将开关一赋值为false,让点击他没反应
				if(feight_one_m<=0){
					feight_one_flag=false;
				}
	//			给图片上的圆圈加背景及border
				floor_eight_small.forEach(function(val){
					val.classList.remove('small');
				});
				floor_eight_small[feight_one_m].classList.add('small');
				
	//			每次将移动过的m值给了n，因为m每次都移动到ul当中
				feight_one_n=feight_one_m;
			}
			
		}
	
	
	//	点击小圆圈来控制轮播
		floor_eight_small.forEach(function(val,index){
			val.onclick=function(){
	//			如果index大于feight_one_n
				if(index>feight_one_n){
					floor_eight_li[feight_one_n].style.left='0';
					floor_eight_li[index].style.left=widthes+'px';
					animate(floor_eight_li[feight_one_n],{left:-widthes},500);
					animate(floor_eight_li[index],{left:0},500);
					
					floor_eight_small.forEach(function(val){
						val.classList.remove('small');
					});
					floor_eight_small[index].classList.add('small');
					feight_one_n=index;
				}
				
				if(index<feight_one_n){
		//			如果index小于feight_one_n
					floor_eight_li[feight_one_n].style.left='0';
					floor_eight_li[index].style.left=-widthes+'px';
					animate(floor_eight_li[feight_one_n],{left:widthes},500);
					animate(floor_eight_li[index],{left:0},500);
					
					floor_eight_small.forEach(function(val){
						val.classList.remove('small');
					});
					floor_eight_small[index].classList.add('small');
					feight_one_n=index;
				}
			}
		});

	}


//	每一部分单独控制
	let parenteight_one=document.querySelector('.content .parteight_one');
	table_eight(parenteight_one);
	let parenteight_two=document.querySelector('.content .parteight_two');
	table_eight(parenteight_two);
	
	let parenteight_three=document.querySelector('.content .parteight_three');
	table_eight(parenteight_three);
	let parenteight_four=document.querySelector('.content .parteight_four');
	table_eight(parenteight_four);







//floor_eight_contnt



}
