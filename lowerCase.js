function lowerCase(str)
{
  var array = str.split(' ');
  var newarray = [];
  var i;
  for(i = 0; i < array.length; i++){
      newarray.push(array[i].toLowerCase());
  }
  return newarray.join(' ');
}
console.log(lowerCase("WELCOME TO DIGI360I TECHNOLOGY...!"));
