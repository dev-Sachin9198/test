const express = require("express");
const users = require("./MOCK_DATA.json");
const MyServer = express();
 const PORT = 8000;

 MyServer.get("/api/users", (req, res)=>{
    res.json(users);
});

// MyServer.get("/api/users/:id", (req, res)=>{
//     const {id} = req.params;
//     const user = users.find((user)=>user.id === parseInt(id));
//     if (!user) {
//         return res.status(404).json({ error: "User not found" });
//     }
//     res.json(user);
// });

MyServer.route("/api/users/:id").get((req, res)=>{
    const {id} = req.params;
    const user = users.find((user)=>user.id === parseInt(id));
    if (!user) {
        return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
}).post((req, res)=>{
    const {id} = req.params;
    const user = users.find((user)=>user.id === parseInt(id));
    if (!user) {
        return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
}).patch((req, res)=>{
    const {id} = req.params;
    const user = users.find((user)=>user.id === parseInt(id));  
    if (!user) {
        return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
}).delete((req, res)=>{
    const {id} = req.params;
    const userIndex = users.findIndex((user)=>user.id === parseInt(id));        
    if (userIndex === -1) {
        return res.status(404).json({ error: "User not found" });
    }   
    users.splice(userIndex, 1);
    res.json({ message: "User deleted successfully" });
});

MyServer.get("/users",(req, res)=>{
    const html =`
    <ul>
     ${users.map((user)=>`<li>${user.email}</li>`).join('')}
    </ul>;
    `
    res.send(html);
});

MyServer.listen(PORT, ()=>{
    console.log("server start")
});