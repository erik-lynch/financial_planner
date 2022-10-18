
const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    
    res.render('index' )
})

app.get('/about', (req, res) => {
    res.render('about' )
})

app.get('/more-info', (req, res) => {
    res.render('more_info' )
})

app.listen(3000)

