import React from 'react'
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client'

import './index.css'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>);


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

// ReactDOM.createRoot(document.getElementById('root'))
//     .render(<h1>-My App1</h1>)

// ReactDOM.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>, document.getElementById('root'))

