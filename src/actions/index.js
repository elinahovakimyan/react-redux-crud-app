function handleResponse(response) {
  if (response.ok) {
    return response.json();
  } else {
    let error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

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

export const updatedCust = (customers) => {
	return {
		type: 'UPDATE_CUST',
		payload: customers
	}
}

export const deletdCust = (id) => {
	return {
		type: 'DELETE_CUST',
		id 
	}
}

export function saveCust(customers) {
  return dispatch => {
    return fetch('/api/customers', {
      method: 'post',
      body: JSON.stringify(customers),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(handleResponse)
    .then(customers => dispatch(addCust(customers)));
  }
}

export function updateCust(customers) {
  return dispatch => {
    return fetch(`/api/customers/${customers.id}`, {
      method: 'put',
      body: JSON.stringify(customers),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(handleResponse)
    .then(customers => dispatch(updatedCust(customers)));
  }
}

export function deleteCust(id) {
  return dispatch => {
    return fetch(`/api/customers/${id}`, {
      method: 'delete',
      headers: {
        "Content-Type": "application/json"
      }
    }).then(handleResponse)
    .then(customers => dispatch(deleteCust(id)));
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

export const invProd = (prodName, invProducts) => {
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

export const deleteProd = (products) => {
	return {
		type: 'DELETE_PROD',
		payload: products,
	}
}


//Invoices 

export const addInv = (products) => {
	return {
		type: 'ADD_INV',
		payload: products
	}
}

