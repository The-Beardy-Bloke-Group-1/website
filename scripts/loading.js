const loading = document.querySelector("#loading")

loading.removeAttribute("hide")

window.addEventListener('load', () => {
    setTimeout(() => {
        loading.setAttribute("hide", "")
    }, 2);

    
})
