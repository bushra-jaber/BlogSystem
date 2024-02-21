import  {Sequelize }  from 'sequelize';

export const sequelize = new Sequelize('freedb_blogSystem', 'freedb_bushra', 'CUCByc6vznrx&k9', {
    host: 'sql.freedb.tech',
    port:3306,
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
  