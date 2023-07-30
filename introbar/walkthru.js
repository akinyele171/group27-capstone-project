// const slider = document.querySelector('.slider');

// const images = document.querySelectorAll('section');

// let counter = 1;
// const intervalTime = 5000;

// function slide() {
//     slide.style.transiton = 'transform 1s ease-in-out';
//     slide.style.transform = `translateX(${-counter * 100}%)`;
//     counter++;

//     if (counter >= images.length) {
//         counter = 0;
//         setTimeout(() => {
//             slider.style.transition = 'none';
//             slider.style.transform = 'translateX(0)';
//         }, 1000)
//     }
// }

// setInterval(slide, intervalTime);


document.addEventListener("DOMContentLoaded",
function () {
    const slider = 
    document.querySelectorAll(".slider");
    const images = 
    slider.querySelectorAll("section");
    let currentIndex = 0;

    function showImage(index) {
        images.forEach((section, i) => {
            if (i === index) {
                section.style.display = "block";
            } else {
                section.style.display = "none";
            }
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    //time interval to change
    const intervalTime = 3000;
    setInterval(nextImage, intervalTime);
});