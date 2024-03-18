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
const headerHeight = header.offsetHeight;


document.addEventListener('scroll', () =>  {
if(window.scrollY > headerHeight) {
  header.classList.add('header--bgColor--dark');
} else  {
  header.classList.remove('header--bgColor--dark');
}


});



//Home Section Page 스크롤시 투평하게 처리함
const home = document.querySelector('.home__container');
const homeHeight = home.offsetHeight;
document.addEventListener('scroll', () =>  {
  
  // 내가 작성한 코드
  let ratio = (homeHeight - window.scrollY) / homeHeight;  

  // 드림코딩 코드
  let ratio_dream = 1 -  (window.scrollY / homeHeight);  

  // 값은 동일하다.

  console.log(`내가 작성한 ratio - ${ratio} 드림코딩 ratio - ${ratio_dream}`);
  home.style.opacity = ratio < 0 ? 0 : ratio;  
  
  });
