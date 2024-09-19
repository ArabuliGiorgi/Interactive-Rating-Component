import { useState } from 'react'
import Rate from './components/Rate/Rate';
import Result from './components/Result/Result';
import './App.css'

function App() {
  const [submit, setSubmit] = useState(false);
  const [rate, setRate] = useState();
  return (
    <main>
      {submit ? (
        <Result rate={rate} />
      ) : (
        <Rate 
          setSubmit={setSubmit}
          rate={rate}
          setRate={setRate}
        />
      )}
    </main>
  )
}

export default App
