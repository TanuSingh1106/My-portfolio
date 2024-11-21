window.addEventListener("DOMContentLoaded",()=>{
setTimeout(()=>{
  let window=document.querySelector(".window")
  window.style.display="block" 
},1000);
});

let a=document.querySelector(".cross")
a.addEventListener("click",()=>{
    let window=document.querySelector(".window")
    window.style.display="none";

})
const menuIcon = document.querySelector('.menu i');
const headings = document.querySelector('.headings');
menuIcon.addEventListener('click', () => {
  headings.classList.toggle('active');
});
document.querySelectorAll('.headings a').forEach(anchor => {
  anchor.addEventListener('click', () => {
    headings.classList.remove('active');
  });
});