// Challenge 1:  BMI calculator

let peso = 80; // Kilogramos
let altura = 1.8; // Metros

// Calcular BMI
let BMI = peso / (altura * altura);

// Imprimir BMI
console.log("el BMI calculado es: " + BMI);

// Interpretación de BMI
if (BMI < 18.5) {
    console.log("You are underweight, consider improving your diet under the guidance of your doctor.");
}
else if (BMI >= 18.5 && BMI < 25) {
    console.log ("You have a stable weight. Keep your diet balanced like this. You can eat more vegetables and fruits to maintain it.") ;
}
else if (BMI >= 25 && BMI < 30) {
    console.log("You are overweight, exercise and consult with your doctor for a healthier diet.");
}
else {
    console.log("You are overweight, seek support from your doctor to improve your health.");
}


// Challenge 2: Temperatura convertir
let Celsius = 29; 

// Celsius a Fahrenheit
let temperaturaFahrenheit = (Celsius * 9/5) + 32;

// Imprime la temperatura en grados Fahrenheit
console.log("La temperatura en grados Fahrenheit es: " + temperaturaFahrenheit + "°F")

let Fahrenheit = 77; 

// Fahrenhei a Celsius
let temperaturaCelsius = (Fahrenheit- 32) * 5/9;

// Imprime la temperatura en grados Fahrenheit
console.log("Temperatura en grados Celsius:", temperaturaCelsius)




// Challenge 3: Username generator

let primerNombre = "Maria";
let segundoNombre = "Camila";
let apellido = "Bohórquez";

// Genera un número entre 1 y 100.
let randomNumber = Math.floor(Math.random() * 100) + 8;
 
let UserName = primerNombre.substring(0, 2) + segundoNombre.substring(0, 2) + apellido.substring(0, 1) + randomNumber;

// Genera username.
console.log("Your username is: " + UserName);



// Challenge 4: Riddle game.

// Número aleatorio entre 1 y 10
const secretNumber = 8

// Intentos permitidos
const intentosMaximos = 3;

for (let intento = 0; intento < intentosMaximos; intento++) {
    // Obtiene la suposición del jugador
    const suposicion = parseInt(prompt(`Intento ${intento + 1}/${intentosMaximos} - Adivina el número entre 1 y 10:`));

    // Comprobar si la suposición es correcta
    if (suposicion === secretNumber) {
        console.log(`¡Felicidades! ¡Adivinaste el número ${secretNumber} en el intento ${intento + 1}!`);
        break;
    } else if (suposicion < secretNumber) {
        console.log("La suposición es demasiado baja.");
    } else {
        console.log("La suposición es demasiado alta.");
    }
}

if (suposicion !== secretNumber) {
    console.log(`¡Perdiste! El número correcto era ${secretNumber}.`);
}


// Challenge 5: phonebook

const agendaTelefonica = {};

// Contactos de la agenda
agendaTelefonica["David"] = "888-555-999";
agendaTelefonica["Camila"] = "123-120-000";
agendaTelefonica["Martín"] = "305-694-3240";

// Nombre de contacto a buscar
const buscarNombre = "David";

// Busca un contacto en la agenda
function buscarContacto(nombre) {
  if (nombre in agendaTelefonica) {
    console.log(`El número de teléfono de ${nombre} es: ${agendaTelefonica[nombre]}`);
  } else {
    console.log(`El contacto ${nombre} no se encontró en la agenda.`);
  }
}

// Challenge 6: dados

// Función para obtener un número aleatorio entre 1 y 6 (simulando el lanzamiento de un dado)
function lanzarDado() {
  return Math.floor(Math.random() * 6) + 1;
}

// Variables para los dos dados y la suma de los valores
var dado1 = lanzarDado();
var dado2 = lanzarDado();
var suma = dado1 + dado2;

// Imprimir los valores de los dados y su suma
console.log("Resultado del primer dado: " + dado1);
console.log("Resultado del segundo dado: " + dado2);
console.log("Suma de los valores de los dados: " + suma);


// Llama a la función para buscar el contacto
buscarContacto(buscarNombre);



// Challenge 7: email

// Variable para almacenar la dirección de correo electrónico a validar
const direccionCorreo = "correo@example.com"; // Cambia esto por la dirección que deseas validar

// Expresión regular para validar la dirección de correo electrónico
const expresionRegularCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

// Función para validar la dirección de correo electrónico
function validarCorreo(direccion) {
  if (expresionRegularCorreo.test(direccion)) {
    console.log("La dirección de correo electrónico es válida.");
  } else {
    console.log("La dirección de correo electrónico no es válida.");
  
  // Llama a la función para validar la dirección de correo
validarCorreo(direccionCorreo);

  }
}

// Challenge 8: tips

// Total de la factura
var totalFactura = 100; // Puedes cambiar este valor al total real de tu factura

// Porcentaje de propina que deseas dejar
var porcentajePropina = 15; // Puedes cambiar este valor al porcentaje que desees

// Calcular la propina
var propina = (totalFactura * porcentajePropina) / 100;

// Imprimir la propina
console.log("Total de la factura: $" + totalFactura);
console.log("Porcentaje de propina: " + porcentajePropina + "%");
console.log("Propina a dejar: $" + propina);


// Challenge 9: César

// Función para cifrar un mensaje utilizando el cifrado César
function cifrarCesar(mensaje, desplazamiento) {
  var mensajeCifrado = "";

  for (var i = 0; i < mensaje.length; i++) {
    var char = mensaje[i];

    // Verificar si el carácter es una letra
    if (/[a-zA-Z]/.test(char)) {
      var esMayuscula = char === char.toUpperCase();
      var codigo = char.charCodeAt(0);

      // Asegurarse de que el desplazamiento esté en el rango 1-26 (número de letras en el alfabeto)
      desplazamiento = desplazamiento % 26;

      // Aplicar el desplazamiento
      if (esMayuscula) {
        codigo = ((codigo - 65 + desplazamiento) % 26) + 65;
      } else {
        codigo = ((codigo - 97 + desplazamiento) % 26) + 97;
      }

      char = String.fromCharCode(codigo);
    }

    mensajeCifrado += char;
  }

  return mensajeCifrado;
}

