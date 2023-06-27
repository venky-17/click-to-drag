const slider = document.querySelector('.items')

let isDown = false;

let startX;
let ScrollLeft;


 slider.addEventListener("mousedown", () => {
  isDown = true;
  slider.classList.add('active')
  startX = e.pageX - slider.offsetleft
  ScrollLeft = slider.scrollLeft;
 })

 slider.addEventListener("mouseleave", () => {
  isDown = false
  slider.classList.remove('active')
 })

 slider.addEventListener("mouseup", () => {
    isDown = false
    slider.classList.remove('active')
 })

 slider.addEventListener("mousemove" , () => {
    if(!isDown) return 
     e.preventDefault()
     const x = e.pageX - slider.offsetleft;
     const walk = (x - startX) * 3;
     slider.scrollLeft =  screenLeft - walk;
 })