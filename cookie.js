// 设置cookie
function setCookie(cookieName, cookieValue, expiredays){
	var d = new Date();
	d.setTime(d.getTime() + expiredays*24*60*60*1000);//setTime() 方法以毫秒设置 Date 对象,d已发生改变
	var expires = d.toUTCString();//以世界时间为标准转换为字符串
	document.cookie = cookieName + "=" + cookieValue + ";expires=" + expires; 
}

// 获取cookie值
function getCookie(cookieName){
	var cookies = document.cookie.splite(";");
	for(var i=0;i<cookies.length;i++){
		var arr = cookies[i].splite("=")
		if(arr[0].trim() == cookieName){
			return arr[1].trim();
		}
	}
}