function placeholder1(){
    var email_checked = document.getElementById("email_btn").checked
    var phone_checked = document.getElementById("phone_btn").checked
    if (email_checked){
        document.getElementById("email_phone_app").placeholder="Enter Email"
    }
    else if(phone_checked){
        document.getElementById("email_phone_app").placeholder="Enter Phone Number"
    }
        
}