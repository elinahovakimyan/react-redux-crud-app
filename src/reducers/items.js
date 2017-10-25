import Immutable from 'seamless-immutable'

const initialState = Immutable({
	customers: [],
	products: [],
	invProducts: [],
	invoices: [],
	invId: 0
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

	    case 'DELETE_CUST':
			return state.merge({
				customers: action.payload
			})

		case 'UPDATE_CUST':
			return state.merge({
				customers: action.payload
			})




		case 'FETCH_PROD':
	      	return state.merge({
	      		products: action.payload
	      	})

	    case 'ADD_PROD':
	        return state.merge({
	        	products: state.products.concat(action.payload
	        )})
	        
  		case 'UPDATE_PROD':
	        return state.merge({ 
	        	products: action.payload
	        })

		case 'DELETE_PROD':
			return state.merge({ 
				products: action.payload
			})




		case 'FETCH_INV':
	        return state.merge({	        	
	        	invoices: state.invoices.concat(action.payload
	        )})

	    case 'ADD_INV':
	        return state.merge({
	        	invoices: state.invoices.concat(action.payload
	        )})

	    case 'INV_PROD':
	        return state.merge({ 
	        	invProducts: state.invProducts.concat(action.payload
	        )})

	    case 'UPDATE_INV':
	        return state.merge({ 
	        	invoices: action.payload
	        })

		case 'DELETE_INV':
			return state.merge({ 
				invoices: action.payload
			})

		case 'INV_ID':
			return state.merge({
				invId: action.payload
			})



		default:
			return state
	}
}

export default items