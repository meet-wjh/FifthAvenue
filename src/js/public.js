//引入公共html文件
$('footer').load('./public.html .pub-footer');
$('.btm_adv').load('./public.html .adv_content',()=>{
    $('#close_adv').click(function(){
        $('.btm_adv').css("display","none");
    });
});
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

