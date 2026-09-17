const router=require('express').Router();const Project=require('../models/Project');
router.get('/',async(req,res)=>res.json(await Project.find().sort({createdAt:-1})));
router.get('/:id',async(req,res)=>{try{res.json(await Project.findById(req.params.id))}catch(e){res.status(400).json({message:'Invalid project id'})}});
router.post('/',async(req,res)=>{try{const p=await Project.create(req.body);res.status(201).json(p)}catch(e){res.status(400).json({message:e.message})}});
router.put('/:id',async(req,res)=>{try{const p=await Project.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true});res.json(p)}catch(e){res.status(400).json({message:e.message})}});
router.delete('/:id',async(req,res)=>{try{await Project.findByIdAndDelete(req.params.id);res.json({message:'Project deleted'})}catch(e){res.status(400).json({message:e.message})}});
module.exports=router;
