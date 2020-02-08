import React from 'react';
import '../styles/style.css';

const country = {
    in:'INR',
    us:'USD',
}

class Currency extends React.Component{

    handleChange = e =>{
        const value = e.target.value;
        this.props.inputHandle(value);
    }

    render(){    
        return(
            <div className="flex">
                <fieldset className="field">
                    <legend className="legend">
                        Enter amount in {country[this.props.code]}
                    </legend>
                    <input value={this.props.amount} 
                           className="input-value"
                           onChange={this.handleChange} />
                </fieldset>
            </div>
        )
    }
}

export default Currency;