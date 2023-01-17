const hum = document.querySelector('#header .nav-bar .nav-list .hum');
const mobile_manu =document.querySelector('#header .nav-bar .nav-list ul');
const header = document.querySelector('#header .contaniner');
hum.addEventListener('click',()=>{
    hum.classList.toggle('active');
    mobile_manu.classList.toggle('active');
});

