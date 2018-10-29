const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('morgan');


const app = express();
const port = process.env.PORT || 3000;

//set path to contain the templates ('views')
app.set('views', __dirname + '/views')
//set view engine PUG
app.set('view engine', 'pug');

//Use MiddleWares
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
	res.render('index');
});

app.get('/login', (req, res) => {
	res.render('login');
});

app.get('/signup', (req, res) => {
	res.render('signup');
});

//set app to listen to port 3000
app.listen(port, () => console.log(`now listening on ${port}`));