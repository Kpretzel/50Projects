const ratings = document.querySelectorAll('.rating')
const ratingsContainer = document.querySelector('.ratings-container')
const sendBtn = document.querySelector('#send')
const panel = document.querySelector('#panel')
let selectedRating = 'Satisfied'

// Simplified function by 'Tijs' Returns undefined

// ratingsContainer.addEventListener('click', (e) => {
//     removeActive();
//     selectedRating = e.target.closest('.rating').dataset.rating;
//     e.target.closest('.rating').classList.add('active');
// });

ratingsContainer.addEventListener('click', (e) => {
    //event bubbling & propagation
    //targets img
    if (e.target.parentNode.classList.contains('rating') && e.target.nextElementSibling) {
        removeActive();
        e.target.parentNode.classList.add('active');
        selectedRating = e.target.nextElementSibling.innerHTML;
    } 
    //targets small
    else if (e.target.parentNode.classList.contains('rating')
        && e.target.previousSibling
        && e.target.previousElementSibling.nodeName === 'IMG') {
        removeActive();
        e.target.parentNode.classList.add('active');
        selectedRating = e.target.innerHTML;
    } 
    //targeting rating div itself
    else if (e.target.classList.contains('rating')
        && e.target.children[1].nodeName === 'SMALL') {
        removeActive();
        e.target.classList.add('active');
        selectedRating = e.target.children[1].innerHTML;
    }
});

sendBtn.addEventListener('click', (e) => {
    panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank You!</strong>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support</p>
    `
})

function removeActive() {
    for(let i = 0; i < ratings.length; i++) {
        ratings[i].classList.remove('active')
    }
}