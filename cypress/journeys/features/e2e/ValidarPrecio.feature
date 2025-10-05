Feature: Validar precio total del carrito de compras

Background:
    Given el usuario entra en la pagina web de Automation Exercise
    When el usuario elige la opcion Products del menu de navegacion superior
    And el usuario hace click en el menu desplegable MEN del menu de opciones CATEGORY

Scenario: Agregar un producto al carrito de compras de la categoria TSHIRTS y validar el precio total
    And el usuario elige la opcion "Tshirts"
    And el usuario elige un producto
    And el usuario hace click en el boton View Product del producto
    And el usuario verifica el precio del producto
    And el usuario cambia la cantidad del pedido
    And el usuario hace click en el boton Add to cart
    And se muestra un cuadro de dialogo con el mensaje "Your product has been added to cart."
    And el usuario hace click en el boton View Cart del cuadro de dialogo
    And el usuario verifica que el precio sea igual al de la pantalla de detalles 
    And el usuario verifica que la cantidad del pedido sea igual al de la pantalla de detalles
    Then el usuario verifica que el total a pagar sea el correcto

Scenario: Agregar un producto al carrito de compras de la categoria JEANS y validar el precio total
    And el usuario elige la opcion "Jeans"
    And el usuario elige un producto
    And el usuario hace click en el boton View Product del producto
    And el usuario verifica el precio del producto
    And el usuario cambia la cantidad del pedido
    And el usuario hace click en el boton Add to cart
    And se muestra un cuadro de dialogo con el mensaje "Your product has been added to cart."
    And el usuario hace click en el boton View Cart del cuadro de dialogo
    And el usuario verifica que el precio sea igual al de la pantalla de detalles 
    And el usuario verifica que la cantidad del pedido sea igual al de la pantalla de detalles
    Then el usuario verifica que el total a pagar sea el correcto