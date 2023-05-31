const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

const images = document.querySelectorAll('.gallery-img')
images.forEach(image => {
    image.addEventListener('click', e => {
        lightbox.classList.add('active')
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild)
        }
        lightbox.innerHTML = `<div class="image-wrapper">
                                <img src="../assets/Icons/close.svg" onclick="document.querySelector('#lightbox').classList.remove('active')" class="img-close" alt="">
                                <img src="${image.src}" alt="">
                            </div>
                            </div>`
    })
})

lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return
    lightbox.classList.remove('active')
    close.classList.remove('active')
})

let showMoreBtn = document.querySelector('#showmore');
let cta = document.querySelector('.gallery-cta');
let currentItem = 6;

showMoreBtn.onclick = () =>{
let imgs = [...document.querySelectorAll('.gallery-section .images-container .gallery-img')];
    for (var i = currentItem; i < currentItem + 6; i++){
       imgs[i].style.display = 'inline-block';
      
    }
    currentItem += 6;

    if(currentItem >= imgs.length){
       showMoreBtn.style.display = 'none';
       cta.classList.add('active')
    }
 }