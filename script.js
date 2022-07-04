const btnSortear = document.querySelector('#btnS');

var parabens = "Parabéns!"

btnSortear.addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector('#numSorteado').innerHTML = "";
    //escolhe um numero randomicamente
    function sorteaNumero(min,max){
             return Math.floor(Math.random()*(max - min +1)  + min);
    }
    //limpa os campos de entrada
    function limpaCampo(){
        document.getElementById('campo1').value = '';
        document.getElementById('campo2').value = '';
    }
    //pega os numeros dos campos de entrada
    var nI = parseInt(document.getElementById('campo1').value);
    var nF = parseInt(document.getElementById('campo2').value);
    //valida se é numero inteiro maior ou igual a 0
    if ((typeof nI == 'number'&&  !isNaN(nI) && nI >= 0 ) && (typeof nF == 'number' && !isNaN(nF) && nF >=0)){
        var numR = sorteaNumero(nI,nF);
        //mostra numero sorteado
        setTimeout(()=>{document.querySelector('#numSorteado').innerHTML = parseInt(numR) + "<br> "+ parabens},1000);
    }else{
      limpaCampo();
      //mostra msg caso a validação não passe
      document.querySelector('#numSorteado').innerHTML = "Digite um numero inteiro maior ou igual a 0";
    }
});