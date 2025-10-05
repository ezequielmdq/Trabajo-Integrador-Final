const { defineConfig } = require("cypress");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
//module.exports = defineConfig({
//chromeWebSecurity: false,
//e2e: {
//setupNodeEvents(on, config) {
   // require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin(on, config);
   // on("file:preprocessor", createBundler({
 //       plugins: [createEsbuildPlugin(config)],
 //   }));
 //   return config;
//},
//specPattern: "cypress/journeys/**/features/**/*.feature",

//},
//});

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    async setupNodeEvents(on, config) {
      // Configuración del preprocesador de Cucumber
      await require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin(on, config);
      on("file:preprocessor", createBundler({
        plugins: [createEsbuildPlugin(config)],
      }));

      // AÑADE ESTE BLOQUE PARA REGISTRAR LAS TAREAS
      on('task', {
        // Ejemplo de una tarea simple para imprimir en la consola de Node.js
        log(message) {
          console.log(message);
          return null;
        },
        // Si tu código usa otra tarea, por ejemplo 'db:seed', la defines aquí
        'db:seed'(seedData) {
          // Lógica para interactuar con la base de datos
          console.log('Seeding database with:', seedData);
          return 'Seed complete';
        }
      });
      // FIN DEL BLOQUE DE TAREAS

      return config;
    },
    specPattern: "cypress/journeys/**/features/**/*.feature",
  },
});
