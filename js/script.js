// ----------------- Navigation Bar ---------------------- //

window.addEventListener('scroll', function(){
    let navbar = document.getElementById("navbar");
    navbar.classList.toggle('fixed', this.window.scrollY > 0)
})

// Portifolio Gallary

let filterContainer = document.querySelector(".gallary-filter")
let gallaryItems = document.querySelectorAll(".gallary-item")

filterContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("filter-item")){
        // deactivates existing active filter item
        filterContainer.querySelector(".active").classList.remove("active");
        // this activates the new filter item
        event.target.classList.add("active");
         
        let filterValue = event.target.getAttribute("data-filter");
        gallaryItems.forEach((item) => {
            if (item.classList.contains(filterValue) || filterValue === "all") {
                item.classList.remove("hide");
                item.classList.add("show");
            }
            else {
                item.classList.remove("show");
                item.classList.add("hide");
            }
        });
    }
});

// Review Carosel

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1200:{
            items:2
        }
    }
})