// =====================================================
// NAVIGATION
// =====================================================

const navigationLinks =
    document.querySelectorAll(".navbar nav a");


const sections =
    document.querySelectorAll("section");


// =====================================================
// ACTIVE NAVIGATION
// =====================================================

function updateActiveNavigation() {

    let currentSection = "home";


    sections.forEach(function(section) {

        const sectionTop =
            section.offsetTop - 180;


        if (window.scrollY >= sectionTop) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navigationLinks.forEach(function(link) {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNavigation
);


updateActiveNavigation();


// =====================================================
// PAGE LOADED
// =====================================================

console.log(
    "Shaik Rehana Portfolio Loaded Successfully ❤️"
);