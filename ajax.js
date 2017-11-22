/*
学习Ajax，并尝试自己封装一个Ajax方法。实现如下方法：

// 
function ajax(url, options) {
    // your implement
}

// 使用示例：
ajax(
    'http://localhost:8080/server/ajaxtest', 
    {
        data: {
            name: 'simon',
            password: '123456'
        },
        onsuccess: function (responseText, xhr) {
            console.log(responseText);
        }
    }
);
options是一个对象，里面可以包括的参数为：
type: post或者get，可以有一个默认值
data: 发送的数据，为一个键值对象或者为一个用&连接的赋值字符串
onsuccess: 成功时的调用函数
onfail: 失败时的调用函数
 */


function ajax(url, options){
    var xhr = null;
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP")
    }
    //参数拼接
    var param = '';
    var data = options.data ? options.data : -1;
    if(typeof (data) === 'object'){
        for(var k in data){
            //hasOwnProperty 不包括原型链上的实例属性
            if(data.hasOwnProperty(k)){
                param += k+'='+data[k]+'&';
            }
            //去掉结尾的'&'
            param.replace(/&$/, '');
        }
        //两次请求参数相同，就会启用缓存，并没有跟服务器交互，请求参数加上时间戳或随机数来去除缓存（只有IE浏览器会有缓存）
        param += 'timestamp=' + new Date().getTime();
        //data为拼接好了的字符串
    } else{
        param = data + 'timestamp=' + new Date().getTime();
    }

     //发送请求
    if(options.type){
        if(options.type.toUpperCase == 'GET'){
            xhr.open('GET', url+'?'+param, true);
            xhr.send(null);
        } else if(options.type.toUpperCase == 'POST'){
            xhr.open('POST', url, true);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhr.send(param);
        }
    }

    //监听服务器状态
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
            if(xhr.status == 200){
                options.onsuccess(responseText,xhr);
            } else {
                if(options.onfail){
                    options.onfail();
                }
            } 
        }
    }
   
    return xhr;
}

//参考（关于IE缓存）https://www.cnblogs.com/zhousiyuya/p/6210977.html
