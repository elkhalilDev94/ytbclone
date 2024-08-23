let menu = document.querySelector(".menu");
let section_left = document.querySelector(".section-left");



let section_right = document.querySelector(".section-right");

menu.addEventListener('click', () => {
    section_left.classList.toggle('activeMenu');

    let menuActived = document.querySelector(".activeMenu");

    // Check the computed style instead of relying on inline styles
    let isHidden = window.getComputedStyle(section_left).display === "none";

    if (isHidden) {
         section_right.style.width = "100%";
       // console.log("100");
    } else {
         section_right.style.width = "80%";
       // console.log("80");
    }

});

