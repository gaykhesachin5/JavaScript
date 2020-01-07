function random_Id_Generation(j){
    var text="";
    var char_list="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for(var i=0;i<j;i++)
    {
        text +=char_list.charAt(Math.floor(Math.random() * char_list.length));
    }
    return text;
}
console.log("Random Id = "+random_Id_Generation(8));