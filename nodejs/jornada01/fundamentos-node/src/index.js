const express = require('express');

const app = express();

app.use(express.json());

app.get('/courses', (req, res) => {
  const { page, filtro } = req.query;

  return res.json({ message: `A página é ${page} e o filtro ${filtro}`});
});

app.put('/courses/:id', (req, res) => {
  return res.json({ message: 'Updated' });
});


app.post('/courses', (req, res) => {
  const { name, age } = req.body;

  return res.json({ message: `O nome é ${name} e a idade ${age}`});
});

app.listen(
  3333, 
  () => console.log('🚀 Server is ruuning at http://localhost:3333'
));
