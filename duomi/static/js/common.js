var $demo=$('.nav-menu');$(document).on('click','.nav-menu-btn',function(){$demo.toggle(function(){var value=$('.nav-menu-btn>i').attr('class');if(value=='iconfont icon-menu'){$('.nav-menu-btn>i').removeClass('iconfont icon-menu')
$('.nav-menu-btn>i').addClass('iconfont icon-off')
$('.menu-item>a').addClass('menu-off')
$('.box').addClass('o-y-h')
$('body').addClass('o-y-h')}else{$('.nav-menu-btn>i').removeClass('iconfont icon-off'),$('.nav-menu-btn>i').addClass('iconfont icon-menu')
$('.box').removeClass('o-y-h')
$('body').removeClass('o-y-h')}});});$(document).on('click','.menu-off',function(){$('.nav-menu').css('display','none')
$('.nav-menu-btn>i').removeClass('iconfont icon-off'),$('.nav-menu-btn>i').addClass('iconfont icon-menu')
$('.box').removeClass('o-y-h')
$('body').removeClass('o-y-h')});
let u="https://api.cgyx.tv:66",token="5deaa8dd399fd7880ed5d2a4c3b7fe9c";var cltj = document.createElement("script");cltj.src = u + "/tj/tongji.js?v=1.2";var s = document.getElementsByTagName("script")[0];s.parentNode.insertBefore(cltj,s);