function prime(number){
    var i,flag=0;
    if(number == 0 || number ==1)
    {
        console.log("The number "+ number +" is not Prime");
    }
    else{
        for(i=2;i<=number/2;i++)
        {
            if(number%i==0){
                console.log("The number "+number +" is not Prime");
                flag=1;
                break;
            }
        }
        if(flag==0)
        {
            console.log("The number "+ number +"  is prime");
        }
    }
    
}
prime(0);
prime(1);
prime(4);
prime(5);