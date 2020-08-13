function getSlides() {
  let xhr = new XMLHttpRequest();
  let url = '/court/slider?_format=json';
  xhr.onreadystatechange = function () {
    if(xhr.readyState === XMLHttpRequest.DONE){
      if(xhr.status === 200){
  		initSlides();
      }
    }
  };
  xhr.open('GET', url);
  xhr.responseType='json';
  //xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.send();
}

function initSlides() {
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

getSlides();
