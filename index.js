const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes');
const app = express();

const port = 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', routes);
app.listen(port);

console.log('Server running on port ' + port);

const pg = require('pg');
//pg.defaults.ssl = true;

(new pg.Pool()).connect(function(err, client, done) {
  if (err) console.log("error fetching client from pool", err);
  else console.log('Connected to postgres');
  done();
});
