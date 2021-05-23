

function troco()
{
    document.getElementById("troco").style.display = "block";
    var valor = document.getElementById("trocoSim").value;
    document.getElementById("trocos").textContent = valor;
}
function trocoNao()
{
    document.getElementById("troco").style.display = valor;
    var valor = document.getElementById("trocoNao").value;
    document.getElementById("trocos").textContent = valor;
    document.getElementById("troco").style.display = "none";
    var valorPago = document.getElementById("valorTroco").value = document.querySelector(".resultFinish").textContent;
}


function buyEnd()
{
    var obs = "Observações:" +"%0a" + document.getElementById("obsText").value;
     var tr = document.querySelector("#cart").getElementsByClassName("addbutton");
     for (var i=0; i<tr.length; i++) {
         document.getElementById("pedido").textContent = document.getElementById("pedido").textContent + "1%20" + tr[i].name +"%0a";

    }
 var pagamento = document.getElementById("select").value;
 var valorPago =  document.getElementById("valorTroco").value;
 var valorTotal = document.querySelector(".resultFinish").textContent;
 var valorTroco = parseFloat(valorPago) - parseFloat(valorTotal);
 var rua = document.getElementById("rua").value +", ";
 var bairro = document.getElementById("bairro").value + ". ";
 var numero = document.getElementById("numero").value +", " ;
 var referencia = document.getElementById("referencia").value + ".";  
 var localização = rua  + numero  + bairro  + referencia ;

    document.querySelector("#linktest").href = "https://api.whatsapp.com/send?phone=5534996814576&text=Olá,%20boa%20noite.%20Segue%20o%20meu%20pedido:" +"%0a" +"%0a" + document.getElementById("pedido").textContent +"%0a"  + obs  + "%0a" + "%0a" +"Forma de pagamento:" + "%0a" + pagamento + "%0a" + "%0a" + document.getElementById("trocos").textContent + "%20"  + valorPago + "%0a"  + "Valor total:" +"%20" + valorTotal + "%0a" + "Valor do troco:" + valorTroco + "%0a"+ "%0a" + "Localização:" +"%0a" + localização;

}
function adicionar()
{
var nome = event.target.name; 
var pedido =  document.getElementById("pedido").textContent;
var itemNumber = parseInt(event.target.id);
var price = event.target.value;
var subButton = document.getElementsByClassName("subButton")[itemNumber];
var totalPrice = document.querySelector(".result").textContent;
var totalPrice = parseFloat(price) + parseFloat(totalPrice);
if (parseFloat(totalPrice) < 10)
{ 
    document.querySelector(".result").innerHTML = parseFloat(totalPrice).toPrecision(3);
    document.querySelector(".resultList").innerHTML = parseFloat(totalPrice).toPrecision(3);
    document.querySelector(".resultFinish").innerHTML = parseFloat(totalPrice).toPrecision(3);
}
if (parseFloat(totalPrice) >= 10)
{
    document.querySelector(".result").innerHTML = parseFloat(totalPrice).toPrecision(4);
    document.querySelector(".resultList").innerHTML = parseFloat(totalPrice).toPrecision(4);
    document.querySelector(".resultFinish").innerHTML = parseFloat(totalPrice).toPrecision(4);
}
if (totalPrice > 100)
{
    document.querySelector(".result").innerHTML = parseFloat(totalPrice).toPrecision(5);
    document.querySelector(".resultList").innerHTML = parseFloat(totalPrice).toPrecision(5);
    document.querySelector(".resultFinish").innerHTML = parseFloat(totalPrice).toPrecision(5);
}
var number = document.getElementsByClassName("number")[itemNumber].textContent;
var number = ++number;
document.getElementsByClassName("number")[itemNumber].innerHTML = parseFloat(number);
if(number >=0)
{
    subButton.disabled = false;
    subButton.style.color = "rgb(245,170,3)"
}

var item = document.getElementsByClassName("item")[itemNumber];
var clone = item.cloneNode(true);
clone.querySelector(".addDiv").style.display = "none";
clone.querySelector(".addbutton").textContent = "+R$" + event.target.value;
clone.querySelector(".addbutton").style.padding = "5px";
clone.querySelector(".removeButton").style.display ="inline";
var cart = document.querySelector("#cart");
cart.appendChild(clone);

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
    document.querySelector(".resultFinish").innerHTML = parseFloat(totalPrice).toPrecision(3);
}
if (parseFloat(totalPrice) >= 10)
{
    document.querySelector(".result").innerHTML = parseFloat(totalPrice).toPrecision(4);
    document.querySelector(".resultList").innerHTML = parseFloat(totalPrice).toPrecision(4);
    document.querySelector(".resultFinish").innerHTML = parseFloat(totalPrice).toPrecision(4);
}
if (totalPrice > 100)
{
    document.querySelector(".result").innerHTML = parseFloat(totalPrice).toPrecision(5);
    document.querySelector(".resultList").innerHTML = parseFloat(totalPrice).toPrecision(5);
    document.querySelector(".resultFinish").innerHTML = parseFloat(totalPrice).toPrecision(5);
}
var id = "#b" +  event.target.id;
var clone = document.querySelector("#cart");
var burguer = clone.querySelector(id);
    burguer.remove();
}

function menos()
{
var itemNumber = parseInt(event.target.id);
var number = document.getElementsByClassName("number")[itemNumber].textContent;
var subButton = document.getElementsByClassName("subButton")[itemNumber] ;
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
    var list = document.getElementById("canvas").style.display = "block";

}
function closeList()
{
var list = document.getElementById("selectedBurguers").style.display = "none";
var list = document.getElementById("canvas").style.display = "none";
}
function closeListFinishDiv()
{
    var list = document.getElementById("finishDiv").style.display = "none";
}
function observation()
{
    document.getElementById("obsDiv").style.display ="block";
}
function observationClose()
{
    document.getElementById("obsDiv").style.display ="none";
}
function finishListOpen()
{
    var valorTotal = document.querySelector(".resultFinish").textContent;
    var buyButton = document.getElementById("fimPedido");
    document.getElementById("finishDiv").style.display ="block";
    if(valorTotal == 0)
    {
        buyButton.disabled = true;
    }
    if(valorTotal >0)
    {
        buyButton.disabled = false;
    }
}