// Ejemplo de uso
var mensajeOriginal = "Hola, Mundo!";
var desplazamiento = 3;
var mensajeCifrado = cifrarCesar(mensajeOriginal, desplazamiento);
console.log("Mensaje Original: " + mensajeOriginal);
console.log("Mensaje Cifrado: " + mensajeCifrado);


//Challenge 10: TC

// Función para validar una tarjeta de crédito utilizando el algoritmo de Luhn
function validarTarjetaCredito(numeroTarjeta) {
  // Convertir el número de tarjeta a un array de dígitos
  var digitos = numeroTarjeta.toString().split('').map(Number);

  // Invertir el array de dígitos para empezar desde la derecha
  digitos.reverse();

  // Aplicar el algoritmo de Luhn
  var suma = 0;
  for (var i = 0; i < digitos.length; i++) {
    var digito = digitos[i];
    if (i % 2 === 1) { // Duplicar cada segundo dígito
      digito *= 2;
      if (digito > 9) { // Si el doble es un número de dos dígitos, sumar los dígitos
        digito = digito - 9;
      }
    }
    suma += digito;
  }

  // Comprobar si la suma total es divisible por 10
  return suma % 10 === 0;
}

// Pruebas
var numeroTarjeta1 = 4111111111111111; // Tarjeta válida
var numeroTarjeta2 = 1234567890123456; // Tarjeta no válida

console.log("Tarjeta 1 válida: " + validarTarjetaCredito(numeroTarjeta1));
console.log("Tarjeta 2 válida: " + validarTarjetaCredito(numeroTarjeta2));


// Challenge 11: mensaje secreto

// Mensaje codificado
var mensajeCodificado = "El gato rojo tiene hambre";

// Diccionario de palabras codificadas y descodificadas
var diccionario = {
  "gato": "agente",
  "rojo": "secreto",
  "hambre": "misión"
};

// Función para decodificar el mensaje
function decodificarMensaje(mensajeCodificado, diccionario) {
  var palabrasCodificadas = mensajeCodificado.split(" ");
  var mensajeDescodificado = [];

  palabrasCodificadas.forEach(function(palabra) {
    if (diccionario[palabra]) {
      mensajeDescodificado.push(diccionario[palabra]);
    } else {
      mensajeDescodificado.push(palabra);
    }
  });

  return mensajeDescodificado.join(" ");
}

// Decodificar el mensaje
var mensajeDescodificado = decodificarMensaje(mensajeCodificado, diccionario);

// Imprimir el mensaje descodificado
console.log("Mensaje Descodificado: " + mensajeDescodificado);


// Challenge 12: inversos de palabras

// Función para invertir una palabra
function invertirPalabra(palabra) {
  var palabraInvertida = "";
  for (var i = palabra.length - 1; i >= 0; i--) {
    palabraInvertida += palabra[i];
  }
  return palabraInvertida;
}

// Función para invertir todas las palabras de una frase
function invertirFrase(frase) {
  var palabras = frase.split(" ");
  var fraseInvertida = [];

  palabras.forEach(function(palabra) {
    fraseInvertida.push(invertirPalabra(palabra));
  });

  return fraseInvertida.join(" ");
}

// Solicitar una frase al usuario
var fraseUsuario = prompt("Ingrese una frase:");

// Invertir la frase ingresada por el usuario
var fraseInvertida = invertirFrase(fraseUsuario);

// Mostrar la frase invertida
console.log("Frase Invertida: " + fraseInvertida);


// Challenge 13: heroe

// Solicitar el nombre del animal favorito al usuario
var animalFavorito = prompt("Por favor, ingresa tu animal favorito:");

// Solicitar el nombre del usuario
var nombreUsuario = prompt("Por favor, ingresa tu nombre:");

// Formatear el nombre del animal con la primera letra en mayúscula
animalFavorito = animalFavorito.charAt(0).toUpperCase() + animalFavorito.slice(1);

// Combinar el nombre del animal y el nombre del usuario para crear el nombre de superhéroe
var nombreSuperheroe = animalFavorito + " " + nombreUsuario;

// Mostrar el nombre de superhéroe generado
console.log("Tu nombre de superhéroe es: " + nombreSuperheroe);


// Challenge 14: password

// Función para verificar si una contraseña cumple con los requisitos
function verificarContrasena(contrasena) {
  // Requisito 1: Longitud mínima de 8 caracteres
  if (contrasena.length < 8) {
    return "La contraseña debe tener al menos 8 caracteres.";
  }

  // Requisito 2: Al menos una letra mayúscula
  if (!/[A-Z]/.test(contrasena)) {
    return "La contraseña debe contener al menos una letra mayúscula.";
  }

  // Requisito 3: Al menos una letra minúscula
  if (!/[a-z]/.test(contrasena)) {
    return "La contraseña debe contener al menos una letra minúscula.";
  }

  // Requisito 4: Al menos un número
  if (!/\d/.test(contrasena)) {
    return "La contraseña debe contener al menos un número.";
  }

  // Si todos los requisitos se cumplen, la contraseña es válida
  return "Contraseña válida";
}

// Solicitar una contraseña al usuario
var contrasenaUsuario = prompt("Por favor, ingresa tu contraseña:");

// Verificar la contraseña ingresada
var resultado = verificarContrasena(contrasenaUsuario);

// Mostrar el resultado
console.log(resultado);


//Challenge 13: counter

// Función para contar el número de vocales en una cadena
function contarVocales(cadena) {
  // Convertir la cadena a minúsculas para no ser sensible a las mayúsculas y minúsculas
  cadena = cadena.toLowerCase();
  
  var contadorVocales = 0;
  var vocales = "aeiou";
  
  for (var i = 0; i < cadena.length; i++) {
    var caracter = cadena.charAt(i);
    if (vocales.includes(caracter)) {
      contadorVocales++;
    }
  }
  
  return contadorVocales;
}

