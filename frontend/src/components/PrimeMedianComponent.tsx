import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const PrimeMedianComponent = () => {
    const [inputValue, setInputValue] = useState('')
    const [medians, setMedians] = useState([])
    const [error, setError] = useState('')

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }
    const handleSubmit = async () => {
        try {
            const response = await axios.get(process.env.REACT_APP_BACKEND_LINK + `/api/getPrimeMedian?n=${inputValue}`)
            setMedians(response.data.medians)
            setError('')
        } catch (error: any) {
            setMedians([])
            setError(error.response.data.error)
        }
    }
    return (
        <div>
            <h2>Prime Median Finder</h2>
            <div className="container">
                <label htmlFor="Input">Enter a number:</label>
                <input
                    id="Input"
                    type="number"
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <button className='button' onClick={handleSubmit}>Find Median</button>
            </div>
            {
                medians.length > 0 && (
                    <p className="medians-text">{`Median${medians.length > 1 ? 's' : ''}: ${medians.join(', ')}`}</p>
                )
            }
            {error && <p className="error-text">{error}</p>}
        </div>
    )
}

export default PrimeMedianComponent