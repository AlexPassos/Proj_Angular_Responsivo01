let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

console.log('teste');
angular.element( console.log('teste123'));

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');

}

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if(window.scrollY > 60){
    angular.element( console.log('teste123'));
    angular.element(document.querySelector('#scroll-top').classList.add('active'));
  }else{
    angular.element( console.log('teste222'));
    document.querySelector('#scroll-top').classList.remove('active');
  }

}

function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 3000);
}

window.onload = fadeOut();
