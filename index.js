const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`Hello World!`);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:3000`);
});
