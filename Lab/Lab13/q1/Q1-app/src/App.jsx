import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import UserGreeting from './UserGreeting';
import LeapYearChecker from './LeapYearChecker';

import Greeting from './Greeting'
import PrimeChecker from './PrimeChecker'
import TemperatureConverter from './TemperatureConverter';
import ReverseString from './ReverseString';
import RandomNumber from './RandomNumber';

function App() {
  //Q1
  //return React.createElement('h1', null, 'Hello, React!-23BCE1216');
  //return <h1>Hello, React! - 23BCE1216 with h1 tag</h1>;
  //const message = "Hello, React! using variable - 23BCE1216";
  //return <h1>{message}</h1>;
  
  //const fruits = ['Mango','Guava','Orange'];
/*
  return (
    <div><h1>Dynamic List - 23BCE1216</h1>
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul></div>
  );
  
  const messageStyle = {
    color: 'white',
    backgroundColor: 'orange',
    padding: '10px',
    borderRadius: '5px',
    textAlign: 'center',
    fontSize: '20px',
    fontWeight: 'bold'
  };

  return <p style={messageStyle}>This is a styled message! - 23BCE1216</p>;
  
  const num1 = 7, num2 = 18;
  const sum = num1 ** 2 + num2 ** 2;

  return (
    <div>

      <h1>23BCE1216</h1>
      <h1>Sum of squares 18<sup>2</sup>+ 7<sup>2</sup>: {sum}</h1>
    </div>);
  
  return (
    <div>
      <h1>Greeting Component - 23BCE1216</h1>
      <Greeting isMorning={true} />  
    </div>
  );
  
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const today = days[new Date().getDay()];
  
  return (
    <div>
      <h1>23BCE1216</h1>
      <h1>Today is {today}</h1>
    
    </div>
  );

  
  
  return (
    <div>
      <h1>Prime Component - 23BCE1216</h1>
      <PrimeChecker number={7} /> 
    </div>
  );
  
  return (
    <div>
      <h1>React App - 23BCE1216</h1>
      <TemperatureConverter /> 
    </div>
  );
  
  return (
    <div>
      <h1>Palindrome Checker -23BCE1216</h1>
      <ReverseString text="ABC" />
    </div>
  );
  */
  return (
    <div>
      <h1>Random Number - 23BCE1216</h1>
      <RandomNumber/>
    </div>
  );
  /*
  return (
    <div>
      <h1>LeapYear Checker - 23BCE1216</h1>
      <LeapYearChecker year={2016}/>
    </div>
  );
  
  return (
    <div>
      <h1>User greeting - 23BCE1216</h1>
      <UserGreeting firstName="Ketan" lastName="Srivastava" />
    </div>
  );*/
  
  
  
}


export default App;
