const dotenv = require("dotenv").config()
const express = require("express")
const cors = require("cors")
const app = express()
const port = process.env.PORT || 9000
const path = require("path")

const secret = process.env.PASS

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname,"client/build")))//handles homepage

app.use("/api/*",(_,res)=>{
    res.json({data:"The API is working!"})
})

app.use("*",(_,res)=>{ //handles incorrect endpoints
    res.sendFile(path.join(__dirname,"client/build","index.html"))
})

app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})

console.log("It's alive")
console.log(__dirname)
console.log(__filename)
console.log(process.env.USERNAME)//USER - MAC
console.log(process.env.PORT)
console.log(process.env.GREET)
console.log(process.env.FOOD)
console.log(process.env.REALLY)

