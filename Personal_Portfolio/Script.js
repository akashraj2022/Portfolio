
let menu_icon = document.getElementsByClassName('menu-icon')[0];
console.log(menu_icon)

menu_icon.addEventListener('click',()=>{
    let right_header = document.getElementsByClassName('right-side-header')[0];
    right_header.classList.add("newanimation")
    right_header.style.transition="all 1s";
    right_header.style.display="block";
    let cross_icon = document.getElementsByClassName('cross-icon')[0];
    cross_icon.style.display="block";
    
    let body = document.querySelector('body');
    

    cross_icon.addEventListener('click',()=>{
        
        right_header.style.display="none";
        cross_icon.style.display="none";
        

    })
})