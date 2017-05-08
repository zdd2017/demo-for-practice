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