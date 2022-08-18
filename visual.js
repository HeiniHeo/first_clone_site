const visual = document.querySelectorAll('.vi_wrap');
const slideDots = document.querySelectorAll('.slide_dots > li');
var index = 0;
var rolling=null;
slider();


function slider(n){

    if(index == visual.length){
        index =0;
    }

    if(n !=undefined){
        index = n;
    }


    for(i=0; i<visual.length; i++){
        
        if(i == index){
            visual.item(i).setAttribute('class','vi_wrap show');
            slideDots.item(i).setAttribute('class','color');
        } else{
            visual.item(i).setAttribute('class','vi_wrap off');
            slideDots.item(i).setAttribute('class','');
        }

    }
    index++;
}

function visualBtn(n){
    clearInterval(rolling);
    slider(n);
    rolling = setInterval(slider,6000);
}


function slideStop(){
    const stopBtn = document.querySelector('.stop');
    const pause = document.querySelectorAll('.stop > span')

    if(stopBtn.value == '0'){
        clearInterval(rolling);
        stopBtn.setAttribute('value','1');
        pause.item(0).setAttribute('class','pause');
        pause.item(1).setAttribute('class','hide');
    }else{
        stopBtn.setAttribute('value','0');
        pause.item(0).setAttribute('class','');
        pause.item(1).setAttribute('class','');
        slider();
        rolling = setInterval(slider,6000);
    }
}


rolling = setInterval(slider,6000);