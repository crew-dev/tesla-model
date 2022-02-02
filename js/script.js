const arrowDown = document.querySelector('.arrow-down')
const linkItem = document.querySelectorAll('.link__item')
for (let i = 0; i<linkItem.length; i++) {
    linkItem[i].addEventListener('click', (event) => {

    for (let i = 0; i<linkItem.length; i++) {
        linkItem[i].classList.remove('link__item_underline')
        event.target.classList.add('link__item_underline')
    }
    })
}
arrowDown.addEventListener('click', (e) => {
e.preventDefault();
document.querySelector('#down').scrollIntoView({
    behavior: 'smooth',
    block: 'start',
})
})