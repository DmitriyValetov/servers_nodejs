const express = require('express')
const app = express()

app.get('/', (request, response) => {
    throw new Error('oops')
})

/* 
    This should be `used` by app after get, pu, post.
    There can be more than one error handler.
*/
app.use((err, request, response, next) => {
    // логирование ошибки, пока просто console.log
    console.log(err)
    response.status(500).send('Something broke!')
})

app.listen(5000)