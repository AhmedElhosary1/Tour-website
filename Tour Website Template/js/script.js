
// SEARCH FORM SHOW AND HIDE
let searchBtn =document.querySelector('#search-btn');
let searchBar =document.querySelector('.search-bar-container');

searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}
// ------------------------------------------------------------------------------------------------



// LOGIN FORM SHOW AND HIDE
let formBtn =document.querySelector('#login-btn');
let loginForm =document.querySelector('.login-form-container');
let formClose =document.querySelector('#form-close');

formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});
// -------------------------------------------------------------------------------------------------



//MENU BTN SHOW AND HIDE IN RESPONSIVE
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});
// -------------------------------------------------------------------------------------------------



//SLIDER JS CODE
let videoBtn = document.querySelectorAll('.vid-btn'); 

videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');

        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});
// -------------------------------------------------------------------------------------------------

