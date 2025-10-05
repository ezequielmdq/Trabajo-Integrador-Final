import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import  CarritoDeComprasPage  from '../../../pages/e2e/CarritoDeComprasPage';


const envi = Cypress.env('ENV');

const url = Cypress.env(`${envi}`).url;

const productoTshirt = Cypress.env(`${envi}`).producto_tshirts;
const productoJeans = Cypress.env(`${envi}`).producto_jeans;

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
});

let categorias;

Given('el usuario entra en la pagina web de Automation Exercise', () => {
    CarritoDeComprasPage.enterWeb(url);
});

When('el usuario elige la opcion Products del menu de navegacion superior', () => {
    CarritoDeComprasPage.enterProducts();
});

When('el usuario hace click en el menu desplegable MEN del menu de opciones CATEGORY', () => {
    CarritoDeComprasPage.enterMen();
});

When('el usuario elige la opcion {string}', (texto) => {
    CarritoDeComprasPage.enterMenCategory(texto);
    categorias = texto;

});

When('el usuario elige un producto', () => {
    if (categorias === 'Tshirts') {
    CarritoDeComprasPage.pickProduct(productoTshirt);}
    else {CarritoDeComprasPage.pickProduct(productoJeans);}
});

When('el usuario hace click en el boton View Product del producto', () => {
    if (categorias === 'Tshirts') {  
    CarritoDeComprasPage.enterViewProuctButton(productoTshirt);}
    else {CarritoDeComprasPage.enterViewProuctButton(productoJeans);}
});

When('el usuario verifica si hay stock disponible', () => {
    CarritoDeComprasPage.checkStockAvailable();
});

When('el usuario hace click en el boton Add to cart', () => {
    CarritoDeComprasPage.addToCart();
});

When('se muestra un cuadro de dialogo con el mensaje {string}', (texto) => {
    CarritoDeComprasPage.addToCartMessage(texto);
});

When('el usuario hace click en el boton View Cart del cuadro de dialogo', () => {
    CarritoDeComprasPage.viewCartFromDialog();
});

When('el usuario hace click en el boton Proceed To Checkout', () => {
    CarritoDeComprasPage.proceedToCheckout();
});

Then('se muestra un cuadro de dialogo con el titulo {string}', (mensaje) => {
    CarritoDeComprasPage.getModalTitle(mensaje)
});

When('el usuario hace click en el boton Continue On Cart', () => {
    CarritoDeComprasPage.continueOnCart();
});

When('el usuario hace click en el boton para borrar el producto', () => {
    CarritoDeComprasPage.deleteProduct();
});

Then('se muestra el mensaje {string}', (mensaje) => {
    CarritoDeComprasPage.emptyCartMessage(mensaje);
});


