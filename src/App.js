import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      sales: []
    };
  }
  componentDidMount() {
    this.loadStudentsFromServer();
  }

  loadStudentsFromServer() {
    let request = "http://localhost:8081/bank/txn?xrNo=dfkdkf";
    axios.get(request)
      .then(res => {
        this.setState({sales: res.data});
        console.log('response', res.data[0])
      console.log('response1', this.state.sales[0].txnRefNo)
      console.log('response2', this.state.sales[0].partnerTxnRefNo)
      console.log('response3', this.state.sales[0].taxInvoiceNumber)
      });
  } 

  render() {
    
    return (
      
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <h2>Succesfuly Integrated with spring boot and geting Stored proc data</h2>
        <div>
           <div>
              {this.state.sales.map(sale=><div key={sale}> 
              <div  className="p-3 mb-2 bg-primary text-white">Refrence Number: {sale.txnRefNo} </div><br/>
              <div className="p-3 mb-2 bg-success text-white"> TxnRef Number:{sale.partnerTxnRefNo}</div><br/>
              <div className="p-3 mb-2 bg-warning text-dark"> TxnInvo Number: {sale.taxInvoiceNumber} </div></div>)}
           </div>
        </div>
      
      </div>
    );
  }
}

class Content extends React.Component {
  render() {
     return (
        <div className="col-md-6" styles="background-color: peachpuff">
          <div className="text-primary">Refrence Number: {this.props.componentData.txnRefNo}</div> <br/>
          <div  className="text-success">TxnRef Number: {this.props.componentData.partnerTxnRefNo}</div> <br/>
          <div className="text-light bg-dark" >TxnInvo Number: {this.props.componentData.taxInvoiceNumber}</div> 
          </div>
     );
  }
}
export default App;
