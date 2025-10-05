Feature: Ver detalles de una película desde la API

  Scenario: El usuario consulta los detalles de la película segun el ID
    Given el usuario verifica que la API está disponible
    When el usuario consulta la API para obtener los detalles de la película con ID "<ID>"
    Then la película tiene el título con la propiedad "title"
    And la película tiene una fecha de lanzamiento con la propiedad "release_date"
    And la película tiene el género con la propiedad "genres"
    And la película tiene un presupuesto con la propiedad "budget"
    And la película tiene una calificación con la propiedad "vote_average"
    And la película tiene el idioma con la propiedad "spoken_languages"
    

Examples:
| ID |  
| 617126 | 
| 1267319 | 
| 1311031 |
| 941109 |
| 1257009 |
| 1328803 |