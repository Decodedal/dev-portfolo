let info = document.querySelectorAll('.flex-child');
let aboutButton = document.getElementById('me');
let header = document.getElementsByTagName('h1');
let closeAbout = document.getElementById('closeAbout');



aboutButton.addEventListener("click", ()=>{
    info.forEach(child => {

        child.style.display = "block"
        document.getElementById('page-content').style.left = '13.38vw' 
         
    })
})

closeAbout.addEventListener("click",()=>{

    info.forEach(child =>{

        child.style.display = "none"
        document.getElementById('page-content').style.left = '40vw'

    })
})

