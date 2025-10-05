import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import ValidarPrecioPage  from '../../../pages/e2e/ValidarPrecioPage';
import DataGenerator from '../../../support/DataGenerator';

const envi = Cypress.env('ENV');

const url = Cypress.env(`${envi}`).url;

const productoTshirt = Cypress.env(`${envi}`).producto_tshirts;
const productoJeans = Cypress.env(`${envi}`).producto_jeans;

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
});

let precioProducto;
let precioCarrito;
let categorias;
let cantidadPedido;

Given('el usuario entra en la pagina web de Automation Exercise', () => {
    ValidarPrecioPage.enterWeb(url);
});

When('el usuario elige la opcion Products del menu de navegacion superior', () => {
    ValidarPrecioPage.enterProducts();
});

When('el usuario hace click en el menu desplegable MEN del menu de opciones CATEGORY', () => {
    ValidarPrecioPage.enterMen();
});

When('el usuario elige la opcion {string}', (texto) => {
    ValidarPrecioPage.enterMenCategory(texto);
    categorias = texto;

});

When('el usuario elige un producto', () => {
    if (categorias === 'Tshirts') {
    ValidarPrecioPage.pickProduct(productoTshirt);}
    else {ValidarPrecioPage.pickProduct(productoJeans);}
});

When('el usuario hace click en el boton View Product del producto', () => {
    if (categorias === 'Tshirts') {  
    ValidarPrecioPage.enterViewProuctButton(productoTshirt);}
    else {ValidarPrecioPage.enterViewProuctButton(productoJeans);}
});

When('el usuario verifica el precio del producto', () => {
    ValidarPrecioPage.getProductPrice((precio) => {
        precioProducto = precio;
    });
});

When('el usuario cambia la cantidad del pedido', () => {
    cantidadPedido = DataGenerator.getRandomInt();
    if (categorias === 'Tshirts') {
    ValidarPrecioPage.setProductQuantity(cantidadPedido);}
    else {ValidarPrecioPage.setProductQuantity(cantidadPedido);}
});

When('el usuario hace click en el boton Add to cart', () => {
    ValidarPrecioPage.addToCart();
});

When('se muestra un cuadro de dialogo con el mensaje {string}', (texto) => {
    ValidarPrecioPage.addToCartMessage(texto);
});

When('el usuario hace click en el boton View Cart del cuadro de dialogo', () => {
    ValidarPrecioPage.viewCartFromDialog();
});

When('el usuario verifica que el precio sea igual al de la pantalla de detalles', () => {
        ValidarPrecioPage.validateProductPriceInCart((precio) => {
            precioCarrito = precio;
            expect(precioCarrito).to.equal(precioProducto);});
    });
    

When('el usuario verifica que la cantidad del pedido sea igual al de la pantalla de detalles', () => {
    if (categorias === 'Tshirts') {
    ValidarPrecioPage.validateProductQuantityInCart(cantidadPedido);}
    else {ValidarPrecioPage.validateProductQuantityInCart(cantidadPedido);}
});

Then('el usuario verifica que el total a pagar sea el correcto', () => {
    if (categorias === 'Tshirts') {
    ValidarPrecioPage.validateTotalPriceInCart(cantidadPedido, precioCarrito, (totalTexto, totalEsperado) => {
        expect(totalTexto).to.equal(totalEsperado);
    });}
    else {
        ValidarPrecioPage.validateTotalPriceInCart(cantidadPedido, precioCarrito, (totalTexto, totalEsperado) => {
            expect(totalTexto).to.equal(totalEsperado);
        });
    }
});