
//RENDERS LIKED DOGS WHEN CALLED
function renderLikes(likedDogs) {
    let likedDogHTML = ''
    if(likedDogs.length > 0) {
        likedDogs.forEach(dog=>{
            likedDogHTML += `<div class="relative w-full md:w-52 h-[60vh] md:h-52 md:mx-0">
                                    <div class="w-full h-full">
                                        <img class="w-full h-full object-fill rounded-xl shadow-gray-900" src="${dog.avatar}" alt="${dog.alt}">
                                        <i class="absolute top-4 right-6 text-rose-600 text-5xl fa-solid fa-heart animate-pulse"></i>
                                            <div class="absolute bottom-4 left-6 pr-4 text-white tracking-wider">
                                                <p class="font-medium text-4xl drop-shadow-dogText">${dog.name}, ${dog.age}</p>
                                            </div>
                                    </div>
                            </div>`
        })
    } else {
        likedDogHTML =  `<div class="absolute inset-0 w-screen my-auto h-fit flex flex-col justify-center items-center">
                            <p class="text-2xl">You have 0 likes</p>
                            <i class="mt-2 text-6xl fa-solid fa-heart-crack drop-shadow-2xl"></i>
                        </div>`
    }
    document.body.style.overflow = 'scroll'
    document.getElementById('main').innerHTML =  `<section class="w-full text-center text-white">          
                                    <h2 class="mt-4 mb-6 font-quicksand text-3xl font-bold uppercase drop-shadow-dogText animate-welcomePing">Your Likes</h2>
                                    <div class="flex flex-col w-full gap-4 flex-wrap px-2 pb-4 md:flex-row justify-center items-center">
                                        ${likedDogHTML}
                                    </div>
                                </section>`
    document.getElementById('home-icon').innerHTML = `<div class="px-8 py-2 bg-white text-rose-600 hover:text-[#633666] text-2xl
                                                         shadow-sm shadow-slate-600 rounded-full"><i class="fa-solid fa-house cursor-pointer"></i></div>`
}

export default renderLikes