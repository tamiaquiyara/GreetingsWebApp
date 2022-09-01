let express = require('express');
const flash = require('express-flash');
const session = require('express-session');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const Greeting = require('./greet');

const app = express();
const greetings = Greeting();

app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// initialise session middleware - flash-express depends on it
app.use(session({
  secret : "Pain",
  resave: false,
  saveUninitialized: true
}));

// initialise the flash middleware
app.use(flash());

app.get("/", function (req, res) {
  // req.flash('error', 'Flash Message Added');
  res.render("index", {

  });
});

app.post("/greetings", function (req, res) {
  //console.log(req.body)
  let name = req.body.text;
  let language = req.body.TheLanguage;
  let msg
  if (name && language){

     msg = greetings.greet(name, language);
    greetings.storingNames(name)
  }
  let greeterr = greetings.error(name,language)
    req.flash("error", greetings.error(name, language));
  // req.flash("error", greetings.error(name, language));

  // if (name == '' && language == '') {
  //   errorMsg = "Enter name and select a language"

  // } else if (name == '') {
  //   errorMsg = "Enter you name"

  // } else if (language == '') {
  //   errorMsg = "Select a Language";
  // }

  let namesCounted = greetings.nameCount()
  // console.log(namesCounted);
  // console.log(msg);
  // console.log(errorMsg);
  res.render("index", {
    message: msg,
    counter: namesCounted,
    error: greeterr,
  });
});

app.get("/greeted", function (req, res) {
  console.log(greetings.getNames());
    let greetedNames = greetings.getNames()
    
  res.render("greeted", {
    greetedNames
  });
});

app.get("/counter/:name", function (req, res) {
  console.log(greetings.nameCount)
  const nameCount = greetings.personsCount(req.params.name)
  res.render('counter',{
    name: req.params.name,
    nameCount
  })
});

let PORT = process.env.PORT || 3011;

app.listen(PORT, function () {
  console.log('App started on port', PORT);
});