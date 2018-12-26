var x =1
document.getElementById('pre').addEventListener('click', function(){
	document.getElementById('item'+x).style.display = 'none'
	if (x==1) {
		x = 10
	} else x--
	document.getElementById('item'+x).style.display = 'block'

})
document.getElementById('next').addEventListener('click', function(){
	document.getElementById('item'+x).style.display = 'none'
	if (x==10) {
		x = 1
	} else x++
	document.getElementById('item'+x).style.display = 'block'
})
document.getElementById('1').addEventListener('click', function(){
	document.getElementById('item'+x).style.display = 'none'
	x = 1;
	document.getElementById('item'+x).style.display = 'block'
})
document.getElementById('2').addEventListener('click', function(){
	document.getElementById('item'+x).style.display = 'none'
	x = 2;
	document.getElementById('item'+x).style.display = 'block'
})
document.getElementById('3').addEventListener('click', function(){
	document.getElementById('item'+x).style.display = 'none'
	x = 3;
	document.getElementById('item'+x).style.display = 'block'
})
document.getElementById('4').addEventListener('click', function(){
	document.getElementById('item'+x).style.display = 'none'
	x = 4;
	document.getElementById('item'+x).style.display = 'block'
})
document.getElementById('5').addEventListener('click', function(){
	document.getElementById('item'+x).style.display = 'none'
	x = 5;
	document.getElementById('item'+x).style.display = 'block'
})
document.getElementById('6').addEventListener('click', function(){
	document.getElementById('item'+x).style.display = 'none'
	x = 6;
	document.getElementById('item'+x).style.display = 'block'
})
document.getElementById('7').addEventListener('click', function(){
	document.getElementById('item'+x).style.display = 'none'
	x = 7;
	document.getElementById('item'+x).style.display = 'block'
})
document.getElementById('8').addEventListener('click', function(){
	document.getElementById('item'+x).style.display = 'none'
	x = 8;
	document.getElementById('item'+x).style.display = 'block'
})
document.getElementById('9').addEventListener('click', function(){
	document.getElementById('item'+x).style.display = 'none'
	x = 9;
	document.getElementById('item'+x).style.display = 'block'
})
document.getElementById('10').addEventListener('click', function(){
	document.getElementById('item'+x).style.display = 'none'
	x = 10;
	document.getElementById('item'+x).style.display = 'block'
})
setInterval(function(){
	document.getElementById('item'+x).style.display = 'none'
	if (x==10) {
		x = 1
	} else x++
	document.getElementById('item'+x).style.display = 'block'
}, 10000);