// Función para contar el número de consonantes en una cadena
function contarConsonantes(cadena) {
  // Convertir la cadena a minúsculas para no ser sensible a las mayúsculas y minúsculas
  cadena = cadena.toLowerCase();
  
  var contadorConsonantes = 0;
  var consonantes = "bcdfghjklmnpqrstvwxyz";
  
  for (var i = 0; i < cadena.length; i++) {
    var caracter = cadena.charAt(i);
    if (consonantes.includes(caracter)) {
      contadorConsonantes++;
    }
  }
  
  return contadorConsonantes;
}

// Solicitar al usuario una cadena de texto
var cadenaTexto = prompt("Por favor, ingresa una cadena de texto:");

// Contar vocales y consonantes en la cadena de texto
var numeroVocales = contarVocales(cadenaTexto);
var numeroConsonantes = contarConsonantes(cadenaTexto);

// Mostrar los resultados
console.log("Número de vocales: " + numeroVocales);
console.log("Número de consonantes: " + numeroConsonantes);


//Challenge 16: verificator

// Solicitar al usuario una cadena de texto
var cadenaTexto = prompt("Por favor, ingresa una cadena de texto:");

// Eliminar espacios y convertir a minúsculas
cadenaTexto = cadenaTexto.replace(/\s/g, "").toLowerCase();

// Invertir la cadena
var cadenaInvertida = cadenaTexto.split("").reverse().join("");

// Verificar si la cadena es un palíndromo
if (cadenaTexto === cadenaInvertida) {
  console.log("La cadena de texto es un palíndromo.");
} else {
  console.log("La cadena de texto no es un palíndromo.");
}


// Challenge 17: acrónimo

// Solicitar al usuario una frase
var fraseUsuario = prompt("Por favor, ingresa una frase:");

// Dividir la frase en palabras
var palabras = fraseUsuario.split(" ");

// Inicializar una variable para almacenar el acrónimo
var acronimo = "";

// Recorrer cada palabra y agregar la primera letra al acrónimo (en mayúsculas)
for (var i = 0; i < palabras.length; i++) {
  var palabra = palabras[i];
  if (palabra.length > 0) {
    acronimo += palabra[0].toUpperCase();
  }
}

// Mostrar el acrónimo generado
console.log("Acrónimo: " + acronimo);


// Challenge 18: caracteres

// Solicita al usuario un mensaje de texto
var mensajeUsuario = prompt("Por favor, ingresa un mensaje de texto:");

// Cuenta la cantidad de caracteres
var caracteres = mensajeUsuario.length;

// cuenta la cantidad de palabras en el mensaje
var palabras = mensajeUsuario.split(" ").filter(Boolean).length;

// cuenta la cantidad de oraciones en el mensaje (si terminan con '.', '!' o '?')
var oraciones = mensajeUsuario.split(/[.!?]/).filter(Boolean).length;

// muestra los resultados
console.log("Cantidad de caracteres: " + caracteres);
console.log("Cantidad de palabras: " + palabras);
console.log("Cantidad de oraciones: " + oraciones);


// Challenge 19: encriptador 

// Solicitar al usuario un mensaje
var mensajeUsuario = prompt("Por favor, ingresa un mensaje:");

// Función para encriptar un carácter
function encriptarCaracter(caracter) {
  var codigo = caracter.charCodeAt(0);
  var mayuscula = (caracter === caracter.toUpperCase());

  if ((codigo >= 65 && codigo <= 90) || (codigo >= 97 && codigo <= 122)) {
    // Si es una letra del alfabeto
    codigo += 1;
    if (codigo > (mayuscula ? 90 : 122)) {
      codigo -= 26; // Volver al inicio del alfabeto
    }
    return String.fromCharCode(codigo);
  } else {
    // Mantener caracteres no alfabéticos sin cambios
    return caracter;
  }
}

// Función para encriptar un mensaje
function encriptarMensaje(mensaje) {
  var mensajeEncriptado = "";
  for (var i = 0; i < mensaje.length; i++) {
    mensajeEncriptado += encriptarCaracter(mensaje.charAt(i));
  }
  return mensajeEncriptado;
}

// Encriptar el mensaje ingresado por el usuario
var mensajeEncriptado = encriptarMensaje(mensajeUsuario);

// Mostrar el mensaje encriptado
console.log("Mensaje Encriptado: " + mensajeEncriptado);


// Challenge 20: language detector

// Solicitar al usuario una palabra
var palabraUsuario = prompt("Por favor, ingresa una palabra:");

// Función para detectar el idioma de una palabra
function detectarIdioma(palabra) {
  var letrasConTilde = "áéíóúÁÉÍÓÚ";
  var tieneTilde = false;
  
  for (var i = 0; i < palabra.length; i++) {
    var letra = palabra.charAt(i);
    if (letrasConTilde.includes(letra)) {
      tieneTilde = true;
      break;
    }
  }
  
  return tieneTilde ? "español" : "inglés";
}

// Detectar el idioma de la palabra ingresada por el usuario
var idiomaDetectado = detectarIdioma(palabraUsuario);

// Mostrar el resultado
console.log("El idioma detectado es: " + idiomaDetectado);


// Challenge 21: "FIZZ BUZZ"

for (var i = 1; i <= 100; i++) {
  var resultado = "";

  // Comprobar si es múltiplo de 3 y/o 5
  if (i % 3 === 0) {
    resultado += "fizz";
  }
  if (i % 5 === 0) {
    resultado += "buzz";
  }

  // Si no es múltiplo de 3 ni de 5, imprimir el número
  if (resultado === "") {
    resultado = i;
  }

  // Imprimir el resultado con un salto de línea
  console.log(resultado);
}


// Challenge 22: hacker language

