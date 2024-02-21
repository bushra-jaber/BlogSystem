import  {sequelize} from "../connection.js";
import {  DataTypes } from 'sequelize';

const blogModel=sequelize.define('Blog',{
    title:{
        type:DataTypes.STRING(100),
        allowNull:false,
        unique:true,
    },
     body:{
        type:DataTypes.TEXT,
        allowNull:false,
        
        },
       
    
},{
timestamps:true,
});

export default blogModel;