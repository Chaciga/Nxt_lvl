// ----------------- Navigation Bar ---------------------- //

window.addEventListener('scroll', function(){
    let navbar = document.getElementById("navbar");
    navbar.classList.toggle('fixed', this.window.scrollY > 0)
})

// Portifolio Gallary

let filterContainer = document.querySelector(".gallary-filter")

filterContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("filter-item")){
        // deactivates existing active filter item
        filterContainer.querySelector(".active").classList.remove("active");
        // this activates the new filter item
        event.target.classList.add("active");
    }
})
