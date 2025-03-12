// nav-category

const loadCategories=()=>{
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then(res=> res.json())
        .then(data=>displayCategories(data.categories))
}

let displayCategories=(categories)=>{
    let categorieContainer= document.getElementById('categoriesContainer');

    // loop
    for(let cet of categories){
        let createDiv= document.createElement('div')
        createDiv.innerHTML= `
        <button class="btn btn-sm hover:text-white hover:bg-[#FF1F3D]">${cet.category}</button>
        `
        // appenndChild
        categorieContainer.appendChild(createDiv);;
        
    }
    
}

loadCategories()

// video-container

// load-data
const loadVideo=()=>{
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then(res=> res.json())
    .then(data=> videoContain(data.videos))
}
// conatin
const videoContain=(videos)=>{
    let callVideoContainer= document.getElementById('videoContainer');

    videos.forEach(video => {
        console.log(video);
        
        let createDiv= document.createElement('div');
        createDiv.innerHTML=`
        <div class="card bg-base-100  shadow-sm">
        <figure>
            <img
            src="${video.thumbnail}"
            alt="Shoes" />
        </figure>
        <div class="card-body">
            <h2 class="card-title">${video.title}</h2>
            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
            <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>
        </div>
        `
        // append child
        callVideoContainer.appendChild(createDiv)
        
        
    });
    

    
}
loadVideo()
