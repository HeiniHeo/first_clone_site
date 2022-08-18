var mobileSearch = document.querySelector('.mobile_header_search');
const mobileMenu = document.querySelector('.mobile_menu');
const mobileHeaderMenu = document.querySelector('.mobile_header_menu');
let flag = true;

function moSearch(){
    searchName = mobileSearch.getAttribute('class');
    menuName = mobileMenu.getAttribute('class');
    searchIcon = document.querySelector('.mobile_gnb > ul > li >img');
    
    if(searchName == 'mobile_header_search search_hide'){
        mobileSearch.setAttribute('class','mobile_header_search search_show');
        mobileMenu.setAttribute('class','hide');
        searchIcon.src="./images/icon_close.92ade58d.svg";
        mobileHeaderMenu.setAttribute('class','mobile_header_hide');
    }else{
        mobileSearch.setAttribute('class','mobile_header_search search_hide');
        mobileMenu.setAttribute('class','mobile_menu');
        searchIcon.src="./images/icon_search.4678185b.svg";
    }
}

function moMenu(){
    menuName = mobileMenu.getAttribute('class');

    if(menuName == 'mobile_menu'){
        mobileMenu.setAttribute('class','mo_menu_X');
        mobileHeaderMenu.setAttribute('class','mobile_header_menu mobile_header_show');
    } else{
        mobileMenu.setAttribute('class','mobile_menu');
        mobileHeaderMenu.setAttribute('class','mobile_header_menu mobile_header_hide');
    }
}

function moMenuLogin(){
    loginMenu = document.querySelectorAll('.mobile_sub_menu');
    loginName = loginMenu.item(0).getAttribute('class');
    let moIcon1 = document.querySelector('.mo_icon1 > img');


    if(loginName == 'login_menu mobile_sub_menu'){
        flag = true;
        loginMenu.item(0).setAttribute('class','mobile_sub_menu login_menu_show');
        moIcon1.setAttribute('class','morotate');
        moIcon1.src="./images/icon_gnb_plus_active.09adb7b3.svg";
    }else if(loginName == 'mobile_sub_menu login_menu_show'){
        flag = false;
        loginMenu.item(0).setAttribute('class','login_menu_shut mobile_sub_menu login_menu');
        moIcon1.setAttribute('class','morotate2');
        moIcon1.src="./images/icon_gnb_plus.c4dd955d.svg";
    }else if(loginName == 'login_menu_shut mobile_sub_menu login_menu'){
        loginMenu.item(0).setAttribute('class','mobile_sub_menu login_menu_show');
        moIcon1.setAttribute('class','morotate');
        moIcon1.src="./images/icon_gnb_plus_active.09adb7b3.svg";
    }

}

function moMenuCustomer(){
    loginMenu = document.querySelectorAll('.mobile_sub_menu');
    customerName = loginMenu.item(1).getAttribute('class');
    let moIcon2 = document.querySelector('.mo_icon2 > img');

    
    if(customerName == 'customer_menu mobile_sub_menu'){
        loginMenu.item(1).setAttribute('class','customer_menu_show mobile_sub_menu');

        moIcon2.setAttribute('class','morotate');
        moIcon2.src="./images/icon_gnb_plus_active.09adb7b3.svg";

    }else if(customerName == 'customer_menu_show mobile_sub_menu'){
        loginMenu.item(1).setAttribute('class','customer_menu mobile_sub_menu customer_menu_shut');

        moIcon2.setAttribute('class','morotate2');
        moIcon2.src="./images/icon_gnb_plus.c4dd955d.svg";

    }else if(customerName == 'customer_menu mobile_sub_menu customer_menu_shut'){
        loginMenu.item(1).setAttribute('class','customer_menu_show mobile_sub_menu');
    
        moIcon2.setAttribute('class','morotate');
        moIcon2.src="./images/icon_gnb_plus_active.09adb7b3.svg";

    }
}

function iconRotate(){

}