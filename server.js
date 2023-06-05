//======================================
//          DEPENDENCIES
//======================================
const express = require('express');
const app = express();
const PORT = 3000;

//======================================
//          DATABASE
//======================================
const budgtr = require('./models/budgtr')


//======================================
//          Routes
//======================================
//INDEX
app.get('/budgtr/', (req, res) => {
  res.render('index.ejs', {budgtr})
  // console.log(budget)
})




//======================================
//          LISTENERS
//======================================
app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`)
})