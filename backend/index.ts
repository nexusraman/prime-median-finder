import express from 'express'
import primeMedianRoutes from './routes/primeMedianRoutes'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())

app.use(cors())

app.use('/api', primeMedianRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})