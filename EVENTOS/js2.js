var vermelho = document.querySelectorAll('button')[0]
var verde = document.querySelectorAll('button')[1]
var azul = document.querySelectorAll('button')[2]
var amarelo = document.querySelectorAll('button')[3]

vermelho.onclick = function(){
var element = document.getElementById("alterado")
element.style.backgroundColor = '#B22222'
}

verde.onclick = function(){
var element = document.getElementById("alterado")
element.style.backgroundColor = '#3CB371'
}

azul.onclick = function(){
var element = document.getElementById("alterado")
element.style.backgroundColor = '#1E90FF'
}

amarelo.onclick = function(){
var element = document.getElementById("alterado")
element.style.backgroundColor = '#FFD700'
}
