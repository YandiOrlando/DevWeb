var somar =  document.querySelectorAll('button')[0];


somar.onclick = function()
{
    var txt = ["O resultado da soma é: "]
    var valorA = parseInt(document.querySelectorAll('input')[0].value);
    var valorB= parseInt(document.querySelectorAll('input')[1].value); 

    alert(txt + valorA + valorB)
}