function feetToMile(feet)
{
  var  mile=feet*0.00018
    return mile;
}
var feet=feetToMile(5);
console.log(feet)

//wood;
function woodCalculator(n)
{
    var chair=n*1;
    var table=n*3;
    var bed=n*5;
    console.log(chair,bed,table)
}
woodCalculator(5)

//brick
function brickCalculator(floor)
{
    if(floor>=1&&floor<=10)
{
    console.log(floor*15*1000)
}
 else if(floor>=11&&floor<=20)
 {
    console.log(15*10*1000+floor*12*1000)
 }
 else{
     console.log(15*10*1000+12*10*1000+floor*10*1000)
 }
}
var floor=brickCalculator(17)

//tiny
function tinyFriend()
{
    var tiny;
    for(var i=0;i<array.length;i++)
    {
        if(array[i+1]<array[i])
        {
            tiny=array[i];
        }
    }
    console.log(tiny);
}
var array=['shathi',"fahim",'zitu','kona','mamun']
tinyFriend(); 
 