// Función para transformar un carácter en "leet"
function transformarLeet(caracter) {
  switch (caracter.toLowerCase()) {
    case 'a':
      return '4';
    case 'b':
      return '8';
    case 'c':
      return '<';
    case 'd':
      return '[)';
    case 'e':
      return '3';
    case 'f':
      return '|=';
    case 'g':
      return '6';
    case 'h':
      return '/-/';
    case 'i':
      return '1';
    case 'j':
      return '_|';
    case 'k':
      return '|<';
    case 'l':
      return '|_';
    case 'm':
      return '|\/|';
    case 'n':
      return '/\/';
    case 'o':
      return '0';
    case 'p':
      return '|°';
    case 'q':
      return '9';
    case 'r':
      return '|2';
    case 's':
      return '5';
    case 't':
      return '7';
    case 'u':
      return '|_|';
    case 'v':
      return '\/';
    case 'w':
      return '\\/\\/';
    case 'x':
      return '><';
    case 'y':
      return '`/';
    case 'z':
      return '2';
    default:
      return caracter;
  }
}

// Función para transformar un texto en "leet"
function transformarTextoLeet(texto) {
  var resultado = '';
  for (var i = 0; i < texto.length; i++) {
    resultado += transformarLeet(texto.charAt(i));
  }
  return resultado;
}

// Solicitar al usuario un texto
var textoUsuario = prompt("Por favor, ingresa un texto:");

// Transformar el texto en "leet" y mostrar el resultado
var textoLeet = transformarTextoLeet(textoUsuario);
console.log("Texto en 'leet': " + textoLeet);


//Challenge 23: tennis
// Función para calcular la puntuación del juego
function calcularPuntuacion(juego) {
  var puntuaciones = ["Love", 15, 30, 40, "Deuce", "Ventaja"];
  var puntuacionP1 = 0;
  var puntuacionP2 = 0;
  var resultado = "";

  for (var i = 0; i < juego.length; i++) {
    if (juego[i] === "P1") {
      puntuacionP1++;
    } else if (juego[i] === "P2") {
      puntuacionP2++;
    }

    // Comprobar si hay un ganador
    if (puntuacionP1 >= 4 && puntuacionP1 - puntuacionP2 >= 2) {
      resultado = "Ha ganado el P1";
      break;
    } else if (puntuacionP2 >= 4 && puntuacionP2 - puntuacionP1 >= 2) {
      resultado = "Ha ganado el P2";
      break;
    } else if (puntuacionP1 >= 3 && puntuacionP2 >= 3 && puntuacionP1 === puntuacionP2) {
      resultado = "Deuce";
    } else if (puntuacionP1 >= 4 && puntuacionP1 - puntuacionP2 === 1) {
      resultado = "Ventaja P1";
    } else if (puntuacionP2 >= 4 && puntuacionP2 - puntuacionP1 === 1) {
      resultado = "Ventaja P2";
    } else {
      resultado = puntuaciones[puntuacionP1] + " - " + puntuaciones[puntuacionP2];
    }
  }

  return resultado;
}

// Función para validar la entrada del usuario
function validarEntrada(entrada) {
  return /^([P1P2]+)$/.test(entrada);
}

// Solicitar al usuario una secuencia de puntos
var secuencia = prompt("Por favor, ingresa una secuencia de puntos (P1 o P2):");

// Validar la entrada del usuario
if (!validarEntrada(secuencia)) {
  console.log("Entrada no válida. Por favor, utiliza solo 'P1' o 'P2'.");
} else {
  // Convertir la entrada del usuario en un array
  var juego = secuencia.split("");
  // Calcular la puntuación del juego
  var resultadoJuego = calcularPuntuacion(juego);
  // Mostrar el resultado
  console.log(resultadoJuego);
}


// Challenge 24: password generator

// Función para generar una contraseña aleatoria
function generarContraseña(longitud, incluirMayusculas, incluirNumeros, incluirSimbolos) {
  const caracteres = 'abcdefghijklmnopqrstuvwxyz';
  const mayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numeros = '0123456789';
  const simbolos = '!@#$%^&*()-_+=<>?';

  let caracteresDisponibles = caracteres;
  if (incluirMayusculas) caracteresDisponibles += mayusculas;
  if (incluirNumeros) caracteresDisponibles += numeros;
  if (incluirSimbolos) caracteresDisponibles += simbolos;

  let contraseña = '';
  for (let i = 0; i < longitud; i++) {
    const caracterAleatorio = caracteresDisponibles.charAt(Math.floor(Math.random() * caracteresDisponibles.length));
    contraseña += caracterAleatorio;
  }

  return contraseña;
}

// Solicitar al usuario los parámetros para generar la contraseña
const longitud = parseInt(prompt("Longitud de la contraseña (entre 8 y 16):"));
const incluirMayusculas = confirm("Incluir letras mayúsculas?");
const incluirNumeros = confirm("Incluir números?");
const incluirSimbolos = confirm("Incluir símbolos?");

// Validar la longitud
if (isNaN(longitud) || longitud < 8 || longitud > 16) {
  console.log("Longitud no válida. Debe estar entre 8 y 16 caracteres.");
} else {
  // Generar la contraseña según los parámetros
  const contraseñaGenerada = generarContraseña(longitud, incluirMayusculas, incluirNumeros, incluirSimbolos);
  // Mostrar la contraseña generada
  console.log("Contraseña generada: " + contraseñaGenerada);
}


// Challenge 25: primo, fibonacci y par

// Función para verificar si un número es primo
function esPrimo(numero) {
  if (numero <= 1) return false;
  if (numero <= 3) return true;

  if (numero % 2 === 0 || numero % 3 === 0) return false;

  for (let i = 5; i * i <= numero; i += 6) {
    if (numero % i === 0 || numero % (i + 2) === 0) return false;
  }

  return true;
}

// Función para verificar si un número está en la serie de Fibonacci
function esFibonacci(numero) {
  let a = 0;
  let b = 1;
  while (a < numero) {
    const temp = a;
    a = b;
    b = temp + b;
  }
  return a === numero;
}

// Función para verificar si un número es par o impar
function esPar(numero) {
  return numero % 2 === 0;
}

// Solicitar al usuario un número
const numero = parseInt(prompt("Por favor, ingresa un número:"));

// Verificar si es primo, está en Fibonacci y si es par o impar
const esPrimoResultado = esPrimo(numero) ? "es primo" : "no es primo";
const esFibonacciResultado = esFibonacci(numero) ? "es parte de Fibonacci" : "no es parte de Fibonacci";
const esParResultado = esPar(numero) ? "es par" : "es impar";

