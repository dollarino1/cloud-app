const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
const app = express()
const authRouter = require('./routes/auth.routes')
const corsMiddleware = require('./middleware/cors.middleware')
const PORT = config.get('serverPort')

app.use(corsMiddleware)
app.use(express.json())
app.use('/api/auth', authRouter)

const start = async () => {
    try {
        console.log('Server tries to start')
        await mongoose.connect(config.get('dbUrl'), {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        app.listen(PORT, () => {
            console.log('Server started on port:', PORT)
        })
    } catch(e) {
        console.log(e)
    }
}

start()