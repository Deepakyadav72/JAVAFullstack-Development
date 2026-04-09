const fs=require('fs');
let readFileSync=fs.readFileSync('./even.js',{encoding:'utf-8'});
console.log('🚀 ~ readFileSync:', readFileSync);



// Crud
//==============Read=============
// fs.readFile('./even.js',{encoding: 'utf-8'},(err,data)=>{
//     if(data){
//         console.log(data);

//     }
//     else{
//         console.log(err);
//     }
// });


//========Create file===========
const dataValue=fs.writeFileSync('./note.txt','Deepak');

// fs.writeFile('./note.txt','hello',(err)=>{
//     if(err){
//         console.log(err);
//     }
// });