const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(express.static('public/'));

require('./routes')(app);

app.set('view engine', 'ejs');

app.listen(port, () => {
  console.log('server is running on port ' + port);
});
