const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;
const router = express.Router();
const exphbs = require('express-handlebars')

// Serving static html files
app.use(express.json());
app.use(express.static('public'));
app.use(express.static('views'));

// Setting app engine  for handlebars 
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


// Get request for default images of the website
app.get('/img', (req, res) => { 
  res.sendFile(path.join(__dirname, '/public/assets/images/slide.jpg'))
});

app.get('/img2', (req, res) => { 
  res.sendFile(path.join(__dirname, '/public/assets/images/adopt_me.png'))
});

router.get("/js", (req, res) => {
  res.sendFile(path.join(__dirname,"/public/assets/js/app.js"));    
});


// Import routes and give the server access to them.
var routes = require("./controllers/adoptmeController.js");

app.use(routes);


// listen on the port
app.listen(PORT, () => console.log(`The app is currently listening at http://localhost:${PORT}`));