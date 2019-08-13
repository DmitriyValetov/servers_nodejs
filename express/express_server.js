const express = require('express')
const app = express()
const port = 5000

app.get('/', (request, response) => {
    response.send('Hello from Express!')
})

app.get('/get_one', (request, response) => {
    response.send('One!')
})

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
})