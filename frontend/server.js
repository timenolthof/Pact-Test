const proxy = require('express-http-proxy');
const express = require('express');
const app = express();
const url = require('url');

const stockBackendURL = 'http://localhost:8080';

app.use(express.static(__dirname + '/app'));
app.use('/api', proxy(
  stockBackendURL,
  {
    forwardPath: function(req, res) {
      return '/api' + url.parse(req.url).path;
    }
  }
));
app.use(errorHandler);

app.listen(8000, function () {
  console.log('StocksApp frontend listening on port 8000!')
});

function errorHandler(err, req, res, next) {
  console.log('Warning: StockBackend not available.');
  res.status(503);
  res.end();
}
