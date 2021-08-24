const path=require('path');
const express=require('express');
const exphbs=require('express-handlebars');
const port=process.env.PORT || 8000;
const app=express();

app.use(express.static(path.join(__dirname,'static')));
app.set('view engine','handlebars');
app.engine('handlebars',exphbs());

app.get('/',(req,res)=>{
    res.render('index');
})

app.listen(port,()=>{
    console.log("Listening..");
})