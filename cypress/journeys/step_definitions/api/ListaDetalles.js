import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

const envi = Cypress.env('ENV');
const url = Cypress.env(`${envi}`).url_api;
const api_key = Cypress.env(`${envi}`).api_key;

let response;

Given('el usuario verifica que la API está disponible', () => {
  
});

When('el usuario consulta la API para obtener los detalles de la película con ID {string}', (lista) => {
  cy.request('GET', url + lista + api_key).then((res) => {
    expect(res.status).to.eq(200);  
    response = res;  
  });
});


Then('la película tiene el título con la propiedad {string}', (prop) => {
  expect(response.body).to.have.property(prop); 
});


Then('la película tiene una fecha de lanzamiento con la propiedad {string}', (prop) => {
  expect(response.body).to.have.property(prop); 
});


Then('la película tiene el género con la propiedad {string}', (prop) => {
  expect(response.body).to.have.property(prop); 
});


Then('la película tiene un presupuesto con la propiedad {string}', (prop) => {
  expect(response.body).to.have.property(prop); 
});  


Then('la película tiene una calificación con la propiedad {string}', (prop) => {
  expect(response.body).to.have.property(prop); 
});


Then('la película tiene el idioma con la propiedad {string}', (prop) => {
  expect(response.body).to.have.property(prop); 
});