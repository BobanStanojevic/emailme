const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});
const PORT = process.env.PORT || 5000; //production port that Heroku is trying to provide us
app.listen(PORT);
