const express = require('express')
const app = express()
const port = 5001
var line_data = [[0.0, 0.0]]
var max_length = 10

app.get('/', (request, response) => {
    line_data.push([line_data[line_data.length-1][0]+1, Math.random()]);
    if(line_data.length > max_length){
        line_data.shift()
    }
    response.json({
        data: line_data
    })
})


app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
})