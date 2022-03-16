function atividade1() {
    Arco_iris = ["Vermelho", "Laranja", "Marrom", "Azul"]
    Arco_iris.splice(2, 1, "Amarelo", "Verde")
    Arco_iris.splice(4, 0, "Roxo")

    alert(Arco_iris)
    location.reload()

}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function atividade2() {
    var endereco = {
        rua: "Itajubá",
        numero: "230",
        bairro: "Floresta",
        cidade: "Belo Horizonte",
        uf: "Minas Gerais"
    }
    alert("O usúario mora em " + endereco.cidade + "/" + endereco.uf + " no bairro " + endereco.bairro + " ,na rua " + endereco.rua + ", nº" + endereco.numero);
    location.reload()
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function atividade3() { 
    //var
    var habilidade = [];
    //parada
    for (var x = 0; habilidade[x - 1] != "23"; x++) 

    {

        habilidade.push(prompt("Digite aqui as suas habilidades:( 23 para parar)"))
        if (habilidade[x - 1] == "23") {

            habilidade.pop();
        }
    }
    document.write(temHabilidade(habilidade));
}
function temHabilidade(habilidade) {
    if (habilidade.indexOf("JavaScript", 0) == "0") {
        return (true)
    }
    else {
        return (false)
    }

}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function atividade4() {
        //var
        var nome = [];
        var anosEstudo= [];
        //parada
        for (var x = 0; x<3; x++) 
        {
            nome.push(prompt("Insira seu nome:"))
            anosEstudo.push(parseInt(prompt("insira os anos de estudo:")))
        }
        anosEstudo.pop();
                nome.pop(); 

        anosEstudo.forEach((ano,keys) => experiencia(ano,keys,nome));
    }
    function experiencia(ano,keys,nome) {
        if (ano >= 0 && ano <= 1) {
            document.write(nome[keys] + " é Junior! <br>")
        }
        else if (ano >= 1 && ano < 3) {
            document.write(nome[keys] + " é Pleno!  <br>")
        }
        else if (ano >= 3 && ano <= 6) {
            document.write(nome[keys] + " é Senior!  <br>")
        }
        else if (ano >= 7) {
            document.write(nome[keys] + " é Mestre Jedi! <br>")
        }
    }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function atividade5() {
    var usuarios = 
        [{
        nome: "Gabriel",
        habilidades: ["Javascript", "ReactJS", "Redux"]
        },
        {
        nome: "Lara",
        habilidades: ["JAVA", "PHP", "Laravel"]
        }];
        document.write(usuarios[0].nome
        )
        for(x = 0; x<2;x++){
            document.write(usuarios[x].nome+"<br>"+usuarios[x].habilidades+"<br>")
        }
    }

function atividade6() {
    const numeros = [1, 2, 3, 4];
// array com objetos
const objetos = [
{
nome: "Harry Potter",
idade: 15
},
{
nome: "Gandalf",
idade: 1706
},
{
nome: "Jon Snow",
idade: 28
},
{
nome: "Peter Parker",
idade: 35  
},
{
nome: "Richard Rasmussen",
idade: 52
},
{
nome: "Juremo",
idade: 2
},
{
nome: "Harry Styles",
idade: 28 
},
{
nome: "Hobbit",
idade: 50
},
{
nome: "Criança",
idade: 7
},
{
nome: "Irmão do Jorel",
idade: 8 
    }
];
let Array = objetos.filter(numero => numero.idade >= 18);
for( i = 0; i <= objetos.length; i++)
{
    document.write(Array[i].idade+"<br>");
}}
