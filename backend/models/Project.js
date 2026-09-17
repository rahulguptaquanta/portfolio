const mongoose=require('mongoose');
const projectSchema=new mongoose.Schema({name:{type:String,required:true},description:{type:String,required:true},technologies:[String],github:String,liveDemo:String,image:String},{timestamps:true});
module.exports=mongoose.model('Project',projectSchema);
