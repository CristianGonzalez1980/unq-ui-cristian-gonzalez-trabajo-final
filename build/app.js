const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

//app.listen(9000);

const port = process.env.PORT || '5000';
app.listen(port, () => console.log('Server started on Port ${port}'));