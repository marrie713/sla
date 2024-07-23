import express from 'express'
import sql from 'mssql'
import {sqlConfig} from "./database.js"
const pool = new sql.ConnectionPool(sqlConfig)
await pool.connect();

const router = express.Router()

routes.post('/aluguel', async (req, res)=>{
    try{
        const { veiculo, Valor_pago, telefone, tempo_horas } = req.body
        await pool.query`insert into Pagamento_estacionamento values(${veiculo}, ${Valor_pago}, ${telefone}, ${tempo_horas})`
        return res.status(200).json('Novo adicionado')
    }
    catch(error){
        return res.status(500).json('Erro ao cadastrar')
    }
})

router.post('/login', async (req, res)=>{
    try {
        const { nome, senha } = req.body;
        if(nome != null && nome != "" && senha != null && senha != "")
        {
            const { recordset } = await pool.query`SELECT id FROM Usuario WHERE nome = ${nome} AND senha = ${senha}`;
            if(recordset.length == 0)
            {
                return res.status(401).json('usuario ou senha incorreta')
            }

            return res.status(200).json(recordset)
        }
            return res.status(400).json("bad request")

    } 
    catch (error){
        console.log(error)
        return res.status(500).json('Error on server!')
    }
})