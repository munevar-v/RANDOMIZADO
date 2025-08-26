// Partes de los saludos en distintos idiomas
const saludos = [
  "Hola",      // Español
  "Hello",     // Inglés
  "Bonjour",   // Francés
  "Olá"        // Portugués
];

const preguntas = [
  "¿cómo estás?",       // Español
  "how are you?",       // Inglés
  "comment ça va?",     // Francés
  "como você está?"     // Portugués
];

// Elegir uno de cada lista al azar
const saludo = saludos[Math.floor(Math.random() * saludos.length)];
const pregunta = preguntas[Math.floor(Math.random() * preguntas.length)];

// Mostrar combinación
document.getElementById("saludo").textContent = `${saludo}, ${pregunta}`;