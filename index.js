const express = require('express');
const { config } = require('./config/');
const app = express();

app.get('/', (req, res) => {
   res.json({
      app: 'initizialice project',
      message: 'index.js',
   });
});

app.listen(config.port, (err) => {
   if (err) console.log(err);
   else console.log(`Listening http://localhost:${config.port}`);
});
