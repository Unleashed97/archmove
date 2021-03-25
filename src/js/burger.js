const burger = ()=>{
    const burgerBtn = document.querySelector('.burger');
    const nav = document.querySelector('.nav');
    const header = document.querySelector('.header');
    burgerBtn.addEventListener('click', ()=>{
        header.classList.toggle('active');
        nav.classList.toggle('active');
        document.body.classList.toggle('no-scroll')
    })
}
burger();