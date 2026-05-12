const { version } = require("react");

const mongoose=requre('mongoose');

const studentSchema=mongoose.Schema(

    {
        batch:String,
        achivements:String,
    },
    {
        versionKey:false,
    },


);
const studentModel=mongoose.model('Student',studentSchema);


module.exports={studentModel};