// Mostrar los resultados
console.log(`${numero} ${esPrimoResultado}, ${esFibonacciResultado} y ${esParResultado}`);


// Challenge 26: rock, paper, scisor

// Función para determinar el ganador de un juego
function determinarGanador(jugador1, jugador2) {
  if (jugador1 === jugador2) {
    return "Tie";
  }

  if (
    (jugador1 === "rock" && (jugador2 === "scissors" || jugador2 === "lizard")) ||
    (jugador1 === "paper" && (jugador2 === "rock" || jugador2 === "Spock")) ||
    (jugador1 === "scissors" && (jugador2 === "paper" || jugador2 === "lizard")) ||
    (jugador1 === "lizard" && (jugador2 === "Spock" || jugador2 === "paper")) ||
    (jugador1 === "Spock" && (jugador2 === "scissors" || jugador2 === "rock"))
  ) {
    return "Player 1";
  } else {
    return "Player 2";
  }
}

// Función para calcular el ganador de una serie de partidas
function calcularGanador(partidas) {
  let contadorPlayer1 = 0;
  let contadorPlayer2 = 0;

  for (let i = 0; i < partidas.length; i++) {
    const resultado = determinarGanador(partidas[i][0], partidas[i][1]);
    if (resultado === "Player 1") {
      contadorPlayer1++;
    } else if (resultado === "Player 2") {
      contadorPlayer2++;
    }
  }

  if (contadorPlayer1 > contadorPlayer2) {
    return "Player 1";
  } else if (contadorPlayer2 > contadorPlayer1) {
    return "Player 2";
  } else {
    return "Tie";
  }
}

// Ejemplo de entrada: [("rock", "scissors"), ("paper", "rock"), ("scissors", "paper")]
const partidas = [
  ["rock", "scissors"],
  ["paper", "rock"],
  ["scissors", "paper"]
];

const ganador = calcularGanador(partidas);
console.log("El ganador es: " + ganador);


// Challenge 27: el sombrero seleccionador

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("¡Bienvenido al Sombrero Seleccionador de Hogwarts!");

rl.question("¿Eres valiente? (Sí/No): ", (respuesta1) => {
  rl.question("¿Prefieres la astucia sobre la valentía? (Sí/No): ", (respuesta2) => {
    const valiente = respuesta1.toLowerCase() === 'sí';
    const astuto = respuesta2.toLowerCase() === 'sí';

    if (valiente && astuto) {
      console.log("¡Eres un Slytherin!");
    } else if (valiente) {
      console.log("¡Eres un Gryffindor!");
    } else if (astuto) {
      console.log("¡Eres un Slytherin!");
    } else {
      console.log("No puedo determinar tu casa. ¡Hogwarts no es para ti!");
    }

    rl.close();
  });
});


// Challenge 28: generador pseudoaleatorio

const m = 97; 
const a = 5;
const c = 11;
let x = 0; 

// Función para generar un número pseudoaleatorio entre 0 y 100
function generarNumeroAleatorio() {
  x = (a * x + c) % m;
  return Math.floor(x / m * 101); 
}

for (let i = 0; i < 10; i++) {
  const numeroAleatorio = generarNumeroAleatorio();
  console.log(numeroAleatorio);
}


// Challenge 29: HETEROGRAMA, ISOGRAMA Y PANGRAMA

// Función para verificar si una cadena es un heterograma
function esHeterograma(cadena) {
  const letras = cadena.toLowerCase().replace(/[^a-z]/g, '');
  const setLetras = new Set(letras);
  return letras.length === setLetras.size;
}

// Función para verificar si una cadena es un isograma
function esIsograma(cadena) {
  const letras = cadena.toLowerCase().replace(/[^a-z]/g, '');
  const setLetras = new Set(letras);
  return letras.length === setLetras.size;
}

// Función para verificar si una cadena es un pangrama
function esPangrama(cadena) {
  const letras = cadena.toLowerCase().replace(/[^a-z]/g, '');
  const setLetras = new Set(letras);
  return setLetras.size === 26; // Hay 26 letras en el alfabeto inglés
}

// Ejemplos de uso
const textoHeterograma = "Murciélago";
const textoIsograma = "Programación";
const textoPangrama = "The quick brown fox jumps over the lazy dog";

console.log(`"${textoHeterograma}" es un heterograma: ${esHeterograma(textoHeterograma)}`);
console.log(`"${textoIsograma}" es un isograma: ${esIsograma(textoIsograma)}`);
console.log(`"${textoPangrama}" es un pangrama: ${esPangrama(textoPangrama)}`);


// Challenge 30: Viernes 13

function existeViernes13(mes, año) {
  // Crear un objeto Date con el día 13 del mes y año indicados
  const fecha = new Date(año, mes - 1, 13); // 0 (enero) hasta 11 (diciembre)

  // Obtener el día de la semana (0 para domingo, 1 para lunes, ..., 6 para sábado)
  const diaSemana = fecha.getDay();

  // Verificar si el día de la semana es viernes (5)
  return diaSemana === 5;
}

const mes = 12; 
const año = 2023;

if (existeViernes13(mes, año)) {
  console.log(`¡Viernes 13 existe en ${mes}/${año}!`);
} else {
  console.log(`No hay Viernes 13 en ${mes}/${año}.`);
}


// Challenge 31: guess the word

// Lista de palabras para adivinar
const palabras = ["tecnología", "programación", "javascript", "lenguaje"];

// Función para seleccionar una palabra aleatoria y ocultar algunas letras
function seleccionarPalabra() {
  const palabraAleatoria = palabras[Math.floor(Math.random() * palabras.length)];
  const longitud = palabraAleatoria.length;
  const porcentajeOculto = Math.random() * 0.4 + 0.2; // Entre 20% y 60% oculto
  const letrasOcultas = Math.floor(longitud * porcentajeOculto);

  let palabraOculta = "";
  for (let i = 0; i < longitud; i++) {
    if (i < letrasOcultas) {
      palabraOculta += "_";
    } else {
      palabraOculta += palabraAleatoria[i];
    }
  }

  return {
    palabra: palabraAleatoria,
    palabraOculta: palabraOculta,
  };
}

