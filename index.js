import express from 'express'
import 'dotenv/config.js'// import dotenv from 'dotenv'
import routes from './src/routes/index.js'


const PORT = process.env.PORT  || 8000
const app = express()

app.use(express.json()) // put and post method come to body and change  to json
app.use(routes)



app.listen(PORT,()=>console.log(`server listening at port ${PORT}`))