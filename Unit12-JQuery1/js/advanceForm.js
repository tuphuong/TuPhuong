$(function(){
	var dem=1;

	$(".next").on("click", function(){
		switch(dem) {
			case 1:
			
				next1();
				break;
			case 2:
				next2();
				break;
			case 3:
				next3();
				break;
			case 4:
				next4();
				break;
		}
	});
	$(".previous").on("click", function(){
		previous();
	})
	function next1(){
		var check=0;
		var username= $(".name").val();
		var pass= $(".pass").val();
		var repass= $(".repass").val();
		if(username==""){
			$(".nameerr").html("Yêu cầu nhập Username");
		}else{
			$(".nameerr").html("");
			check++;
		}
		if(pass==""){
			$(".passerr").html("Yêu cầu nhập Password");
		}else{
			$(".passerr").html("");
			check++;
		}
		if(repass==""){
			$(".repasserr").html("Yêu cầu nhập Password");
		}else if(pass != repass){
			$(".repasserr").html("Password phải trùng với Confirm Password");
		}else{
			$(".repasserr").html("");
			check++;
		}
		if(check == 3){
			dem=2;
			var now= $(".contentactive");
			now.attr("class","content");
			now.next().attr("class","content contentactive");
			var tabactive= $(".tabactive");
			tabactive.attr("class", "tab");
			tabactive.next().attr("class", "tab tabactive");
		}

	}
	function next2(){
		var check=0;
		var fname=$(".fname").val();
		var lname= $(".lname").val();
		var email= $(".email").val();
		var address=$(".address").val();

		if(fname==""){
			$(".fnameerr").html("Yêu cầu nhập Username");
		}else{
			$(".fnameerr").html("");
			check++;
		}

		if(lname==""){
			$(".lnameerr").html("Yêu cầu nhập  Last name");
		}else{
			$(".lnameerr").html("");
			check++;
		}
		if(email==""){
			$(".emailerr").html("Yêu cầu nhập email");
		}else{
			$(".emailerr").html("");
			check++;
		}
		if(address==""){
			$(".addresserr").html("Yêu cầu nhập address");
		}else{
			$(".addresserr").html("");
			check++;
		}

		var age=$(".age").val();
		if(age==""){
			$(".ageerr").html("Yêu cầu nhập Tuổi");
		}else{
			$(".ageerr").html("");
			if(age<18) {
				dem=3;
			
				var now= $(".contentactive");
				now.attr("class","content");
				now.next().attr("class","content contentactive");
				var tabactive= $(".tabactive");
				tabactive.attr("class", "tab");

				tabactive.next().attr("class", "tab tabactive");
				// $(".next").css("opacity","0.5");
				// $(".previous").css("background","#3e3ed8");	
			}
			else {
				dem=4;

				var now= $(".contentactive");
				now.attr("class","content");
				now.next().next().attr("class","content contentactive");
				var tabactive= $(".tabactive");
				tabactive.attr("class", "tab");
				tabactive.next().next().attr("class", "tab tabactive");
			}
			alert(dem);
			check++;
		}

	}
	function next3(){
		
	}
	function next4(){
		alert('check');
	}
	function previous(){
		var now= $(".contentactive");

		now.attr("class","content");
		// now.Siblings(dem).
		// $(".content")[dem].attr("class","content contentactive");

		now.prev().attr("class","content contentactive");
		dem--;
	}
})