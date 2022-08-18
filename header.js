var serGnb = document.querySelector('.customer_service');
let centerMore = document.querySelectorAll('.center_more > a >img');


function serviceEvent(){
    if(serGnb.id == '#0'){
        serGnb.setAttribute('class','customer_service ser_gnb');
        serGnb.setAttribute('id','');

        for(i=0; i<centerMore.length; i++){
            centerMore.item(i).setAttribute('class','rotate');
        }

    } else{
        serGnb.setAttribute('class','customer_service');
        serGnb.setAttribute('id','#0');

        for(i=0; i<centerMore.length; i++){
            centerMore.item(i).setAttribute('class','rotate2');
        }

    }
}




function searchEvent(){
    searchBtn = document.querySelector('.upper_li > input');
    className = searchBtn.getAttribute('class');

    if(className == 'search'){
        searchBtn.setAttribute('class','show_search');

    } else if(className == 'show_search'){
        searchBtn.removeAttribute('class','show_search');
        searchBtn.setAttribute('class','search');
    }
}

