const dropdown = document.querySelector('#dropdown');
const menu = document.querySelector('#menu')


dropdown.addEventListener('click', () => {
    if (menu.classList.contains('hidden') == true) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
    
})

// комменты 29.10

/*
check.forEach(item=> {
    item.addEventListener('click', oncheck)
});

function oncheck () {
    if (this.classList.contains('active') == true) {
        this.classList.remove('active');
    } else {
        this.classList.add('active');
    }    
};

console.log(realCheck)

realCheck.forEach(item=> {
    item.addEventListener('click', selectChe)
})

function selectChe () {
    cheName = this.getAttribute('data-check-name');
        activeChe(cheName);
    console.log(cheName)
}

function activeChe(cheName) {
    if (cheName.classList.contains('active') == true) {
        cheName.classList.remove('active');
    } else {
        cheName.classList.add('active');
    }

}
*/

// комменты до 29.10

/*
check.forEach(item=> {
    item.addEventListener('click', selectcheck)
});

function selectcheck () {
    if (item.classList.contains('active') == true) {
            item.classList.remove('active');
        } else {
            item.classList.add('active');            
        } 
   
}





function checkCheckbox() {    
    if (item.checked) {
      console.log('Checkbox is checked');
    } else {
      console.log('Checkbox is not checked');
    }
}


function checkCheckbox() { 
    let element = document.querySelector('input[type=checkbox]');  
    if (element.checked) {
        console.log("пососи");
    }
};








check.addEventListener('click', () => {
    if (item.classList.contains('active') == true) {
        item.classList.remove('active');
    } else {
        item.classList.add('active');
    }
    
})
*/