import express from "express"
import movieRoutes from "./routes/movies.routes.js"
import connectDB from "./lib/db.js"

const app =express()
const PORT =4200


//Connect DB
connectDB()

app.get('/', (req, res) =>{
    res.json({msg:"Hello Students"})
})


//CRUD Functionallty in movieareas

app.use('/movies', movieRoutes)

app.listen(PORT,()=>{
    console.log(`server is runnin  http://localhost:${PORT}`)
})