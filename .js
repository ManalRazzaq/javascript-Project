const contEl = document.querySelector(".container");

const profession = ["Web Des" , "Student" , "Freelancer" , "youtuber" , "Content Creator" , "Instructor"];
let proffesionIndex  = 0;
let character = 0;

const updatetext =()=>{
    character++;
    contEl.innerHTML = `<h1>I am ${profession[proffesionIndex].slice(0,1) === "I" ? "an"  : "a"} ${profession[proffesionIndex].slice(0,character)}</h1>`;
   
    if(character === profession[proffesionIndex].length){
        proffesionIndex++; 
        character = 0;
    }
    if(proffesionIndex === profession.length){
        proffesionIndex = 0;
    }
    setTimeout(updatetext,400);
}

updatetext();
