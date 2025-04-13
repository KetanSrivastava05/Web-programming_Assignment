import React from 'react';

function Greeting({ isMorning }) {
  return <h2>{isMorning ? "Good Morning" : "Good Evening"}</h2>;
}

export default Greeting;
