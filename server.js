const express = require('express')
const dotenv = require('dotenv')
dotenv.config()

const connectToDB = require('./database/index.js')
const UserRoutes = require('./routes/index.js')

const app = express()
// Middleware
app.use(express.json())
connectToDB()

app.use('/api/users', UserRoutes)

const PORT = process.env.PORT || 5555
app.listen(PORT, () => {
    console.log(`Server started on port number ${PORT}`);
})