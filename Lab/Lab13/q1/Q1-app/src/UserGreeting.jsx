import React, { Component } from 'react';

class UserGreeting extends Component {
  render() {
    const { firstName, lastName } = this.props;
    return <h1>Hello, {firstName} {lastName}!</h1>;
  }
}

export default UserGreeting;
