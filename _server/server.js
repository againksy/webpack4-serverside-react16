require('babel-register')({
  plugins: ["transform-decorators-legacy", "dynamic-import-node"],
  presets: ['es2015', 'stage-0', 'react'],
  extensions: [".es6", ".es", ".jsx", ".js"]
});

const express = require('express');
const http   = require('http');
const bodyParser     = require('body-parser');

const app = express();
const env = process.env.NODE_ENV || 'development';

const port = 3000;
app.set('view engine', 'ejs');
app.use(bodyParser.json({ limit: '50mb' }));

app.use(express.static('../public'));

app.use('/', require('./routes'));

app.listen(port, () => {
  console.log('Server started via HTTP on ' + port + ' port');
});
