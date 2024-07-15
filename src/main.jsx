import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { filterText, Search } from './components/Search.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Search>
      <App />
    </Search>
  </React.StrictMode>,
)
