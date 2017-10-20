let nextId = 0;

//Customers

export const fetchCust = (customers) => {
	return {
		type: 'FETCH_CUST',
		payload: customers
	}
}

export const addCust = (customers) => {
	return {
		type: 'ADD_CUST',
		payload: customers
	}
}

export const updateCust = (customers) => {
	return {
		type: 'UPDATE_CUST',
		payload: customers
	}
}

export const deleteCust = (id, customers) => {
	return {
		type: 'DELETE_CUST',
		payload: customers,
		id
	}
}

//Products

export const fetchProd = (products) => {
	return {
		type: 'FETCH_PROD',
		payload: products
	}
}

export const addProd = (products) => {
	return {
		type: 'ADD_PROD',
		payload: products
	}
}

export const invProd = (prodName) => {
	return {
		type: 'INV_PROD',
		name: prodName,
		payload: invProducts
	}
}

export const updateProd = (products) => {
	return {
		type: 'UPDATE_PROD',
		payload: products
	}
}

export const deleteProd = (id, products) => {
	return {
		type: 'DELETE_PROD',
		payload: products,
		id
	}
}




//Invoices 

export const addInv = (products) => {
	return {
		type: 'ADD_INV',
		payload: products
	}
}

