import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addInv } from '../../actions/index'
import { Button, Table } from 'react-bootstrap'
import { Link } from 'react-router'
import { Helmet } from 'react-helmet'


class InvoicesTable extends Component {
  constructor() {
    super();
    this.state = {
      invoices: []
    }
  }
  render() {
    return (
      <div className="tablePage">
        <Helmet>
          <title>Invoices List</title>
        </Helmet>
        <h1> Invoice List </h1> 
        <Button> <Link to="/add-invoice" className="link" activeClassName="active">Create </Link> </Button>

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
