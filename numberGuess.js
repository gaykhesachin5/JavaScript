function numberGuess(gNum){
    var rNum=Math.floor(Math.random()*10);
    var user={gNum,rNum};
    if(gNum==rNum){
       console.log("The number is "+rNum+" Your Guess is match ");
    }
    else{
        console.log("The number is "+rNum+" Your Guess is not match ");
    }
 }
 numberGuess(5);
 numberGuess(6);
