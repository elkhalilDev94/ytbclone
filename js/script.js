let menu = document.querySelector(".menu");

let menu_hide = document.querySelector(".menu_hide");

let section_left = document.querySelector(".section-left");

let sections = document.querySelector(".sections");

let sidebar = document.querySelector('.sidebar');

let scrollToTop = document.querySelector('.scrollToTop');

// let section_right = document.querySelector('.section-right');

let section_right = document.querySelector(".section-right");

let btnDark = document.querySelector(".night");

/* 
btnDark.addEventListener("click", function () {


  document.body.classList.toggle('darkMode');


  //  document.body.classList.toggle('darkMode');



  // section_left.classList.toggle('darkMode');
  // section_right.classList.toggle('darkMode');
});
 */

/*-------------- Apply_Dark_Light_Mode -----------------*/


// Function to apply the theme based on the current mode
function applyTheme(mode) {
  document.body.classList.remove('lightMode', 'darkMode');
  document.body.classList.add(`${mode}`);
}

// Function to toggle between light and dark modes
function toggleTheme() {
  let currentMode = localStorage.getItem('theme') === 'darkMode' ? 'darkMode' : 'lightMode';
  let newMode = currentMode === 'darkMode' ? 'lightMode' : 'darkMode';
  
  // Apply the new theme
  applyTheme(newMode);
  
  // Store the new theme in local storage
  localStorage.setItem('theme', newMode);
}

// Check for saved theme on page load
document.addEventListener('DOMContentLoaded', () => {
  let savedTheme = localStorage.getItem('theme') || 'lightMode';
  applyTheme(savedTheme);
  
  // Add event listener for theme toggle button
 btnDark.addEventListener('click', toggleTheme);
});


/*------------ sideBar Menu --------------*/

menu_hide.addEventListener('click', () => {


  // if (document.body.clientWidth <= 600) {
    // Code to execute if the body width is greater than 600px
    // console.log("Body width is greater than 600px");
    
    sidebar.classList.toggle('hide');
  //   section_left.classList.toggle('active');

  //   if (document.body.clientWidth >= 1000) {
  //     section_right.style.flexBasis = "90%";
  //     section_left.style.flexBasis = "10%";
  // }
  
}); 


/*------------ sideBar Menu ---------------*/



/*-------------- Apply_Dark_Light_Mode ------------------*/





menu.addEventListener('click', () => {

  // if (document.body.clientWidth <= 600) {
  // Code to execute if the body width is greater than 600px

  /*     section_left.classList.toggle('active');
      sidebar.classList.toggle('active');
   */
  // section_right.style.display.zIndex = "-1";

  // if (document.body.clientWidth >= 1000) {
  
          // sidebar.classList.toggle('extend');
          sidebar.classList.add('show');
          sidebar.classList.remove('hide');
/* 
   section_right.classList.toggle('extend');
   section_left.classList.toggle('extend'); */

  /*   section_right.style.flexBasis = "80%";
    section_left.style.flexBasis = "20%"; */
  // }
  // } 



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

let bodyWidth = document.body.clientWidth;

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
  setTimeout(checkButtonVisibility, 150); // Delay to wait for the scroll to finish
}

function checkButtonVisibility() {


/*   console.log("Scroll Width:", keywords.scrollWidth);
  console.log("Client Width:", keywords.clientWidth);
  console.log("Scroll Left:", keywords.scrollLeft); */



  // Show the left button if we have scrolled away from the start
  if (keywords.scrollLeft > 0 ) {
    scrollLeftButton.style.display = "block";
  } else {
    scrollLeftButton.style.display = "none";
  }

  // Show the right button if we are not fully scrolled to the end
  if ((keywords.scrollWidth - keywords.clientWidth > keywords.scrollLeft) && bodyWidth > 500 ) {
    scrollRightButton.style.display = "block";
  } else {
    scrollRightButton.style.display = "none";
  }
}

// Initial check on page load
checkButtonVisibility();



section_right.addEventListener("scroll", (e) => {
  if (section_right.scrollTop > 300) {
    // scrollToTop.classList.add('show');
    scrollToTop.style.opacity = "1";

  } else {

    scrollToTop.style.opacity = "0";
    // scrollToTop.classList.remove('show');
  }

  // console.log(e.target.scrollY);
});



scrollToTop.addEventListener('click', function () {
  // section_right.scrollBy(0, -600);
  section_right.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


/*--------------------------------------*/

// const scrollContainer = document.querySelector('.scroll-container');

 keywords.addEventListener('wheel', (event) => {
  event.preventDefault();
  keywords.scrollLeft += event.deltaY;
});

let startX;
let scrollLeft;

keywords.addEventListener('mousedown', (e) => {
  startX = e.pageX - keywords.offsetLeft;
  scrollLeft = keywords.scrollLeft;
  keywords.style.cursor = 'grabbing';
  keywords.style.userSelect = 'none';

  console.log(startX);
  console.log(scrollLeft);

  
});

keywords.addEventListener('mouseleave', () => {
  keywords.style.cursor = 'default';
  keywords.style.userSelect = 'auto';
});

keywords.addEventListener('mouseup', () => {
  keywords.style.cursor = 'default';
  keywords.style.userSelect = 'auto';
});

keywords.addEventListener('mousemove', (e) => {
  if (!startX) return;
  const x = e.pageX - keywords.offsetLeft;
  const walk = (x - startX) * 2; // *2 for faster scroll
  keywords.scrollLeft = scrollLeft - walk;
}); 


/*---------------------------------------*/

