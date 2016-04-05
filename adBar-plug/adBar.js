var adpage = 1;
function adBar(speed){
	

	//增加广告按钮
	var adBox = document.getElementById("main-top-ad");
	var imgsBox = document.getElementById("top-ad-img");
	var imgs = imgsBox.getElementsByTagName("a");
	for (var i = 0; i < imgs.length; i++) {
		var j = i+1;
		var a = document.createElement("a");
		a.innerHTML = j;
		a.setAttribute("href","javascript:void(0);");
		a.setAttribute("id","ad-link-" + j);
		a.setAttribute("class","ad-page");
		a.setAttribute("onclick","adChange(" + j+ ");");
		adBox.appendChild(a);

	}

	//广告条按钮排序
	sortAdbarBtn();
	//广告条无限滚动

	//如果参数为0，则没有自动播放
	if (speed != 0) {

		window.setInterval('adChange()',speed);	
	}
	
}

function sortAdbarBtn(){
	//广告栏按钮排序
	var adbtn = document.getElementsByClassName("ad-page");
	var nums = adbtn.length;
	//right 最小的是10 间隔23
	for(var i = 0;i<nums;i++){
		console.log(i);
		var x = nums-i-1;
		adbtn[x].style.right = 10 + 23*i + "px";
	}
	
}
function adChange(page){

	
	var alinks = document.getElementById("top-ad-img").getElementsByTagName("a");

	var theEvent = window.event || arguments[0];  

	

	//DOM
	if(!page){
		if(adpage == alinks.length){
			adpage = 1;
		}
		else{
			adpage++;
		}
		page = adpage;
		
	}
	else{
		if(theEvent.preventDefault){
		theEvent.preventDefault();
		}
		else{
			theEvent.returnValue = false;
		}
	}


	
	var percent = (page-1) / alinks.length *100;
	var now_alink = document.getElementById("ad-link-" + page);
	var other_alinks =  document.getElementsByClassName("ad-page")
	for(var i=0;i<other_alinks.length;i++){
		other_alinks[i].style.opacity = "0.6";
		other_alinks[i].style.backgroundColor = "#F5F5F5";
		other_alinks[i].style.color = "#555555";
	}
	now_alink.style.opacity = "1";
	now_alink.style.backgroundColor = "rgba(255,102,0,.8)";
	now_alink.style.color = "#fff";
	document.getElementById("top-ad-img").style.WebkitTransform = "translateY(-" + percent + "%)";
	document.getElementById("top-ad-img").style.msTransform = "translateY(-" + percent + "%)";
	document.getElementById("top-ad-img").style.transform = "translateY(-" + percent + "%)";
	adpage = page;
}


