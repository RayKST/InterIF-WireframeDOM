// Imports
const express = require('express');
const ejs = require('ejs');
const { resolve } = require('path');

const app = express();
app.use(express.static('static'));
app.set('views', resolve('./templates'))
app.set('view engine', 'ejs')


// Route definition

app.get('/', (req, res) => {
    res.redirect('/login')
});

app.get('/login', (req, res) => {
  res.render('login', {res: res})
});

app.post('/login', (req, res) =>{
    //localStorage.setItem('key', JSON.stringify(req))
    //localStorage.setItem('key2', JSON.stringify(res))
    res.redirect('/')
})

app.get('/criar-usuario', (req, res) => {
  res.render('create-account')
});

app.post('/criar-usuario', (req, res) => {

    res.redirect('/')
})

app.get('/recuperar-senha', (req, res) => {
  res.render("change-password")
});

app.post('/recuperar-senha', (req, res) => {
    res.redirect('/')
});


app.listen(3000, () => {    
  console.log('Server rodando na porta 3000 pae');
});