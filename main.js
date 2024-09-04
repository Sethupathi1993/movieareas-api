import express from "express"
import movieRoutes from "./routes/movies.routes.js"

const app =express()
const PORT =4200

app.get('/', (req, res) =>{
    res.json({msg:"Hello Students"})
})


//CRUD Functionallty in movieareas

app.use('/movies', movieRoutes)

app.listen(PORT,()=>{
    console.log(`server is runnin  http://localhost:${PORT}`)
})