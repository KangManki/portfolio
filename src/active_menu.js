'use strict';

const sectionIds = ['#home', '#about', '#skills', '#work', '#testimonials', '#contact' ];
const sections = sectionIds.map((id) => document.querySelector(id));
const navItems = sectionIds.map((id) => document.querySelector(`[href="${id}"]`));

let visibleSections = sectionIds.map(() => false);
let activeNavItem = navItems[0];
console.log(sectionIds);
console.log(sections);
console.log(navItems);
console.log(visibleSections);


const options = {
  rootMargin: '-20% 0px 0px 0px',
  threshold: [0, 0.95],
};
const observer = new IntersectionObserver(observerCallback, options);

sections.forEach(section => observer.observe(section))


function observerCallback(entries)   {
  let selectLastOne;
  
  entries.forEach(entry =>  {
    const index = sectionIds.indexOf(`#${entry.target.id}`);

    visibleSections[index] = entry.isIntersecting;

    selectLastOne = index === sectionIds.length - 1 && entry.isIntersecting && entry.intersectionRatio >= 0.90;
    
    console.log(entry.target);
    console.log(entry.isIntersecting);
    console.log(entry.intersectionRatio);
  });
  console.log(visibleSections);
  const navIndex = selectLastOne ? sectionIds.length - 1 : findFirstIntersection(visibleSections);  

  const  navItem = navItems[navIndex];
  activeNavItem.classList.remove('active');
  activeNavItem = navItem;
  activeNavItem.classList.add('active');

}

function findFirstIntersection(visibleSections) {
  const index = visibleSections.indexOf(true);

  return index >= 0 ? index : 0;
}

