function adicionar()
{
    var a = document.querySelector(".linktest").href = "https://api.whatsapp.com/send?phone=5534996814576&text=Olá, poderia me enviar o cardapio por favor?";
console.log(a);

var itemNumber = parseInt(event.target.id);
var price = event.target.value;
var subButton = document.getElementsByClassName("subButton")[itemNumber];
var totalPrice = document.querySelector(".result").textContent;
var totalPrice = parseFloat(price) + parseFloat(totalPrice);
if (parseFloat(totalPrice) < 10)
{
    document.querySelector(".result").innerHTML = parseFloat(totalPrice).toPrecision(3);
    document.querySelector(".resultList").innerHTML = parseFloat(totalPrice).toPrecision(3);
}
if (parseFloat(totalPrice) >= 10)
{
    document.querySelector(".result").innerHTML = parseFloat(totalPrice).toPrecision(4);
    document.querySelector(".resultList").innerHTML = parseFloat(totalPrice).toPrecision(4);
}
if (totalPrice > 100)
{
    document.querySelector(".result").innerHTML = parseFloat(totalPrice).toPrecision(5);
    document.querySelector(".resultList").innerHTML = parseFloat(totalPrice).toPrecision(5);
}
var number = document.getElementsByClassName("number")[itemNumber].textContent;
var number = ++number;
document.getElementsByClassName("number")[itemNumber].innerHTML = parseFloat(number);
if(number >=0)
{
    subButton.disabled = false;
    subButton.style.color = "rgb(245,170,3)"
}


var item = document.querySelector(".item");
var clone = item.cloneNode(true);
clone.querySelector(".addDiv").style.display = "none";
clone.querySelector(".addbutton").textContent = "R$" + event.target.value;
var cart = document.querySelector("#cart");
cart.appendChild(clone);
console.log(clone, cart);


}
function retirar()
{
var price = event.target.value;
var totalPrice = document.querySelector(".result").textContent;
var totalPrice =parseFloat(totalPrice) - parseFloat(price);
document.querySelector(".result").innerHTML = parseFloat(totalPrice);
if (parseFloat(totalPrice) < 10)
{
    document.querySelector(".result").innerHTML = parseFloat(totalPrice).toPrecision(3);
    document.querySelector(".resultList").innerHTML = parseFloat(totalPrice).toPrecision(3);
}
if (parseFloat(totalPrice) >= 10)
{
    document.querySelector(".result").innerHTML = parseFloat(totalPrice).toPrecision(4);
    document.querySelector(".resultList").innerHTML = parseFloat(totalPrice).toPrecision(4);
}
if (totalPrice > 100)
{
    document.querySelector(".result").innerHTML = parseFloat(totalPrice).toPrecision(5);
    document.querySelector(".resultList").innerHTML = parseFloat(totalPrice).toPrecision(5);
}
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
function openList()
{
    var list = document.getElementById("selectedBurguers").style.display = "block";
}
function closeList()
{
var list = document.getElementById("selectedBurguers").style.display = "none";
}