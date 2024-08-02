const number1=document.getElementById('numbers-1')
const number2=document.getElementById('numbers-2')
const number3=document.getElementById('numbers-3')
const number4=document.getElementById('numbers-4')
const number5=document.getElementById('numbers-5')
const number6=document.getElementById('numbers-6')
const number7=document.getElementById('numbers-7')
const number8=document.getElementById('numbers-8')
const number9=document.getElementById('numbers-9')
const number0=document.getElementById('numbers-0')
const dot=document.getElementById('dot')
const equal=document.getElementById('equal-=')
const operationsplus=document.getElementById('operations-+')
const operationsmin=document.getElementById('operations--')
const operationsdiv=document.getElementById('operations-/')
const operationsmul=document.getElementById('operations-X')
const result=document.getElementById('result')

let resetResult=false;

function appendResult(content){
    if(resetResult){
        result.innerHTML="";
        resetResult=false;
    }
    result.innerHTML+=content;
}

number1.addEventListener("click", () => appendResult(1));
number2.addEventListener("click", () => appendResult(2));
number3.addEventListener("click", () => appendResult(3));
number4.addEventListener("click", () => appendResult(4));
number5.addEventListener("click", () => appendResult(5));
number6.addEventListener("click", () => appendResult(6));
number7.addEventListener("click", () => appendResult(7));
number8.addEventListener("click", () => appendResult(8));
number9.addEventListener("click", () => appendResult(9));
number0.addEventListener("click", () => appendResult(0));
operationsplus.addEventListener("click", () => appendResult('+'));
operationsmul.addEventListener("click", () => appendResult('X'));
operationsmin.addEventListener("click", () => appendResult('-'));
operationsdiv.addEventListener("click", () => appendResult('÷'));
dot.addEventListener("click", () => appendResult('.'));

function evaluation(expression) {
    expression = expression.replace(/X/g, '*').replace(/÷/g, '/');
    try {
        return eval(expression);
    } catch (error) {
        return 'Invalid expression';
    }
}


function operatorcheck(){
    let contents=result.innerHTML;
    let evaluatedResult=evaluation(contents);
    result.innerHTML=evaluatedResult;
}
equal.addEventListener("click",()=>{
    operatorcheck();
    resetResult=true;
})

document.addEventListener("keydown",(event)=>{
    if(resetResult){
        result.innerHTML=' ';
        resetResult=false;
    }
})

