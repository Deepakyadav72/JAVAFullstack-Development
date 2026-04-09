const fs=require('fs');
let readFileSync=fs.readFileSync('./even.js',{encoding:'utf-8'});
console.log('🚀 ~ readFileSync:', readFileSync);



// Crud

//! Read
// fs.readFile('./even.js',{encoding: 'utf-8'},(err,data)=>{
//     if(data){
//         console.log(data);

//     }
//     else{
//         console.log(err);
//     }
// });


// !========Create file===========
const dataValue=fs.writeFileSync('./note.txt','Deepak');

// fs.writeFile('./note.txt','hello',(err)=>{
//     if(err){
//         console.log(err);
//     }
// });


//!===============Update=========
/*fs.appendFile('./note.txt','Deepak',(err)=>{
     if(err){
        console.log(err);
    } });*/

//!=============Delete===========

/*fs.rm('./note.txt',(err)=>{
     if(err){
         console.log(err);

     }
         else{
            console.log(data)
        }
 });*/


 //!=========Edit

 fs.readFile('./note.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err);
    }
    const value=data.split('');

    const updateValue=data.replace(
        value.splice(
            value.findIndex((el)=>el=='world'),
            1,
        ),
        ''
    );
    console.log(updateValue);
    fs.writeFile('./note.txt',updateValue.trim(),(errs,data1)=>{
        if(err) console.log(errs);
        console.log(data1);
    });

 });

 