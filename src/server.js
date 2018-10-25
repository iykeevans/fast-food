const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//set view engine PUG
app.set('view engine', 'pug');

//Use MiddleWares
app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
	res.render('index');
});

//set app to listen to port 3000
app.listen(3000, () => console.log('now listening on port 3000'));