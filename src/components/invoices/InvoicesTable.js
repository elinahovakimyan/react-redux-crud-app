import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addInv } from '../../actions'
import { Button, Table } from 'react-bootstrap'
import DelInvoice from './DelInvoice'
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
    const { invoices } = this.props
    return (
      <div className="tablePage">
        <Helmet>
          <title>Invoices List</title>
        </Helmet>
        <h1> Invoice List </h1> 
        <Button> 
          <Link to="/add-invoice" className="link" activeClassName="active">
            Create 
          </Link> 
        </Button>

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
              {invoices.map(invoice => (
                <tr key={invoice.invId}>
                  <td>{invoice.invId}</td>
                  <td>{invoice.customer}</td>
                  <td>{invoice.discount}</td>
                  <td>{invoice.total}</td>
                  <td> <DelInvoice invoice={invoice}/> </td>
                </tr>
              ))}
            </tbody>
        </Table>
      </div>
    )
  }
}

const mapStateToProps = ({items}) => {
  return {
    invoices: items.invoices,
    customers: items.customers,
    products: items.products,
    invProducts: items.invProducts
  }
}

export default connect(
  mapStateToProps,
  null
)(InvoicesTable)
