import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteProd } from '../../actions/index'
import { Button, Table, Modal } from 'react-bootstrap'
import CreateProd from './CreateProd'
import EditProd from './EditProd'
import DelProd from './DelProd'
import { Helmet } from 'react-helmet'

class ProductsTable extends Component {

  render() {
    return (
      <div className="tablePage">
        <Helmet>
          <title>Products List</title>
        </Helmet>
        <h1> Product List </h1> 
        <CreateProd products={this.props.products}/>
        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map(product => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td> <EditProd product={product} /> </td>
                <td> <DelProd product={product} /> </td>
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
    products: state.items.products
  }
}


export default connect(
  mapStateToProps
)(ProductsTable)



