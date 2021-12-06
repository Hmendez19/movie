# API CINE LEON
----
### Instalar paquetes
- npm install
### Json-server
- instalar json-server
   - npm install -g json-server
cd src/FakeRequests/
json-server --watch moviedata.json 
  **Este se abrirá en el puerto 3000**
  
### Ejecutar aplicación front end
- npm start

### Ejecutar server mailer
- cd src/serverApiMailer
- node server
   **Estará a la escucha en el puerto 3004**

### Endpoint Elaborado con express
 - #### Enviar mensaje 
    - Url: http://localhost:3004/send
    - Método: POST
    - Parámetros:
       ```json
       {
        "year": 2013,
        "title": "Rush",
        "info": {
            "directors": ["Ron Howard"],
            "release_date": "2013-09-02T00:00:00Z",
            "rating": 8.3,
            "genres": [
                "Action",
                "Biography",
                "Drama",
                "Sport"
            ],
            "image_url": "https://ia.media-imdb.com/images/M/MV5BMTQyMDE0MTY0OV5BMl5BanBnXkFtZTcwMjI2OTI0OQ@@._V1_SX400_.jpg",
            "plot": "A re-creation of the merciless 1970s rivalry between Formula One rivals James Hunt and Niki Lauda.",
            "rank": 2,
            "running_time_secs": 7380,
            "actors": [
                "Daniel Bruhl",
                "Chris Hemsworth",
                "Olivia Wilde"
            ]
        }
    }
       ```
      * Response
        **Code:200**
        ```json
         {
           "message": "Correo enviado exitosamente",
           "valid": true
         }
        ```

        **Code:400**
        ```json
         {
           "message": "No se puedo enviar el mensaje",
           "valid": false
         }
        ```

- #### Obtener las películas
    - Se tomó el json para simular la api ejecutada con json-server
    - Url:  http://localhost:3000/movies/
    - Método: GET
    - Parámetros:
      ```javascript
         - apikey: d489d640
         - s : "nombre de la película"
      ```
   * Response
        **Code:200**
   ```json
   [
    {
        "year": 2013,
        "title": "Rush",
        "info": {
            "directors": ["Ron Howard"],
            "release_date": "2013-09-02T00:00:00Z",
            "rating": 8.3,
            "genres": [
                "Action",
                "Biography",
                "Drama",
                "Sport"
            ],
            "image_url": "https://ia.media-imdb.com/images/M/MV5BMTQyMDE0MTY0OV5BMl5BanBnXkFtZTcwMjI2OTI0OQ@@._V1_SX400_.jpg",
            "plot": "A re-creation of the merciless 1970s rivalry between Formula One rivals James Hunt and Niki Lauda.",
            "rank": 2,
            "running_time_secs": 7380,
            "actors": [
                "Daniel Bruhl",
                "Chris Hemsworth",
                "Olivia Wilde"
            ]
        }
    },
    {
        "year": 2013,
        "title": "Prisoners",
        "info": {
            "directors": ["Denis Villeneuve"],
            "release_date": "2013-08-30T00:00:00Z",
            "rating": 8.2,
            "genres": [
                "Crime",
                "Drama",
                "Thriller"
            ],
            "image_url": "https://ia.media-imdb.com/images/M/MV5BMTg0NTIzMjQ1NV5BMl5BanBnXkFtZTcwNDc3MzM5OQ@@._V1_SX400_.jpg",
            "plot": "When Keller Dover's daughter and her friend go missing, he takes matters into his own hands as the police pursue multiple leads and the pressure mounts. But just how far will this desperate father go to protect his family?",
            "rank": 3,
            "running_time_secs": 9180,
            "actors": [
                "Hugh Jackman",
                "Jake Gyllenhaal",
                "Viola Davis"
            ]
        }
    }]
   ```
**Response error**
   ```json
      {
       "Response": "False",
       "Error": "Incorrect IMDb ID."
      }
 ```