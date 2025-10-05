class CarritoDeComprasPage {

    elements = {    
        enterProducts: () => cy.get('.shop-menu > .nav > :nth-child(2) > a'),
        enterMen: () => cy.get(':nth-child(2) > .panel-heading > .panel-title > a > .badge'),
        choseMen: () => cy.get('#Men'),
        pickProduct: () => cy.get('.features_items'),
        viewProductButton: () => cy.get('.features_items'),
        addCartBotom: () => cy.get('.cart'),
        getMessage: () => cy.get('.modal-title'),
        getPrice: () => cy.get('.product-information > :nth-child(6)'),
        proceedToCheckoutButton: () => cy.get('.check_out'),
        continueOnCartButton: () => cy.get('.modal-footer > .btn-success'),
        deleteProductButton: () => cy.get('.cart_quantity_delete'),
        emptyCartMessage: () => cy.get('.container'),
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
    checkStockAvailable() {
        this.elements.getPrice().should('have.text', 'Availability: In Stock');
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
    proceedToCheckout() {
        this.elements.proceedToCheckoutButton().click();
    }
    getModalTitle(mensaje) {

        this.elements.getMessage().should('be.visible').and('have.text', mensaje);;
    }
    continueOnCart() {
        this.elements.continueOnCartButton().should('be.visible').click();
    }
    deleteProduct() {
        this.elements.deleteProductButton().click();
    }
    emptyCartMessage(mensaje) {
        this.elements.emptyCartMessage().should('contain', mensaje);
    }

}

export default new CarritoDeComprasPage();