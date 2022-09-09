let info = document.querySelectorAll('.flex-child')
let aboutButton = document.getElementById('me')
let header = document.getElementsByTagName('h1')

console.log('hi')

function displayAbout(){
    return(
        info.forEach(child => {
        if(child.style.display == "none"){
            child.style.display = "block"
            document.getElementById('page-content').style.left = '13.38vw' 
        } else {
              child.style.display = "none"
              document.getElementById('page-content').style.left = '40vw'
        }
    })
    )  
}
//info.forEach(i => i.addEventListener('mouseover',()=> console.log("hi")))

aboutButton.addEventListener('click', displayAbout)