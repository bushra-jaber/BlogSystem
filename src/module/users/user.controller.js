import blogModel from "../../../DB/model/blog.model.js";
import userModel from "../../../DB/model/user.model.js";
import { Op } from "sequelize";
export const getUser=async(req,res)=>{
    try{
        const users=await userModel.findAll({
            include:blogModel,  }
          
 

        );
    return res.json({message:'success',users}) 
    }
   catch(error){
    return res.json({message:'error',error:error.stack}) 
   }
}
export const update=async(req,res)=>{
    try{
    const {id}=req.params;
    const {name}=req.body;
    const user = await userModel.update({name},{ where:{id}});
      if (user[0]==0){
        return res.json({message:"user not found"});
      }
      return res.json({message:"success",user:user});
}
catch(error){
   
    return res.json({message:"error",error:error.stack});
}
}
export const destroy=async(req,res)=>{
    try{
 const {id}=req.params;
 const user=await userModel.destroy({
    where:{
        id
    }
 });
 if(!user){
    return res.json({message:"user not found"})
 }
 return res.json({message:"success",user})
}
catch(error){
    return res.json({message:"error",error:error.stack})
}
}