$(function(){
	$(".plus").click(function(){
		$(this).parent().next().show('3000');
		$(this).css("display","none");
		$(this).next().show("3000");
	});
	$(".minus").click(function(){
		$(this).parent().next().hide('3000');
		$(this).css("display","none");
		$(this).siblings().show("3000");
	});
});