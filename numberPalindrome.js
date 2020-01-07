function numberPalindrome(number){
    var temp,reminder,reverse=0;
    temp=number;
    while(number>0)
    {
        reminder=number%10;
        reverse=reverse*10+reminder;
        number=parseInt(number/10);
    }
    if(temp==reverse)
    {
        console.log("Number  is palindrome");
    }
    else
    {
        console.log("Number is not palindrome number");	
    }

}
numberPalindrome(151);
numberPalindrome(1205);