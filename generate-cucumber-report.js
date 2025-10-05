const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const messagesFile = 'cypress/reports/cucumber-messages/messages.ndjson';
const outputHtmlDir = 'cypress/reports/html';
const outputHtmlFile = 'cucumber-report.html';
const outputPath = path.join(outputHtmlDir, outputHtmlFile);

try {
  if (!fs.existsSync(messagesFile)) {
    console.error(`Error: El archivo de mensajes no se encontró en ${messagesFile}. ¿Se ejecutó 'cypress run' correctamente?`);
    process.exit(1);
  }

  // Crear directorio de salida si no existe
  if (!fs.existsSync(outputHtmlDir)) {
    fs.mkdirSync(outputHtmlDir, { recursive: true });
  }

  // Crea el stream de lectura del archivo de mensajes
  const messagesStream = fs.createReadStream(messagesFile);

  // Crea el stream de escritura del reporte HTML
  const outputStream = fs.createWriteStream(outputPath);

  // Inicia el proceso de cucumber-html-formatter, especificando el shell
  const formatterProcess = spawn('npx', ['cucumber-html-formatter'], {
    stdio: ['pipe', 'pipe', 'inherit'],
    shell: true // <-- Añade esta línea
  });

  // Conecta el stream de mensajes a la entrada del formateador
  messagesStream.pipe(formatterProcess.stdin);

  // Conecta la salida del formateador al archivo HTML
  formatterProcess.stdout.pipe(outputStream);

  // Maneja los eventos de finalización y error
  formatterProcess.on('close', (code) => {
    if (code === 0) {
      console.log(`Reporte HTML de Cucumber generado en ${outputPath}`);
    } else {
      console.error(`El formateador de HTML finalizó con el código de salida ${code}`);
      process.exit(1);
    }
  });
  
  formatterProcess.on('error', (err) => {
    console.error(`Error al ejecutar el formateador: ${err}`);
  });

} catch (error) {
  console.error("Fallo al generar el reporte HTML de Cucumber:", error);
  process.exit(1);
}