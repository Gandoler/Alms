const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown=>{
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');

    if (!select) {
        console.error("select");
        return; // Exit the iteration
    }
    if (!caret) {
        console.error("caret");
        return; // Exit the iteration
    }
    if (!menu ) {
        console.error("menu");
        return; // Exit the iteration
    }
    if (!selected) {
        console.error("selected");
        return; // Exit the iteration
    }

    select.addEventListener('click',()=>{
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');

    });


    options.forEach(option=>{
        option.addEventListener('click',()=>{
            selected.innerText = option.innerText;
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');
            options.forEach(option=>{
                option.classList.remove('active');
            });
            option.classList.add('active');
        });
    });
});