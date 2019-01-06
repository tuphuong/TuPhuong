$(function(){
	var info = $('.info')
	var a = 0
	var index = 0
	$('#next').click(function(){
		if (index==3) {
			alert('Successful!')
		}
		if(checkInput(index) && index!=3){				
			index++
		}
		selectTab(index)
	})
	$('#pre').click(function(){		
		if (index!=0) {
			index--
			selectTab(index)	
		}
	})
	$('body').on('click','.item',function(){
		if ($(this).hasClass('choose')){
			var a = $(this).index()
			clickTab(a)
		}
	})

	function clickTab(number){
		if (checkInput(index)) { 		 
			index=number
			console.log(index)
			selectTab(index)
		}
	}

	function checkInput(number){
		check=false;
		switch (index){
			case 0: {
				check=check0();
			}
			break
			case 1: {
				check=check1();
			}
			break
			case 2: {
				check=check2();
			}
			break
			case 3: {
				check=check3();
			}
		}
		return check
	}

	function selectTab(number){
		info.css('display','none')
		$('.choose').css('background','#aceace')
		$('.d'+(number +1)).css('background','#10b4d2')
		info.eq(number).css('display','block')
		switch (number){
			case 3: {
				$('#next').text('Finish')
			}
			break
			default: {
				$('#next').text('Next')
			}
		}
	}

	function check0 (){
		$('.d1').addClass('choose')
		$('.d2').addClass('choose')
		$('#pre').css('background','#10b4d2')
		var i = 1
		var name = $('#name').val()
		var pass = $('#pass').val()
		var con_pass = $('#confirm-pass').val()
		if (name=='') {
			i=0
			$('.n-name').text('This field is required.')
		} else {
			$('.n-name').text('')
		}
		if (pass=='') {
			i=0
			$('.n-pass').text('This field is required.')
		} else {
			$('.n-pass').text('')
		}
		if (con_pass=='') {
			i=0
			$('.n-con-pass').text('This field is required.')
		} else if (pass!=con_pass) {
			i=0
			$('.n-con-pass').text('confirm password is not correct.')
		} else {
			$('.n-con-pass').text('')
		}
		if (!i) {
			$('.d1').css('background','red')
		}
		return i
	}

	function check1(){
		$('.d3').addClass('choose')
		var i = 1 
		var f_name = $('#first-name').val()
		var l_name = $('#last-name').val()
		var email = $('#email').val()
		var addr = $('#addr').val()
		var age = $('#age').val()
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if (f_name=='') {
			i=0
			$('.n-first-name').text('This field is required.')
		} else {
			$('.n-first-name').text('')
		}
		if (l_name=='') {
			i=0
			$('.n-last-name').text('This field is required.')
		} else {
			$('.n-last-name').text('')
		}
		if (email=='') {
			i=0
			$('.n-email').text('This field is required.')
		} else if (!filter.test(email)) {
			i=0
			$('.n-email').text('Email is not correct.')
		} else {
			$('.n-email').text('')
		}
		if (addr=='') {
			i=0
			$('.n-addr').text('This field is required.')
		}else {
			$('.n-addr').text('')
		}
		if (age=='') {
			i=0
			$('.n-age').text('This field is required.')
		}else {
			a = parseInt(age)
			$('.n-age').text('')
		}
		if (i) {
			if (a<18) {
				$('.warn').text('Your age is less than 18!')
			} else{
				$('.warn').text('No warning!')
				index++
				check2()
			}
		}else{
			$('.d2').css('background','red')
		}
		return i
	}

	function check2(){	
		$('.d4').addClass('choose')		
		return true
	}

	function check3 (){		
		$('#checkbox').on('change',function(){
			if ($('.n-check').text()=='') {
				$('.n-check').text('Please check it!')
				$('.d4').css('background','red')
			} else {
				$('.n-check').text('')
				$('.d4').css('background','#10b4d2')
			}
		})
		if ($('#checkbox').is(':checked')) {
			$('.n-check').text('')			
			
		} else{
			$('.n-check').text('Please check it!')
			$('.d4').css('background','red')
		}
		return true
	}
})
