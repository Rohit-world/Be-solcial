const express = require('express')
const app = express()
const port = 3002
const {connection}=require("./config/database")
const {UserRoute}=require("./routes/user.route")


app.use(express.json())

app.use("/auth",UserRoute)
app.get('/', (req, res) => res.send('Hello World!'))


app.listen(port,async () =>{
    await connection
    console.log("connected to db")
    console.log(` app listening on port ${port}!`)
} )