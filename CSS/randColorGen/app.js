let btn=document.querySelector("button");

btn.addEventListener("click",function(){
    let h1=document.querySelector("h1");
    let col=randomCol();
    h1.innerText=col;
    btn.nextElementSibling.style.backgroundColor=col;

});

function randomCol(){
    let red=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
     
    return `rgb(${red},${blue},${green})`;
}
