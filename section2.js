const reItem = document.querySelectorAll('#wrap')
const itemExp = document.querySelectorAll('.item_pop > div')

function popUp(n){
    for(i=0; i<reItem.length; i++){
        reItem.item(i).setAttribute('class','blur');
        if(n == 0){
            itemExp.item(0).setAttribute('class','item1_exp item_exp display')
        } else if(n == 1){
            itemExp.item(1).setAttribute('class','item2_exp item_exp display')
        } else if(n == 2){
            itemExp.item(2).setAttribute('class','item3_exp item_exp display')
        } else if(n  == 3){
            itemExp.item(3).setAttribute('class','item4_exp item_exp display')
        } 
    }
}


function deleteBtn(n){
    for(i=0; i<reItem.length; i++){
        reItem.item(i).setAttribute('class','');
        if(n == 0){
            itemExp.item(0).setAttribute('class','item1_exp item_exp')
        } else if(n == 1){
            itemExp.item(1).setAttribute('class','item2_exp item_exp')
        } else if(n == 2){
            itemExp.item(2).setAttribute('class','item3_exp item_exp')
        } else if(n  == 3){
            itemExp.item(3).setAttribute('class','item4_exp item_exp')
        } 
    }
}

const wrap = document.querySelector('#wrap');
