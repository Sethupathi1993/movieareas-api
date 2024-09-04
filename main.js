import express from "express"
const app =express()
const PORT =4200

app.get('/', (req, res) =>{
    res.json({msg:"Hello Students"})
})

app.listen(PORT,()=>{
    console.log(`server is runnin  http://localhost:${PORT}`)
})