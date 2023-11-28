const { Client } = require("pg")
const dotenv = require("dotenv")
dotenv.config()

const connectDb = async() => {
    try {
        const client = new Client({
            user: process.env.pguser,
            host: process.env.pghost,
            database: process.env.database,
            password: process.env.pwd,
            port: process.env.port
        })

         await client.connect()
        // const res = await client.query('SELECT 1')
        // console.log(res)
        // await client.end()
    } catch (error) {
        return console.log("Erro ao conectar o banco de dados: ", error)
    }
}

module.exports = connectDb