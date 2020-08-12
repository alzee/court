let xhr = new XMLHttpRequest();
let url = '/court/slider?_format=json';
xhr.onreadystatechange = function () {
  if(xhr.readyState === XMLHttpRequest.DONE){
    if(xhr.status === 200){
		initSlider();
		initSwiper();
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
  //console.log(res);
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
}

function initSwiper() {
  var swiper = new Swiper('#slider', {
    loop: true,
    autoplay: {
        delay: 5000,
    },

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

let tags = document.getElementsByClassName('tags');

for(let i = 0; i < tags.length; i++){
  if(tags[i].innerText.indexOf('重要') !== -1){
    tags[i].previousElementSibling.classList.add('font-weight-bold');
  }
}

let date = document.getElementsByClassName('date');
let now = new Date;
let badge = document.createElement('span');
badge.className = "badge badge-danger new-icon";
badge.innerText = "NEW";
for(let i = 0; i < date.length; i++){
  let then = new Date(date[i].innerText.trim());
  let hours = (now - then) / 3600000;
  console.log(now);
  console.log(then);
  console.log(hours);
  if(hours < 48){
    date[i].parentNode.appendChild(badge.cloneNode(true));
    
  }
}

