import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";

const app = express()
app.use(cors())
app.use(express.json())
dotenv.config()
const shop = new pg.Pool({
        connectionString: process.env.SHOP_CONN,
})

app.get("/", (req, res) => res.json("Hola Seniorita 💃🏼"))

app.get("/api/octopusshop", async (req, res) => {
        const result = await shop.query("SELECT * FROM upgradeshop")
        res.json(result)
})
app.listen(2498, () => {
        console.log("The server is running and listening on port 2498")
})