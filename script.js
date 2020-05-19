document.addEventListener('DOMContentLoaded', function () {

    document.querySelector('#topbar').addEventListener('click', (e) => {

        let firstUl = document.querySelector('#list1');
        let firstLi = document.querySelector('#link1');
        let secLi = document.querySelector('#link2');
        let SecUl = document.querySelector('#list2');

        if (firstUl.className === 'nav-itens') {
            firstUl.classList.toggle('responsive');
            firstUl.appendChild(firstLi);
            firstUl.appendChild(secLi);
        }
        else {
            firstUl.classList.remove('responsive');
            SecUl.appendChild(firstLi);
            SecUl.appendChild(secLi);
        }
    })
});

