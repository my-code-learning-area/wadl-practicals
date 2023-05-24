const app = require("express")()

app.get("/", (_, res)=>{
    res.send("Hello World")
})

app.listen(3000, ()=>{
    console.log("running on 3000")
})