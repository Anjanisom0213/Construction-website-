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


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/
