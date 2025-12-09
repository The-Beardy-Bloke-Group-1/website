const loading = document.querySelector("#loading")
let loaded = false

loading.removeAttribute("hide")

setTimeout(() => {
    if ( !loaded ) {
        loading.style.color = "white"
    }
}, 1000);

window.addEventListener('load', () => {
    loaded = true
    loading.setAttribute("hide", "")
})
