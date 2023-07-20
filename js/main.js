alert('Bienvenido... Todas las Respuestas Comienzan con Mayuscula la Primera Palabra... Suerte!!')

let preguntas = [
  {
    pregunta: "¿Cuál es la capital de Francia?",
    respuesta: "París"
  },
  {
    pregunta: "¿Cuántos planetas hay en el sistema solar?",
    respuesta: "8"
  },
  {
    pregunta: "¿Cuál es el río más largo del mundo?",
    respuesta: "Nilo"
  },
  {
    pregunta: "¿De que pelicula es el personaje de 'Koda'?",
    respuesta: "Tierra de osos"
  },
  {
    pregunta: "¿Cual es la capital de Australia?",
    respuesta: "Canberra"
  },
  {
    pregunta: "¿Cual es el pais mas poblado de la tierra?",
    respuesta: "China"
  },
  {
    pregunta: "¿Como se llama el asistente virtual de Apple?",
    respuesta: "Siri"
  },
  {
    pregunta: "¿Quien creo Microsoft?",
    respuesta: "Bill gates"
  }
];

function jugarTrivia() {
  let puntaje = 0;

  for (let i = 0; i < preguntas.length; i++) {
    let respuestaUsuario = prompt(preguntas[i].pregunta);

    if (respuestaUsuario === preguntas[i].respuesta) {
      puntaje++;
      alert("¡Respuesta correcta!");
    } else {
      alert("Respuesta incorrecta. La respuesta correcta es: " + preguntas[i].respuesta);
    }
  }

  alert("Fin del juego. Tu puntaje es: " + puntaje + " de " + preguntas.length);
}

document.getElementById('comenzar-btn').addEventListener('click', function() {
  jugarTrivia();
});
