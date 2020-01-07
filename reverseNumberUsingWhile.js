function reverseNumberUsingWhile(number){
    var temp,reminder,reverse=0;
    temp=number;
    console.log("Given Number = "+number);
    while(number>0)
    {
        reminder=number%10;
        number=parseInt(number/10);
        reverse=reverse*10+reminder;
    }
    console.log("Reverse NUmber = "+reverse);
}
reverseNumberUsingWhile(123456);