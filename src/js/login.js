class Login{
    constructor(){
        this.addEvent();
    }
    addEvent(){
        //点击切换登陆方式
        $('.small_box h3 span:first-child').click(function(){
            console.log($('.small_box h3 span:first-child'));
            $(this).css('color','black');
            $('.scan_login').css('display','block');
            $('.account_login').css('display','none');
            $(this).next().css('color','#999999');
        });
        $('.small_box h3 span:last-child').click(function(){
            $(this).css('color','black');
            $('.scan_login').css('display','none');
            $('.account_login').css('display','block');
            $(this).prev().css('color','#999999');
        })
        //图片移入移出效果
        // $('.scan_photo').hover(function(){
        //     $('.scan_photo img:last-child').stop().animate({
        //         'display' : 'inline-block',
        //         'width' : '160px'
        //     },500);
        // },function(){
        //     $('.scan_photo img:last-child').stop().animate({
        //         'display' : 'none',
        //         'width' : 0,
        //     },500);
        // }); 
    //     $('.scan_photo').hover(function(){
    //         let img = $('.scan_photo img:last-child');
    //         img.css('display','inline-block');
    //         img.animate({'width' : '160px'},500);
    //     },function(){
    //         let img = $('.scan_photo img:last-child');
    //         img.css('display','none');
    //         img.animate({'width' : 0},500);
    //    })
       $('.scan_photo').mouseenter(function(){
            let img = $('.scan_photo img:last-child');
            img.css('display','inline-block');
            img.animate({'width' : '160px'},500);
       })
       $('.scan_photo').mouseleave(function(){
            let img = $('.scan_photo img:last-child');
            img.css('display','none');
            img.animate({'width' : 0},500);
       })
        //其他登陆方式移入效果
        $('.other_login li').each(function(){
            $(this).hover(()=>{
                $(this).find('img:first-of-type').css('display','none');
                $(this).find('img:last-of-type').css('display','block');
            },()=>{
                $(this).find('img:first-of-type').css('display','block');
                $(this).find('img:last-of-type').css('display','none'); 
            })
        });
        //自动登陆点击效果
        $('#agree').click(function(){
            $(this).css('display','none');
            $('#disagree').css('display','block');
        });
        $('#disagree').click(function(){
            $(this).css('display','none');
            $('#agree').css('display','block');
        });
        //登陆按钮滑过效果
        $('#login_btn').hover(function(){
            $(this).css({
                'background' : '#a60000',
                'transition' : 'all linear 0.5s',
            });
        },function(){
            $(this).css({
                'background' : '#333333',
                'transition' : 'all linear 1s',
            })
        })
        //手机登陆效果
        $('.account_login input').each(function(){
            $(this).focus(()=>{
                $(this).css({'border':'1px solid black'});
            });
            $(this).blur(()=>{
                $(this).css({'border':'1px solid #cccccc'})
            });
        });
        $('#psd').blur(function(){
            let $psd = $(this).val();
            let reg = /^\s*$/;
            if(reg.test($psd)){
                $(this).css({'border' : '1px solid red'});
            }
        });
        let that = this;
        $('#login_btn').click(function(){
            let $cellphone = $('#cellphone').val();
            let $psd = $('#psd').val();
            let reg = /^(152|182|188|135|178)\d{8}$/;
            if(reg.test($cellphone)){
                let cookieStr = that.getCookie('registers') ? that.getCookie('registers') : '';
                let cookieObj = that.conventCookieStrToObj(cookieStr);
                if($cellphone in cookieObj){
                    if($psd === cookieObj[$cellphone]){
                        location.href = '../index.html';
                    }else{
                        $('.error_warn').css('visibility','visible').find('span').text('密码错误，请重新输入');
                    }
                }else{
                $('.error_warn').css('visibility','visible').find('span').text('账户名不存在，请重新输入');
                }

            }else if(/^\s*$/.test($cellphone)){
                $('.error_warn').css('visibility','visible').find('span').text('请输入用户名');
            }else{
                $('.error_warn').css('visibility','visible').find('span').text('账户名不存在，请重新输入');
            }
        })
    }
    getCookie(key){
        let arr = document.cookie.split('; ');
        for(let i = 0,len = arr.length;i < len;i ++){
            let list = arr[i].split('=');
            if(encodeURIComponent(key) === list[0]){
                return decodeURIComponent(list[1]);
            }
        }
    }
    conventCookieStrToObj(str){
        if(!str){
            return {};
        }
        return JSON.parse(str);
    }
}
new Login();