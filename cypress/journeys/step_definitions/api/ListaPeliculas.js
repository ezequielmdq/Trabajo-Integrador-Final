import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

const envi = Cypress.env('ENV');

const url = Cypress.env(`${envi}`).url_api;
const api_key = Cypress.env(`${envi}`).api_key;

let response;

Given('el usuario verifica que la API está disponible', () => {
  
});

When('el usuario envía una solicitud GET a la URL de peliculas {string}', (lista) => {
  cy.request('GET', url + lista + api_key).then(res => {
    response = res; 
  });
});

Then('el código de respuesta debe ser {int}', (statusCode) => {
  expect(response.status).to.equal(statusCode);
});

Then('la respuesta contiene una lista de peliculas', () => {
  expect(response.body).to.have.property('results');
  expect(response.body.results).to.be.an('array');
});

Then('la lista de peliculas no está vacía', () => {
  expect(response.body.results).to.not.be.empty;
});

Then('cada pelicula en la lista tiene las propiedades {string}, {string} y {string}', (prop1, prop2, prop3) => {
  const products = response.body.results;
  
  products.forEach(product => {
    expect(product).to.have.property(prop1);
    expect(product).to.have.property(prop2);
    expect(product).to.have.property(prop3);
  });
});
