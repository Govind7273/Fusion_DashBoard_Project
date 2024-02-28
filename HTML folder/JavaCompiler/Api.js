const express= require("express")
const app=express()
const bodyP=require("body-parse")
app.use(bodyP.json())
app.use("/",function(req,res){
res.sendFile("C:/Users/hp/eclipse-workspace/FusionLearning/src/importatntProgram/HTML folder/JavaCompiler/java1.html")
    })

    app.listen(8000)  