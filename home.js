import { config } from "dotenv";
config()

import connectDb from "./src/database/db.js"

const variavel = await connectDb.raw("SELECT cd_cliente from dbapiz.tbl_cliente")

console.log(variavel.rows)