                                BOOKS API

//Esta es una practica
//Esta api recibe varios parametros y esta conectada a una instancia de mongoDB
//API para el almacenamientode libros
//GET "api/books/"       retornar toda la coleccion de libros
//GET "api/books/:id"    retornar la informacion del libro
//POST "api/books/" 
    recibe:
        name(obligatorio)
        autor(obligatorio)
        releaseDate (d/m/a)(obligatorio)
        numPages (0 - 1000) --no obligatorio 
        cover (url) --no obligatorio 

        ... DEMÁS


//PUT "api/books/:id"    Retorna si fue editado y el id que fue editado
//DELETE "api/books/:id" Retorna si fue eliminada y el id que fue eliminado

//Dependencias de desarrollo
npm i -D eslint eslint-config-prettier config-plugin-prettier husky lint-staged prettier

//Dependencias de produccion
npm i mongodb express dotenv @hapi/boom @hapi/joi
