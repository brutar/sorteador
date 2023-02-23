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
    var numeroCampoUm = Number(document.getElementById('campo1').value);
    var numeroCampoDois = Number(document.getElementById('campo2').value);
    console.log(typeof numeroCampoUm);
    //valida se é numero inteiro maior ou igual a 0
    if ((typeof numeroCampoUm === "number" &&  !isNaN(numeroCampoUm) && numeroCampoUm >=1) && (typeof numeroCampoDois === "number" && !isNaN(numeroCampoDois) && numeroCampoDois >=1)){
        var numeroSorteado = sorteaNumero(numeroCampoUm, numeroCampoDois);
        
        //setTimeout(()=>{document.querySelector('.c-loaer').setAttribute('hidden',' ')},2000);    
        //mostra numero sorteado
        setTimeout(()=>{document.querySelector('#numSorteado').innerHTML = parseInt(numeroSorteado) + "<br> "+ parabens},2000);
    }else{
      limpaCampo();
      //mostra msg caso a validação não passe
      document.querySelector('#numSorteado').innerHTML = "Digite um numero inteiro maior ou igual 1";
    }
});