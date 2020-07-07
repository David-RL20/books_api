How to start the api?

    1-Verify you have install node and npm
    2-You got them? Fine.Now open your terminal in VS (CTRL + `) or Terminal->New terminal 
    3-now just run the following command
        npm run ins
    this command will download all dependencies needed and after that you will see on console a message like this:
        Listening http://localhost:3001
    In case it crashed you may need to change the number of the port on file .env->PORT.
    4-You good to go.Down below you have the dictionary of the current API

    NOTE: if you want to end the server use CTRL + C and after that answer Y
                                
                                
                                
                                
                                //BOOKS API

METHOD                  URL                                                 BODY
GET         htts://localhost:3001/api/books/                                null
GET         htts://localhost:3001/api/books/:id                             null
POST        htts://localhost:3001/api/books/                                json
PUT         htts://localhost:3001/api/books/:id                             json
DELETE      htts://localhost:3001/api/books/:id                             null

json book example:
    { 
        "tittle": "El principito",
        "description":"",
        "autor": {
            "_id": "150",
            "name": "Leonardo Rivera"
        },
        "releaseDate": 2009,
        "numPages": 500,
        "cover": "https://img1.od-cdn.com/ImageType-400/5835-1/6E6/854/9D/%7B6E68549D-9C8B-4269-B702-EFC9B6E63C1A%7DImg400.jpg",
        "genre": [
            {
                        "_id": "RM",
                        "name": "Romantic"
            },
            {
                "_id": "SP",
                "name": "suspense"
            }
        ]
    }

 

                                //AUTHORS API

METHOD                  URL                                                 BODY
GET         htts://localhost:3001/api/authors/                              null
GET         htts://localhost:3001/api/authors/:id                           null
POST        htts://localhost:3001/api/authors/                              json
PUT         htts://localhost:3001/api/authors/:id                           json
DELETE      htts://localhost:3001/api/authors/:id                           null

json author example:
    {
        "name":"William Shakespeare",
        "originalLanguage":"English",
        "description":"William Shakespeare was an English playwright, poet, and actor, widely regarded as the greatest writer in the English language and the world's greatest dramatist.",
        "photo":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Shakespeare.jpg/220px-Shakespeare.jpg",
        "numberBooks":42,
        "genre":[],
        "books":[]
    }
    





                                //GENRES API

METHOD                  URL                                                 BODY
GET         htts://localhost:3001/api/genres/                               null
GET         htts://localhost:3001/api/genres/:id                            null
POST        htts://localhost:3001/api/genres/                               json
PUT         htts://localhost:3001/api/genres/:id                            json
DELETE      htts://localhost:3001/api/genres/:id                            null


json genre example:

    {
        "name":"Horro"
    }