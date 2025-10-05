

Feature: Agregar y borrar producto del carrito de compras

Background:
    Given el usuario entra en la pagina web de Automation Exercise
    When el usuario elige la opcion Products del menu de navegacion superior
    And el usuario hace click en el menu desplegable MEN del menu de opciones CATEGORY
@smoke
Scenario: Agregar y borrar un producto del carrito de compras de la categoria TSHIRTS
    And el usuario elige la opcion "Tshirts"
    And el usuario elige un producto 
    And el usuario hace click en el boton View Product del producto
    And el usuario verifica si hay stock disponible
    And el usuario hace click en el boton Add to cart 
    And se muestra un cuadro de dialogo con el mensaje "Your product has been added to cart."
    And el usuario hace click en el boton View Cart del cuadro de dialogo
    And el usuario hace click en el boton Proceed To Checkout
    Then se muestra un cuadro de dialogo con el titulo "Checkout"
    When el usuario hace click en el boton Continue On Cart
    When el usuario hace click en el boton para borrar el producto
    Then se muestra el mensaje "Cart is empty!"

Scenario: Agregar y borrar un producto del carrito de compras de la categoria JEANS 
    And el usuario elige la opcion "Jeans"
    And el usuario elige un producto 
    And el usuario hace click en el boton View Product del producto
    And el usuario verifica si hay stock disponible 
    And el usuario hace click en el boton Add to cart 
    And se muestra un cuadro de dialogo con el mensaje "Your product has been added to cart."
    And el usuario hace click en el boton View Cart del cuadro de dialogo
    And el usuario hace click en el boton Proceed To Checkout
    Then se muestra un cuadro de dialogo con el titulo "Checkout"
    When el usuario hace click en el boton Continue On Cart
    When el usuario hace click en el boton para borrar el producto
    Then se muestra el mensaje "Cart is empty!"
