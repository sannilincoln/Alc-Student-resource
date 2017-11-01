const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const router = require('./routes/api');
const cors = require('cors');

// initialize express
const app = express();

// connect to mongodb
mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost/studentdb', {useMongoClient : true});
mongoose.connect('mongodb://alc:alc@ds149433.mlab.com:49433/studentdb');

app.use(cors());

// set up engine
//app.set('view engine', 'ejs');

// set up stattic files
//app.use(express.static('./public'));

// middleware
app.use(bodyParser.json());
// for parsing application/xwww-
app.use(bodyParser.urlencoded({extended: true}));
// error handling
app.use(function (err, req, res, next) {
  res.status(422).json({error: err.message});
});

app.get('/', function(req,res,next){
  res.status(200).json({
    "message" : "Access the api via api/students"
  });
});

// initialize routes
app.use('/api', require('./routes/api'));



app.get('*', function(req,res,next){
  res.status(404).json({
    "message" : "page not found"
  });
});

PORT =process.env.port || 5000;
app.listen(PORT);
console.log('server started on port: ' + PORT );



