const loading = document.querySelector("#loading")
const loading_text = loading.querySelector("p")
let loaded = false

loading.removeAttribute("hide")

setTimeout(() => {
    if ( !loaded ) {
        loading_text.style.opacity = "0"
    }
}, 1000);

window.addEventListener('load', () => {
    loaded = true
    loading.setAttribute("hide", "")
})
