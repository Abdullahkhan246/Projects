let num = Math.floor(Math.random() * 100);
alert(num);
let chances = 0;
while (true) {
let userGuess = prompt("Please enter the number between 1 to 100");
    if (isNaN(userGuess) || userGuess.trim()=== ""){
        alert("please enter the correct number");
        continue;
    }

     userGuess = Number(userGuess);
     chances++;

    if (userGuess<1 || userGuess>100){
        alert("please enter the number in range");
        continue;
    }
   
if (userGuess>num){
    alert("your number is greater than acutal number");
    continue;

}
else if(userGuess<num) {
    alert("your number is less than the actual num");
    continue;
}
else{
    alert("you guess the correct number " + num + "\n in the chances: " + chances);
   
}
 break;
}




