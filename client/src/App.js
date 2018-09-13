import React from 'react'
import { Switch, Route } from 'react-router-dom';
//routes
import Home from './Home';
import Admin from './Admin';
import User from './User';
import Navbar from './Navbar';
import WaterShares from './WaterShares';

const App = () => {
    return (
        <div className='wrapper'>
            <div className='topOfWrapper'>
                <span className='GHIGspan'>Grovers Hill <br/>Irrigation District</span>
                <Navbar />
            </div>            
            <div className='routesDiv'>
                <Switch>
                    <Route exact path='/' component={ Home }/>
                    <Route exact path='/Admin' component={ Admin }/>
                    <Route exact path='/User' component={ User }/>
                    <Route exact path='/WaterShares' component={ WaterShares }/>
                </Switch>
            </div>
        </div>
    )
}

export default App
