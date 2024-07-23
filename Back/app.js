import express from 'express'
import cors from 'cors'
import { Router } from 'express'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(Router)

app.listen(3000,()=>{ console.log('Api ligada!') })