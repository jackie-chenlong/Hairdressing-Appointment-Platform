var common={
	init:function(){},
	bindEvent:function(){}
};
common.init = function(){
	common.bindEvent();
};
common.bindEvent = function(){
	$(".hd").on("click",function(){
		window.location.href = "http://192.168.191.1:8080/wxHair/graduateDesign/shopIndex.jsp";
	});
	$("#homePage").on("click",function(){
		window.location.href = "http://192.168.191.1:8080/wxHair/graduateDesign/shopInfo.jsp";
	});
	$("#order").on("click",function(){
		window.location.href = "http://192.168.191.1:8080/wxHair/graduateDesign/shopIndex.jsp";
	});
//	$("#search").on("click",function(){
//		window.location.href = "http://192.168.191.1:8080/wxHair/graduateDesign/search.jsp";
//	});
};
$(function(){
	common.init();
});