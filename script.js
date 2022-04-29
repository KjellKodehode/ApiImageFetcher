// get images clicking button
document.getElementById("btn-get").addEventListener("click", fetchImg) 

// get images clicking "Enter" key 
addEventListener("keydown", (e)=> {
    if(e.key !== "Enter") return
    fetchImg()
})

// create images
function fetchImg(){
    fetch(`https://picsum.photos/${inputX.value}/${inputY.value}`)
    .then(imgRes => {
        const img = document.createElement ("img")
        img.src = imgRes.url
        document.body.append(img)
    })
}

// refresh page
document.getElementById("btn-clr").addEventListener("click", ()=>{
    window.location.reload()
    console.log("refresh")
})
