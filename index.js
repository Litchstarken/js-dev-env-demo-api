var express =  require('express');
var cors = require('cors');

const app = express();
app.use(cors());

app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response) {
  response.send('Hello World!')
});

app.get('/users', function(req, res) {
  // Hard coding for simplicity. Pretend this hits a real database
  res.json([
    {"id": 1,"firstName":"Bobby","lastName":"Smith","email":"bob@gmail.com"},
    {"id": 2,"firstName":"Tom","lastName":"Norton","email":"tnorton@yahoo.com"},
    {"id": 3,"firstName":"Angelina","lastName":"Lee","email":"lee.tina@hotmail.com"},
    {"id": 3,"firstName":"John","lastName":"Castle","email":"john.tina@hotmail.com"},
    {"id": 3,"firstName":"Juanita","lastName":"Castle","email":"juanita.tina@hotmail.com"},
    {"id": 3,"firstName":"Samuel","lastName":"Castle","email":"samuel.tina@hotmail.com"},
    {"id": 3,"firstName":"Jeimmy","lastName":"Castle","email":"jeimmy.tina@hotmail.com"}
  ]);
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port')); 
});