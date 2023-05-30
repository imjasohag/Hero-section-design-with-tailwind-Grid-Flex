import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Test from './Test.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
      <App />
      <Test />
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem recusandae eligendi minus dolorum odit veniam odio, deserunt, aliquid sed repudiandae nostrum aliquam nemo. Aut nisi id sequi deleniti doloribus in!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sit fugit quas debitis unde saepe maiores eius atque excepturi dolores eos, aspernatur, dolor explicabo molestias doloribus perspiciatis quis aliquam repudiandae.
      </p>
    </div>
  </React.StrictMode>,
)
