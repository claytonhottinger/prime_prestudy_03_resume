$(document).ready(function(){
	$('.button').on('click', function(){
		$(this).next().removeClass('hidden');
		$(this).addClass('hidden');
	});
	
});