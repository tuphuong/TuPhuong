document.getElementById('dki').addEventListener('click', function(e){
	e.preventDefault();
	var name = document.getElementById('name')
	var email = document.getElementById('email')
	var phone = document.getElementById('phone')
	var pass = document.getElementById('pass')
	var checkpass = document.getElementById('pass1')

	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	function checkPhoneNumber() {
		var flag = false;
		var phone = document.getElementById('phone').value.trim()
		phone = phone.replace('(+84)', '0');
		phone = phone.replace('+84', '0');
		phone = phone.replace('0084', '0');
		phone = phone.replace(/ /g, '');
		if (phone != '') {
			var firstNumber = phone.substring(0, 2);
			if ((firstNumber == '09' || firstNumber == '08') || (firstNumber == '03') && phone.length == 10) {
				if (phone.match(/^\d{10}/)) {
					flag = true;
				}
			} 
		}
		return flag;
	}
	var er = 0
	var k =0
	for (var i = 0; i < name.value.trim().length; i++) {
		if (name.value[i] != ' ') {
			k++
		}
	}
	if (k < 8) {
		document.getElementsByTagName('span')[0].innerHTML = 'Bạn phải nhập tên có ít nhất 8 kí tự'
	}
	else {
		er++
		document.getElementsByTagName('span')[0].innerHTML = ''
	}

	if (email.value == '') {
		document.getElementsByTagName('span')[2].innerHTML = 'Bạn phải nhập email'
	} else if (!filter.test(email.value)) {
		document.getElementsByTagName('span')[2].innerHTML = 'Bạn phải nhập đúng email'
	} else {
		er++
		document.getElementsByTagName('span')[2].innerHTML = ''
	}

	if (phone.value == '') {
		document.getElementsByTagName('span')[3].innerHTML = 'Bạn phải nhập số điện thoại'
	} else if (!checkPhoneNumber()) {
		document.getElementsByTagName('span')[3].innerHTML = 'Bạn phải nhập đúng số điện thoại'
	} else {
		er++
		document.getElementsByTagName('span')[3].innerHTML = ''
	}

	if (pass.value == '') {
		document.getElementsByTagName('span')[4].innerHTML = 'Bạn phải nhập mật khẩu'
	} else {
		er++
		document.getElementsByTagName('span')[4].innerHTML = ''
	}

	if (checkpass.value == '') {
		document.getElementsByTagName('span')[5].innerHTML = 'Bạn phải nhập lại mật khẩu'
	} else if (pass.value != checkpass.value){
		document.getElementsByTagName('span')[5].innerHTML = 'Bạn phải nhập lại đúng mật khẩu'
	} else {
		er++
		document.getElementsByTagName('span')[5].innerHTML = ''
	}

	var nam = document.getElementById('nam')
	var nam = document.getElementById('nu')
	if (!nam.checked && !nu.checked) {
		document.getElementsByTagName('span')[1].innerHTML = 'Bạn phải chọn giới tính'
	}else {
		er++
		document.getElementsByTagName('span')[1].innerHTML = ''
	}
	console.log(er)
	if (er == 6) {
		alert("Đăng kí thành công!")
	}

})

document.getElementById('xoa').addEventListener('click', function(){
	var a = document.getElementsByTagName('span')
	for (var i = 0; i < a.length; i++) {
		a[i].innerHTML = ''
	}
})