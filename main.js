document.addEventListener('DOMContentLoaded', () =>{
    const del = document.querySelector('.actions__form-delete'),
        actions = document.querySelector('.actions'),
        actionsItemDescription = document.querySelectorAll('.actions__item-description'),
        actionsItemHeader = document.querySelectorAll('.actions__item-header'),
        actionsItemToggle = document.querySelectorAll('.actions__item-toggle');

    actions.addEventListener('click', e => {
    actionsItemDescription.forEach(item=> {
        (item.closest('.actions__item') === e.target.closest('.actions__item')) ?
            (item.classList.contains('desc-active')) ?
                item.classList.remove('desc-active') :
                item.classList.add('desc-active'):
            item.classList.remove('desc-active');
        });
    });

    del.addEventListener('click', () => {
        const input = document.querySelector('.actions__form-input');
        input.value = '';
    })
});
 