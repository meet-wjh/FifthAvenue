//页面事件
class Register{
    constructor(){
        this.arr = [0,0,0];
        this.addEvent();
    }
    addEvent(){
        $('#agree').click(function(){
            $(this).css('display','none');
            $('#disagree').css('display','block');
            $('#reg_btn').attr("disabled","disabled").css('background','#999999');
        });
        $('#disagree').click(function(){
            $(this).css('display','none');
            $('#agree').css('display','block');
            $('#reg_btn').removeAttr("disabled").css('background','#333333');
        });
        $('#reg_btn').hover(function(){
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
       
        let that = this;
        $('input').each(function(){
            $(this).focus(()=>{
                $(this).css({'border':'1px solid black'});
            })
            $(this).blur(()=>{
                $(this).css({'border':'1px solid #cccccc'});
            })
        });
        $('#psd').focus(()=>{
            $('.psd_warn').css('display','block');
        })
        $('#psd').blur(()=>{
            $('.psd_warn').css('display','none');
        })
        $('#verify_btn').click(function(){
            let $cellphone = $('#cellphone').val();
            let reg = /^(152|182|188|135|178)\d{8}$/;
            if(reg.test($cellphone)){
                that.arr[0] = 1;
                $(this).css({"border" : '1px solid #cccccc'});
            }else{
                $('#cellphone').css({"border" : '1px solid red'});
                that.arr[0] = 0;
            }
        });
        $('#psd').blur(function(){
            let $psd = $(this).val();
            let reg = /^\w{6,20}$/;
            if(reg.test($psd)){
                $(this).css({"border" : '1px solid #cccccc'});
                that.arr[1] = 1;
            }else{
                that.arr[1] = 0;
                $('#cellphone').css({"border" : '1px solid red'});
            }
        });
        $('#affirm_psd').blur(function(){
            let $psd = $('#psd').val();
            let $affirmPsd = $(this).val();
            if($psd === $affirmPsd){
                that.arr[2] = 1;
                $(this).css({"border" : '1px solid #cccccc'});
                $('.affirm_psd_warn').css('display','none');
            }else{
                that.arr[2] = 0;
                $(this).css({"border" : '1px solid red'});
                $('.affirm_psd_warn').css('display','block');
            }
        });
        $('#reg_btn').click(()=>{
            if(this.arr.indexOf(0) === -1){
                let $psd = $('#psd').val();
                let $cellphone = $('#cellphone').val();
                let cookieStr = this.getCookie('registers') ? this.getCookie('registers') : '';
                let cookieObj = this.convertCookieStrToObj(cookieStr);
                if($cellphone in cookieObj){
                    alert('手机号已注册，请登录');
                    return;
                }else{
                    cookieObj[$cellphone] = $psd;
                }
                cookieStr =JSON.stringify(cookieObj);
                this.setCookie('registers',cookieStr,7);
                location.href = '../pages/cart.html';
            }else{
                $('input').each(function(){
                    if(!$(this).val()){
                        $(this).focus().css({'border':'1px solid red'});
                        return false;
                    }
                })
            }
        })
    }
    setCookie(key,value,expires){
        let cookieText = encodeURIComponent(key) + '=' + encodeURIComponent(value);
        if(!isNaN(expires)){
            let date = new Date();
            date.setDate(date.getDate() + Number(expires));
            cookieText += ';expires=' + date;
        }
        document.cookie = cookieText;
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
    convertCookieStrToObj(str){
        if(!str){
            return {};
        }
        return JSON.parse(str);
    }
}
new Register();
