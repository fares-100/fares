/* ===================================================>>>   NAV  <<<============================================= */
/* <!-- ------------------------- VARIABLES CALL ---------------- --> */
let nav_openn = document.getElementById('nav_open');
let navv = document.getElementById('nav');



/* <!-- ------------------------- Nav open -------------------------- --> */
/* -----------  Open ----------- */
nav_openn.onclick = function(){
  navv.classList.toggle('nav_click');
  nav_openn.classList.toggle('dev_menu_click');
}










// ======================================================= SCROLL UP ==================================================
/* <!-- ------------------------- VARIABLES CALL ---------------- --> */
let scroll_upp = document.querySelector(".scroll_up");
let messegee = document.querySelector(".messege");



/* <!-- -------------------------- Open Show ---------------- --> */
window.onscroll = function (){
  if (this.scrollY >= 1900) {
    scroll_upp.classList.add("show_scroll");
    messegee.classList.add("show_mseesge");
  } else {
    scroll_upp.classList.remove("show_scroll");
    messegee.classList.remove("show_mseesge");
  }
}



/* <!-- -------------------------- Scroll Top ---------------- --> */
scroll_upp.onclick = function (){
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}




















/* ===================================================>>>   WINDOW  <<<============================================= */
/* <!-- ------------------------- VARIABLES CALL ---------------- --> */
// let item_openn = document.getElementById('item_add_open');
// let itemm = document.getElementById('item_add');
// let item_closee = document.getElementById('item_add_close');



/* <!-- ------------------------- Item -------------------------- --> */
/* -----------  Open ----------- */

// item_openn.addEventListener('click', function(){
//   itemm.style.display = 'flex';
// })
/* -----------  Close ----------- */

// item_closee.addEventListener('click', function(){
//   itemm.style.display = 'none';
// })