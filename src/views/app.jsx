import './app.css'
import React from 'react'
 
import { BrowserRouter } from  'react-router-dom' // essa importação mudou
 
import Menu from '../components/layout/menu'
import Content from '../components/layout/content'
 
const App = props => (
    <div className="App">
        <BrowserRouter> 
            <Menu />
            <Content />
        </BrowserRouter> 
    </div>
)
 
export default App