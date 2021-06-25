const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");

})
app.post("/bmicalculator", function(req,res){
    var weight1 = parseFloat(req.body.weight);
    var height1 = parseFloat(req.body.height);
    var bmi = weight1 / (height1 * height1);

    res.send("Your BMI is" + bmi);
   
})



app.listen(3000, function(){
    console.log("server started on port 3000")
});