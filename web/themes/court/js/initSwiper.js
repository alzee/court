/*
function getSlides() {
  let xhr = new XMLHttpRequest();
  let url = '/court/slider?_format=json';
  xhr.onreadystatechange = function () {
    if(xhr.readyState === XMLHttpRequest.DONE){
      if(xhr.status === 200){
  		initSlides(xhr.response);
      }
    }
  };
  xhr.open('GET', url);
  xhr.responseType='json';
  //xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.send();
}

function initSlides(slides) {
  let slider = document.querySelector('.swiper-wrapper');
  let slide = slider.querySelector('.swiper-slide');

  //console.log(slides);
  for(let i = 0; i < slides.length; i++) {
    let nSlide = slide.cloneNode(true);
    let a = nSlide.querySelector('a');
    let img = nSlide.querySelector('img');
    let cap = nSlide.querySelector('figcaption');
    a.href = slides[i].view_node;
    img.src = slides[i].field_image;
    cap.innerText = slides[i].title;
    slider.appendChild(nSlide);
  }
  slide.remove();
}
*/

function initSwiper() {
  var swiper = new Swiper('#slider', {
    loop: true,
	autoHeight: true,
    autoplay: {
        delay: 5000,
    },
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      hideOnClick: true,
    },
  })
}
