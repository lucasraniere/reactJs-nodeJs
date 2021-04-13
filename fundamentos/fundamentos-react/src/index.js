import './index.css'
import React from 'react' // nos permite usar a sintaxe JSX (html no meio do JavaScript)
import ReactDOM from 'react-dom'

import App from './App.jsx'

ReactDOM.render( // recebe os elementos que queremos renderizar
    <App/>,
    document.getElementById('root') // renderizado na div 'root' no index.html (public)
)

