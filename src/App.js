import React from 'react'
import { Switch, Route } from 'react-router-dom';
//routes
import AdminPortal from './AdminPortal';

const App = () => {
    return (
        <div>
            <Route exact path='/' component={ Home }/>
            <Route exact path='/' component={ Home }/>
            <Route exact path='/' component={ Home }/>
            <Route exact path='/' component={ Home }/>
            <Route exact path='/' component={ Home }/>
        </div>
    )
}

export default App
