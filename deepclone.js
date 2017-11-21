/*
深克隆与浅克隆的区别：浅克隆只克隆一层对象的属性，而深克隆则递归克隆了所有层级。
Javascript 存储对象都是存地址的，所以浅克隆会导致原对象和克隆出来的新对象指向同一块内存地址。
而深克隆则不同，它不仅将原对象的各个属性逐个克隆出去，而且将原对象各个属性所包含的对象也依次采用深克隆的方法递归克隆到新对象上。
这就不会存在原对象和克隆出来的新对象指向同一个对象的问题。
需要注意的是，如果对象比较大，层级也比较多，深克隆会带来性能上的问题。在遇到需要采用深克隆的场景时，可以考虑其他替代方案。
在实际的应用场景中，也是浅克隆更为常用。
参考：https://www.zhihu.com/question/23031215
*/

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
	return newObj;
}
