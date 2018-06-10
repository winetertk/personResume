// JavaScript Document

$(function(){
	var $nav_class = $(".nav_side").find("li");
	var $e_title = $(".English_title");
	var $t_border = $(".title_border");
	$('#dowebok').fullpage({
		css3:true,
		anchors: ["page1","page2","page3","page4"],
		scrollingSpeed:500,
		//初始化首页
		afterRender:function()
		{
			$(".section1").addClass("home_change");
			$(".top").css("display","none");
			$(".home_photo1").animate(
			{
				bottom:0,
				opacity:1
			},1500);
			
			$(".section1").find(".h").delay(500).animate(
			{
				bottom:'0',
				opacity:'0.9'
			},1000,function()
			{
				$(".border").animate({width:600,opacity:0.4},1500,function()
				{
					var $tag_p = $('.section1').find('p');
					show_UP($tag_p.eq(0),100,1500);
					show_UP($tag_p.eq(1),500,1500);
					show_UP($tag_p.eq(2),1000,1500);
					show_UP($tag_p.eq(3),1500,1500);
					$(".nav_side").delay(3000).animate({opacity:1},500);
				});
			});	
		},
		
		//进入当前页面时需要的操作
		afterLoad: function(anchorLink, index)
		{
			if(index == 1){
				$(".section1").addClass("home_change");
				$(".top").animate({opacity:0},500).delay(1500).css("display","none");
				//加载当前页面时导航栏选中效果
				changeClassName($nav_class.eq(0),"img_nav_selected","img_nav");
				
				/*$(".section1").animate({backgroundSize:'100%'},5000);*/
				var $tag_p = $('.section1').find('p');
				show_UP($tag_p.eq(0),500,1500);
				show_UP($tag_p.eq(1),1000,1500);
				show_UP($tag_p.eq(2),1500,1500);
				show_UP($tag_p.eq(3),2000,1500);
			}
			if(index == 2)
			{
				$(".p_border").addClass("change");
				$(".top").css("display","block").animate({opacity:0.6},1500);
				
				changeClassName($nav_class.eq(1),"img_nav_selected","img_nav");
				$t_border.eq(0).animate({width:120},1000,function()
				{
					
					$e_title.eq(0).animate({opacity:1},500,function()
					{
						var $penson_p = $(".person_sentence");
						$penson_p.eq(0).animate({opacity:1},500,function()
						{
							$penson_p.eq(1).animate({opacity:1},500,function()
						{
							$penson_p.eq(2).animate({opacity:1},500,function()
						{
							$penson_p.eq(3).animate({opacity:1},500);
						});
						});
						});
					});
				});
				
				
				
			}
			if(index == 3)
			{
				$(".top").css("display","block").animate({opacity:0.6},1500);
				changeClassName($nav_class.eq(2),"img_nav_selected","img_nav");
				$t_border.eq(1).animate({width:120},1000,function()
				{
					$e_title.eq(1).animate({opacity:1},500);
				});
				$(".skill").css("transform","scale(1,1)").css("transition","1s");
			}
			if(index == 4)
			{
				
				$(".top").css("display","block").animate({opacity:0.6},1500);
				changeClassName($nav_class.eq(3),"img_nav_selected","img_nav");
				$t_border.eq(2).animate({width:120},1000,function()
				{
					$e_title.eq(2).animate({opacity:1},500);
				});
				
				$(".end_h h3").animate({bottom:0,opacity:'0.8'},1000);
				$(".span_blue").animate({opacity:'1'},300,function()
				{
					$(".span_green").animate({opacity:'1'},300,function()
				{
					$(".span_orange").animate({opacity:'1'},300);
				});
				});
			}
			
		},
		
		onLeave: function(index, direction){
			if(index == 1){
				changeClassName($nav_class.eq(0),"img_nav","img_nav_selected");
				$('.section1').find('p').each(function()
				{
					$(this).animate(
					{
						bottom: '-120%'
					},500);
				})
				
			}
			if(index == 2){
				changeClassName($nav_class.eq(1),"img_nav","img_nav_selected");
				$t_border.eq(0).animate({width:0},500,function()
				{
					$e_title.eq(0).animate({opacity:0},300);
				})
				
				$(".p_border").removeClass("change");
				
			}
			if(index == 3){
				changeClassName($nav_class.eq(2),"img_nav","img_nav_selected");
				$t_border.eq(1).animate({width:0},500,function()
				{
					$e_title.eq(1).animate({opacity:0},300);
				})
				$(".skill").css("transform","scale(0,0)").css("transition","0.5s");
			}
			if(index == 4)
			{
				changeClassName($nav_class.eq(3),"img_nav","img_nav_selected");
				
				$t_border.eq(2).animate({width:0},500,function()
				{
					$e_title.eq(2).animate({opacity:0},300);
				})
				$(".end_h h3").animate({bottom:'-30%',opacity:'0'},500);
			}
		}
	});
});

//p标签向下渐渐滑入
function show_UP(obj,time1,time2)
{
	obj.delay(time1).animate({
		bottom: '0',
		opacity: '1'
	}, time2,'easeOutExpo')
}


// 类名转换
function changeClassName(obj,cls1,cls2)
{
	if( obj.className !== cls1)
	{
		obj.removeClass(cls2).addClass(cls1);
	}
}
