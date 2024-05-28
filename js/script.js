'use strict'

////////strat nav //////////

// click //
const closeEl=document.querySelector('.close')
const headEl=document.querySelector('.heading')
closeEl.addEventListener( 'click' , ()=>{
    headEl.classList.toggle('hide')
})
// end click //





document.getElementById("next").onclick = function(){
    let lists=document.querySelectorAll(".item");
    document.getElementById('slide').appendChild(lists[0])
}
document.getElementById("prev").onclick = function(){
    let lists=document.querySelectorAll(".item");
    document.getElementById('slide').prepend(lists[lists.length-1])
}


const openSignInEl=document.querySelector('#openin')
const signInEl=document.querySelector('.signin')
const closeSignInEl=document.querySelector('#closesignin')
let overLayerEl=document.querySelector('.overlay')

closeSignInEl.addEventListener('click',()=>{
    signInEl.classList.add('hidden')
    overLayerEl.classList.add('hidden')
    document.body.style.overflowY='visible'
})
openSignInEl.addEventListener('click',()=>{
    signInEl.classList.remove('hidden')
    overLayerEl.classList.remove('hidden')
    document.body.style.overflow='hidden'
})


const openSignUpEl=document.querySelector('#openup')
const signUpEl=document.querySelector('.signup')
const closesignUpEl=document.querySelector('#closesignup')

closesignUpEl.addEventListener( 'click' , ()=>{
    signUpEl.classList.add('hidden')
    overLayerEl.classList.add('hidden')
    document.body.style.overflowY='visible'
})
openSignUpEl.addEventListener( 'click' , ()=>{
    signUpEl.classList.remove('hidden')
    overLayerEl.classList.remove('hidden')
    document.body.style.overflow='hidden'
})



//////end nav//////




//////start main///////


const advancedEl=document.querySelector('.advanced-filter')
const modalAdvancedEl=document.querySelector('.modal-filter')

advancedEl.addEventListener( 'click' , ()=>{
    modalAdvancedEl.classList.toggle('light')
})



var swiper = new Swiper(".mySwiper", {
    effect: "flip",
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });






  let imgsEl=document.querySelectorAll('.slider-res img')
  let sliderArrowRight=document.querySelector('#right')
  let sliderArrowLeft=document.querySelector('#left')
  let sliderActiveIndex=0
  sliderArrowRight.addEventListener('click',()=>{
      imgsEl[sliderActiveIndex].classList.remove('active')
      sliderActiveIndex++
      if(sliderActiveIndex===imgsEl.length){
          sliderActiveIndex=0
      }
      imgsEl[sliderActiveIndex].classList.add('active')
      console.log(sliderActiveIndex)
  })
  sliderArrowLeft.addEventListener('click',()=>{
      imgsEl[sliderActiveIndex].classList.remove('active')
      sliderActiveIndex--
      if(sliderActiveIndex<0){
          sliderActiveIndex=imgsEl.length-1
      }
      imgsEl[sliderActiveIndex].classList.add('active')
      console.log(sliderActiveIndex)
  })






const AdvancedEl=document.querySelectorAll('.filter-item')
const modalFilterEl=document.querySelectorAll('.light')
// console.log(modalFilterEl)
for(let i=0;i<AdvancedEl.length;i++){
    AdvancedEl[i].addEventListener('click',()=>{
        for(let j=0;j<modalFilterEl.length;j++){
            modalFilterEl[j].classList.add('hidden')
        }
        modalFilterEl[i].classList.remove('hidden')
    })
}




const ttEl=document.querySelectorAll( '.tt')
window.addEventListener( 'scroll' , checkScroll)
checkScroll()
function checkScroll(){
    const win=window.innerHeight;
    const trigger=win*.8
    ttEl.forEach((e)=>{
        const eTop=e.getBoundingClientRect().top
        if(eTop<trigger){
            e.classList.add('showw')
        }else{
            e.classList.remove('showw')
        }
    })
}



const logoEl=document.querySelector('#logo')
setInterval(()=>{
    logoEl.style.color='#'+Math.trunc((Math.random()*900)+100)
},600)