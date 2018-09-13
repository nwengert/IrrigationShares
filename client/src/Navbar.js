import React from 'react';
import { Link, withRouter } from 'react-router-dom';

function Navbar(props) {
    console.log(props);
    const {location: {pathname}} = props;
    return (
        <div className='navbar'>
            {pathname !== '/'      && <Link className='navBtn' id='Home'  to='/'>      Home</Link>}
            {pathname !== '/Admin' && <Link className='navBtn' id='Admin' to='/Admin'> Admin</Link>}
            {pathname !== '/User'  && <Link className='navBtn' id='User'  to='/User'>  User</Link>}
            {pathname !== '/WaterShares'  && <Link className='navBtn' id='WaterShares'  to='/WaterShares'>  Water Shares</Link>}
        </div>
    )
}

export default withRouter(Navbar)
