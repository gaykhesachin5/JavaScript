function upperCase(str)
{
  var array = str.split(' ');
  var newarray = [];
  var i;
  for(i = 0; i < array.length; i++){
      newarray.push(array[i].toUpperCase());
  }
  return newarray.join(' ');
}
console.log(upperCase("welcome to digi360i technology...!"));
