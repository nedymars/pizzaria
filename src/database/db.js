async function connect () {

  if(global.connection)
      return global.connection.connect();

  const { Pool } = require("pg");
  const pool = new Pool ({
      connectionString: process.env.CONECTION_STRING
  })

  const client = await pool.connect();
  console.log("Criou o pool de conexão")

  const res = await client.query("select now() as hora");
  console.log(res.rows[0])
  client.release()

  global.connection = pool;
  return pool.connect()
}

connect();

async function selectCustomers(){
  const cliente = await connect()
  const res = await cliente.query("SELECT * FROM dbapiz.TBL_CLIENTE")
  return res.rows;
}

async function selectCustomer(id){
  const cliente = await connect()
  const res = await cliente.query("SELECT * FROM dbapiz.TBL_CLIENTE WHERE CD_CLIENTE = $1", [id])
  return res.rows;
}

async function insertCustomer(customer){
  const cliente = await connect()
  const sql = "INSERT INTO "
  const res = await cliente.query(sql, [id])
  return res.rows;
}

module.exports = {
  selectCustomers,
  selectCustomer
}