const express=require("express");
const app=express();
const path=require("path");
const port=3000;
const bodyParser=require("body-parser");
const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/CovidContact",{useNewUrlParser:true, useUnifiedTopology: true });
const CovidSchema=new mongoose.Schema({
    username:String,
    email:String,
    number:String,
    checkbox:String,
    checkbox1:String,
    checkbox2:String,
    checkbox3:String,
    message:String
});
const Covid19=mongoose.model('Covid19',CovidSchema);
app.use(bodyParser.urlencoded({extended:true}));
app.use("/",express.static(path.join(__dirname,"static")));
app.set("views",path.join(__dirname,"views"));
app.get("/",(req,res)=>{
    res.status(200).sendFile(path.join(__dirname,"views","index.html"));
});
app.get("/worldCases",(rew,res)=>{
    res.status(200).sendFile(path.join(__dirname,"views","worldCases.html"));
})
app.post("/",(req,res)=>{
    console.log(req.body);
    let myData=new Covid19(req.body);
    myData.save().then(()=>{
        res.send('Your data has been saved to the database');
    }).catch(()=>{
        res.send("<h1>404 error</h1>");
    });
});
app.listen(port,()=>{
    console.log(`The server is running on port ${port}`);
});