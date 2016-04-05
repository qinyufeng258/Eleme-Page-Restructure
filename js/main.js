var currentPosition;
var timer;  

function showClassMenu(index){

	var theEvent = window.event || arguments[0];  

	if(theEvent.preventDefault){
		theEvent.preventDefault();
	}
	else{
		theEvent.returnValue = false;
	}

	var classMenu = document.getElementsByClassName("mid-all");
	var btn = document.getElementsByClassName("main-mid-class")[0].getElementsByTagName("a");
	var allShop = document.getElementById("mid-all-shop");

	for(var i=0;i<classMenu.length;i++){
		classMenu[i].style.display = "none";
		btn[i+1].style.height = "25px";
		btn[i+1].style.lineHeight = "25px";
		btn[i+1].style.backgroundColor = "";
	}

	if(index == -1){
		allShop.style.backgroundColor= "#0089dc";
		allShop.style.color= "#fff";
		return true;
	}

	classMenu[index-1].style.display = "block";

	allShop.style.backgroundColor= "#fff";
	allShop.style.color= "#959595";
	
	btn[index+1].style.height = "36px";
	btn[index+1].style.lineHeight = "36px";
	btn[index+1].style.backgroundColor = "#F7F7F7";


}

function showStar(n,x){

    var con_wid=document.getElementById("item-info-star").offsetWidth;
    var del_stars=document.getElementsByClassName("bottom-star");

    //console.log(con_wid);
    del_star = del_stars[x];
    //透明星星移动的像素
    var del_move=(n*con_wid)/10;
    
    del_star.style.backgroundPosition=-del_move+"px 0px";
    del_star.style.left=del_move+"px";
}

function GetRandomNum(Min,Max){   

	var Range = Max - Min;   
	var Rand = Math.random();  

	return(Min + Math.round(Rand * Range));   
}   
function sortBarFixed(){
	
	var currentpos = document.documentElement.scrollTop || document.body.scrollTop; 
	var sortMenu = document.getElementsByClassName("main-fix-sort")[0];

	currentpos = parseInt(currentpos);
	//console.log("sa" + currentpos);

	if (currentpos > 320) {
		sortMenu.style.display = "block";
	}
	else{
		sortMenu.style.display = "none";

	}	 
}

function moveTop(e){

	var theEvent = window.event || arguments[0];  

	if(theEvent.preventDefault){
		theEvent.preventDefault();
	}
	else{
		theEvent.returnValue = false;
	}
	
	// document.documentElement.scrollTop = 0;
	// document.body.scrollTop = 0;
	timer=setInterval("runToTop()",1);  

}

function moveDown(e){

	var theEvent = window.event || arguments[0];  

	if(theEvent.preventDefault){
		theEvent.preventDefault();
	}
	else{
		theEvent.returnValue = false;
	}
	
	// document.documentElement.scrollTop = 0;
	// document.body.scrollTop = 0;
	//可在此处停止AJAX异步刷新商家菜单，然后到达底部
	timer=setInterval("runToDown()",1);  

}
 
function runToDown(){  

	currentPosition=document.documentElement.scrollTop || document.body.scrollTop; 
	currentPosition+=10;  
	//alert(document.body.scrollHeight);
	//console.log(currentPosition + ":" +window.innerHeight);
	
	if(currentPosition<window.innerHeight){  
		window.scrollTo(0,currentPosition);  
	}  
	else{  
		window.scrollTo(0,document.body.scrollHeight);  
		clearInterval(timer);  
	}  

} 

function runToTop(){  

	currentPosition=document.documentElement.scrollTop || document.body.scrollTop; 
	currentPosition-=10;  

	if(currentPosition>0)  
	{  
		window.scrollTo(0,currentPosition);  
	}  
	else  
	{  
		window.scrollTo(0,0);  
		clearInterval(timer);  
	}  

} 

