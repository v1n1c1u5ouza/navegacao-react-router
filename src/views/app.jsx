import './app.css'
import React from "react";
import Menu from '../components/layout/menu';
import Content from '../components/layout/content';

const App = props => (
    <div className="App">
        <Menu />
        <Content />
    </div>
)

export default App
