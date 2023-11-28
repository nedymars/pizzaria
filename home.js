const dotenv = require("dotenv")
dotenv.config()

const connectDb = require("./src/database/db")

connectDb()