//initialize AOS (optitional if already innitialized)
AOS.init({
    disable: true //disables AOS on scroll
});

//add hover effect
const items = document.querySelectorAll('aos-item');
items.forEach(item =>{
    item.addEventListener('mouseenter', () => {
        //Add AOS animation class on hover
        item.classList.add('aos-animate');
    });
    item.addEventListener('mouseleave', () => {
        //Remove AOS animation class when hover ends
        item.classList.remove('aos-animate');
    })
})