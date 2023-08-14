import express, { Request, Response } from 'express'
import { getPrimeMedians } from './primes'

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())

app.get('/api/getPrimeMedians', (req: Request, res: Response) => {
    console.log(req.query)
    const n = parseInt(req.query.n as string)
    if (!isNaN(n)) {
        const medians = getPrimeMedians(n)
        res.json({ medians })
    } else {
        res.status(400).json({ error: 'Invalid input' })
    }
})

app.get('*', (res: Response) => {
    res.send('Welcome to the Prime Median Finder API')
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})