let express = require('express');
let server = express();
let path = require('path');
server.listen(process.env.PORT||8000, (req,res)=>
{
    console.log("Connected to the server.")
})
server.use(express.static(path.join(__dirname,"frontend",'build')))