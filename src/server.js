const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('morgan');

const app = express();
const port = process.env.PORT || 3000;

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

//set app to listen to port 3000
app.listen(port, () => console.log(`now listening on ${port}`));