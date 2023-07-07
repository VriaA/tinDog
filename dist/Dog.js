//CREATES AN OBJECT FOR A DOG USING A CONSTRUCTOR
//THE NEW OBJECT CONTAINS A METHOD FOR RENDERING THE DOG IN THE DOM
class Dog {
    constructor(data) {
        Object.assign(this, data)
    }
    
    getDogHTML() {
        const {avatar, alt, name, age, bio} = this
     return    `<div class="w-full h-full">
                    <img class="w-full h-full object-fill rounded-xl shadow-gray-900" src="${avatar}" alt="${alt}">
                    <img id="like-badge" class="hidden absolute top-10 left-6 w-36 rotate-[-40deg] object-contain" src="images/badge-like.png" alt="Like badge">
                    <img id="nope-badge" class="hidden absolute top-10 left-6 w-36 rotate-[-40deg] object-contain" src="images/badge-nope.png" alt="Nope badge">
                    <div class="absolute bottom-4 left-6 pr-4 text-white tracking-wider">
                        <p class="font-medium text-3xl drop-shadow-dogText">${name}, ${age}</p>
                        <p class="font-thin text-xl break-words drop-shadow-dogText">${bio}</p>
                    </div>
                </div>`
    }
}

export default Dog