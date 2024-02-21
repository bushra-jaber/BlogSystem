
import  {sequelize} from "../connection.js";
import {  DataTypes } from 'sequelize';
import blogModel from "./blog.model.js";

const userModel=sequelize.define('User',{
    name:{
        type:DataTypes.STRING(100),
        allowNull:false,
    },
     email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false,

        },
        confirmEmail:{
        type:DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue:false,
         },
        
         age:{
            type:DataTypes.INTEGER,
            allowNull:true,
        }
          
    
},{
timestamps:true,
});
userModel.hasMany(blogModel,{
    foreignKey:{
        name:'UserId',
        type:DataTypes.INTEGER,
    }
});
blogModel.belongsTo(userModel);
export default userModel;