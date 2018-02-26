
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

  return{
    init : InicializarPantalla,
    validarCero : validarCero,
    agregarDigitos : agregarDigitos,
    agregarDecimal : agregarDecimal,
    agregarSigno : agregarSigno,
    Calcular : Calcular
  }

})();

Calculadora.init();

/* Listener */

document.addEventListener("click", function(event){
  var targetElement = event.target || event.srcElement;
  console.log(targetElement);

  var tipoID = targetElement.id;

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

/* Modifica tamaño de cada tecla de la caluladora */
document.getElementById('on').addEventListener("mousedown", function(){
  document.getElementById('on').setAttribute("style","transform:scale(0.95,0.95)")
});
document.getElementById('on').addEventListener("mouseout", function(){
  document.getElementById('on').setAttribute("style","transform:scale(1,1)")
});

document.getElementById('sign').addEventListener("mousedown", function(){
  document.getElementById('sign').setAttribute("style","transform:scale(0.95,0.95)")
});
document.getElementById('sign').addEventListener("mouseout", function(){
  document.getElementById('sign').setAttribute("style","transform:scale(1,1)")
});

document.getElementById('raiz').addEventListener("mousedown", function(){
  document.getElementById('raiz').setAttribute("style","transform:scale(0.95,0.95)")
});
document.getElementById('raiz').addEventListener("mouseout", function(){
  document.getElementById('raiz').setAttribute("style","transform:scale(1,1)")
});

document.getElementById('dividido').addEventListener("mousedown", function(){
  document.getElementById('dividido').setAttribute("style","transform:scale(0.95,0.95)")
});
document.getElementById('dividido').addEventListener("mouseout", function(){
  document.getElementById('dividido').setAttribute("style","transform:scale(1,1)")
});

document.getElementById('7').addEventListener("mousedown", function(){
  document.getElementById('7').setAttribute("style","transform:scale(0.95,0.95)")
});
document.getElementById('7').addEventListener("mouseout", function(){
  document.getElementById('7').setAttribute("style","transform:scale(1,1)")
});

document.getElementById('8').addEventListener("mousedown", function(){
  document.getElementById('8').setAttribute("style","transform:scale(0.95,0.95)")
});
document.getElementById('8').addEventListener("mouseout", function(){
  document.getElementById('8').setAttribute("style","transform:scale(1,1)")
});

document.getElementById('9').addEventListener("mousedown", function(){
  document.getElementById('9').setAttribute("style","transform:scale(0.95,0.95)")
});
document.getElementById('9').addEventListener("mouseout", function(){
  document.getElementById('9').setAttribute("style","transform:scale(1,1)")
});

document.getElementById('por').addEventListener("mousedown", function(){
  document.getElementById('por').setAttribute("style","transform:scale(0.95,0.95)")
});
document.getElementById('por').addEventListener("mouseout", function(){
  document.getElementById('por').setAttribute("style","transform:scale(1,1)")
});

document.getElementById('4').addEventListener("mousedown", function(){
  document.getElementById('4').setAttribute("style","transform:scale(0.95,0.95)")
});
document.getElementById('4').addEventListener("mouseout", function(){
  document.getElementById('4').setAttribute("style","transform:scale(1,1)")
});

document.getElementById('5').addEventListener("mousedown", function(){
  document.getElementById('5').setAttribute("style","transform:scale(0.95,0.95)")
});
document.getElementById('5').addEventListener("mouseout", function(){
  document.getElementById('5').setAttribute("style","transform:scale(1,1)")
});

document.getElementById('6').addEventListener("mousedown", function(){
  document.getElementById('6').setAttribute("style","transform:scale(0.95,0.95)")
});
document.getElementById('6').addEventListener("mouseout", function(){
  document.getElementById('6').setAttribute("style","transform:scale(1,1)")
});

document.getElementById('menos').addEventListener("mousedown", function(){
  document.getElementById('menos').setAttribute("style","transform:scale(0.95,0.95)")
});
document.getElementById('menos').addEventListener("mouseout", function(){
  document.getElementById('menos').setAttribute("style","transform:scale(1,1)")
});

document.getElementById('1').addEventListener("mousedown", function(){
  document.getElementById('1').setAttribute("style","transform:scale(0.95,0.95)")
});
document.getElementById('1').addEventListener("mouseout", function(){
  document.getElementById('1').setAttribute("style","transform:scale(1,1)")
});

document.getElementById('2').addEventListener("mousedown", function(){
  document.getElementById('2').setAttribute("style","transform:scale(0.95,0.95)")
});
document.getElementById('2').addEventListener("mouseout", function(){
  document.getElementById('2').setAttribute("style","transform:scale(1,1)")
});

document.getElementById('3').addEventListener("mousedown", function(){
  document.getElementById('3').setAttribute("style","transform:scale(0.95,0.95)")
});
document.getElementById('3').addEventListener("mouseout", function(){
  document.getElementById('3').setAttribute("style","transform:scale(1,1)")
});

document.getElementById('0').addEventListener("mousedown", function(){
  document.getElementById('0').setAttribute("style","transform:scale(0.95,0.95)")
});
document.getElementById('0').addEventListener("mouseout", function(){
  document.getElementById('0').setAttribute("style","transform:scale(1,1)")
});

document.getElementById('punto').addEventListener("mousedown", function(){
  document.getElementById('punto').setAttribute("style","transform:scale(0.95,0.95)")
});
document.getElementById('punto').addEventListener("mouseout", function(){
  document.getElementById('punto').setAttribute("style","transform:scale(1,1)")
});

document.getElementById('igual').addEventListener("mousedown", function(){
  document.getElementById('igual').setAttribute("style","transform:scale(0.95,0.95)")
});
document.getElementById('igual').addEventListener("mouseout", function(){
  document.getElementById('igual').setAttribute("style","transform:scale(1,1)")
});

document.getElementById('mas').addEventListener("mousedown", function(){
  document.getElementById('mas').setAttribute("style","transform:scale(0.95,0.95)")
});
document.getElementById('mas').addEventListener("mouseout", function(){
  document.getElementById('mas').setAttribute("style","transform:scale(1,1)")
});
