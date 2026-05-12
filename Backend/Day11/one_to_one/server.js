const exports=require('express');

require('dotenv').config();

const app=express();

app.get('/',(req,res)=>{
    res.send('home');
});

app.use('/student',studentRoutes);
app.listen(process.env.Port,()=>{
    console.log('Server is running on ${process.env.Port}');
});