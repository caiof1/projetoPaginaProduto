let idx = 0
const imagens = document.getElementById('imagens')
const img = document.querySelectorAll('#imagens img')
    
function Slider(number) {
    if(number == '1' && idx > 0) {
        idx--
        imagens.style.transform = `translateX(${-idx * 100}%)`
    } else if(number == '2' && idx < img.length - 1) {
        idx++
        imagens.style.transform = `translateX(${-idx * 100}%)`
    }
}