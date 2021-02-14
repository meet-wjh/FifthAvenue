//引入公共html文件
//头部
$('header').load('./public.html .pub_header',()=>{
    //头部购物车显示消失
    $('.search_cart dt').hover(function(){
        $(this).next('dd').css('display','block');
        $(this).next('dd').hover(function(){
            $(this).css('display','block');
        },function(){
            $(this).css('display','none');
        })
    },function(){
        $(this).next('dd').css('display','none');
    })
})
//尾部
$('footer').load('./public.html .pub_footer');
//底部广告条
$('.btm_adv').load('./public.html .adv_content',()=>{
    $('#close_adv').click(function(){
        $('.btm_adv').css("display","none");
    });
});
//公共侧边栏
$('#sidebar').load('./public.html .sidebar',()=>{
    $('#shopping_btn').click(()=>{
        $('.sidebar').animate({right:0},500);
    });
    $('#close_shopping_btn').click(()=>{
        $('.sidebar').animate({right:'-296px'},500);
    });
    $('.sidebar span').each(function(){
        $(this).hover(()=>{
            $(this).find('i').css("display","block");
            $(this).find('b').css("display","block");
        },()=>{
            $(this).find('i').css("display","none");
            $(this).find('b').css("display","none");
        });
    })
});

