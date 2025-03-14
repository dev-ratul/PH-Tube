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
        <button id="btn-${cet.category_id}" onclick="loadId(${cet.category_id})" class="btn btn-sm hover:text-white hover:bg-[#FF1F3D]">${cet.category}</button>
        `
        
        // appenndChild
        categorieContainer.appendChild(createDiv);
        
    }
    
}

loadCategories()

document.getElementById('search-video')
.addEventListener('keyup', (event)=>{
    loadVideo(event.target.value);
    
    
})

// remove active
let removeActive=()=>{
    let callActive= document.getElementsByClassName('active');
    for(let callAc of callActive){
        callAc.classList.remove('active')
    }
    
}


// load ID
let loadId=(id)=>{
    
    let loadId= fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    .then(res=> res.json())
    .then(data=> {
        removeActive()
        let clickedBtn= document.getElementById(`btn-${id}`)
        clickedBtn.classList.add('active')
        videoContain(data.category)
    })
    
}

// video-container

// load-data
const loadVideo=(searchValue = '')=>{
    fetch(`https://openapi.programming-hero.com/api/phero-tube/videos?title=${searchValue}`)
    .then(res=> res.json())
    .then(data=> {
        let btnAll= document.getElementById('btn-all');
        btnAll.classList.add('active')

        videoContain(data.videos) 
    })
}

// video-details
let loadVideoDetails=(video_id)=>{
    let url= fetch(`https://openapi.programming-hero.com/api/phero-tube/video/${video_id}`)
    console.log(video_id);
    

    let detailsVideo= document.getElementById('video-details').showModal();
    // data-container
    let dataContainer= document.getElementById('data_container')


    url .then(res=> res.json())
        .then(data=> {
            // let container= document.createElement('div')
            dataContainer.innerHTML=`
                <h2>Status: ${data.video.others.views}</h2>
                <h2>Status: ${data.video.category_id}</h2>

            `
            dataContainer.append(container);
            console.log(data);
            
        })
        
    
    
}


// conatin
// display-Video
const videoContain=(videos)=>{
    
    
    document.getElementById('videoContainer').innerText="";
    let callVideoContainer= document.getElementById('videoContainer');


    if(videos.length === 0){
        callVideoContainer.innerHTML=`
        <div class="col-span-full flex flex-col items-center justify-center py-20 gap-3">
                <img class="w-[120px]" src="assest/Icon.png" alt="">
                <h1 class="text-2xl font-bold">Oops!! Sorry, There is no content here</h1>
            </div>
        `
        return
    }

   

    
    videos.forEach(video => {
        
        let createDiv= document.createElement('div');
        createDiv.innerHTML=`
        <div class="mx-0">

                <div class="card bg-base-100 ">
                    <figure class="relative">
                        <img
                        class="w-full h-[200px] object-cover"
                        src="${video.thumbnail}"
                        alt="Shoes" />
                        <span class="absolute bottom-2 right-2 bg-black text-white p-1 text-xs">3hrs 56 min ago</span>
                    </figure>
                    <div class="flex gap-5 p-5 px-0">
                        <!-- icon image -->
                        <div>
                            <div class="avatar">
                                <div class="ring-primary ring-offset-base-100 w-6 rounded-full ring ring-offset-2">
                                    <img src="${video.authors[0].profile_picture}" />
                                </div>
                            </div>
                        </div>

                        <div class="">
                            <h2 class="text-lg font-medium">
                                Building a Winning UX Strategy Using the Kano Model
                            </h2>

                            <p class="text-[#17171770] flex items-center gap-2 py-1">
                                ${video.authors[0].profile_name}
                                <span>
                                    ${video.authors[0].verified === true? 
                                        `<img class="w-5" src="https://img.icons8.com/?size=48&id=HxdvwPmtGaQL&format=gif" alt=""></img>`:''}
                                </span>
                            </p>

                            <p class="text-[#17171770]">
                                ${video.others.views}
                            </p>
                        </div>
                    </div>
                </div>
                <button onclick="loadVideoDetails('${video.video_id}')" class="btn btn-block">block</button>
            </div>
        `
        // append child
        callVideoContainer.appendChild(createDiv)
        
        
    });
    

    
}

