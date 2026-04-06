
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1 style="font-family: sans-serif; text-align: center; margin-top: 50px;">Hello from Hermes! 👋</h1><p style="text-align: center; font-family: sans-serif;">This is a test web app served via a tunnel.</p>');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
