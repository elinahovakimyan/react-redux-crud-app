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

	    case 'DELETE_CUST':
			return state.filter(item => item._id !== action.gameId);

		case 'UPDATE_CUST':
			return state.map(item => {
			if (item._id === action.game._id) return action.game;
				return item;
			});

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