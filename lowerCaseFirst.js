function lowerCaseFirst(str)
{
  var array = str.split(' ');
  var newarray = [];
  var i;
  for(i = 0; i < array.length; i++){
      newarray.push(array[i].charAt(0).toLowerCase()+array[i].slice(1));
  }
  return newarray.join(' ');
}
console.log(lowerCaseFirst("WELCOME TO DIGI360I TECHNOLOGY...!"));
