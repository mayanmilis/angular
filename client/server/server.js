const express = require('express');
const http = require('http');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

const app = express();

app.use(express.static(__dirname + '../dist/imprint'));
app.get('/*', (req,res) => res.sendFile(path.json(__dirname)));

app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
       "Origin, X-Requested-With, Content-Type, Accept, Authorization"
       );
    if(req.method === 'OPTIONS'){
      res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
      return res.status(200).json({});
    }
  next();
  });


const db = require('./config/keys').mongoURI;

mongoose
    .connect(db)
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));


app.use('/api/items', items)

const port = 5000;

const server = http.createServer(app);

server.listen(port, () => console.log(`Server started on port ${port}`));