const dropdown2 = document.querySelector('#dropdown2');
const menu2 = document.querySelector('#menu2');

const imgActiv = document.querySelector('.img_gear_activ')
const img = document.querySelector('.img_gear')

const check = document.querySelectorAll ('.check');
const realCheck = document.querySelectorAll ('.real-checkbox');

const btn = document.querySelectorAll('.learned');
const btn1 = document.querySelectorAll('.dictionary');

const ulTag = document.querySelector("ul");
let totalPages = 30;

function element(totalPages, page) {
    let liTag = '';
    let activeLi;
    let beforePages = page - 1;
    let afterPages = page + 1;
    if(page > 1){
        liTag += `<li class = "btn prev" onclick="element(totalPages,${page-1})"><div><div></li>`;
    }
    if (page > 2){
        liTag += `<li class="pagination__numb" onclick="element(totalPages, 1)"><span>1</span></li>`;
        if (page > 3){
            liTag += `<li class="pagination__dots"><span>...</span></li>`;
        }
    }

    if(page == totalPages){
        beforePages = beforePages - 2;
    }else if (page == totalPages-1){
        beforePages = beforePages - 1;
    }

    if(page == 1){
        afterPages = afterPages + 2;
    }else if (page == 2){
        afterPages = afterPages + 1;
    }

    for (let pageLength = beforePages; pageLength <= afterPages; pageLength++) {
        if(pageLength > totalPages){
            continue;
        }
        if (pageLength == 0) {
            pageLength = pageLength +1;
        }
        if(page == pageLength){
            activeLi = "active";
        }else{
            activeLi = "";
        }
        liTag += `<li class="pagination__numb ${activeLi}" onclick="element(totalPages, ${pageLength})"><span>${pageLength}</span></li>`;
    }

    if (page < totalPages-1){
        if (page < totalPages-2){
            liTag += `<li class="pagination__dots"><span>...</span></li>`;
        }
        liTag += `<li class="pagination__numb" onclick="element(totalPages, ${totalPages})"><span>${totalPages}</span></li>`;
    }

    if(page < totalPages){
        liTag += `<li class = "btn next" onclick="element(totalPages,${page + 1})"><div><div></li>`;
    }
    ulTag.innerHTML = liTag;
}
element(totalPages,5);

for (let i = 0; i < btn.length; i++) {

  btn[i].addEventListener('click', function() {
    if (this.classList.contains('inactive') == true) {
        this.classList.remove('inactive')            
    } else {
        this.classList.add('inactive');
    }
    this.innerHTML =
      (this.innerHTML === 'Add to learned') ? this.innerHTML = 'Remove from learned' : this.innerHTML = 'Add to learned';
  })

}

for (let i = 0; i < btn1.length; i++) {

    btn1[i].addEventListener('click', function() {
        if (this.classList.contains('inactive') == true) {
            this.classList.remove('inactive')            
        } else {
            this.classList.add('inactive');
        }
      this.innerHTML =
        (this.innerHTML === 'Add to dictionary') ? this.innerHTML = 'Remove from dictionary' : this.innerHTML = 'Add to dictionary';
    })
  
  }


dropdown2.addEventListener('click', () => {
    if (menu2.classList.contains('hidden') == true) {
        menu2.classList.remove('hidden')
        img.classList.add('hidden')
        imgActiv.classList.remove('hidden');
    } else {
        menu2.classList.add('hidden')
        imgActiv.classList.add('hidden')
        img.classList.remove('hidden');
    }
    
})

dropdown2.addEventListener('click', () => {
    if (dropdown2.classList.contains('active') == true) {
        dropdown2.classList.remove('active');
    } else {
        dropdown2.classList.add('active');
    }
    
})

realCheck.forEach(item=> {
    item.addEventListener('click', oncheck)
    function oncheck () {
        if (item.checked){
            checkName = this.getAttribute('data-check-name');                     
        } else {
            checkName = this.getAttribute('data-check-name')          
        }

       check.forEach (item => {
        if (item.classList.contains(checkName)){
            item.classList.toggle('active')
        } else {            
        }        
       
        })
    };
});

let tab = function () {
    let tabNav = document.querySelectorAll('.tabs-nav__item'),
        tabContent = document.querySelectorAll ('.tab1'),
        tabName;
    
    tabNav.forEach(item=> {
        item.addEventListener('click', selectTabNav)
    })

    function selectTabNav () {
        tabNav.forEach(item=> {
            item.classList.remove('active')
        });
        this.classList.add('active');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);
    }

    function selectTabContent(tabName) {
        tabContent.forEach(item=>{
            item.classList.contains(tabName)? item.classList.add('active'): item.classList.remove('active');
        })
    }
};

tab();