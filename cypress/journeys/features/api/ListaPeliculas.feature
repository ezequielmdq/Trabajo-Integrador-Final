Feature: Obtener la lista de peliculas de la API

  Scenario: Verificar que la API devuelve una lista de peliculas
    Given el usuario verifica que la API está disponible
    When el usuario envía una solicitud GET a la URL de peliculas "<lista>"
    Then el código de respuesta debe ser 200
    And la respuesta contiene una lista de peliculas
    And la lista de peliculas no está vacía
    And cada pelicula en la lista tiene las propiedades "id", "title" y "overview"


Examples:
| lista |  
| popular | 
| now_playing | 
| top_rated |
| upcoming |