import React from 'react';
import Currency from './Currency';

const dollarRate = 71.5;

function toDollar(rupees){
    return (rupees* dollarRate);
}

function toRupees(dollar){
    return (dollar/dollarRate);
}

function convertCurrency(amount, convert) {
    const input = parseFloat(amount);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }

class Calculator extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            country : "in",
            amount : "",
        }
    }

    handleRupeesChange=(input) =>{
        this.setState({
            country : "in",
            amount : input,
        })
    }

    handleDollarChange = (input)=>{
        this.setState({
            country : "us",
            amount : input,
        })
    }

    render(){

        const currencyInState = this.state.amount;
        const countryCode = this.state.country;
        const rupees = countryCode === "us" ? convertCurrency(currencyInState,toDollar) : currencyInState;
        const dollar = countryCode === "in" ? convertCurrency(currencyInState, toRupees) : currencyInState;

        return(
            <div>
                <Currency amount={rupees}
                          code="in"
                          inputHandle={this.handleRupeesChange} />
                <Currency amount={dollar} 
                          code="us"
                          inputHandle={this.handleDollarChange} />
            </div>
               
        )
    }
}

export default Calculator;