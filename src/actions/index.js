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

export const deleteCust = (customers) => {
	return {
		type: 'DELETE_CUST',
		payload: customers 
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

export const updateProd = (products) => {
	return {
		type: 'UPDATE_PROD',
		payload: products
	}
}

export const deleteProd = (products) => {
	return {
		type: 'DELETE_PROD',
		payload: products,
	}
}


//Invoices 

export const invProd = (invProducts) => {
	return {
		type: 'INV_PROD',
		payload: invProducts
	}
}

export const fetchInv = (invoices) => {
	return {
		type: 'FETCH_INV',		
		payload: invoices
	}
}

export const addInv = (invoices) => {
	return {
		type: 'ADD_INV',
		payload: invoices
	}
}

export const updateInv = (invoices) => {
	return {
		type: 'UPDATE_INV',
		payload: invoices
	}
}

export const deleteInv = (invoices) => {
	return {
		type: 'DELETE_INV',
		payload: invoices 
	}
}

export const addInvId = (invId) => {
	return {
		type: 'INV_ID',
		payload: invId
	}
}