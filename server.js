//======================================
//          DEPENDENCIES
//======================================
const express = require('express');
const app = express();
const PORT = 3000;


//======================================
//          DATABASE
//======================================
const budgtr = require('./models/budgtr');

//======================================
//          MiddleWare
//======================================



//======================================
//          Routes
//======================================
//INDEX
app.get('/budgtr/', (req, res) => {
  res.render('index.ejs', {budgtr})
  // console.log(budget)
});

//Show
app.get('/budgtr/:id', (req, res) => {
  res.render('show.ejs', {
    budgtr: budgtr[req.params.id]
})
})



//======================================
//          LISTENERS
//======================================
app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`)
})