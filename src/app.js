import express from 'express'
import { pool } from './db.js'
import {PORT} from './config.js'

const app = express()

app.get('/', async (req, res) => {
  //res.send('Welcome')
  const [rows] = await pool.query('SELECT * FROM alumnos')
  res.json(rows)
})

app.get('/ping', async (req, res) => {
  const [result] = await pool.query(`SELECT "hello world" as RESULT`);
  res.json(result[0])
})

app.get('/create', async (req, res) => {
  const result = await pool.query('INSERT INTO alumnos(nombre, apellido, edad) VALUES ("Maxi", "Prueba", 2)')
  res.json(result)
})

app.listen(PORT)
console.log('Server on port', PORT)
