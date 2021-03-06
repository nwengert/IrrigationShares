import React, { Component } from 'react'

const mes = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const startDate = new Date("15 April 2018");
const _Start = ` ${mes[startDate.getMonth()]} ${startDate.getDate()}`
const endDate = new Date("15 Sept 2018");
// const _EndDate = ` ${mes[endDate.getMonth()]} ${endDate.getDate()}`
const lastUpdate = new Date();
const _Last = ` ${mes[lastUpdate.getMonth()]} ${lastUpdate.getDate()}`
const today = new Date();
const daysRemaining = Math.round((endDate.getTime()-today.getTime())/(1000*60*60*24));

export default class WaterShares extends Component {
    render() {
        return (
            <div className='waterSharesWrapper'>
                <div className='bodyDiv' id='sharesHeader'>
                    <h2>2018 Water Balance Calculations</h2>
                    <h3>Last Update: {lastUpdate.toDateString()}</h3>
                </div>
                <div className='bodyDiv' id='lakeVolume'>
                    <h4>Water Volume in Lyman Lake:</h4>
                    <h5>1 - Measured volume at midnight 
                            {_Start}:</h5>
                    <h5>2 - Total actual flow released for GHID into canal from 
                            {_Start} to {_Last}:</h5>
                    <h5>3 - Total actual flow released into river below dam from 
                            {_Start} to {_Last}:</h5>
                    <h5>4 - Total actual flow released into canal for SRP from 5/10 to 8/29:</h5>
                    <h5>5 - Calculated volume at midnight September 9, 2018:</h5>
                    <h5>6 - Measured volume at midnight September 9, 2018:</h5>
                    <h5>7 - Estimate of evaporation loss from 
                            {_Start} to {_Last}:</h5>

                    <div className='line'>
                        <h5 className='spacer'>8 - Lyman Lake minimum pool: </h5><h5 className='spacer'>889.6 ac-ft, 5,947' elev.</h5></div>
                    <div className='line'>
                        <h5>9 - SRP balance (balance minus current order):</h5><h5> lots </h5></div>
                    <div className='line'>
                        <h5>10 - Zuni balance:</h5><h5>lots</h5></div>
                    <div className='line'>
                        <h4>Calculated Min Volume remaining on {endDate.toDateString()}:</h4><h5>lots</h5></div>
                </div>                                  
                <div className='bodyDiv' id='volToDeliver'>
                    <h4>Calculation of water volume to deliver to GHID Members:</h4>
                    <h5>A field stream is 3 cfs, a garden stream is 1 cfs.</h5>
                    <h5>13 - The number of field shares being served is:</h5>
                    <h5>14 - The number of garden shares being served is:</h5>
                    <h5>15 - The approved total time per field share is:</h5>
                    <h5>16 - The approved time per garden share is:</h5>
                    <h5>17 - The total volume for field shares is:</h5>
                    <h5>18 - The total volume for garden shares is (12 turns):</h5>
                    <h5>The total volume needed for field and garden shares is:</h5>
                    <h5>Add 25% for losses in the system:</h5>
                </div>
                <div className='bodyDiv' id='alreadyDelivered'>
                    <h4>Calculation of volume of water already delivered to Members:</h4>
                    <h5>19 -Total actual flow released for GHID into canal from 4/15 to 9/9:</h5>
                    <h5>20 - The Ramsey Well has produced (through 9/9):</h5>
                    <h5>21 - The Salado Well has produced (through 9/9):</h5>
                </div>
                <div className='bodyDiv' id='usagePlan'>
                    <h4>Proposed water usage plan for the remainder of the season:</h4>
                    <h5>22 - number of days remaining in season: <span>{daysRemaining.toFixed(2)}</span></h5>
                    <h5>23 - Estimated amount to deliver into the river:</h5>
                    <h5>24 - Estimated amount to be delivered to Little Reservoir:</h5>
                    <h5>25 - SRP will receive the remainder of their order through 9/15:</h5>
                    <h5>26 - Continue to pump from the Salado well:</h5>
                    <h5>27 - Keep 16 cfs in the canal for members for the rest of the season:</h5>
                    <h5>28 - Volume in the lake as of midnight on 8/28:</h5>
                    <h5>29 - Remainder in the lake after deducting the proposed plan (calculated):</h5>
                </div>
                <div className='bodyDiv' id='waterDelivered'>
                    <h4>Total Volume of water delivered to members for the season (including the proposed plan): </h4>
                    <h5>30 - Volume of water already delivered:</h5>
                    <h5>31 - Volume from plan in canal and Salado well:</h5>
                    <h5>32 - Reduce the total by 25% due to losses in the system:</h5>
                </div>
                <div className='bodyDiv' id='fieldShareCalc'>
                    <h4>Calculation of the actual time per share for field shares:</h4>
                    <h5>33 - It is estimated that the field shares use 88% of the total volume:</h5>
                    <h5>34 - The time per share is :</h5>
                </div>
                
            </div>
        )
    }
}
