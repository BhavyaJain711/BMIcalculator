const express= require("express");

const bodyParser= require("body-parser")

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+ "/index.html");
})

app.get("/styles.css",function(req,res){
    res.sendFile(__dirname+ "/styles.css");
})

app.post("/",function(req,res){
   let weight=Number(req.body.weight)
   let height=Number(req.body.height/100)
   let bmi=(weight/height)/height;
   res.send("Your BMI is "+bmi);
})

app.listen(3000,function(){
    console.log("hahaha");
})
