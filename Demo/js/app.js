'use strict';

var funk = {
	p1 : function(){
		$(".translation").on('click', function(){
			$("#translation").velocity(
			{left:"500px"}, 1000);
		});

		$(".looping").on('click', function(){
			$("#looping").velocity(
			{ 	left:"500px",
				rotateZ:"360deg",
			}, 	2000);
		});
		$(".transform").on('click', function(){
			$("#transform").velocity(
			{ 	width:"600px",
			}, 	1000);
		});
		$(".fadein").on('click', function(){
			$("#fadein").velocity(
			{ 	left:"500px",
				opacity:"1",
			}, 	2000);
		});
	},
	p2 : function(){
		$(".all").on('click', function(){
			$("#all").velocity(
			{ 	left:"200px",
			}, 	1000).velocity(
			{	left:"400px",
				rotateZ:"360deg",
			}, 	1000).velocity(
			{	left:"600px",
				width:"400px",
			}, 	1000).velocity(
			{	left:"800px",
				width:"100px",
				opacity:"0"
			}, 	1000);
		});
	}
};
$(function(){
	var page = $('[x-page]').attr('x-page');
	funk[page]();
});