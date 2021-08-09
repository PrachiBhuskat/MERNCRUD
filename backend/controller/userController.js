
import User from '../models/userSchema.js';
import mongoose from 'mongoose';

export const addUsers = async (req,res)=>{
   const user = req.body;

   const newUser = new User(user);
   try{
     await newUser.save();
    
    res.status(201).json(newUser);
   }
   catch(err){
    res.status(409).json({message:err.message});
   }
 }

 export const getUserById =async(req,res)=>{
  const id = req.params.id;
 
  try{
    const user = await User.findById(id);
    res.status(200).json(user);
  }
  catch(err)
  {
    res.status(404).json({message:err.message});

  }
}

export const  editUser = async(req,res)=>{
    let user = await User.findById(req.params.id);
    user = req.body;
    const editUser = new User(user);
    try{
      await User.updateOne({_id:req.params.id},editUser);
      res.status(201).json(editUser);
      }
    catch(err)
    {
      res.status(409).json({
        message:err.message
      });
    }
  }


  export const deleteUser = async (req,res)=>{
    try{
      await User.deleteOne({_id:req.params.id});
     
      res.status(201).json("User deleted successfully");
    
  }catch(err){
    res.json({message:err.message});
  }
  }


export const  getUsers = async (req,res)=>{

  try{
  const user = await User.find();
  res.status(200).json(user);
  }
  catch(err){
   res.json({message:err.message});
  }
        
}



