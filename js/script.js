function toggleStandards() {
    let menu = document.getElementById("standardsMenu");

    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
        menu.style.flexDirection = "column";
    }
}



// Show button when scroll down
window.onscroll = function () {
    let btn = document.getElementById("backToTop");

    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};



// Smooth scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}



function toggleMore(btn) {
    let card = btn.parentElement;
    let moreText = card.querySelector(".more-text");

    if (moreText.style.display === "block") {
        moreText.style.display = "none";
        btn.innerText = "Read More";
    } else {
        moreText.style.display = "block";
        btn.innerText = "Show Less";
    }
}



// OPEN LIGHTBOX
function openLightbox(img) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
}

// CLOSE LIGHTBOX
function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}


const slider = document.querySelector('.video-slider');

function slideLeft(){
    slider.scrollBy({
        left:-450,
        behavior:'smooth'
    });
}

function slideRight(){
    slider.scrollBy({
        left:450,
        behavior:'smooth'
    });
}