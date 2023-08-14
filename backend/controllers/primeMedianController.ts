import { Response, Request } from "express"

// Checking if the values till a number less than n is prime.
const isPrime = (n: number) => {
    //Initialising the prime values for less than n(based on the requirement). If we want prime values equals to n, then new Array(n+1)
    let primes = new Array(n).fill(true)

    //marking initial two values as *NOT PRIME* thanks to Grade 4th
    primes[0] = primes[1] = false

    //using Sieve of Eratosthenes
    for (let num = 2; num <= Math.sqrt(n); num++) {
        if (primes[num]) {
            for (let j = num * num; j <= n; j += num) {
                primes[j] = false
            }
        }
    }
    let result = []
    for (let i = 2; i <= n; i++) {
        if (primes[i]) {
            result.push(i)
        }
    }
    return result
}

// Calculating the median
const getPrimeMedians = (n: number) => {
    const primes = isPrime(n)
    const midIndex = Math.floor(primes.length / 2)
    return primes.length % 2 === 0 ? [primes[midIndex - 1], primes[midIndex]] : [primes[midIndex]]
}

// Returimg the result
const getPrimeMedianController = (req: Request, res: Response) => {
    const n = parseInt(req.query.n as string)
    if (n > 2 && n) {
        const medians = getPrimeMedians(n)
        res.json({ medians })
    } else if (n < 0) {
        res.status(400).json({ error: 'Invalid input. Please Enter a positive number' })
    }
    else if (n === 2 || n === 1) {
        res.status(400).json({ error: 'Invalid input. Please Enter a number greater than 2' })
    }
    else {
        res.status(400).json({ error: 'Invalid input. Please Enter a number' })
    }
}

export { getPrimeMedianController }