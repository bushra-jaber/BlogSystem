import blogModel from "../../../DB/model/blog.model.js";
import userModel from "../../../DB/model/user.model.js";


export const getBlog=async(req,res)=>{
    try{
        const blog=await blogModel.findAll({
            include:{
                model:userModel,
                attributes:['id','name']
            },
            attributes:{
                exclude:['UserId','updatedAt']
            }
        });
    return res.json({message:'success',blog}) 
    }
   catch(error){
    return res.json({message:'error',error}) 
   }
}
export const addBlog=async(req,res)=>{
    try{
    const {title,body,UserId}=req.body;
    const blog=await blogModel.create({title,body,UserId});
    return res.json({message:'success',blog}) 
}
catch(error){
return res.json({message:'error',error}) 
}
}