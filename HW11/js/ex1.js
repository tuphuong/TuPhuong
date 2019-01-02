$(function(){
	$('#add').click( function() {
		var input = $('#inp').val()
		$('#content').append(
			`<tr>
			<td class="checkbox"></td>
			<td class="ip">`+input+`</td>
			<td class="btn"><i class="fas fa-times"></i></td>
			</tr>`
			)
		$('#input').val('')

	})
	$('body').on('click','.btn', function(){
		$(this).parent().remove();				

	})
	$('body').on('click','tr', function(){	
		var check = $(this).children('.checkbox').html()			
		if (check == '') {
			$(this).css('background', "grey")
			$(this).children('.checkbox').html('<i class="fas fa-check"></i>')
			$(this).children('.ip').css('textDecoration','line-through')
			$(this).children('.ip').css('color','#fff')	
			$(this).children('.btn').css('background','grey')
			$(this).children('.btn').css('color','#fff')	
		}
		else{
			$(this).css('background', '#f9fdc1')
			$(this).children('.checkbox').text('')
			$(this).children('.ip').css('textDecoration','none')
			$(this).children('.ip').css('color','black')	
			$(this).children('.btn').css('background','#f9fdc1')
			$(this).children('.btn').css('color','black')
		}

	})

})