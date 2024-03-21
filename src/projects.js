'use strict';


// 프로젝트 필터링 구현
const categories = document.querySelector('.categories');
const projects = document.querySelectorAll('.project');
const projectsContainer = document.querySelector('.projects');
categories.addEventListener('click', (evt) =>  {
  const filter = evt.target.dataset.category;

  if(filter == null)  {
    return;
  }

  handleActiveSelection(evt.target);
  filterProejects(filter);
  

});

function handleActiveSelection(target)  {  
  
  const active =  document.querySelector('.category--selected');
  active.classList.remove('category--selected');

  target.classList.add('category--selected');
}


function filterProejects(filter)  {
  
  projectsContainer.classList.add('anim-out');

  projects.forEach(project => {
    const type = project.dataset.type;
    if(filter === 'all' || filter === project.dataset.type)  {
      project.style.display = 'block';
    } else  {
      project.style.display = 'none';
    }

    setTimeout(() =>  {
      projectsContainer.classList.remove('anim-out');
    }, 250);
  });
}






// const categories = document.querySelector('.categories');
// const categorySelected =  document.querySelector('.category--selected');

// setViewContent(categorySelected.id);

// categories.addEventListener('click', (evt) =>  {
//   if(evt.target.id !== '')  {
//     const selectedButton = document.querySelector('.category--selected');
//     selectedButton.classList.remove('category--selected');
  
//     evt.target.classList.add('category--selected');
  
//     setViewContent(evt.target.id);
//   }
  
  
// });



// function setViewContent(clickID)  {
//   if(clickID !== null) {
//     const viewedContent = document.querySelectorAll('.project--view');

//     for(let i = 0; i < viewedContent.length; i++) {
//       viewedContent[i].classList.remove("project--view");
//     }

//     const viewContent = document.querySelectorAll(`.${clickID}`);

//     for(let i = 0; i < viewContent.length; i++) {
//       viewContent[i].classList.add("project--view");
//     }
//   }
// }

