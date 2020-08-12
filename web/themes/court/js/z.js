let xhr = new XMLHttpRequest();
let url = '/court/slider?_format=json';
xhr.onreadystatechange = function () {
  if(xhr.readyState === XMLHttpRequest.DONE){
    if(xhr.status === 200){
      initSlider();
    }
  }
};
xhr.open('GET', url);
xhr.responseType='json';
//xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhr.send();

function initSlider() {
  let slider = document.querySelector('.swiper-wrapper');
  let slide = slider.querySelector('.swiper-slide');

  let res = xhr.response;
  console.log(res);
  for(let i = 0; i < res.length; i++) {
    let nSlide = slide.cloneNode(true);
    let a = nSlide.querySelector('a');
    let img = nSlide.querySelector('img');
    let cap = nSlide.querySelector('figcaption');
    a.href = res[i].view_node;
    img.src = res[i].field_image;
    cap.innerText = res[i].title;
    slider.appendChild(nSlide);
  }

  slide.remove();
  initSwiper();
}

function initSwiper() {
  var swiper = new Swiper('#slider', {
    loop: true,
    //autoplay: {
    //    delay: 5000,
    //},

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      hideOnClick: true,
    },
  })
}
