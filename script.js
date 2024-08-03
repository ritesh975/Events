let Btn1=document.querySelector("#Btn1");

Btn1.onclick=()=>{
    console.log("BTN1 was Clicked");
    let a=25;
    a++;
    console.log(a);//26
};
let box=document.querySelector("div");
dispatchEvent.on=()=>{
    console.log("You are inside Div");
};
Event object
let Btn1=document.querySelector("#Btn1");
Btn1.onclick=(e)=>{
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX,e.clientY);
};


/*
// EventListener
let Btn1=document.querySelector("#Btn1");
Btn1.addEventListener("click",()=>{
    console.log("Button was clicked-handler1")
});Btn1.addEventListener("click",()=>{
    console.log("Button was clicked-handler2")
});
/*
Btn1.addEventListener("click",()=>{
    console.log("Button was clicked-handler3")
});*/
Btn1.addEventListener("click",()=>{
    console.log("Button was clicked-handler4")
});
// handleer 3 ko delete kerna hai to
const handler3=()=>{
    console.log("Button was cliacked-handler3");
};
Btn1.addEventListener("click",handler3);
Btn1.removeEventListener("click",handler3);
*/