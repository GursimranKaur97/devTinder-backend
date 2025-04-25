const express = require('express');

const app = express()

// This will only handle GET call to /user
app.get('/user', (req,res)=>{
    res.send({firstName: 'Gursimran', lastName: 'Kaur'})
})

app.post('/user', (req, res) => {
    console.log('Save Data to the database');
    res.send('Data successfully saved to the database');
})

app.delete('/user', (req,res)=>{
res.send('Deleting successfully')
})
// This will match all the HTTP method API calls to /test so if we do GET or POST call for all it'll return us Hello form the server
app.use('/test',(req,res)=>{
    res.send('Hello from the server')
})
app.listen(3030, ( )=>{
    console.log('Server successfully listening on port 3030')
});