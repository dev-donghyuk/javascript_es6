$(document).ready(function(){
	$('.btn1').click(function(){
		$('.box_wrap .box1').stop().fadeToggle(400);
	})
	$('.btn2').click(function(){
		$('.box_wrap .box2').stop().toggleClass('on');
	})
	$('.menu li a').mouseenter(function(){
		$(this).find('span').stop().animate({'width':100});
	})
	$('.menu li a').mouseleave(function(){
		$(this).find('span').stop().animate({'width':0});
	})
	$('.menu li a').click(function(){
		event.preventDefault();
	});
	function gob(){
		var num_1 = 2;
		var num_2 = 4;
		var res = num_1 * num_2 ;
		return res;
	}
	console.log(gob())

	var num = 0;
	$('.btn3').click(function(){
		num++;
		if(num<=10){
			$('.box3').text(num);
		}
	});
	$('.loading_bar').animate({'width':'100%'},500)
});