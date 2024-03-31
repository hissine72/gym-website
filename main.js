
let screen = document.querySelector(".screen")
let screen2 = document.querySelector(".screen2")
let screen3 = document.querySelector(".screen3")
let screen4 = document.querySelector(".screen4")
let screen5 = document.querySelector(".screen5")
let screen6 = document.querySelector(".screen6")

let elelment = document .querySelector(".landing .images img")


screen.onclick = function(){
    elelment = document.querySelector(".landing .images img").style.backgroundImage = "url(../images/screenshot-2.png)"; 

}

screen2.onclick = function(){
    elelment = document.querySelector(".landing .images img").style.backgroundImage = "url(../images/screenshot-3.png)"; 

}
screen3.onclick = function(){
    elelment = document.querySelector(".landing .images img").style.backgroundImage = "url(../images/screenshot-4.png)"; 

}
screen4.onclick = function(){
    elelment = document.querySelector(".landing .images img").style.backgroundImage = "url(../images/screenshot-5.png)"; 
}
screen5.onclick = function(){
    elelment = document.querySelector(".landing .images img").style.backgroundImage = "url(../images/screenshot-1.png)"; 

}
let btn = document.querySelector(".screenshot .btn")
btn.onclick = function(){
    console.log("hjk")
}
let el = document.querySelector(".screenshot .images img")
console.log(el)

let scr =document.querySelector(".screenshot .scr")
scr.onclick = function(){
    el = document.querySelector(".screenshot .images img").style.backgroundImage = "url(../images/screenshot-2.png)";

}
let scr2 =document.querySelector(".screenshot .scr2")
scr2.onclick = function(){
    el = document.querySelector(".screenshot .images img").style.backgroundImage = "url(../images/screenshot-3.png)";

 }
let scr3 =document.querySelector(".screenshot .scr3")
scr3.onclick = function(){
    el = document.querySelector(".screenshot .images img").style.backgroundImage = "url(../images/screenshot-4.png)";

}
let scr4 =document.querySelector(".screenshot .scr4")
scr4.onclick = function(){
    el = document.querySelector(".screenshot .images img").style.backgroundImage = "url(../images/screenshot-5.png)";

}
let scr5 =document.querySelector(".screenshot .scr5")
scr5.onclick = function(){
    el = document.querySelector(".screenshot .images img").style.backgroundImage = "url(../images/screenshot-1.png)";

}
