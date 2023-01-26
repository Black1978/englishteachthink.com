import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AuthModeContextProvider } from './context/authContext.js'
import { DarkModeContextProvider } from './context/darkModeContext.js'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <DarkModeContextProvider>
        <AuthModeContextProvider>
            <App />
        </AuthModeContextProvider>
    </DarkModeContextProvider>
)