// Función para jugar
function jugar() {
  const { palabra, palabraOculta } = seleccionarPalabra();
  let intentos = 5;
  let letrasAdivinadas = "";

  console.log(`Juego de adivinanza de palabras`);
  console.log(`Palabra a adivinar: ${palabraOculta}`);
  console.log(`Número de intentos restantes: ${intentos}`);

  function mostrarMensajeGanador() {
    console.log(`¡Felicidades! Has adivinado la palabra: ${palabra}`);
  }

  function mostrarMensajePerdedor() {
    console.log(`Te has quedado sin intentos. La palabra era: ${palabra}`);
  }

  function adivinar(letra) {
    if (letra.length === 1) {
      if (palabra.includes(letra)) {
        letrasAdivinadas += letra;
        palabraOculta = palabra.split('').map(char => letrasAdivinadas.includes(char) ? char : '_').join('');
        console.log(`Palabra a adivinar: ${palabraOculta}`);
        if (palabraOculta === palabra) {
          mostrarMensajeGanador();
          return true;
        }
      } else {
        intentos--;
        console.log(`Letra incorrecta. Número de intentos restantes: ${intentos}`);
        if (intentos === 0) {
          mostrarMensajePerdedor();
          return true;
        }
      }
    } else if (letra === palabra) {
      mostrarMensajeGanador();
      return true;
    } else {
      intentos--;
      console.log(`Palabra incorrecta. Número de intentos restantes: ${intentos}`);
      if (intentos === 0) {
        mostrarMensajePerdedor();
        return true;
      }
    }
    return false;
  }

  function jugarTurno() {
    const input = prompt("Adivina la palabra:");
    if (!adivinar(input.toLowerCase())) {
      jugarTurno();
    }
  }

  jugarTurno();
}

jugar();


// Challenge 31: Octal y Hexadecimal

function decimalAOctalYHexadecimal(numeroDecimal) {
  if (isNaN(numeroDecimal) || numeroDecimal < 0 || Math.floor(numeroDecimal) !== numeroDecimal) {
    return "No válido.";
  }

  // Función para convertir a octal
  function decimalAOctal(decimal) {
    let octal = "";
    while (decimal > 0) {
      octal = (decimal % 8).toString() + octal;
      decimal = Math.floor(decimal / 8);
    }
    return octal || "0"; // Devuelve "0" si el número decimal es 0
  }

  // Función para convertir a hexadecimal
  function decimalAHexadecimal(decimal) {
    let hexadecimal = "";
    const caracteresHex = "0123456789ABCDEF";
    while (decimal > 0) {
      hexadecimal = caracteresHex[decimal % 16] + hexadecimal;
      decimal = Math.floor(decimal / 16);
    }
    return hexadecimal || "0"; // Devuelve "0" si el número decimal es 0
  }

  const octal = decimalAOctal(numeroDecimal);
  const hexadecimal = decimalAHexadecimal(numeroDecimal);

  return {
    octal: octal,
    hexadecimal: hexadecimal,
  };
}

// Ejemplo de uso:
const numeroDecimal = 123;
const conversiones = decimalAOctalYHexadecimal(numeroDecimal);
console.log(`Decimal: ${numeroDecimal}`);
console.log(`Octal: ${conversiones.octal}`);
console.log(`Hexadecimal: ${conversiones.hexadecimal}`);


// Challenge 32: análisis de texto

function analizarTexto(texto) {
  let numeroTotalPalabras = 0;
  let longitudTotalPalabras = 0;
  let numeroOraciones = 0;
  let palabraMasLarga = "";
  let palabraActual = "";
  let enMedioDePalabra = false;

  for (let i = 0; i < texto.length; i++) {
    const caracter = texto[i];

    if (caracter === " " || caracter === "\n" || caracter === "\t" || caracter === "\r") {
      // Si encontramos un espacio, salto de línea o tabulación, consideramos que es el final de una palabra
      if (palabraActual.length > 0) {
        numeroTotalPalabras++;

        // Verificar si esta palabra es la más larga
        if (palabraActual.length > palabraMasLarga.length) {
          palabraMasLarga = palabraActual;
        }

        longitudTotalPalabras += palabraActual.length;
        palabraActual = "";
      }
    } else if (caracter === "." || caracter === "!" || caracter === "?") {
      // Si encontramos un punto, signo de exclamación o signo de interrogación, consideramos que es el final de una oración
      numeroOraciones++;
    } else {
      // Si es otro caracter, lo consideramos parte de una palabra
      palabraActual += caracter;
    }
  }

  // Añadir la última palabra si existe
  if (palabraActual.length > 0) {
    numeroTotalPalabras++;

    // Verificar si esta palabra es la más larga
    if (palabraActual.length > palabraMasLarga.length) {
      palabraMasLarga = palabraActual;
    }

    longitudTotalPalabras += palabraActual.length;
  }

  const longitudMediaPalabras = longitudTotalPalabras / numeroTotalPalabras;

  return {
    numeroTotalPalabras,
    longitudMediaPalabras,
    numeroOraciones,
    palabraMasLarga,
  };
}

const texto = "En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor.";
const resultado = analizarTexto(texto);

console.log("Número total de palabras:", resultado.numeroTotalPalabras);
console.log("Longitud media de las palabras:", resultado.longitudMediaPalabras.toFixed(2));
console.log("Número de oraciones:", resultado.numeroOraciones);
console.log("Palabra más larga:", resultado.palabraMasLarga);


// Challenge 33: la trifuerza 

