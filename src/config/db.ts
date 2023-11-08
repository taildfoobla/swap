require('dotenv').config()
 
import { Sequelize } from 'sequelize';

const dbName = `${process.env.DB_NAME}`
const userName=`${process.env.DB_USER}`
const passDB=`${process.env.DB_PASS}`
const dbHost =`${process.env.DB_HOST}`
const dbPort = Number((process.env.DB_PORT))

const db = new Sequelize(dbName,userName,passDB,{
    host: dbHost,
    dialect: 'postgres',
    port: dbPort
  })
// const pool = new Pool({
//     user:process.env.DB_USER,
//     host:process.env.DB_HOST,
//     database:process.env.DB_NAME,
//     password:process.env.DB_PASS,
//     port:Number(process.env.DB_PORT),
// })

db.authenticate().then(()=>{
    console.log("Connected to the database")
}).catch(err=>console.log(err));


export default db