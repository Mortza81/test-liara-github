const express=require('express')
const app=express()
app.get('/test',(req,res,next)=>{
    res.status(200).json({
        message:'success'
    })
})
app.get('/test/1',(req,res,next)=>{
    res.status(200).json({
        message:'1'
    })
})
app.get('/test2',(req,res,next)=>{
    res.status(200).json({
        message:'1'
    })
})
app.listen(2100,()=>{
    console.log('app is running');
})