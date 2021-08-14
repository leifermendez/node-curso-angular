require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const { dbConnect } = require('./config/mongo')

const PORT = process.env.PORT || 3000

app.use(cors()) //TODO: (app)
app.use(express.json())

app.use('/api/1.0', require('./routes'))

dbConnect()
app.listen(PORT, () => {
    console.log(`Aplicacion iniciada por el puerto ${PORT}`)
})

