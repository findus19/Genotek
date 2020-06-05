document.addEventListener('DOMContentLoaded', () =>{
    const del = document.querySelector('.actions__form-delete');
    let itemToggle = document.querySelectorAll('.actions__item-toggle');

    itemToggle.forEach(item => {
        item.addEventListener('click', ()=> {
            const actionsItem = document.querySelectorAll('.actions__item-description')[item];
            actionsItem.classList.toggle('open');
        })
    })
});
