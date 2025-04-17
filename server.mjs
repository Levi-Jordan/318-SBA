import express from 'express'

const app = express()
const PORT = 3000 || 3001

app.get('/', (req, res) => {
    res.send('Test');
})

app.listen(PORT, () => {
    console.log(`Server Connected on Port: ${PORT}`);
});