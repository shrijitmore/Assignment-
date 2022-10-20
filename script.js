const express = require('express');
const app = express();
const bp = require('body-parser');
let port = process.env.PORT || 8080;

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})
app.get('/coffee.html',(req,res)=>{
    res.sendFile(__dirname + '/coffee.html')
})

app.listen(port,()=>{
    console.log(`Server Online on Port : http://localhost:${port}/`)
})