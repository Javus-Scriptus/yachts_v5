let loader = document.querySelector('.loader')
window.addEventListener('load', () => {
    loader.classList.add('hide')
    setTimeout(() => {
        MediaKeySession.remove()
    }, 600)
})