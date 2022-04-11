const buttonClick = document.querySelector(".class_section_circle_main_button");
const clickSpace = document.querySelector(".class_section_circle_main");
const textOut = document.querySelector(".class_section_result_text");
const funRed = () => (clickSpace.style.backgroundColor = "red");
const funDefoultColor=()=>(clickSpace.style.backgroundColor = "#E5FAFF");
const funGreen = () => (clickSpace.style.backgroundColor = "green");
const funBlocSpace = () => (clickSpace.style.pointerEvents = "none");
const funAutoSpace = () => (clickSpace.style.pointerEvents = "auto");


const btn = () => {
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  }
  let randomNumber = getRandomIntInclusive(1000, 5000);
  let start = Date.now();
  let end;
  let result;
  let n = 2000;
  funBlocSpace ();
  setTimeout(funRed, randomNumber);
  setTimeout(funAutoSpace, randomNumber);

  buttonClick.remove();
  event.stopPropagation();
  

  let changeColorTwo = () => {
    end = Date.now();
    end = end;
    end -= randomNumber;
    
    result = end - start;
    
    textOut.innerHTML = `${result} мс`;
    funDefoultColor();
    funBlocSpace();
    
  };

  clickSpace.addEventListener("click", changeColorTwo);
};

buttonClick.addEventListener("click", btn);
