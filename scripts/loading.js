const loading = document.querySelector("#loading")

function sizeHero(){
    const h = document.querySelector('header').offsetHeight
    document.querySelector('.hero').style.height = `calc(100vh - ${h}px)`
}

window.addEventListener('load', () => {
    setTimeout(() => {
        loading.setAttribute("hide", "")
    }, 2);

    sizeHero()
})

window.addEventListener('resize', sizeHero)