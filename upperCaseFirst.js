function upperCaseFirst(str)
{
  var array = str.split(' ');
  var newarray = [];
  var i;
  for(i = 0; i < array.length; i++){
      newarray.push(array[i].charAt(0).toUpperCase()+array[i].slice(1));
  }
  return newarray.join(' ');
}
console.log(upperCaseFirst("welcome to digi360i technology...!"));
