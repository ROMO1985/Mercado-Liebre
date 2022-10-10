const express = require ( 'express');
app = express();
const path = require ( 'path');
let publicPath = path.resolve(__dirname,'./public');

app.use(express.static(publicPath));

const port = process.env.PORT||3001;

app.listen(port, ()=>console.log('servidor okey'));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/view/index.html'))
});

app.get('/register', (req, res) =>{
    res.sendFile(path.resolve(__dirname, './view/register.html'))
})

app.get('/login', (req, res) =>{
    res.sendFile(path.resolve(__dirname, './view/login.html'))
})

console.log('');
