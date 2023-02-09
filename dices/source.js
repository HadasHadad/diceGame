let counter = 0;

function magic() {

    let leftDice = Math.floor((Math.random() * 6) + 1);
    let rightDice = Math.floor((Math.random() * 6) + 1);
   
    const leftDicePic = document.getElementById("dice1");
    const rightDicePic = document.getElementById("dice2");
   
    let leftDicePath = "/dices/" + leftDice + ".jpg";
    leftDicePic.src = leftDicePath;
   
    let rightDicePath = "/dices/" + rightDice + ".jpg";
    rightDicePic.src = rightDicePath;

    if (leftDice == rightDice) {

        counter = counter + 1;
        document.getElementById("counter").innerHTML = counter + " :כמות הפעמים שיצא לך דאבל"
    }
    
    if (leftDice == "6" && rightDice == "6") {

        document.getElementById("result").innerHTML= "סחתיק יצא לך שש שש";
    }
    else {

        document.getElementById("result").innerHTML = "";
    }

}


