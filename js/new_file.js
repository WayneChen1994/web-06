window.onload = function(){
       console.log("文档加载完毕");
}

// event是事件对象，不需要手动传递，浏览器会自动将事件对象传递进来，需要的时候接收即可
window.onscroll = function (event) {
        console.log(event);
}

window.onclick = function (event) {
        var num = prompt("请输入数据：");
        alert(num);
        console.log(event);
        // var res = confirm("你确定离开吗？");
        // if (res){
        //         window.close();
        // }
        // alert(res);     // true或者false
}
