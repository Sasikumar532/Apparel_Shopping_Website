document.addEventListener('scroll', ()=>{
    const header=document.querySelector('header');
    const navh1=header.querySelector('h1');
    const navul=header.querySelector('ul');
    const navi=header.querySelector('i');
    const menubtn=header.querySelector('#menu-btn')
    if(window.scrollY>50){
        header.style.background="black";
        navh1.style.color="white";
        navul.style.color="white";
        navi.style.color="white";
        menubtn.style.color="white";
    }
    if(window.scrollY<50){
        header.style.background="#fffcfc";
        navh1.style.color="black";
        navul.style.color="black";
        navi.style.color="black";
        menubtn.style.color="black";
    }
})


const side_navbar=document.querySelector('.side_navbar');
function showSideNavbar(){
    side_navbar.style.left="0";
}
function closeSideNavbar(){
    side_navbar.style.left="-40%"
}