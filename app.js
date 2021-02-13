require('dotenv').config();
const exphbs = require('express-handlebars');
const session = require('express-session');
const passport = require('./config/passport');
const express = require('express');
const helmet = require('helmet');
const path = require('path');
const secret = process.env.Session_Secret;
const db = require('./models');

const app = express();
app.use(helmet());

require('./routes/api-routes.js')(app);
require('./routes/html-routes.js')(app);

app.use(express.urlencoded({
  extended: false
}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret,
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');


const PORT = process.env.PORT || 3000;
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log(`🌎 Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`);
  });
});