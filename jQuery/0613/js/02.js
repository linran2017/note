$(function(){
//	jquery里推荐使用的鼠标移入事件是 mouseenter
//	hover()表示鼠标移入移出事件
//	第一个function里写的是 移入事件
//	第二个function里写的是 移出事件
	$('#box span').hover(function(){
//		$(this)表示当前鼠标移入的元素和js里的this是一样的
//		addClass()添加 class名
//		siblings()找到兄弟元素
//		removeClass()移除class名
		$(this).addClass('active').siblings('span').removeClass('active');
	},function(){
		
	})
})
