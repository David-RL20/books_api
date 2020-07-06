const express = require('express');
const { config } = require('./config/');
const books = require('./routes/books');
const app = express();

//It can undestand json
app.use(express.json());
//Uses routes of books
books(app);

app.listen(config.port, (err) => {
   if (err) console.log(err);
   else console.log(`Listening http://localhost:${config.port}`);
});
