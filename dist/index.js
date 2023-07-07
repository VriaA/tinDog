import dogs from './data.js'
import Dog from './Dog.js'
import renderLikes from './likes.js'

const dogCntr = document.getElementById('dog-cntr')
const nopeBtn = document.getElementById('nope-btn')
const likeBtn = document.getElementById('like-btn')

const likedDogsArray = []

let dogsArray = dogs.filter(dog=> dog.hasBeenSwiped === false)

let dog = new Dog(dogsArray[0])


//RENDERS DOG TO BE ACCEPTED OR REJECTED WHEN CALLED
function renderDog() {
    dogsArray = dogs.filter(dog=> dog.hasBeenSwiped === false)
    const nextDog = dogsArray[0]

        if(dogsArray.length > 0) {
            nextDog.hasBeenSwiped = true

            dog = new Dog(nextDog)

            dogCntr.innerHTML = dog.getDogHTML()

            dogCntr.style.transition = 'none'
            dogCntr.style.transform = 'rotate(0deg) translateX(0%)'
        } else {
            renderLikes(likedDogsArray)
        }
}

renderDog()

let disableLikeBtn = false
let disableRejectBtn = false

//EVENT LISTENER FOR THE LIKE BUTTON
//LIKES A DOG WHEN THE LIKE BUTTON IS CLICKED
likeBtn.addEventListener('click', () => {
    if (!disableLikeBtn) {
        disableLikeBtn = true
        handleLikeClick()
    }
})

//EVENT LISTENER FOR THE NOPE BUTTON
//REJECTS A DOG WHEN THE NOPE BUTTON IS CLICKED CLICKED
nopeBtn.addEventListener('click', () => {
    if (!disableRejectBtn)  {
        disableRejectBtn = true
        handleNopeClick()
    }
})

//CALLS A FUNCTION THAT EXUCUTES CODES FOR LIKING A DOG WHEN THE LIKE BUTTON IS CLICKED, THEN RENDERS THE NEXT DOG
function handleLikeClick() {
    if(disableLikeBtn) {
        likeDog()
            setTimeout(_=> {
                renderDog()
                disableLikeBtn = false
            }, 1000)
    }
}

//CALLS A FUNCTION THAT EXUCUTES CODES FOR REJECTING A DOG WHEN THE NOPE BUTTON IS CLICKED, THEN RENDERS THE NEXT DOG 
function handleNopeClick() {
    if (disableRejectBtn) {
        rejectDog()
            setTimeout(_=> {
                renderDog()
                disableRejectBtn = false
            }, 1000)
    }   
}

//LETS USERS KNOW THEY LIKED A DOG BY DISPLAYING A "LIKE" BADGE 
//ADDS THE LIKED DOG INTO AN ARRAY USED TO RENDER THE LIKED DOGS LATER WITH CODE IN THE LIKE.JS FILE
function likeDog() {
    const likeBadge = document.getElementById('like-badge')
    likeBadge.style.display = 'inline-block'
    dog.hasBeenLiked = true
    likedDogsArray.push(dog)
}

//LETS USERS KNOW THEY REJECTED A DOG BY DISPLAY A "NOPE" BADGE
function rejectDog() {
    const nopeBadge = document.getElementById('nope-badge')
    nopeBadge.style.display = 'inline-block'
}

/*CHECKS FOR TOUCH OR MOUSE DEVICES TO USE APPROPRIATE EVENT LISTENERS
TO IMPLEMENT THE SWIPE FUNCTIONALITY*/
if ('ontouchstart' in window || navigator.maxTouchPoints) {
    let isWaiting = false
    let touchStartX;
    let touchEndX;

    dogCntr.addEventListener('touchstart', e=>{
        touchStartX = e.changedTouches[0].clientX
    }, { passive: true })
            
    dogCntr.addEventListener('touchend', e=> {
        touchEndX = e.changedTouches[0].clientX

        isWaiting = true
            checkSwipeDirection(isWaiting, touchStartX, touchEndX)
    }, { passive: true })
} else {
    let isDown = false
    let startX;
    let endX;
    let distanceSwiped;
    let isWaiting;
    const threshold = 50
    
    dogCntr.addEventListener('mousedown', e => {
        isDown = true
        isWaiting = false
        startX = e.pageX
    }, {passive: true})
    
    dogCntr.addEventListener('mouseup', e=> {
        isDown = false
    }, {passive: true})
    
    dogCntr.addEventListener('mouseleave', e=> {
        isDown = false
    }, {passive: true})
    
    dogCntr.addEventListener('mousemove', e=> {
        if(!isWaiting && isDown) {
                endX = e.pageX
                distanceSwiped = Math.abs(endX - startX)
    
                    if(distanceSwiped >= threshold) {
                        isWaiting = true
                        checkSwipeDirection(isWaiting, startX, endX)
                    }
        }
    }, {passive: true})
}

//CHECKS IF THE USER SWIPED LEFT OR RIGHT USING X COORDINATES FROM EVENT LISTENRS 
function checkSwipeDirection(waiting, start, end) {
    if(waiting) {
        if(start < end) {
            swipeRight()
        } else if(start > end) {
            swipeLeft()
        } 
        waiting = false
    }
}

//LIKES THE DOG AND ANIMATES THE DOG CARD TO MIMIC BEING SWIPED RIGHT OUT OF THE SCREEN 
function swipeRight() {
    likeDog()
        dogCntr.style.transition = '.5s transform ease-in-out'
        dogCntr.style.transform = 'rotate(20deg) translateX(100%)'
            setTimeout(_=> {
                renderDog()
            }, 600)
}

//REJECTS THE DOG AND ANIMATES THE DOG CARD TO MIMIC BEING SWIPED LEFT OUT OF THE SCREEN 
function swipeLeft() {
    rejectDog()
        dogCntr.style.transition = '.5s transform ease-in-out'
        dogCntr.style.transform = 'rotate(-20deg) translateX(-100%)'
            setTimeout(_=> {
                renderDog()
            }, 600)
}