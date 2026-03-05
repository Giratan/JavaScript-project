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
const circle = document.querySelector('.circle');
//page titles and active links
const displayLink = document.querySelectorAll('.display__links');
//page description text
const cityText = document.querySelectorAll('.parameters__city-text_content');
const apartmentText = document.querySelectorAll('.parameters__apartment-text_content');
const timeText = document.querySelectorAll('.parameters__time-text_content');
const costText = document.querySelectorAll('.parameters__cost-text_content');
//page image
const image = document.querySelector('.presentation__display-type_image img');
//active page index
let correctIndex = 0;

//switching indication by index
function switchIndicator(index){
    circle.forEach(circle => circle.classList.remove('circle__active'));
    circle[index].classList.add('circle__active');
}

//switching the active status of links
function switchLinks(index){
    displayLink.forEach(link => link.classList.remove('links__active'));
    displayLink[index].classList.add('links__active');
}

//page refresh
function updateSlide(index){
    switchIndicator(index);
    switchLinks(index);
    cityText[index].textContent = slidesObj[index].city;
    apartmentText[index].textContent = slidesObj[index].apartment;
    timeText[index].textContent = slidesObj[index].time;
    costText[index].textContent = slidesObj[index].cost;
    image.src = slidesObj[index].src;
}

//link processing
displayLink.forEach((link, index) => {
    link.addEventListener('click', () => {
        correctIndex = index;
        updateSlide(correctIndex);
    })
})
//processing of arrows
//left arrow
leftArrow.addEventListener('click', () => {
    correctIndex = (correctIndex - 1 + slidesObj.length) % slidesObj.length;
    updateSlide(correctIndex);
});

//right arrow
rightArrow.addEventListener('click', () => {
    correctIndex = (correctIndex + 1) % slidesObj.length;
    updateSlide(correctIndex);
});

//point processing
circle.forEach((circle, index) => {
    circle.addEventListener('click', () => {
        correctIndex = index;
        updateSlide(correctIndex);
    })
})

updateSlide(0);