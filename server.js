const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 8080;




app.use(express.static('./dist/YashPortfolio'));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:8080"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/YashPortfolio/'}
  );
});

app.listen(port,  () => {
  console.log("listening on port " +  port)
});
