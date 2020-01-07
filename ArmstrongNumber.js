function ArmstrongNumber(number){
    var temp,reminder,sum=0;
    temp=number;
    while(number>0)
    {
        reminder=number%10;
        sum=sum+(reminder*reminder*reminder);
        number=parseInt(number/10);
        
    }
    if(temp==sum)
    {
        console.log("It is armstrong number");
    }
    else
    {
        console.log("It is not armstrong number");	
    }

}
ArmstrongNumber(153);
ArmstrongNumber(12);
