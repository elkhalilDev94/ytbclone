let menu = document.querySelector(".menu");

let menu_hide = document.querySelector(".menu_hide");

let section_left = document.querySelector(".section-left");
let sections = document.querySelector(".sections");
let sidebar = document.querySelector('.sidebar');

// let section_right = document.querySelector('.section-right');

let section_right = document.querySelector(".section-right");


/* menu_hide.addEventListener('click', () => {


  // if (document.body.clientWidth <= 600) {
    // Code to execute if the body width is greater than 600px
    // console.log("Body width is greater than 600px");
    
    sidebar.classList.toggle('active');
    section_left.classList.toggle('active');

    if (document.body.clientWidth >= 1000) {
      section_right.style.flexBasis = "90%";
      section_left.style.flexBasis = "10%";
  }
  // }
  
}); */



menu.addEventListener('click', () => {

  // if (document.body.clientWidth <= 600) {
    // Code to execute if the body width is greater than 600px
   
/*     section_left.classList.toggle('active');
    sidebar.classList.toggle('active');
 */
    // section_right.style.display.zIndex = "-1";

    // if (document.body.clientWidth >= 1000) {
/* 
        section_right.classList.toggle('extend');
        section_right.classList.remove('extend'); */

        section_right.classList.toggle('extend');
        section_left.classList.toggle('extend');

      /*   section_right.style.flexBasis = "80%";
        section_left.style.flexBasis = "20%"; */
    // }
  // } 

  console.log('i am fine');

  // let menuActived = document.querySelector(".activeMenu");

  // Check the computed style instead of relying on inline styles
  //  let isHidden = window.getComputedStyle(section_left).display === "none";

  //  if (isHidden) {
  //  section_right.style.flexBasis = "100%";
  //  section_left.style.flexBasis = "0%";
  /*         section_right.style.flexBasis = "90%";
          section_left.style.flexBasis = "10%"; */
  // console.log("100");
  //  } 
  /*      else {
           section_right.style.flexBasis = "90%";
           section_left.style.flexBasis = "10%"; */
  // console.log("80");
  // }

});

const keywords = document.querySelector(".keywords");
const scrollLeftButton = document.querySelector(".scroll-left");
const scrollRightButton = document.querySelector(".scroll-right");

/* 
scrollRightButton.addEventListener('click', () => {
    console.log('test_me');
});  */

function scrollMenu(distance) {
  keywords.scrollBy({
        left: distance,
        behavior: 'smooth'
    });

    // Check if buttons should be shown or hidden after scrolling
    setTimeout(checkButtonVisibility, 300); // Delay to wait for the scroll to finish
}

function checkButtonVisibility() {
    // Show the left button if we have scrolled away from the start
    if (keywords.scrollLeft > 0) {
        scrollLeftButton.style.display = "block";
    } else {
        scrollLeftButton.style.display = "none";
    }

    // Show the right button if we are not fully scrolled to the end
    if (keywords.scrollWidth - keywords.clientWidth > keywords.scrollLeft) {
        scrollRightButton.style.display = "block";
    } else {
       scrollRightButton.style.display = "none";
    }
}

// Initial check on page load
checkButtonVisibility();


document.getElementById('scrollTop').addEventListener('click', function() {
  document.getElementById('section-right').scrollBy(0, -1000);
});
