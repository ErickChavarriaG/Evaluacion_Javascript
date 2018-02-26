
var Calculadora = (function(){

  var cantidadDigitos = 0;
  var valorEnPantalla = 0;
  var resultadoOperacion = 0;
  var cantidades = new Array();

  var InicializarPantalla = function(){
    document.getElementById('display').innerHTML = 0;
    //asignarValorPantalla(0);
    valorEnPantalla = document.getElementById('display').innerHTML;
    cantidadDigitos = valorEnPantalla.length;
    resultadoOperacion = 0;
    cantidades.splice(0,cantidades.length);

    console.log(cantidadDigitos);
  }

  var asignarValorPantalla = function(pvalor){
    if(cantidadDigitos>8){
      var digitosPermitidos = pvalor.substring(0,8);
      document.getElementById('display').innerHTML = digitosPermitidos;
    }else{
      document.getElementById('display').innerHTML = pvalor;
    }
  }

  var limparPantalla = function(){
    document.getElementById('display').innerHTML = '';
    valorEnPantalla = 0;
  }

  var validarCero = function(pdigito){
    if(pdigito=='0' && valorEnPantalla!='0'){
      valorEnPantalla = valorEnPantalla + pdigito;
      cantidadDigitos = valorEnPantalla.length;
      asignarValorPantalla(valorEnPantalla);
    }
  }

  var agregarDigitos = function(pdigito){
    if(valorEnPantalla=='0' && cantidadDigitos==1){
      valorEnPantalla = pdigito;
      cantidadDigitos = valorEnPantalla.length;
      asignarValorPantalla(valorEnPantalla);
    }else{
      valorEnPantalla = valorEnPantalla + pdigito;
      cantidadDigitos = valorEnPantalla.length;
      asignarValorPantalla(valorEnPantalla);
    }
  }

  var agregarDecimal = function(pdigito){
    if(valorEnPantalla.indexOf('.')==-1){
      valorEnPantalla = valorEnPantalla+pdigito;
      asignarValorPantalla(valorEnPantalla);
    }
  }

  var agregarSigno = function(){
    if(valorEnPantalla != '0'){
      if(valorEnPantalla.indexOf('-')==-1){
        valorEnPantalla ='-'+valorEnPantalla;
      }else {
        //valorEnPantalla.replace('-','');
        valorEnPantalla = valorEnPantalla.substring(1,valorEnPantalla.length);
      }
      asignarValorPantalla(valorEnPantalla);
    }
  }

  var Calcular = function(operacion){
    switch(operacion) {
      case "+":
        resultadoOperacion = parseFloat(resultadoOperacion) + parseFloat(valorEnPantalla);
        limparPantalla();
        console.log(resultadoOperacion);
        break;
        case "-":
          Calculadora.init();
          break;
        case "*":
          Calculadora.agregarDecimal('.');
          break;
        case "/":
          Calculadora.agregarSigno();
          break;
        case "=":
          asignarValorPantalla(resultadoOperacion);
          break;
      default:
          break;
    }
  }

  var reducirSize = function(elemento){
    //elemento.style.width = "18%";
    alert('redicuiendo');
  }

  var ampliarSize = function(elemento){
    //elemento.style.width = "22%";
    alert('ampliando');
  }

  return{
    init : InicializarPantalla,
    validarCero : validarCero,
    agregarDigitos : agregarDigitos,
    agregarDecimal : agregarDecimal,
    agregarSigno : agregarSigno,
    Calcular : Calcular,
    reducirSize : reducirSize,
    ampliarSize : ampliarSize

  }

})();

Calculadora.init();

/* Listener */

document.addEventListener("click", function(event){
  var targetElement = event.target || event.srcElement;
  console.log(targetElement);

  var tipoID = targetElement.id;

  document.getElementById(tipoID).onclick = reducirSize();
  //document.getElementById(tipoID).onclick = ampliarSize();

  switch(targetElement.id) {
    case "0":
      Calculadora.validarCero(tipoID);
      break;
      case "on":
        Calculadora.init();
        break;
      case "punto":
        Calculadora.agregarDecimal('.');
        break;
      case "sign":
        Calculadora.agregarSigno();
        break;
      case "mas":
        Calculadora.Calcular('+');
        break;
      case "menos":
        Calculadora.Calcular('-');
        break;
      case "por":
        Calculadora.Calcular('*');
        break;
      case "divido":
        Calculadora.Calcular('/');
        break;
      case "igual":
        Calculadora.Calcular('=');
        break;
    default:
      Calculadora.agregarDigitos(tipoID);
      break;
  }

});
