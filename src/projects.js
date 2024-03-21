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

