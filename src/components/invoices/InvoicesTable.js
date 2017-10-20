import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addInv } from '../../actions/index'
import {Button, Table} from 'react-bootstrap'
import {Link} from 'react-router'

class InvoicesTable extends Component {
  constructor() {
    super();
    this.state = {invoices: []}
  }
  componentDidMount(){
      fetch('api/invoices')
        .then( invoices => invoices.json() )
        .then(invoices => {
          this.setState({
            invoices
          })
          this.props.dispatch(addInv()) 
       })

  }
  render() {
    return (
      <div className="tablePage">
        <h1> Invoice List </h1> 
        <Button> Create </Button>
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

export default connect(
  mapStateToProps,
  null
)(InvoicesTable)
