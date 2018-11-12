import React, { Component } from 'react'
import axios from 'axios';

export default class Admin extends Component {
    constructor() {
        super()
        this.state = {
                hoursPerShare: "",
                owner: "",
                phone: "",
                email: "",
                parcel: "",
                shareType: "",
                shares: "",
                used: "",
                remaining: "",
        };
    }
    componentDidMount() {
        axios({
            method: "GET",
            url: "/owners",
            params: this.props.location.state
        })
            .then(response => {
                const owners = response.data;
                this.setState({ owner: owners })
            })
            .catch(function (err) {
                console.log(err)
            })
    }
    render() {
        console.log(this.state);
        const { owner } = this.state;
        if(owner) {
            
        }
        return (
            <div className='adminWrapper'>
                <form className='filterForm'>
                    <div className='filterInputsInnerDiv'>
                        <h3>Hours per share</h3>
                        <input type="text"      placeholder="Hours per share"    className='filterInput'
                            value={this.state.hoursPerShare}
                            onChange={e => this.setState({ hoursPerShare: e.target.value })}/>
                    </div>
                    <div className='filterInputsDiv'>
                        <input type="text"      placeholder="Name of owner"    className='filterInput'
                            value={this.state.owner}
                            onChange={e => this.setState({ owner: e.target.value })}/>
                        <input type="number"    placeholder="Phone number"     className='filterInput'
                            value={this.state.phone}
                            onChange={e => this.setState({ phone: e.target.value })}/>
                        <input type="text"      placeholder="email address"     className='filterInput'
                            value={this.state.email}
                            onChange={e => this.setState({ email: e.target.value })}/>
                        <input type="text"      placeholder="Parcel number"     className='filterInput'
                            value={this.state.parcel}
                            onChange={e => this.setState({ parcel: e.target.value })}/>
                        <input type="text"      placeholder="Type of share"     className='filterInput'
                            value={this.state.shareType}
                            onChange={e => this.setState({ shareType: e.target.value })}/>
                        <input type="text"      placeholder="Number of Shares"  className='filterInput'
                            value={this.state.shares}
                            onChange={e => this.setState({ shares: e.target.value })}/>
                        <input type="text"      placeholder="Used amount"       className='filterInput'
                            value={this.state.used}
                            onChange={e => this.setState({ used: e.target.value })}/>
                        <input type="text"      placeholder="Remaining amount"  className='filterInput'
                            value={this.state.remaining}
                            onChange={e => this.setState({ remaining: e.target.value })}/>
                    </div>
                    <div>
                    <p>The share owner's name is: {this.state.owner}</p>

                    </div>
                    <button>Clear</button>
                </form>
                <div className='shareHolderList'>
                    <p>{owner}</p>
                </div>
            </div>

        )
    }
}

