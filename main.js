document.addEventListener('DOMContentLoaded', () =>{
    const del = document.querySelector('.actions__form-delete');
    let itemToggle = document.querySelectorAll('.actions__item-toggle');

    itemToggle.forEach(item => {
        item.addEventListener('click', ()=> {
            const actionsItem = document.querySelector('.actions__item-description');
            itemToggle.classList.toggle('open');
            console.log(1)
        })
    });

    del.addEventListener('click', () => {
        const input = document.querySelector('.actions__form-input');
        input.value = '';
    })
});
