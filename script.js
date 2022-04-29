// create images
document.getElementById("btn-get").addEventListener("click", ()=>{
    console.log("button click")
    fetch(`https://picsum.photos/${inputX.value}/${inputY.value}`)
    .then(imgRes => {
        const img = document.createElement ("img")
        img.src = imgRes.url
        document.body.append(img)
    })
})

// clear input fields
document.getElementById("btn-clr").addEventListener("click", ()=>{
    window.location.reload()
})