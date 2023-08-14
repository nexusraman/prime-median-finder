import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState('')
  const [medians, setMedians] = useState([])
  const [error, setError] = useState('')

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }
  const handleSubmit = async () => {
    try {
      const response = await axios.get(process.env.REACT_APP_BACKEND_LINK + `/api/getPrimeMedians?n=${inputValue}`)
      setMedians(response.data.medians)
      setError('')
    } catch (error) {
      setError('Error fetching prime medians')
      setMedians([])
    }
  }
  return (
    <div className="App">
      <h1 className="app-title">Prime Medians Finder</h1>
      <div className="input-container">
        <label htmlFor="numberInput">Enter a number:</label>
        <input
          id="numberInput"
          type="number"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button onClick={handleSubmit}>Find Medians</button>
      </div>
      {medians.length > 0 && (
        <div className="medians-container">
          <p className="medians-text">Medians: {medians.join(', ')}</p>
        </div>
      )}
      {error && <p className="error-text">{error}</p>}
    </div>
  )
}

export default App
