import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [temp, setTemp] = useState("");
  const [word, setWord] = useState("");
  const [size, setSize] = useState("");
  const [bgcolor, setBgColor] = useState("");
  const [qrCode, setQrcode] = useState("");
  useEffect(() => {
    setQrcode
      (`http://api.qrserver.com//v1/create-qr-code/?data=${word}!$size=${size}
      x${size}$bgcolor=${bgcolor}`)
  }, [word, size, bgcolor]);
  function handleClick() {
    setWord(temp)
  }


  return (
  
    <div className='App'>
      <h1>QR Code Genrator</h1>

      <div className='input-box'>
        <div className='gen'>
          <input type="text" onChange={(e) => { setTemp(e.target.value) }}
            placeholder='enter the text to encode' />
          <button className='button' onClick={handleClick}>Genrate</button>
        </div>
        <div className='extra'><h5>background color:</h5>
          <input type="color" onChange={(e) => {
            setBgColor(e.target.value.substring(1))
          }} />
          <h5>Dimension</h5>
          <input type="range" min="200" max="600" value={size} onChange={(e) => {
            setSize(e.target.value)
          }} />

        </div>
      </div>
      <div className='output-box'>
        <img src={qrCode} alt="" />
        <a href={qrCode} download="QRCode">
          <button type='button'>Download</button>
        </a>
      </div>
    </div>
  )
}

export default App
