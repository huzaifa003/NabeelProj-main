import React, { useState } from 'react'
import Home from './Pages/Home'

import Bg from "./assets/background.webp"
import './index.css'
const App = () => {
    const [darkMode, setDarkMode] = useState(true)
    return (
    //  background color chnge
        <div  className={`${darkMode ? 'bg-gradient-to-r from-cyan-700 to-blue-700 dark   ' : 'bg-gradient-to-r from-cyan-500 to-blue-500 '} `}>
            <div  >
                <Home darkMode={darkMode} setDarkMode={setDarkMode} />
          
            </div>
        </div>
    )
}
//for gradient background
// className={`${darkMode ? 'bg-gradient-to-r from-cyan-700 to-blue-700' : 'bg-gradient-to-r from-cyan-500 to-blue-500'} `}

export default App