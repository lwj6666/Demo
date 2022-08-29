let menu_btn = document.querySelector('.burger')
let menu = document.querySelector('.menu')
let menuItem =document.querySelectorAll('.menu li')

menu_btn.addEventListener('click',function () {
    menu.classList.toggle('menu_open')
    menu.style.transition='0.4s ease-in-out'
    menuItem.forEach((item,index) => {
        if(item.style.animation){
            item.style.animation=''
        }else{
            item.style.animation=`menuItemChange 0.3s ${index*0.1+0.4}s forwards`
        }
    });
})

menu.addEventListener('transitionend',()=>{
    menu.style.transition=''
})

