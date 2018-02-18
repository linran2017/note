//他的作用和window.onload一样也在页面加载完成之后在执行里面js代码
$(function(){
//	ID抓元素
	$('#box').css({'width':'400px','height':'400px','border':'1px solid red'})
//	标签名抓元素
//	$('#box p').css({'color':'blue'});
//	class名抓元素
//	$('.p1').css({'fontSize':'24px'});
//	群组选择器
//	$('.p1,.p').css({'border':'2px solid yellow'})
//	寻找id为box的亲儿子辈的p标签
//	$('#box>p').css({'color':'blue'});
//	寻找找到 紧挨class名为p的元素的下一个class名叫p1的元素
//	$('.p+.p1').css({'color':'blue'});

//	找到.p2后面所有兄弟元素class名叫p1
//	$('.p2~.p1').css({'color':'blue'});

//	寻找到所有p标签中第一p标签
//	$('p:first').css({'color':'blue'});
//	寻找到所有p标签中最后一个p标签
//	$('p:last').css({'color':'blue'});

//	找到所有的p标签不包括class名叫做p标签
//	$('p:not(.p)').css({'color':'blue'});

//	找到所有奇数行的p标签
//	$('p:even').css({'color':'blue'});

//	找到所有偶数行的p标签
//	$('p:odd').css({'color':'blue'});

//找到下标为3的p标签
//$('p:eq(3)').css({'color':'blue'});
//	另一种写法
//	$('p').eq(4).css({'color':'blue'});

//找到p标签里属性名叫hd的并且属性值也叫hd元素
//$('p[hd="hd"]').css({'color':'blue'});

//找到第一个子集元素	
$('#box p:first-child').css({'color':'blue'});











})
