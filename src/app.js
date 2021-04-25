const express = require('express');
const hbs = require('hbs')
const serverless=require('serverless-http')
const app = express();
const path = require('path');


app.use(express.static(__dirname+'/static'))
app.use(express.json());
app.use(express.urlencoded({extended:false}));

const router = express.Router();
app.set('views',__dirname+'/views')
app.set('view engine','hbs')

router.get('/',function(req,res) {
    res.render('homepage')
    // res.sendFile('homepage.hbs', { root: './views' });
    // res.json("hi")
})
router.get('/catalogue',(req,res)=>{
    res.render('manageProducts')
})


// app.get('/home',function(req,res) {
//     res.render('homepage')
// })

// app.get('/catalogue',(req,res)=>{
//     res.render('manageProducts')
// })

app.use('/.netlify/functions/app', router);
module.exports = app;
module.exports.handler = serverless(app)
// app.listen(3000,() => {console.log("server is running in 3000")});