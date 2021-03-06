const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const getSequelize = require('./app/models');

const app = express();

var corsOptions = {
  origin: 'http://localhost:8081',
};

app.use(cors(corsOptions));

//parse json body requests
app.use(bodyParser.json());

//parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//test route
app.get('/', (req, res) => {
  res.json({ message: 'Test Route: Welcome!' });
});

//another test route
app.get('/test', async (req, res) => {
  const sequelize = await getSequelize();
  const result = await sequelize.models.books.findAll();
  res.json({ result });
});
//set port to listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
