function stringPalindrome(string){
    var string = string.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
     var count = 0;
     if(string==="") {
         console.log("String Not found!");
         return false;
     }
 
     if ((string.length) % 2 === 0) {
         count = (string.length) / 2;
     }
     else
     {
         if (string.length === 1) {
             console.log("String is a palindrome.");
             return true;
         } 
         else {
             ccount = (string.length - 1) / 2;
         }
     }
     for (var i = 0; i< count; i++) {
         if (string[i] != string.slice(-1-i)[0]) {
             console.log("String is not a palindrome.");
             return false;
         }
     }
     console.log("The given String is a palindrome.");
     return true;
 }
 stringPalindrome('Sachin');
 stringPalindrome('Gaykhe');
 stringPalindrome('Ram');
 