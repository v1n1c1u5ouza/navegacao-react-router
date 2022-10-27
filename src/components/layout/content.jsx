import './content.css'
import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../../views/exemples/home'
import Param from '../../views/exemples/param'
import About from '../../views/exemples/about'
import NotFound from '../../views/exemples/notFound'

const Content = props => (
    <main className="Content">
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/param/:id">
                <Param />
            </Route>
            <Route path="*">
                <NotFound />
            </Route>
        </Switch>
    </main>
)

export default Content