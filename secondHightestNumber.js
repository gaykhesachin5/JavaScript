function secondHightestNumber(arr)
{
    arr.sort(function(a, b)
        {
            return  a-b;
        });
var arr2=[arr[0]];
var result=[];
for(var i=1;i<arr.length;i++)
{
    if(arr[i-1] !==arr[i])
    {
        arr2.push(arr[i]);
    }
}
console.log("The 2nd hightest number is = "+arr2[arr2.length-2]);
return result.join(',');
}
console.log(secondHightestNumber([1,2,3,4,5,6]));