const slidesObj =[
    {
        title: "rostov-on-don, admiral",
        city: "Rostov-on-Don<br>LCD admiral",
        apartment: "81 m2",
        time: "3.5 months",
        cost: "Upon request",
        src: "Images/image1.jpg"
    },
    {
        title: "sochi thieves",
        city: "Sochi Thieves",
        apartment: "105 m2",
        time: "4 months",
        cost: "Upon request",
        src: "Images/image2.jpg"
    },
    {
        title: "rostov-on-don patriotic",
        city: "Rostov-on-Don<br>Patriotic",
        apartment: "93 m2",
        time: "3 months",
        cost: "Upon request",
        src: "Images/image3.jpg"
    }
];

//content switches
const leftArrow = document.querySelector('.left_arrow');
const rightArrow = document.querySelector('.right_arrow');
//active page indication
const circles = document.querySelectorAll('.circle');
//page titles and active links
const displayLink = document.querySelectorAll('.display__links');
//page description text
const cityText = document.querySelector('.parameters__city-text_content');
const apartmentText = document.querySelector('.parameters__apartment-text_content');
const timeText = document.querySelector('.parameters__time-text_content');
const costText = document.querySelector('.parameters__cost-text_content');
//page image
const image = document.querySelector('.presentation__display-type_image img');
//active page index
let correctIndex = 0;

//switching indication by index
function switchIndicator(index){
    circles.forEach(circle => circle.classList.remove('circle__active'));
    circles[index].classList.add('circle__active');
}

function switchLinks(index){
    displayLink.forEach(link => link.classList.remove('links__active'));
    displayLink[index].classList.add('links__active');
}

//page refresh
function updateSlide(index){
    if (index < 0 || index >= slidesObj.length) return;
    
    switchIndicator(index);
    switchLinks(index);
    
    const slide = slidesObj[index];
    cityText.innerHTML = slide.city;
    apartmentText.textContent = slide.apartment;
    timeText.textContent = slide.time;
    costText.textContent = slide.cost;
    image.src = slide.src;
}

//link processing
displayLink.forEach((link, index) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        correctIndex = index;
        updateSlide(correctIndex);
    })
})

//processing of arrows
function handleArrowClick(direction) {
    correctIndex = direction === 'prev' 
        ? (correctIndex - 1 + slidesObj.length) % slidesObj.length
        : (correctIndex + 1) % slidesObj.length;
    updateSlide(correctIndex);
}

//left arrow
leftArrow?.addEventListener('click', (e) => {
    e.preventDefault();
    handleArrowClick('prev');
});

//right arrow
rightArrow?.addEventListener('click', (e) => {
    e.preventDefault();
    handleArrowClick('next');
});

//point processing
circles.forEach((circle, index) => {
    circle.addEventListener('click', (e) => {
        e.preventDefault();
        correctIndex = index;
        updateSlide(correctIndex);
    })
})

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Validate all elements exist
    if (!leftArrow || !rightArrow || !circles.length || !displayLink.length || 
        !cityText || !apartmentText || !timeText || !costText || !image) {
        console.error('Some required DOM elements are missing');
        return;
    }
    
    updateSlide(0);
});