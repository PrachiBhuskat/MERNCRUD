import express from 'express'
import mongoose from 'mongoose'
import  routes  from './routes/routes.js'
import cors from 'cors'
import dotenv from 'dotenv';


const app = express();
app.use(cors());

dotenv.config({path:'/.env'});

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use('/users',routes);

// --------deployment code------

if(process.env.NODE_ENV === 'production')
{
  app.use(express.static('crudapp/build'));
 
}

// --------deployment code end ------

const PORT = process.env.PORT || 4000;

app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`);
})


mongoose.connect(process.env.DB,{useNewUrlParser:true,useCreateIndex:true,useFindAndModify:false,useUnifiedTopology:true}
).then(()=>{
    console.log('Connected to the database');
}).catch((err)=>{
    console.log(err);
})


