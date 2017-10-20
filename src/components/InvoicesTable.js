import React, { Component } from 'react'
import { connect } from 'react-redux'
import store from '../store'
import { addInv } from '../actions/index'
import {Button, Table} from 'react-bootstrap'

const url = '/api/invoices'
const dispatch = store.dispatch;
const getState = store.getState;


class invoices extends Component {
  constructor() {
    super();
    this.state = {invoices: []}
  }
  componentDidMount(){
      fetch(url)
        .then( invoices => invoices.json() )
        .then(invoices => {
          this.setState({
            invoices
          })
          dispatch(addInv()) 
       })

  }
  render() {
    return (
      <div className="tablePage">
        <h1> Invoice List </h1> 
        <Table responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Customer</th>
                <th>Discount</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {this.state.invoices.map(invoice => (
                <tr key={invoice.id}>
                  <td>{invoice.id}</td>
                  <td>{invoice.customer}</td>
                  <td>{invoice.discount}</td>
                  <td>{invoice.total}</td>
                </tr>
              ))}
            </tbody>
        </Table>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    invoices: state.items.invoices,
    customers: state.items.customers,
    products: state.items.products,
    invProducts: state.items.invProducts
  }
}


const invoicesTable = connect(
  mapStateToProps,
  null
)(invoices)

export default invoicesTable
