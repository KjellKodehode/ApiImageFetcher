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

// scroll to top button
const scrollTop = function() {
    const scrollBtn = document.createElement("button");
    scrollBtn.innerHTML ="🔝";
    scrollBtn.setAttribute("id", "scroll-btn");
    scrollBtn.setAttribute("title", "Scroll to Top")
    document.body.appendChild(scrollBtn);
    
    const scrollBtnDisplay = function() {
        window.scrollY > window.innerHeight
        ? scrollBtn.classList.add("show")
        : scrollBtn.classList.remove("show");
    }
    window.addEventListener("scroll", scrollBtnDisplay)

    const scrollWindow = function() {
        if(window.scrollY !=0) {
            setTimeout(function() {
                window.scrollTo(0, window.scrollY - 50);
                scrollWindow()
            }, 10);
        }
    }
    scrollBtn.addEventListener("click", scrollWindow)
};
scrollTop();
