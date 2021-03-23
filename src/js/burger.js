const burger = ()=>{
    const burgerBtn = document.querySelector('.burger');
    const nav = document.querySelector('.nav');
    burgerBtn.addEventListener('click', ()=>{
        nav.classList.toggle('active');
        document.body.classList.toggle('no-scroll')
    })
}
burger();