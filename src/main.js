// document.addEventListener("DOMContentLoaded", function()  {
//  setEvent();
// });


// function setEvent() {
//   window.addEventListener("scroll", function()  {
//     // let header = document.querySelector(".header");

//     let header = document.querySelector(".header");
    
//     let hHeight = header.offsetHeight;

    

//     hHeight > this.window.scrollY ? header.classList.add("header--bgColor") : header.classList.remove("header--bgColor");


//   });
// }



// Header에 페이지 아래로 스크롤시 다크 스타일링 적용
const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;
document.addEventListener('scroll', () =>  {
console.log(window.scrollY);

if(window.scrollY > headerHeight) {
  header.classList.add('header--bgColor--dark');
} else  {
  header.classList.remove('header--bgColor--dark');
}
});