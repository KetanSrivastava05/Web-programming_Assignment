import React, { Component } from 'react';

class TemperatureConverter extends Component {
  constructor() {
    super();
    this.state = { temp: '', isCelsius: true };
  }

  handleChange = (e) => {
    this.setState({ temp: e.target.value });
  };

  toggleUnit = () => {
    this.setState((prevState) => ({ isCelsius: !prevState.isCelsius }));
  };

  render() {
    const { temp, isCelsius } = this.state;
    const convertedTemp = isCelsius
      ? (temp * 9/5 + 32).toFixed(2) + " °F"
      : ((temp - 32) * 5/9).toFixed(2) + " °C";

    return (
      <div>
        <h2>Temperature Converter</h2>
        <input 
          type="number" 
          value={temp} 
          onChange={this.handleChange} 
          placeholder="Enter temperature" 
        />
        <button onClick={this.toggleUnit}>
          Convert to {isCelsius ? "Fahrenheit" : "Celsius"}
        </button>
        <p>Converted Temperature: {convertedTemp}</p>
      </div>
    );
  }
}

export default TemperatureConverter;
