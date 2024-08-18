import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import packageJson from "../package.json";
import { useFlag, useStatus } from '@featurevisor/react';

function App() {
  const [count, setCount] = useState(0)
  const environment = import.meta.env.VITE_ENVIRONMENT;

  const {isReady} = useStatus();

  const isTextEnabled = useFlag('text', {
    country: "pl"
  })

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      {isReady && (
        <div>
          <h1>Vite + React</h1>
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}Test
            </button>
            <p>
              Edit <code>src/App.tsx</code> and save to test HMR
            </p>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
          {isTextEnabled && <h1>Text Testowy!!!!</h1>}
          <p className="read-the-docs">
            Wersja: {packageJson.version}
            <strong>Environment:</strong> {environment}
          </p>
        </div>
      )}
      
    </>
  )
}

export default App
