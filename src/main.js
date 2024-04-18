'use strict';

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
  home.style.opacity = ratio < 0 ? 0 : ratio;  
  
  });


  // 최상단에 있을 경우 애로우 버튼 숨기고, Home 절반이상 이동했을 때 보이기
  const arrowUp = document.querySelector('.arrow-up');
  document.addEventListener('scroll', () =>  {
    let ratio_dream = 1 -  (window.scrollY / homeHeight);  

    arrowUp.style.opacity = ratio_dream > 0.5 ? 0 : 1;

  });
  


  // Navbar 토글버튼 클릭 처리
  const navbarMenu = document.querySelector('.header__menu');
  const navbarToggle = document.querySelector('.header__toggle');

  navbarToggle.addEventListener('click', () =>  {
    navbarMenu.classList.toggle('open');
  });


  // Navbar 메뉴 클릭시 자동으로 닫아줌
  navbarMenu.addEventListener('click', () =>  {
    navbarMenu.classList.remove('open');
  });



  // Facebook 내보내기 버튼
  $(document).on('click', '.btn_facebook', function()  {
    let gotoUrl = encodeURIComponent(window.location.href),
    facebook = 'http://www.facebook.com/sharer/sharer.php?u=',
    link = facebook + gotoUrl;

    window.open(link);

    return false;
  });

  
  // X 내보내기 버튼
  $(document).on('click', '.btn_x-twitter', function()  {
    let gotoUrl = encodeURIComponent(window.location.href),
    x_twitter = `http://www.twitter.com/intent/tweet?text=T&url=`,
    link = x_twitter + gotoUrl;

    window.open(link);

    return false;
  });


  // Line 내보내기 버튼
  $(document).on('click', '.btn_line', function()  {
    let gotoUrl = encodeURIComponent(window.location.href),
    line = `http://social-plugins.line.me/lineit/share?url=`,
    link = line + gotoUrl;

    window.open(link);

    return false;
  });


  // 카카오톡 내보내기 버튼
    
    $(document).on('click', '.btn_kakao', function()  {
      // js키 초기화
      
      

      Kakao.Share.sendDefault({
        objectType: 'feed',
        content:  {
          title : '타이틀명',
          description: '설명텍스트',
          imageUrl: `http://127.0.0.1:5501/images/profile-removebg-preview.png`,
          link:  {
            mobileWebUrl: `https://info-gateway.com`,
            webUrl: `https://info-gateway.com`
          },
        }
      });
    });

    