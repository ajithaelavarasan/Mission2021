function calc()
{
    var a=document.getElementById('a').value;
    var b=document.getElementById('b').value;
    if(document.getElementById('add').checked)
    calculate(a,b,add);
    else if(document.getElementById('sub').checked)
    calculate(a,b,sub);
    else if(document.getElementById('mul').checked)
    calculate(a,b,mul);
    else
    calculate(a,b,div);
}
function calculate(i1,i2,ca)
{
    var result =ca(i1,i2);
    document.getElementById("result").innerHTML='<h1>'+result+'</h1>';
    document.getElementById('a').value='';
    document.getElementById('b').value='';
}
function add(i1,i2)
{
    return Number(i1)+Number(i2);
}
function sub(i1,i2)
{
    return Number(i1)-Number(i2)
}
function mul(i1,i2)
{
    return Number(i1)*Number(i2)
}
function div(i1,i2)
{
    return Number(i1)/Number(i2)
}