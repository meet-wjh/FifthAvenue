function setCookie(key,value,expires){
    let cookieText = encodeURIComponent(key) + '=' + encodeURIComponent(value);
    if(!isNaN(expires)){
        let date = new Date();
        date.setDate(date.getDate() + Number(expiresd));
        cookieText += ';expires=' + date;
    }
    document.cookie = cookieText;
}
function getCookie(key){
    let arr = document.cookie.split('; ');
    for(let i = 0,len = arr.length;i < len;i ++){
        let list = arr[i].split('=');
        if(encodeURIComponent(key) === list[0]){
            return decodeURIComponent(list[1]);
        }
    }
}