function dibujarTrifuerza(n) {
  // Calcular la altura del triángulo superior
  const alturaSuperior = 2 ** (n - 1);

  // Dibujar el triángulo superior
  for (let i = 1; i <= alturaSuperior; i++) {
    let espacios = " ".repeat(alturaSuperior - i);
    let asteriscos = "*".repeat(i * 2 - 1);
    console.log(espacios + asteriscos + espacios);
  }

  // Dibujar el triángulo inferior
  for (let i = 1; i <= alturaSuperior; i++) {
    let asteriscos = "*".repeat(alturaSuperior * 2 - 1);
    console.log(asteriscos);
  }

  // Dibujar la línea horizontal del medio
  let asteriscosMedio = "*".repeat(alturaSuperior * 4 - 1);
  console.log(asteriscosMedio);
}

// Especifica el número de filas (por ejemplo, 2)
const filas = 2;
dibujarTrifuerza(filas);


// Challenge 34: números primos gemelos

function esPrimo(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;

  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
    i += 6;
  }

  return true;
}

function encontrarPrimosGemelos(rangoMaximo) {
  const primosGemelos = [];
  for (let i = 2; i <= rangoMaximo - 2; i++) {
    if (esPrimo(i) && esPrimo(i + 2)) {
      primosGemelos.push([i, i + 2]);
    }
  }
  return primosGemelos;
}

// Rango 20
const rangoMaximo = 20;
const paresPrimosGemelos = encontrarPrimosGemelos(rangoMaximo);

console.log("Pares de números primos gemelos en el rango máximo " + rangoMaximo + ":");
paresPrimosGemelos.forEach(par => console.log(`(${par[0]}, ${par[1]})`));


// Challenge 35: spiral

function dibujarEspiral(tamanoLado) {
  const matriz = [];
  // Inicializar la matriz con espacios en blanco
  for (let i = 0; i < tamanoLado; i++) {
    matriz.push(new Array(tamanoLado).fill(" "));
  }

  let filaInicio = 0;
  let filaFin = tamanoLado - 1;
  let columnaInicio = 0;
  let columnaFin = tamanoLado - 1;
  let contador = 1;
  let direccion = 0;

  while (filaInicio <= filaFin && columnaInicio <= columnaFin) {
    if (direccion === 0) {
      // Mover hacia la derecha
      for (let i = columnaInicio; i <= columnaFin; i++) {
        if (i === columnaFin) {
          matriz[filaInicio][i] = "╗";
        } else {
          matriz[filaInicio][i] = "═";
        }
      }
      filaInicio++;
      direccion = 1;
    } else if (direccion === 1) {
      // Mover hacia abajo
      for (let i = filaInicio; i <= filaFin; i++) {
        if (i === filaFin) {
          matriz[i][columnaFin] = "╝";
        } else {
          matriz[i][columnaFin] = "║";
        }
      }
      columnaFin--;
      direccion = 2;
    } else if (direccion === 2) {
      // Mover hacia la izquierda
      for (let i = columnaFin; i >= columnaInicio; i--) {
        if (i === columnaInicio) {
          matriz[filaFin][i] = "╚";
        } else {
          matriz[filaFin][i] = "═";
        }
      }
      filaFin--;
      direccion = 3;
    } else {
      // Mover hacia arriba
      for (let i = filaFin; i >= filaInicio; i--) {
        if (i === filaInicio) {
          matriz[i][columnaInicio] = "╔";
        } else {
          matriz[i][columnaInicio] = "║";
        }
      }
      columnaInicio++;
      direccion = 0;
    }
  }

  // Función para imprimir la matriz
  function imprimirMatriz(matriz) {
    for (let i = 0; i < tamanoLado; i++) {
      console.log(matriz[i].join(""));
    }
  }

  // Imprimir la espiral
  imprimirMatriz(matriz);
}

// Especifica el tamaño del lado (por ejemplo, 5)
const tamanoLado = 5;
dibujarEspiral(tamanoLado);


// Challenge 36: conteo regresivo

function conteoRegresivo(inicio, segundosEntreCuenta) {
  if (inicio <= 0 || segundosEntreCuenta <= 0) {
    console.log("Sólo se aceptan números enteros positivos.");
    return;
  }

  let contador = inicio;
  const intervalo = setInterval(() => {
    console.log(contador);
    contador--;

    if (contador < 0) {
      clearInterval(intervalo);
      console.log("¡Conteo regresivo finalizado!");
    }
  }, segundosEntreCuenta * 1000);
}

conteoRegresivo(5, 1);


// Challenge 37: expresión matemática

function esExpresionMatematica(expresion) {
  const patron = /^[-+]?\d+(\.\d+)?(\s*[-+*/%]\s*[-+]?\d+(\.\d+)?)*$/;

  return patron.test(expresion);
}

const expresion1 = "5 + 3 * 2";
console.log(esExpresionMatematica(expresion1));

const expresion2 = "10 / 2 % 4";
console.log(esExpresionMatematica(expresion2));

const expresion3 = "2 + * 7";
console.log(esExpresionMatematica(expresion3));


// Challenge 38: ábaco

function abacoANumero(abaco) {
  const cuentasPorMillon = 10;
  let numero = 0;

  for (let i = 0; i < abaco.length; i++) {
    const cuentaIndex = abaco[i].indexOf("---");
    if (cuentaIndex !== -1) {
      const cuentas = abaco[i].slice(0, cuentaIndex).split("O").length - 1;
      numero += cuentas * Math.pow(cuentasPorMillon, 6 - i);
    }
  }

  return numero;
}

const abaco = [
  "O---OOOOOOOO",
  "OO---OOOOOOO",
  "OOO---OOOOOO",
  "OOOO---OOOOO",
  "OOOOOOO---OO",
  "OOOOOOOOO---",
  "---OOOOOOOOO"
];

const resultado = abacoANumero(abaco);
console.log(resultado);



// Challenge 39: excel

function columnaExcelANumero(columna) {
  let numero = 0;
  const base = 'A'.charCodeAt(0) - 1;
  
  for (let i = 0; i < columna.length; i++) {
    const letra = columna.charAt(i);
    const valor = letra.charCodeAt(0) - base;
    numero = numero * 26 + valor;
  }
  
  return numero;
}

// Ejemplo
const nombreColumna = "AB";
const numeroColumna = columnaExcelANumero(nombreColumna);
console.log(`El número de la columna ${nombreColumna} es ${numeroColumna}`);



