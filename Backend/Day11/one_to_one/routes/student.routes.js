const express=require('express');

const studentRoutes=express.Router();

const{studentModel}=require('../model/student.model');

//path="/student/"
//read

studentRoutes.get('/',async(req,res)=>{
    const studentData=await studentModel.find();
    res.send({msg:'data create ',data:StudentData});
});

//path="/student/createstudent"
//create

studentRoutes.post('/createstudent', async (req, res) => {
  if (req.body) {
    const studentData = new studentModel(req.body);

    const studentData=new studentModel({
        batch:req.body.batch,
        achivements:req.body.achivements,
        user_ID:userData._id
    })
    await studentData.save()
    res.send({ msg: 'data created', data: studentData })
  }
})

studentRoutes.get('/updatestudent', (req, res) => {})

studentRoutes.get('/deletestudent', (req, res) => {})

module.exports = { studentRoutes }