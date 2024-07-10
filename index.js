import express from 'express'
import bodyParser from 'body-parser'
import usersRoutes from './routes/users.js'

const app =express();
const PORT =1111;

app.use(bodyParser.json());

app.use('/users',usersRoutes)

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})

app.get('/',(req,res)=>{
    res.send('Hello World')
})