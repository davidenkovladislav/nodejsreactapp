import React, { Component } from 'react';
import './customers.css';

class Customers extends Component {
  constructor() {
    super();
    this.state = {
      clientIp : '',
      clientUserAgent : '',
      clientOsName : '',
      clientOsVersion : '',
      clientBrowserName : '',
      clientBrowserVersion : ''
    };
  }

  // componentDidMount() {
  //   fetch('/api/customers')
  //     .then(res => res.json())
  //     .then(customers => this.setState({customers}, () => console.log('Customers fetched...', customers)));
  // }

  componentDidMount() {
    fetch('/userData')
      .then(res => res.json())
      .then(userData => this.setState({
        clientIp : userData.clientIp,
        clientOsName: userData.clientOsName,
        clientOsVersion: userData.clientOsVersion,
        clientBrowserName: userData.clientBrowserName,
        clientBrowserVersion: userData.clientBrowserVersion
      }, () => console.log('Fetched')))
  }

  render() {
    return (
      <div>
        <h2>IP</h2>
        {this.state.clientIp}
        <h2>OS name</h2>
        {this.state.clientOsName}
        <h2>OS ver</h2>
        {this.state.clientOsVersion}
        <h2>Browser name</h2>
        {this.state.clientBrowserName}
        <h2>Browser ver</h2>
        {this.state.clientBrowserVersion}
      </div>
    );
  }
}

export default Customers;
