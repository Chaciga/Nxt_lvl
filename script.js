// ----------------- Navigation Bar ---------------------- //

window.addEventListener('scroll', function(){
    let navbar = document.getElementById("navbar");
    navbar.classList.toggle('fixed', this.window.scrollY > 0)
})

// window.addEventListener('scroll', function(){
//     let navbar = document.getElementById("navbar");
//     navbar.classList.toggle('fixed', this.window.scroll > 0)
// })