// Challenge 40: calculadora de expresiones RPN

function evaluarRPN(expresionRPN) {
  const stack = [];
  const tokens = expresionRPN.split(" ");

  for (let token of tokens) {
    if (!isNaN(token)) {
      // Si el token es un número, lo agregamos a la pila.
      stack.push(parseFloat(token));
    } else {
      // Si el token es un operador, realizamos la operación correspondiente.
      const b = stack.pop();
      const a = stack.pop();

      switch (token) {
        case "+":
          stack.push(a + b);
          break;
        case "-":
          stack.push(a - b);
          break;
        case "*":
          stack.push(a * b);
          break;
        case "/":
          if (b !== 0) {
            stack.push(a / b);
          } else {
            return Infinity; // División por cero
          }
          break;
        default:
          throw new Error("Operador no válido: " + token);
      }
    }
  }

  // Al final, el resultado debe estar en la pila.
  if (stack.length === 1) {
    return Math.floor(stack[0]); // Devolver resultado entero
  } else {
    throw new Error("Expresión RPN inválida.");
  }
}

// Ejemplos de uso:
console.log(evaluarRPN("3 4 +")); // Devuelve 7
console.log(evaluarRPN("5 3 4 + *")); // Devuelve 35
console.log(evaluarRPN("5 1 2 + 4 * + 3 -")); // Devuelve 14
console.log(evaluarRPN("10 2 /")); // Devuelve 5
console.log(evaluarRPN("5 0 /")); // Devuelve Infinity (división por cero)


// Challenge 41: fechas romanas

function fechaRomana(fecha) {
  const numerosRomanos = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  const decenasRomanas = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  const centenasRomanas = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  const milesRomanos = ["", "M", "MM", "MMM"];

  const partes = fecha.split("-");
  const dia = parseInt(partes[0]);
  const mes = parseInt(partes[1]);
  const año = parseInt(partes[2]);

  if (isNaN(dia) || isNaN(mes) || isNaN(año)) {
    throw new Error("Fecha inválida.");
  }

  if (dia < 1 || dia > 31 || mes < 1 || mes > 12 || año < 1 || año > 3999) {
    throw new Error("Fecha fuera de rango.");
  }

  const diaRomano = numerosRomanos[dia] || "";
  const mesRomano = decenasRomanas[Math.floor(mes / 10)] + numerosRomanos[mes % 10] || "";
  const añoRomano = milesRomanos[Math.floor(año / 1000)] +
                    centenasRomanas[Math.floor((año % 1000) / 100)] +
                    decenasRomanas[Math.floor((año % 100) / 10)] +
                    numerosRomanos[año % 10] || "";

  return `${diaRomano}-${mesRomano}-${añoRomano}`;
}

// Ejemplos de uso:
console.log(fechaRomana("01-01-2021")); // Devuelve "I-I-MMXXI"
console.log(fechaRomana("15-05-1998")); // Devuelve "XV-V-MCMXCVIII"



// Challenge 43: compresión de cadenas

function comprimirCadena(cadena) {
  if (!cadena) {
    return "";
  }

  let resultado = "";
  let contador = 1;

  for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] === cadena[i + 1]) {
      contador++;
    } else {
      resultado += cadena[i] + contador;
      contador = 1;
    }
  }

  return resultado;
}

// Ejemplos de uso:
console.log(comprimirCadena("aaabcc")); // Devuelve "a3b1c2"
console.log(comprimirCadena("abcd")); // Devuelve "a1b1c1d1"



// Challenge 44: enlazando palabras

function enlazarPalabras(palabras) {
  if (palabras.length === 0) {
    return false;
  }

  const grafo = {};
  const visitado = {};

  // Construir el grafo
  for (let i = 0; i < palabras.length - 1; i++) {
    const palabraActual = palabras[i];
    const palabraSiguiente = palabras[i + 1];
    const ultimaLetraActual = palabraActual[palabraActual.length - 1];
    const primeraLetraSiguiente = palabraSiguiente[0];

    if (ultimaLetraActual !== primeraLetraSiguiente) {
      return false; // No se puede enlazar
    }

    if (!grafo[palabraActual]) {
      grafo[palabraActual] = [];
    }

    grafo[palabraActual].push(palabraSiguiente);
    visitado[palabraActual] = false;
    visitado[palabraSiguiente] = false;
  }

  // Función recursiva para buscar un camino válido
  function buscarCamino(palabra) {
    if (!grafo[palabra]) {
      return true; // Llegamos al final
    }

    visitado[palabra] = true;

    for (const siguiente of grafo[palabra]) {
      if (!visitado[siguiente] && buscarCamino(siguiente)) {
        return true;
      }
    }

    visitado[palabra] = false;
    return false;
  }

  // Comenzar la búsqueda desde la primera palabra
  return buscarCamino(palabras[0]);
}

// Ejemplos de uso:
console.log(enlazarPalabras(["apple", "egg", "goose"])); // Devuelve true
console.log(enlazarPalabras(["apple", "egg", "elephant", "elephant"])); // Devuelve false



// Challenge 45: secuencias

function buscarSecuencias(listaNumeros, objetivo) {
  const secuencias = [];
  
  for (let i = 0; i < listaNumeros.length; i++) {
    let suma = 0;
    const secuenciaActual = [];
    
    for (let j = i; j < listaNumeros.length; j++) {
      suma += listaNumeros[j];
      secuenciaActual.push(listaNumeros[j]);
      
      if (suma === objetivo) {
        secuencias.push([...secuenciaActual]);
      }
    }
  }
  
  return secuencias;
}

// Ejemplo de uso:
console.log(buscarSecuencias([1, 2, 3, 4, 5], 9)); // Devuelve [[2, 3, 4], [4, 5]]
console.log(buscarSecuencias([1, 2, 3, 4, 5], 1)); // Devuelve [[1]]
console.log(buscarSecuencias([1, 2, 3, 4, 5], 15)); // Devuelve [[1, 2, 3, 4, 5]]



main();


