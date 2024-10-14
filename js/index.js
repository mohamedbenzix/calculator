/* ----------------------------------- *\
           VARIABLES DICLARITION
\* ----------------------------------- */

let keys = document.querySelectorAll(".btn");
let display = document.getElementById("display");
let resChange = document.getElementById("res");
let btnChangeKeys = document.getElementById("changeKeys");
let keysBox = document.querySelector(".keys");
let toggle = document.getElementById("switch");
let mode = "dark";



keysBox.style.left = "0px";

/* ----------------------------------- *\
                 KEYS
\* ----------------------------------- */

keys.forEach((key) => {
  
  key.onclick = (e) => {
    
    switch(e.target.innerHTML){
      
      case "AC":
        clear();
        break;
        
      case "DE":
        delet();
        break;
        
      case "=":
        calc();
        break;
      
      case "!":
        resChange.value = "";
        factorial();
        break;
        
      case "cos":
        resChange.value = "";
        cose();
        break;
        
      case "sin":
        resChange.value = "";
        sine();
        break;
        
      case "tan":
        resChange.value = "";
        tane();
        break;
        
      case "cos<sup>-1</sup>":
        resChange.value = "";
        display.value = Math.acos(eval(display.value))*180/Math.PI;
        break;
        
      case "sin<sup>-1</sup>":
        resChange.value = "";
        display.value = Math.asin(eval(display.value))*180/Math.PI;
        break;
        
      case "tan<sup>-1</sup>":
        resChange.value = "";
        display.value = Math.atan(eval(display.value))*180/Math.PI;
        break;
        
      case "π":
        display.value += Math.PI
        break;
        
      case "e":
        display.value += Math.E;
        break;
        
      case "e<sup>x</sup>":
        resChange.value = "";
        display.value = Math.E ** eval(display.value);
        break;
      
      case "x<sup>2</sup>":
        resChange.value = "";
        display.value *= display.value;
        break;
        
      case "x<sup>3</sup>":
        resChange.value = "";
        display.value *= display.value**2;
        break;
        
      case "x<sup>-1</sup>":
        resChange.value = "";
        display.value = display.value ** (-1);
        break;
        
      case "√":
        resChange.value = "";
        display.value = Math.sqrt(display.value);
        break;
        
      case "ln":
        resChange.value = "";
        display.value = Math.log(eval(display.value));
        break;
        
      case "log":
        resChange.value = "";
        display.value = Math.log10(eval(display.value));
        break;
      
      default:
        addKey(e.target.innerText);
      
    }
    
  }
  
})


/* ----------------------------------- *\
             MAIN FUNCTIONS
\* ----------------------------------- */
// CALC
function calc(){
  
  let inp = display.value
  .replace(/×/g, "*")
  .replace(/÷/g, "/")
  .replace(/%/g, "/100 ")
  .replace(/--/g, "+")
  .replaceAll("^", "**");
  
  resChange.value = "";
  
  try{
    display.value = eval(inp);
  }
  catch{
    display.value = "Error";
  }
  
  
}

// ADDKEY
function addKey(key){
  
  display.value += key;
  try{
    resChange.value = eval(display.value.replace(/×/g, "*")
      .replace(/÷/g, "/")
      .replace(/%/g, "/100 ")
      .replace(/--/g, "+")
      .replaceAll("^", "**"));
  }catch{
    null;
  }
  
  
}

// CLEAR
function clear(){
  display.value = "";
  resChange.value = "";
}

function delet(){
  display.value = display.value.slice(0, -1);
  resChange.value = eval(display.value);
}

function factorial(){
  let f = 1;
  for(let i=+eval(display.value);i>0;i--) f *= i;
  display.value = f;
}

function cose(){
  display.value = Math.cos(+eval(display.value)*(Math.PI/180));
}

function sine(){
  display.value = Math.sin(eval(display.value)*Math.PI/180);
}

function tane(){
  display.value = Math.tan(eval(display.value)*Math.PI/180);
}


/* ----------------------------------- *\
               CHANGE KEYS
\* ----------------------------------- */

btnChangeKeys.onclick = () => {
  
  if(parseInt(getComputedStyle(keysBox).getPropertyValue("left")) === 0){
    
    
    keysBox.style.left = "-275px";
    btnChangeKeys.innerText = ">";
    
  }else{
    
    keysBox.style.left = "0px";
    btnChangeKeys.innerText = "<";
    
  }
  
}


/* ----------------------------------- *\
              TOGGLE MODE
\* ----------------------------------- */

let changeMode = () => {
  
  if(mode==="dark"){
    mode = "light";
    document.documentElement.classList.add("light");
  }
  
  else{
    mode = "dark";
    document.documentElement.classList.remove("light");
  }
  
}


/* ----------------------------------- *\
              RESULT CHANGES
\* ----------------------------------- */


display.onchange = () => {
  
  resChange.value = eval(display.value);
  
}