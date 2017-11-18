/*
// 实现一个简单的Query
function $(selector) {
    
}

// 可以通过id获取DOM对象，通过#标示，例如
$("#adom"); // 返回id为adom的DOM对象

// 可以通过tagName获取DOM对象，例如
$("a"); // 返回第一个<a>对象

// 可以通过样式名称获取DOM对象，例如
$(".classa"); // 返回第一个样式定义包含classa的对象

// 可以通过attribute匹配获取DOM对象，例如
$("[data-log]"); // 返回第一个包含属性data-log的对象

$("[data-time=2015]"); // 返回第一个包含属性data-time且值为2015的对象

// 可以通过简单的组合提高查询便利性，例如
$("#adom .classa"); // 返回id为adom的DOM所包含的所有子节点中，第一个样式定义包含classa的对象
*/

function $(selector){
	//这里定义ele是考虑到多个选择器组合的情况，ele初始值是document
	var ele = document;
    //先将selector中多余的空格去除，仅留一个空格,再按空格分割不同形式选择器
    var sele = selector.replace(/\s+/, ' ').split(' ');
    for (var i=0; i<sele.length; i++){
    	switch(sele[i][0]){
    		case '#': 
    		    ele = ele.getElementById(sele[i].substring(1));
    		    break;
    		case '.':
    		    ele = ele.getElementsByClassName(sele[i].substring(1))[0];
    		    break;
    		case '[':
    		    var index = sele[i].indexOf('=');
    		    var elements = ele.getElementsByTagName('*');
    		    if (index !== -1){
    		    	var k = sele[i].substring(1,index);
    				var value = sele[i].substring(index+1, sele[i].length-1);
    			    for (var j=0; j<elements.length; j++){    
    				    if(elements[j][k] == value){
    					    ele = elements[j];
    				    	break;
    				    } 
    			    }
    		    } else{
    		    	  var k = sele[i].substring(1,sele[i].length-1)
    				  for(var j=0; j<elements.length; j++){
    				      if(elements[j][k]){
    					      ele = elements[j];
    						  break;
    						}
    					}
    				}
    		    break;
    		default:
    		ele = ele.getElementsByTagName(sele[i])[0];
    		    break;
    	}
    }
    return ele;
}
