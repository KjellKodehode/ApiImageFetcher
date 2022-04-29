// create images
document.getElementById("btn-get").addEventListener("click", ()=>{
    fetch(`https://picsum.photos/${inputX.value}/${inputY.value}`)
    .then(imgRes => {
        const img = document.createElement ("img")
        img.src = imgRes.url
        document.body.append(img)
    })
})

// refresh page
document.getElementById("btn-clr").addEventListener("click", ()=>{
    window.location.reload()
})