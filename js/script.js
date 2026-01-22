//Seleção
const frm = document.querySelector("form");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.querySelector("#btn-2");
const btn3 = document.querySelector("#btn-3");
const btn4 = document.querySelector("#btn-4");
const btn5 = document.querySelector("#btn-5");
const resp = document.querySelector("#resp");
const resp2 = document.querySelector("#resp2");
const thanks = document.querySelector("#Thanks");
const avaliation = document.querySelector("#Avaliation")

//verificação
let respValue = undefined;

btn1.addEventListener("click", () => {
    btn5.style.background = "hsl(217, 12%, 63%, 0.1)";
    btn5.style.color = "hsl(217, 12%, 63%)";
    btn4.style.background = "hsl(217, 12%, 63%, 0.1)";
    btn4.style.color = "hsl(217, 12%, 63%)";
    btn3.style.background = "hsl(217, 12%, 63%, 0.1)";
    btn3.style.color = "hsl(217, 12%, 63%)";
    btn2.style.background = "hsl(217, 12%, 63%, 0.1)";
    btn2.style.color = "hsl(217, 12%, 63%)";
    btn1.style.background = "hsl(0, 100%, 100%)";
    btn1.style.color = "hsl(216, 12%, 8%)";
    resp.innerText = "1";
    respValue = 1
})

btn2.addEventListener("click", () => {
    btn5.style.background = "hsl(217, 12%, 63%, 0.1)";
    btn5.style.color = "hsl(217, 12%, 63%)";
    btn4.style.background = "hsl(217, 12%, 63%, 0.1)";
    btn4.style.color = "hsl(217, 12%, 63%)";
    btn3.style.background = "hsl(217, 12%, 63%, 0.1)";
    btn3.style.color = "hsl(217, 12%, 63%)";
    btn2.style.background = "hsl(0, 100%, 100%)";
    btn2.style.color = "hsl(216, 12%, 8%)";
    btn1.style.background = "hsl(217, 12%, 63%, 0.1)";
    btn1.style.color = "hsl(217, 12%, 63%)";
    resp.innerText = "2";
    respValue = 1
})

btn3.addEventListener("click", () => {
    btn5.style.background = "hsl(217, 12%, 63%, 0.1)";
    btn5.style.color = "hsl(217, 12%, 63%)";
    btn4.style.background = "hsl(217, 12%, 63%, 0.1)";
    btn4.style.color = "hsl(217, 12%, 63%)";
    btn3.style.background = "hsl(0, 100%, 100%)";
    btn3.style.color = "hsl(216, 12%, 8%)";
    btn2.style.background = "hsl(217, 12%, 63%, 0.1)";
    btn2.style.color = "hsl(217, 12%, 63%)";
    btn1.style.background = "hsl(217, 12%, 63%, 0.1)";
    btn1.style.color = "hsl(217, 12%, 63%)";
    resp.innerText = "3";
    respValue = 1
})

btn4.addEventListener("click", () => {
    btn5.style.background = "hsl(217, 12%, 63%, 0.1)";
    btn5.style.color = "hsl(217, 12%, 63%)";
    btn4.style.background = "hsl(0, 100%, 100%)";
    btn4.style.color = "hsl(216, 12%, 8%)";
    btn3.style.background = "hsl(217, 12%, 63%, 0.1)";
    btn3.style.color = "hsl(217, 12%, 63%)";
    btn2.style.background = "hsl(217, 12%, 63%, 0.1)";
    btn2.style.color = "hsl(217, 12%, 63%)";
    btn1.style.background = "hsl(217, 12%, 63%, 0.1)";
    btn1.style.color = "hsl(217, 12%, 63%)";
    resp.innerText = "4";
    respValue = 1    
})

btn5.addEventListener("click", () => {
    btn5.style.background = "hsl(0, 100%, 100%)";
    btn5.style.color = "hsl(216, 12%, 8%)";
    btn4.style.background = "hsl(217, 12%, 63%, 0.1)";
    btn4.style.color = "hsl(217, 12%, 63%)";
    btn3.style.background = "hsl(217, 12%, 63%, 0.1)";
    btn3.style.color = "hsl(217, 12%, 63%)";
    btn2.style.background = "hsl(217, 12%, 63%, 0.1)";
    btn2.style.color = "hsl(217, 12%, 63%)";
    btn1.style.background = "hsl(217, 12%, 63%, 0.1)";
    btn1.style.color = "hsl(217, 12%, 63%)";
    resp.innerText = "5";
    respValue = 1
})

//double click
btn1.addEventListener("dblclick", () => {
    btn1.style.background = "hsl(217, 12%, 63%, 0.1)";
    btn1.style.color = "hsl(217, 12%, 63%)";
    respValue = undefined
})

btn2.addEventListener("dblclick", () => {
    btn2.style.background = "hsl(217, 12%, 63%, 0.1)";
    btn2.style.color = "hsl(217, 12%, 63%)";
    btn1.style.background = "hsl(217, 12%, 63%, 0.1)";
    btn1.style.color = "hsl(217, 12%, 63%)";
    respValue = undefined
})

btn3.addEventListener("dblclick", () => {
    btn3.style.background = "hsl(217, 12%, 63%, 0.1)";
    btn3.style.color = "hsl(217, 12%, 63%)";
    btn2.style.background = "hsl(217, 12%, 63%, 0.1)";
    btn2.style.color = "hsl(217, 12%, 63%)";
    btn1.style.background = "hsl(217, 12%, 63%, 0.1)";
    btn1.style.color = "hsl(217, 12%, 63%)";
    respValue = undefined
})

btn4.addEventListener("dblclick", () => {
    btn4.style.background = "hsl(217, 12%, 63%, 0.1)";
    btn4.style.color = "hsl(217, 12%, 63%)";
    btn3.style.background = "hsl(217, 12%, 63%, 0.1)";
    btn3.style.color = "hsl(217, 12%, 63%)";
    btn2.style.background = "hsl(217, 12%, 63%, 0.1)";
    btn2.style.color = "hsl(217, 12%, 63%)";
    btn1.style.background = "hsl(217, 12%, 63%, 0.1)";
    btn1.style.color = "hsl(217, 12%, 63%)";
    respValue = undefined
})

btn5.addEventListener("dblclick", () => {
    btn5.style.background = "hsl(217, 12%, 63%, 0.1)";
    btn5.style.color = "hsl(217, 12%, 63%)";
    btn4.style.background = "hsl(217, 12%, 63%, 0.1)";
    btn4.style.color = "hsl(217, 12%, 63%)";
    btn3.style.background = "hsl(217, 12%, 63%, 0.1)";
    btn3.style.color = "hsl(217, 12%, 63%)";
    btn2.style.background = "hsl(217, 12%, 63%, 0.1)";
    btn2.style.color = "hsl(217, 12%, 63%)";
    btn1.style.background = "hsl(217, 12%, 63%, 0.1)";
    btn1.style.color = "hsl(217, 12%, 63%)";
    respValue = undefined
})

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (respValue == undefined){
        resp2.innerText = "Please, we need your avaliation!"; 
    } else{
        thanks.style.display = "flex"
        avaliation.style.display = "none"
    }
})

/*
¯\_( ͡° ͜ʖ ͡°)_/¯
*/