function menuHover(){

	//商家信息 hover效果
	var items = document.getElementsByClassName("menu-content-item");

	for (var i = items.length - 1; i >= 0; i--) {
		
		//如果是第四列的菜单，则detial显示在左侧，其他显示在右侧
		var detail_items = items[i].getElementsByClassName("item-detail")[0];
		var arrow_items = detail_items.getElementsByClassName("item-detail-arrow")[0];
		var menu_items = items[i].getElementsByClassName("menu-item")[0];
		var bottom_star = menu_items.getElementsByClassName("bottom-star")[0];
		
		if((i+1) % 4 == 0){
			detail_items.style.left	= "-101%";
			arrow_items.style.left = "292px";
			arrow_items.style.borderTop = "1px solid #C4C4C4";
			arrow_items.style.borderRight = "1px solid #C4C4C4";
			arrow_items.style.borderBottom = "0px";
			arrow_items.style.borderLeft = "0px";

		}
		//如果菜单距离底部小于detail高度，则detail改变top值，和小三角的显示
		//解决闭包带来的i变量问题  匿名包裹器
		 (function(e) {

		 	var detail_items = items[e].getElementsByClassName("item-detail")[0];
			var arrow_items = detail_items.getElementsByClassName("item-detail-arrow")[0];
			var menu_items = items[e].getElementsByClassName("menu-item")[0];
			var bottom_star = menu_items.getElementsByClassName("bottom-star")[0];
			
		 	menu_items.onmouseenter = function(){

		 		var view = window.innerHeight || document.documentElement.clientHeight;
		 		var desx = parseInt(detail_items.getBoundingClientRect().left);
				var desy = parseInt(detail_items.getBoundingClientRect().top);
				var detail_des = view - desy - detail_items.offsetHeight;

				//console.log("Location:" + desx + "," + desy + "," + view + "," + detail_items.offsetHeight + "," + detail_des);
				if(detail_des < -20 ){
					var movedes = detail_items.offsetHeight - menu_items.offsetHeight;
					detail_items.style.top = "-" + movedes + "px";
					arrow_items.style.top = detail_items.offsetHeight-40 +  "px";
				} 
				menu_items.style.backgroundColor = "#F8F8F8";
				bottom_star.style.backgroundColor = "#FDFDFD";
				detail_items.style.visibility = "visible";
				detail_items.style.opacity = "1";
				detail_items.style.zIndex = "1000";

			};
			menu_items.onmouseleave = function(){

				var view = window.innerHeight || document.documentElement.clientHeight;
		 		var desx = parseInt(detail_items.getBoundingClientRect().left);
				var desy = parseInt(detail_items.getBoundingClientRect().top);
				var detail_des = view - desy - detail_items.offsetHeight;

				if(detail_des > -20){
					var movedes = detail_items.offsetHeight - menu_items.offsetHeight;
					detail_items.style.top = "0px";
					arrow_items.style.top = "10px";
				} 

				menu_items.style.backgroundColor = "#fff";
				bottom_star.style.backgroundColor = "#fff";
				detail_items.style.visibility = "hideen";
				detail_items.style.opacity = "0";
				detail_items.style.zIndex = "-100";
			};

		 })(i);
	}
}

window.onload = function(){

	//sortBarFixed();
	/*注册事件*/
	if(document.addEventListener){
	    document.addEventListener('DOMMouseScroll',sortBarFixed,false);
	}//W3C
	window.onmousewheel=document.onmousewheel=sortBarFixed;//IE/Opera/Chrome

	menuHover();

	adBar(3000);

	//底部APP hover
	var wecaht = document.getElementById("icon-wechat");
	var wechat_info = document.getElementById("wechat-items-multi");
	wecaht.onmouseover = function(){
		wechat_info.style.visibility = "visible";
		wechat_info.style.opacity = "1";
	};
	wecaht.onmouseout = function(){
		wechat_info.style.visibility = "hidden";
		wechat_info.style.opacity = "0";
	};

	//商家星级	
	var stars = document.getElementsByClassName("bottom-star");

	for (var i = stars.length - 1; i >= 0; i--) {

		showStar(GetRandomNum(0,10),i);
	}
	showStar(7,1);

	window.onscroll = function(){

		var t = document.documentElement.scrollTop || document.body.scrollTop;
		if (t > 50) {
        	document.getElementById("icon-moveup").style.visibility = "visible";
	        document.getElementById("icon-moveup").style.opacity = "1";
	        document.getElementById("icon-movedown").style.WebkitTransform = "translateY(0px) rotate(180deg)";
	        document.getElementById("icon-movedown").style.transform = "translateY(0px) rotate(180deg)";
	        document.getElementById("icon-movedown").style.transform = "translateY(0px) rotate(180deg)";
	    }
	    else {
	        document.getElementById("icon-moveup").style.visibility = "hidden";
	        document.getElementById("icon-moveup").style.opacity = "0";
	        document.getElementById("icon-movedown").style.WebkitTransform = "translateY(-45px) rotate(180deg)";
	        document.getElementById("icon-movedown").style.transform = "translateY(-45px) rotate(180deg)";
	        document.getElementById("icon-movedown").style.msTransform = "translateY(-45px) rotate(180deg)";
	    }
	};

};
