function deepClone(srcObj, newObj){
	var newObj = newObj || {};
	for(var k in srcObj){
		if(typeof srcObj[k] === 'object'){
			newObj[k] = newObj[k] instanceof Array ? [] : {};
			deepClone(srcObj[k], newObj[k]);
		} else{
			srcObj[k] = newObj[k];
		}
	}
}