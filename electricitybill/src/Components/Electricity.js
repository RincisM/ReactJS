import React, { Component } from 'react';
import Units from './Units';
import './Electricity.css';

class Electricity extends Component {
    state = { 
        units: 0,
        showTable: false
    }
    
    handleUnitsChange = (value) => {
        this.setState({units: value, showTable:false});
    }

    calculateBill = () => {
        const {units} = this.state;
        let totalCharges = 0;
        let stateGST = 0.09;
        let centralGST = 0.09;
        let subsidy = 250;
        if (units > 0 && units <= 100) {
          totalCharges = 0;
        } else if (units > 100 && units <= 200) {
          totalCharges = (units - 100) * 3.75 + 100;
        } else if (units > 200 && units <= 400) {
          totalCharges = (units - 200) * 4 + 250 + 100 * 3.75;
        } else if (units > 400 && units <= 600) {
          totalCharges = (units - 400) * 4.25 + 300 + 200 * 4 + 100 * 3.75;
        } else if (units > 600) {
          totalCharges = (units - 600) * 5 + 400 + 200 * 4 + 200 * 4.25 + 100 * 3.75;
        }
        let gstAmount = stateGST*totalCharges + centralGST*totalCharges;
        let netAmount = totalCharges+gstAmount;
        if(units<=100) {
          netAmount=0;
        }
        if(units>100 && units<=150) {
          netAmount=100;
        }
        return {totalCharges, subsidy, netAmount, gstAmount};
    }
    handleCalculate = () => {
        this.setState({showTable: true});
    }

    render() {
        const { units, showTable } = this.state;
        const {totalCharges, subsidy, netAmount, gstAmount} = this.calculateBill();
        return (
            <>
                <div className='container'>
                <Units onUnitsChange={this.handleUnitsChange}/>
                <button type="submit" onClick={this.handleCalculate}>Calculate</button>
                {showTable && units > 0 && (
                    <table>
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Amount (Rs.)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Consumed Units:</td>
                                <td>{units}</td>
                            </tr>
                            <tr>
                                <td>Total Current Charges</td>
                                <td>{totalCharges.toFixed(1)}</td>
                            </tr>
                            <tr>
                                <td>Current Charges</td>
                                <td>{totalCharges.toFixed(1)}</td>
                            </tr>
                            <tr>
                                <td>GST Charges</td>
                                <td>{gstAmount.toFixed(1)}</td>
                            </tr>
                            <tr>
                                <td>New Subsidy(-)</td>
                                <td>{subsidy.toFixed(1)}</td>
                            </tr>
                            <tr>
                                <td>Net Amount</td>
                                <td>{netAmount.toFixed(1)}</td>
                            </tr>
                        </tbody>
                  </table>
                )}
                </div>
            </>
        );
    }
}
 
export default Electricity;