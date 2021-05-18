function adicionar()
{
var itemNumber = parseInt(event.target.id);
var price = event.target.value;
var subButton = document.getElementsByClassName("subButton")[itemNumber];
var totalPrice = document.querySelector(".result").textContent;
var totalPrice = parseFloat(price) + parseFloat(totalPrice);
document.querySelector(".result").innerHTML = parseFloat(totalPrice).toPrecision(3);
var number = document.getElementsByClassName("number")[itemNumber].textContent;
var number = ++number;
document.getElementsByClassName("number")[itemNumber].innerHTML = parseFloat(number);
if(number >=0)
{
    subButton.disabled = false;
    subButton.style.color = "rgb(245,170,3)"
}
}
function retirar()
{
var price = event.target.value;
var totalPrice = document.querySelector(".result").textContent;
var totalPrice =parseFloat(totalPrice) - parseFloat(price);
document.querySelector(".result").innerHTML = parseFloat(totalPrice);
}
function mais()
{
adicionar();
}
function menos()
{
var itemNumber = parseInt(event.target.id);
var number = document.getElementsByClassName("number")[itemNumber].textContent;
var subButton = document.getElementsByClassName("subButton")[itemNumber] 
if(number >0)
{
    var number = --number;
    document.getElementsByClassName("number")[itemNumber].innerHTML = parseInt(number);
}
if(number <=0)
{
    subButton.style.color = "rgb(202, 202, 202)";
    subButton.disabled = true;
}
}