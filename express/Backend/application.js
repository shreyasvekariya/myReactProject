const express = require("express")
const app=express()
const bodyParser= require('body-parser')
const {default:mongoose} = require("mongoose")
const schemaProject = require('./schemaProject.js')
const cors = require('cors')


mongoose.connect("mongodb+srv://8160720749:8160720749@shrey.cirf0.mongodb.net/test").then(
    () => {
        const app = express();
        app.use(cors())
        app.use(bodyParser.urlencoded({extended:false}))
        app.use(express.json())
        
        console.log("Connected to database");

        app.get('/schemaProject', async (req, res) => {
                const ans = await schemaProject.find();
                res.send(ans);
        });

        app.get('/schemaProject/:id',async(req,res)=>{
        const ans = await schemaProject.findOne({id:req.params.id});
        res.send(ans);
        });

        app.delete('/schemaProject/:id',async(req,res)=>{
        const ans =await schemaProject.deleteOne({id:req.params.id})
        res.send(ans);
        });

        app.patch('/schemaProject/:id',async(req,res)=>{
            const result= await schemaProject.findOneAndUpdate({id:req.params.id},req.body);
            res.send(result);
        })  
        app.post('/schemaProject',async(req,res)=>{
            stu=new schemaProject ({...req.body});
            const result=await stu.save();
            res.send(result);
        })
        app.listen(3000,()=>{
            console.log("server started");
            
        })
    })
