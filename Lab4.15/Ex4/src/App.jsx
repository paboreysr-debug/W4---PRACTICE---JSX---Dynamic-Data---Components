import { useState } from 'react'
import './App.css'

function App() {
  const [dollars] = useState(15);

  const convertToDong = (usd) => usd * 24560; 
  const convertToEuro = (usd) => usd * 0.92;

  return (
    <div className="container">
      <div className="conversion-card">
        <h2>Device Conversions</h2>
        
        <div className="input-grid">
          <div className="field-group">
            <label>Current Value in Dollars</label>
            <input className="lab-input" type="number" value={dollars} disabled />
          </div>

          <div className="field-group">
            <label>Value in Dong</label>
            <input className="lab-input" type="text" value={convertToDong(dollars)} disabled />
          </div>

          <div className="field-group">
            <label>Value in Euro</label>
            <input className="lab-input" type="text" value={convertToEuro(dollars)} disabled />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;