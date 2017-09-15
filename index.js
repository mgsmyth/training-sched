const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes');
const app = express();

const port = process.env.PORT || 8080;
const path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/css', express.static(__dirname + '/public/stylesheets'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(routes);
app.listen(port);

console.log('Server running on port ' + port);

const pg = require('pg');
//pg.defaults.ssl = true;

(new pg.Pool()).connect(function(err, client, done) {
  if (err) console.log("error fetching client from pool", err);
  else console.log('Connected to postgres');
  done();
});
