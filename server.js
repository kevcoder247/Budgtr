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
app.use(express.urlencoded({ extended: false }))


//======================================
//          Routes
//======================================
//INDEX
app.get('/budgtr/', (req, res) => {
  res.render('index.ejs', {budgtr})
  // console.log(budget)
});

//NEW
app.get('/budgtr/new', (req, res) => {
  res.render('new.ejs')
})

//Create 
app.post('/budgtr/', (req, res) =>{
  console.log('New Entry:', req.body);
  res.redirect('/budgtr/');
})


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