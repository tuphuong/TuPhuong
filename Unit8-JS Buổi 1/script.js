function send(){
	do{
		var n = parseFloat(prompt('Mời bạn nhập số n', ''));
	}  while( n <=0);
	alert(n);
	var tong=0;

	// document.writeln("<b style='color:red'>"+(1+so)+"</b>");
	for (var i = 0; i <n; i++) {
		var a= i+1;
		var m = parseFloat(prompt('Mời bạn nhập số thứ' + a));
		tong = tong+m;
			}
			document.writeln(tong);

}
// function tong_2_so(a,b){
// 	document.writeln(a+b);
// }
