import  {Sequelize }  from 'sequelize';

export const sequelize = new Sequelize('blogSystem', 'root', '', {
    host: 'localhost',
    dialect:'mysql' /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
  });
 export const connectDB=async()=>{
    try{
    return await sequelize.sync({alter:true,force:false});
  }
catch(error){
    console.log(error)
}
}
  