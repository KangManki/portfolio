'use strict';

let sectionIds = ['#home', '#about', '#skills', '#work', '#testimonials', '#contact' ];
const sections = sectionIds.map((id) => document.querySelector(id));
const navItems = sectionIds.map((id) => document.querySelector(`[href="${id}"]`));

const visibleSections = sectionIds.map(() => false);

console.log(sectionIds);
console.log(sections);
console.log(navItems);
console.log(visibleSections);


const options = {
  threshold: 0.5
};
const observer = new IntersectionObserver(observerCallback, options);

sections.forEach(section => observer.observe(section))


function observerCallback(entries)   {
  let selectLastOne;
  
  entries.forEach(entry =>  {
    const index = sectionIds.indexOf(`#${entry.target.id}`);

    visibleSections[index] = entry.isIntersection;

    selectLastOne = index === sectionIds.length - 1 && entry.isIntersecting && entry.intersectionRatio >= 0.99;
    
    console.log(entry.target);
    console.log(entry.isIntersecting);
    console.log(entry.intersectionRatio);
  });

  const navIndex = selectLastOne ? sectionIds.length - 1 : findFirstIntersection(visibleSections);

  
}

function findFirstIntersection(visibleSections) {
  const index = visibleSections.indexOf(true);

  return index >= 0 ? index : 0;
}

