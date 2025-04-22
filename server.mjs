import express from 'express'

const app = express()
const PORT = 3000 || 3001

let myMovies = [
    "Movie 1",
    "Movie 2"
]

app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('index', { title: 'Hey', message: 'Hello there!', movies: myMovies });
})

app.listen(PORT, () => {
    console.log(`Server Connected on Port: ${PORT}`);
}); 