import express, { Request, Response } from 'express';  

const PORT = process.env.PORT || 5000 ;

const app = express()

app.get("/", (req:Request, res : Response) => {
    console.log(req.body)
})

app.listen(PORT, ()=> console.log(PORT))