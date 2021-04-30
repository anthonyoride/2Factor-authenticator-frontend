import React, {useState} from 'react';
import api from './api'
import './App.css';

function App() {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [OTP, setOTP] = useState('')
  const [view, setView] = useState(1)
  const [loading, setLoading] = useState(false)

  const handlePhoneNumber = (e: any): void => {
    setPhoneNumber(e.target.value)
  }

  const handleOTP = (e: any): void => {
    setOTP(e.target.value)
  }

  const requestOTP = async () => {
    setLoading(true)
    try{
      const response = await api.post('/request-otp', {
        phone_number: phoneNumber
      })
      setLoading(false)
      setView(2)
    }catch(error) {
      setLoading(false)
      console.log(error)
    }
  }

  const verifyOTP = async () => {
    setLoading(true)
    try{
      const response = await api.post('/verify-otp', {
        phone_number: phoneNumber,
        auth_code: OTP
      })
      setLoading(false)
      setView(3)
    }catch(error) {
      setLoading(false)
      console.log(error)
    }
  }

  return (
    <div className="App">
      <form className="form">
        {view == 1 ? <div><div className="form-group">
          <input 
            type="number" 
            className="input-field" 
            placeholder="Enter Phone Number"
            onChange={e => handlePhoneNumber(e)}
          />
        </div>
        <div className="button">
          <button className="custom-button" onClick={requestOTP}>Request OTP</button>
        </div>
        </div>
        : view == 2 ? <div><div className="form-group">
          <input 
            type="number" 
            className="input-field otp-field" 
            placeholder="Enter OTP"
            onChange={(e) => handleOTP(e)}
          />
        </div>
        <div className="button">
          <button className="custom-button" onClick={verifyOTP}>Verify OTP</button>
        </div></div>
        :<div>
          <div className="success">
            <h2>Success</h2>
            <p>OTP Successfully Validated</p>
          </div>
        </div>}
      </form>
    </div>
  );
}

export default App
