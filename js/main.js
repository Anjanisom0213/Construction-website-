/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    if(this.scrollY >= 50) header.classList.add('scroll-header'); 
}
window.addEventListener('scroll', scrollHeader)

/*=============== SWIPER POPULAR ===============*/
var swiperPopular = new Swiper(".popular__container", {
    spaceBetween:32,
    grabCursor:true,
    centeredSlide: true,
    slidesPerView:'auto' ,
    loop:true,

navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

/*=============== VALUE ACCORDION ===============*/
const accordionItems = document.querySelectorAll('.value__accordian-item')

accordionItems.forEach((item)=>{
    const accordionHeader = item.querySelector('value__accordian-header' )

    accordionHeader.addEventListener('click',()=>{
      const openItem = document.querySelector('.accordian-open')

      toggleItem(item)

      if(openItem && openItem!=item){
        toggleItem(openItem)
      }
    })
})
const toggleItem = (item)=>{
    const accordionContent =item.querySelector('.value__accordian-content')

  if(item.classList.contains('accordian-open')){
    accordianContent.removeAttribute('style')
    item.classList.remove('accordian-open')
  }else{

  }
    accordionContent.style.height = accordionContent.scrollHeight +'px'
    item.classList.add('accordian-open')
}

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections =document.querySelectorAll('section[id]')

function scrollActive(){
  const scrolly = window.pageYoffset
  
  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
    sectionTop = current.offsetTop -58,
    sectionId = current.getAttribute('Id')

    if(srolly >sectionTop && scrolly <= sectionTop + sectionHeight){
      document.querySelector('.nav__menu a[href *=' + sectionId + ']').classList.add('active-link')
    }else{
      document.querySelector('.nav__menu a[href *=' + sectionId + ']').classList.remove('active-link')
      }
   })
}
window.addEventListener('scroll', scrollActive)



/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');
  if(this.scrollY >= 350) scrollUp.classList.add('show-scroll');
}
window.addEventListener('scroll', scrollUp)


/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme ='dark-theme'
const iconTheme ='bx-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.container(darkTheme)? 'dark' : 'light'
const getCurrentIcon =() => themeButton.classList.contains(iconTheme) ? 'bx-bx-moon' : 'bx-bx-moon'

if(selectedTheme){
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx-bx-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
  
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)

  localStorage.setItem('selected-theme' , getCurrentTheme())
  localStorage.setItem('selected-icon' , getCurrentIcon())
})
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr =ScrollReveal({
  origin:'top',
  distance:'60px',
  duration:'2500',
  delay:400,

})
sr.reveal('.home__title' .popular__container , .subscribe__container')
sr.reveal('.home__description, .footer__info'{delay:500})
sr.reveal('.home__search',{delay:500})
sr.reveal('.home__value',{delay:700})
sr.reveal('.home__images',{delay:800 , origin: 'bottom'})
sr.reveal('.home__img',{interval:100})
sr.reveal('.home__images, .contact__content' ,{origin:'left'})
sr.reveal('.home__content, .contact__images' ,{origin:'right'})