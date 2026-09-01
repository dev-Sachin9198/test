const fs = require("fs");


// synchronous
// fs.writeFileSync("./test.txt" ," My name is Sachin ");

// Asynchronus
// fs.readFile("./test.txt", "message" ,(error) => {});


// Asynchronus 
//  fs.readFile("./test.txt", "utf-8" ,(err , result) => {
//     if(err){
//         console.log("error",err);
//     }else{
//         console.log(result);
//     }
// });

// synchronus
//  const resuly = fs.readFileSync("./test.txt", "utf-8");
//  console.log(resuly);


// fs.appendFileSync("./test.txt" , new Date().getDate().toLocaleString());

//  create new file copy file containt from test.txt
// fs.cpSync("./test.txt", "./copy.txt");


// delete file
// fs.unlinkSync("./copy.txt");







//  Blocking operations

console.log(1);
 const resuly = fs.readFileSync("./test.txt", "utf-8");
  console.log(resuly);

  console.log(2);












// Non-Blocking Operations
// console.log(1);
//  fs.readFile("./test.txt", "utf-8" ,(err , result) => {
//     if(err){
//         console.log("error",err);
//     }else{
//         console.log(result);
//     }
// });

// console.log(2);
