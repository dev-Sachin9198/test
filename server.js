const http =require("http");
const fs = require("fs");

const MyServer=http.createServer((req ,res)=>{
    const log = `${Date.now()}: New Request Recive/n`;
    fs.appendFile("test.txt", log,(err , data)=>{
      res.end("hey i am server");
    });
    


});


MyServer.listen(8000 ,()=>{
    console.log("server start")
});