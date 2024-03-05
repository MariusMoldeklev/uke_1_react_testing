import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


const root = document.getElementById("root")
const app = ReactDOM.createRoot(root)
app.render(
  <h1>Hello World</h1>
  <button>Press if you DARE</button>
)
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
