const express = require('express');

// EXPRESS APP
const app = express();

// Register View Engine
app.set('view engine', 'ejs');

// Register Static Folder
app.use(express.static(__dirname + '/public'));

// Listen for requests
app.listen(3000);

app.get('/', (req, res) => {
    // res.send('<p>Home Page</p>');
    const komentar = [
        {title: 'Judul Komentar #1', author: 'Si A', comment: 'Ieu naon sih'},
        {title: 'Judul Komentar #2', author: 'Si B', comment: 'Komen ah'},
        {title: 'Judul Komentar #3', author: 'Si C', comment: 'Nyageus'}
    ]
    res.render('index', {title: 'HOME', komentar});
});

app.get('/komentar', (req, res) => {
    // res.send('<p>About Page</p>');
    res.render('komentar-list', {title: 'Komentar'})
})

// REDIRECTS
app.get('/komentar-anda', (req,res) => {
    res.redirect('/komentar');
})

app.get('/komentar/add', (req,res) => {
    res.render('komentar-tambah', {title: 'Tambah'});
})

// 404 Page
app.use((req, res) => {
    res.status(404).render('404')
})