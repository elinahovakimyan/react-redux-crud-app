import Immutable from 'seamless-immutable'

const initialState = Immutable({
	customers: [],
	products: [],
	invProducts: [],
	invoices: []
})

const items = (state = initialState, action) => {
	switch (action.type) {
	    case 'FETCH_CUST':
	        return state.merge({	        	
	        	customers: state.customers.concat(action.payload
	        )})

		case 'ADD_CUST':
	        return state.merge({
	        	customers: state.customers.concat(action.payload
	        )})

	  //   case 'DELETE_CUST':
			// return state.filter(item => item._id !== action.gameId);

		case 'UPDATE_CUST':
			return state.merge({
				customers: state.map(item => {
				if (item._id === action.customer.id) return action.customer;
					return item;
			})})

		case 'FETCH_PROD':
	      	return state.merge({
	      		products: action.payload
	      	})

	    case 'ADD_PROD':
	        return state.merge({
	        	products: action.payload
	        })

	    case 'INV_PROD':
	        return state.merge({ 
	        	invProducts: state.invProducts.concat(action.payload
	        )})

	    case 'UPDATE_PROD':
	        return state.merge({ 
	        	products: action.payload
	        })

		case 'DELETE_PROD':
			return state.merge({ 
				products: action.payload
			})

		default:
			return state
	}
}

export default items