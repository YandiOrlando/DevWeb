window.addEventListener('load', comeca);
function comeca() {
    preventFormSubmit();
  }
  function preventFormSubmit() {
    function handleFormSubmit(event) {
      event.preventDefault();
    }
    var form = document.querySelector("form");
    form.addEventListener("submit", handleFormSubmit);
  }
   var caixa = document.querySelector("#caixa");
   caixa.addEventListener('input', acorzinha);
function acorzinha() {
    
   
    var vermelho = document.querySelector('#red').value;
  
    var verde = document.querySelector('#green').value;
  
    var azul = document.querySelector('#blue').value;
  
    var corzinha = 'RGB(' + vermelho + ',' + verde + ',' + azul + ')';
  
    //document.body.style.backgroundColor = corzinha;
  
    document.getElementById('box').value = corzinha;

    caixa.style.backgroundColor = corzinha;
  
}
document.querySelector('#red')
    .addEventListener('input', acorzinha);
  
document.querySelector('#green')
    .addEventListener('input', acorzinha);

document.querySelector('#blue')
    .addEventListener('input', acorzinha);