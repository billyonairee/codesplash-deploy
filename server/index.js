const express = require('express');

const app = express();
const cors = require('cors');
const routes = require('./routes')
require('./config')
const PORT = 3000;

app.use(cors());
app.use('/', routes)

app.listen(PORT, ()=>{
  console.log('server listen on ' + PORT)
})