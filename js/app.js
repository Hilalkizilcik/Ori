import { init } from './3d.js';
const skillDescription = document.querySelector('.skill-description')
const skills = document.querySelectorAll('.skill')
const skillsBackground = document.querySelector('.trailer-section-background')
const gameSectionBackground = document.querySelector('.game-section-background > img')
new simpleParallax(skillsBackground);
new simpleParallax(gameSectionBackground);

const skillHoverEffect = new Audio()


gsap.registerPlugin(ScrollTrigger)
gsap.to('.footer-area' , {
  y: -400,
  duration: 1,
  scrollTrigger: {
    trigger: '.footer-area',
    start: 'top bottom',
    end: 'bottom bottom',
    scrub: true,
    toggleActions: 'start pause pause reverse',
  }
})


var swiper = new Swiper(".game-slider", {
  slidesPerView: 1,
  spaceBetween: 80,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});

function addSkillDescription(skill){
  skillDescription.innerHTML = `
  <h1 class="text-effect">${skill.dataset.title}</h1>
  <p>${skill.dataset.description}</p>
  `
}

document.querySelectorAll('.skill').forEach(skill => {
  skill.addEventListener('mouseover', function() {
    skillHoverEffect.src = 'assets/sounds/hover.wav'
    skillHoverEffect.volume = 0.01
    skillHoverEffect.play()
  })
})
skills.forEach(skill => {
  skill.addEventListener('click', function(){
    skills.forEach(skill => {
      skill.classList.remove('selected')
    })
    skill.classList.add('selected')
    addSkillDescription(skill)
  })
})

document.addEventListener('DOMContentLoaded', function() {
  addSkillDescription(skills[0])
  init()
})