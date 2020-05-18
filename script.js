document.addEventListener('DOMContentLoaded', function (){

    document.querySelector('#topbar').addEventListener('click', (e) => {

       let nav = document.querySelector('#list1');
       nav.classList.toggle('responsive');

       let nav2 = document.querySelector('#list2');
       nav2.classList.toggle('responsive2');
    })
});

