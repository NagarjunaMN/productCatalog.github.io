const express = require('express');
const hbs = require('hbs')
const app = express();

// var firebase = require("firebase/app");

// require("firebase/auth");
// require("firebase/firestore");

// var firebaseConfig = {
//     apiKey: "AIzaSyAmiqP4TWB7a4PvyF05PCwbbHamgSzRPeY",
//     authDomain: "productcatalog-d14fd.firebaseapp.com",
//     databaseURL: "https://productcatalog-d14fd.firebaseio.com",
//     projectId: "productcatalog-d14fd",
//     storageBucket: "productcatalog-d14fd.appspot.com",
//     messagingSenderId: "891457246051",
//     appId: "1:891457246051:web:9bc69892973fe3bf28f956",
//     measurementId: "G-77VMJPB1K8"
//   };
// firebase.initializeApp(firebaseConfig);

app.use(express.static(__dirname+'/static'))
app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.set('views',__dirname+'/views')
app.set('view engine','hbs')

app.get('/home',function(req,res) {
    res.render('homepage')
})

app.get('/catalogue',(req,res)=>{
    res.render('manageProducts')
})



app.listen(3000,() => {console.log("server is running in 3000")});