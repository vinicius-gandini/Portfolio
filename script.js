document.addEventListener('DOMContentLoaded', function (){

    document.querySelector('#topbar').addEventListener('click', (e) => {

        const list1 = document.querySelector('#list1');
        const list2 = document.querySelector('#list2');
/*
        if (list1.className === 'nav-itens' || list2.className === 'nav-itens'){
            list1.className += ' responsive1';
            list2.className += ' responsive2';
        }
            
        else {
            list1.className = 'nav-itens';
            list2.className = 'nav-itens';
        }
*/

        const menu = document.createElement('div');
        menu.className += ' responsive'
        menu.appendChild(list1)
        menu.appendChild(list2)
        
    })
});

