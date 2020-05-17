document.addEventListener('DOMContentLoaded', function (){

        const list1 = document.querySelector('#list1');
        const list2 = document.querySelector('#list2');
        const nav = document.querySelector('#nav');
        const home = document.querySelector('#menu');
        const bar = document.querySelector('#topbar');

    document.querySelector('#topbar').addEventListener('click', (e) => {

        let menu = document.querySelector('#float-menu');
        let text = document.createTextNode("");
        if (menu.className === '') {
            menu.className += 'responsive';
            list1.className += ' responsiveNav';
            list2.className += ' responsiveNav';
            menu.appendChild(text);
            menu.appendChild(list1);
            menu.appendChild(list2);
        }
        else {
            menu.removeChild(list1);
            menu.removeChild(list2);
            menu.className = '';
            list1.className = 'nav-itens';
            list2.className = 'nav-itens';
            nav.appendChild(list1);
            nav.appendChild(home);
            nav.appendChild(list2);
            nav.appendChild(bar);
        }
        
        
    })
});

