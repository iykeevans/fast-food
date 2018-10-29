const express = require('express');
const bodyParser = require('body-parser');


const app = express();

//set path to contain the templates ('views')
app.set('views', __dirname + '/views')
//set view engine PUG
app.set('view engine', 'pug');

//Use MiddleWares
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
app.listen(3000, () => console.log('now listening on port 3000'));