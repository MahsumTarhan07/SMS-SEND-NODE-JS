const express = require('express');
const bodyParser = require('body-parser');
const Nexmo = require('nexmo')
const ejs = require('ejs');



// express app creat
const app = express();

// ejs
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);


//body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// nexmo object create
// Free Api
// https://www.vonage.com/?bypassgeoloc=true
const nexmo = new Nexmo({
    apiKey: "apiKey Write",
    apiSecret: "ApiSecret Write"
},{debug:true});


// routes
app.get('/', (req,res)=>{
    res.render('index');
})

// main.js incoming data capture
app.post('/',(req,res)=>{
    const number = req.body.number;
    const text = req.body.text;

    nexmo.messaga.sendSms= ("Vonage APIs", number,text );
  

})

// Static File Path 
app.use(express.static(__dirname + 'static'));


// port create
const port =3000;

const server = app.listen(3000, () =>{
    console.log('Server ${port} . port true working');
})