class ValidarPrecioPage {

elements = {    
        enterProducts: () => cy.get('.shop-menu > .nav > :nth-child(2) > a'),
        enterMen: () => cy.get(':nth-child(2) > .panel-heading > .panel-title > a > .badge'),
        choseMen: () => cy.get('#Men'),
        pickProduct: () => cy.get('.features_items'),
        viewProductButton: () => cy.get('.features_items'),
        setQuantity: () => cy.get('.product-information').find('input[type="number"], input[type="text"]'),
        addCartBotom: () => cy.get('.cart'),
        getQuantityInCart: () => cy.get('.cart_quantity > button'),
        viewMessage: () => cy.get('.modal-content'),
    }
    
    enterWeb(url){
        cy.visit(url);
    }

    enterProducts() {
        this.elements.enterProducts().click();
    }   
    enterMen() {  
        this.elements.enterMen().click();
    }
    enterMenCategory(texto) {
        this.elements.choseMen().then(() => {
            cy.get('.panel-body').find('a:contains("'+texto+'")').click();
            });
    }   
    pickProduct(producto) {
        this.elements.pickProduct().contains(producto).should('be.visible');
    }
    enterViewProuctButton(producto) {
        this.elements.viewProductButton()
          .contains(producto)
          .parents('.product-image-wrapper')
          .parent()
          .find('a:contains("View Product")')
          .should('be.visible')
          .click();
    }
    getProductPrice(callback) {
        cy.get(':nth-child(5) > span').should('exist').then(($precio) => {
        const match = $precio.text().replace(/,/g, '').match(/\d+(\.\d+)?/);
        const precioProducto = match ? match[0] : '';
        if (callback) {
                callback(precioProducto);
            }
        });
    }
    setProductQuantity(cantidad) {
        this.elements.setQuantity().should('be.visible').clear().type(cantidad);
    }
    addToCart() {
        this.elements.addCartBotom().click();
    }
    addToCartMessage(texto) {
        this.elements.viewMessage().should('be.visible').and('contain', texto);
    }
    viewCartFromDialog() {
        this.elements.viewMessage().find('a:contains("View Cart")').should('be.visible').click();
    }
    validateProductPriceInCart(callback) {
        cy.get('.cart_price > p').should('exist').then(($precioCarrito) => {
            const match = $precioCarrito.text().replace(/,/g, '').match(/\d+(\.\d+)?/);
            const precioCarrito = match ? match[0] : '';
            if (callback) {
                callback(precioCarrito);
            }   
        });
    }
    validateProductQuantityInCart(cantidad) {
        this.elements.getQuantityInCart().should('have.text', cantidad.toString());
    }
    validateTotalPriceInCart(cantidad, precioProducto, callback) {
        const precioNum = parseInt(precioProducto);
        const totalEsperado = (precioNum * cantidad).toString();
        cy.get('.cart_total > p').should('exist').then(($total) => {
            const match = $total.text().replace(/,/g, '').match(/\d+/);
            const totalTexto = match ? match[0] : '';
            if (callback) {
                callback(totalTexto, totalEsperado);
            }
        });
    }
}

export default new ValidarPrecioPage();