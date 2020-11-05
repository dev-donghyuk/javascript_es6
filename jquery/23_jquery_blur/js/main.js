$(document).ready(function(){
	$('.btn_search').click(function(){
		$('.search input').addClass('on');
		$(this).addClass('on')
	});
	 $('.btn_search').blur(function(){
	 	$('.search input').removeClass('on');
	 	$(this).removeClass('on')
	 });
});