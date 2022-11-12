function nav_bar(){
    var menu_bar_icon =document.getElementById("menu_icon_id");
    menu_bar_icon.classList.toggle('change');
    var nb_contents = document.getElementById("sm_nb_s2_id");
    nb_contents.classList.toggle('change1');
    var header_container = document.getElementById("header_container_id");
    header_container.classList.toggle('change2');
}
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