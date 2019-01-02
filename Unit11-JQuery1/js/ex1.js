//ví dụ 1 :
 // $(function(){
// 	$("p").css("color","red");
// 	$(".red").css("font-size","20px");
// 	$("body #text").css("border","1px solid red");
// });




// ví dụ 2
 // $(function(){
// 	$("input").attr("value","test");
// 	$(".red").html("test");
// 	$(".red").css("color","red");
// 	$(".red").width("50%");
// 	$(".red").height("150px");
// 	$("input").attr("id","red");
// 	$("input").addClass("blue");
// 	$("input").removeClass("red");
// });


$(function(){
	$("input").click(function(){
		$(".red").html("test");
		$(".red").css("color","red");
		$(".red").width("50%");
		$(".red").height("150px");
	})
	$(window).resize(function(){
		alert("test<br/>");
	})
});


