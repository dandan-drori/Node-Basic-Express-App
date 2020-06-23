// fetch express library
const express = require('express')
// invoke the express function and pass it to the variable app
const app = express()

app.get('/api/users', (req, res) => {
    const users = [
        { id: 1, firstName: 'Dandan', lastName: 'Drori' },
        { id: 2, firstName: 'Rotem', lastName: 'Spivak' },
        { id: 3, firstName: 'Benji', lastName: 'Drori' },
        { id: 4, firstName: 'Tom', lastName: 'Chiefetz' },
        { id: 5, firstName: 'Alon', lastName: 'Drori' }
    ];
    res.json(users);
})


// listen to incoming requests on port localhost:3000
const port = 5000
app.listen(port, () => {console.log(`listening on port ${port}`)})


// handle url requests
// respond with index.html when user navigates to the root of the app '/'
// app.get('/', (req, res) => {
//     res.sendFile('./Views/index.html', {root: __dirname})
// })
// // respond with about.html when user navigates to '/about'
// app.get('/about', (req, res) => {
//     res.sendFile('./Views/about.html', {root: __dirname})
// })
// // respond with 404.html when user navigates to an url that doesn't exist
// app.use((req, res) => {
//     res.status(404).sendFile('./Views/404.html', {root: __dirname})
// })