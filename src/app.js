const path = require('path');
const express = require('express');
const compression = require('compression');
const favicon = require('serve-favicon');

const router = require('./router.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const app = express();


app.use(compression());
app.use('/assets', express.static(path.resolve(`${__dirname}/../client/`)));
app.use(favicon(path.resolve(`${__dirname}/../client/img/favicon.ico`)));

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`Listening on port ${port}`);
});





