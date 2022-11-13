//interagir avec le packageeeeee

const prompt = require("prompt-sync")();


function ajouter10() {

	//choissir nombreeeeee

    let inputNumber = prompt("Choisir votre nombre : ");

    //transformer la chaine de caractères en nombreeeeee

    let inputToInt = parseInt(inputNumber)

    if(isNaN(inputToInt)){
        console.log("It's not a figure")
        ajouter10()
    }else{
        let maxNumber = inputToInt + 10
        for(let i = 0; inputToInt != maxNumber; i++){
            inputToInt++;
            console.log(inputToInt);
        }
    }
}

ajouter10();

