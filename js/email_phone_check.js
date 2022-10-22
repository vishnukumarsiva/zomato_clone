function email_phone_check(){
    const val = document.getElementById('email_phone_app').value;
    for (i=0; i<val.length; i++){
        if (val.charAt(i)=='@' && val.charAt(i)=='.'){
            alert('valid email')
        }
        else{
            alert('please enter valid email')
        }
    }

}