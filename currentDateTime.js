function currentDateTime(){
    var day=new Date(); 
    var weekday=new Array(7)
    weekday[0]="Sunday";
    weekday[1]="Monday";
    weekday[2]="Tuesday";
    weekday[3]="Wensday";
    weekday[4]="Thusday";
    weekday[5]="Friday";
    weekday[6]="Sataurday";
     
    var h=day.getHours();  
    var m=day.getMinutes();  
    var s=day.getSeconds();  
    
    console.log("Sample Output : Today is : "+weekday[day.getDay()]);
    console.log("Current Time is : "+h+" PM  : "+m+" : "+s);  
    
}
currentDateTime();