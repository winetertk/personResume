// JavaScript Document


//首页照片切换效果
$("#photo1").mouseenter(function()
{
	$(this).animate({opacity:0},800);
	
})

$("#photo1").mouseleave(function()
{
	$(this).animate({opacity:1},800);
})


//顶部导航联系选项效果
$(".top_nav").eq(0).mousemove(function()
{
	$(".call_img").slideDown(500);
})
$(".top_nav").eq(0).mouseleave(function()
{
	$(".call_img").slideUp(500);
})

$(".info_icon").mouseenter(function()
{
	$(this).find("img").animate(
	{
		marginLeft:100,
	},500,function()
	{
		$(this).css("margin-left",-100);
	})
	$(this).find("img").animate({marginLeft:0},300);
})

//第三页的图标鼠标移入事件
$(".skill_icon").find("img").mouseenter(function()
{
	$(this).css("transform","scale(1.2,1.2)").css("transition","transform 0.25s");
});
$(".skill_icon").find("img").mouseleave(function()
{
	$(this).css("transform","scale(1,1)").css("transition","transform 0.25s");
});



$(".skill_icon").find("img").click(function()
{
	
	//技能描述框的出现细节
	var $skill_current = $(".skill_info").eq($(".skill_icon img").index(this));
	if($skill_current.is(":visible"))
	{
		$(this).next().next().css("transform","rotate(-3deg)").css("transition","0.5s");
		$skill_current.slideUp(500);
	}
	else
	{
		$(".skill_flag").css("transform","rotate(-3deg)").css("transition","0.5s");
		$(".skill_info").slideUp(500);
		$skill_current.slideDown(500);
		$(this).next().next().css("transform","rotate(180deg)").css("transition","0.5s");
	}
});

//QQ、微信二维码细节处理

$("#qq_li").mouseenter(function()
{
	$("#QQ").animate({opacity:1},1000);
});
$("#qq_li").mouseleave(function()
{
	$("#QQ").animate({opacity:0},300);
});

$("#wechat_li").mouseenter(function()
{
	$("#wechat").animate({opacity:1},1000);
});
$("#wechat_li").mouseleave(function()
{
	$("#wechat").animate({opacity:0},300);
});

//内容适应居中代码
$(function()
{
	$(".nav").css({"top":($(".active").height()-$(".nav").height())/2});
	$(".fp-tableCell").eq(0).css({"padding-top":($(".active").height()-$(".fp-tableCell").eq(0).height())/6});
	$(".fp-tableCell").eq(1).css({"padding-top":($(".active").height()-$(".fp-tableCell").eq(1).height())/6});
	$(".fp-tableCell").eq(2).css({"padding-top":($(".active").height()-$(".fp-tableCell").eq(2).height())/6});
	$(".fp-tableCell").eq(3).css({"padding-top":($(".active").height()-$(".fp-tableCell").eq(3).height())/6});
});