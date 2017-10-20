const initialState = {
	customers: [],
	products: [],
	invProducts: [],
	invoices: []
}

const items = (state = initialState, action) => {
	switch (action.type) {
	    case 'FETCH_CUST':
	        return {...state, customers: state.customers.concat(action.payload
	        )}

		case 'ADD_CUST':
	        return {...state, customers: state.customers.concat(action.payload
	        )}

	    case 'UPDATE_CUST':
	        return {...state, 
	        	customers: state.customers.concat(action.payload
	        	// id: products[products.length-1]
	        )}

	    case 'DELETE_CUST':
			return { customers: state.customers.filter(customer =>
				customer.id !== action.id
			)}
		// case 'DELETE_CUST':
		// 	const newState = Object.assign([], state.customers);
		// 	const indexOfCustToDelete = state.customers.findIndex(customer => {
		// 		return customer.id === action.id
		// 	})
		// 	newState.splice(indexOfCustToDelete, 1);
		// 	return newState;
		case 'FETCH_PROD':
	      	return {...state, products: state.products.concat(action.payload
	      	)}

	    case 'ADD_PROD':
	        return {...state, 
	        	products: state.products.concat(action.payload
	        )}

	    case 'INV_PROD':
	        return {...state, 
	        	invProducts: state.invProducts.concat(action.payload
	        )}

	    case 'UPDATE_PROD':
	        return {...state, 
	        	products: state.products.concat(action.payload
	        	// id: products[products.length-1]
	        )}

		case 'DELETE_PROD':
			return { products: state.products.filter(product =>
				product.id !== action.id
			)}

		default:
			return state
	}
}

export default items