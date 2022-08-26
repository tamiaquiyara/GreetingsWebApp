let express = require('express');
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');
const Greeting = require('./greet');

const app = express();
const greetings = Greeting();

app.engine('handlebars', exphbs.engine(
  {defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get("/", function(req, res){
  res.render("index",{

  });
});

app.post("/greetings", function(req, res){
  res.render("index",{

  });
});

app.post("/greeted", function(req, res){

  greetings.greet();
  res.redirect('/')
});

app.get("/counter/<USER_NAME>", function(req, res){
  res.redirect('/')
});

let PORT = process.env.PORT || 3011;

app.listen(PORT, function(){
  console.log('App started on port', PORT);
});