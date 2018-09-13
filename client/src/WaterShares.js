import React, { Component } from 'react'

const startDate = new Date("15 April 2018");
const endDate = new Date("15 Sept 2018");
const today = new Date();
const lastUpdate = new Date();
const daysRemaining = Math.round((endDate.getTime()-today.getTime())/(1000*60*60*24));

export default class WaterShares extends Component {
    render() {
        return (
            <div className='waterSharesWrapper'>
                <h2>Water Balance Calculation for 2018 Season</h2>
                <h3>Last Update: {lastUpdate.toDateString()}</h3>
                <div className='bodyDiv' id='lakeVolume'>
                    <h4>Water Volume in Lyman Lake:</h4>
                    <h5>1 - Measured volume of water in Lyman Lake at midnight {startDate.toDateString()}:</h5>
                    <h5>2 - Total actual flow released for GHID into canal from 4/15 to 9/9:</h5>
                    <h5>3 - Total actual flow released into the river below the Dam from 4/15 to 8/29:</h5>
                    <h5>4 - Total actual flow released into canal for SRP from 5/10 to 8/29:</h5>
                    <h5>5 - Calculated volume of water in Lyman Lake at midnight September 9, 2018:</h5>
                    <h5>6 - Measured volume of water in Lyman Lake at midnight September 9, 2018:</h5>
                    <h5>7 - Estimate of evaporation losses in the Lake from 4/15 to 9/9:</h5>
                </div>
                <div className='bodyDiv' id='minToRemain'>
                    <h4>Calculation of the Minimum Volume of Water to remain in the Lake on 9/15:</h4>
                    <h5>8 - The minimum pool in Lyman Lake is :</h5>
                    <h5>9 - The SRP balance is (balance minus current order):</h5>
                    <h5>10 - The Zuni balance is:</h5>    
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
