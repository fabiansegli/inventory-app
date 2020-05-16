const dotenv =require("dotenv")
dotenv.config()
const shopifyPassword = process.env.SHOPIFY_PASSWORD
const url = `https://fabian@tinyhousecoffeeroasters.com:${shopifyPassword}@tinyhousecoffeeroasters.myshopify.com`

export const addProduct = (addProduct) => {
    return {
        type: 'ADD_PRODUCT',
        value: car
    }
}

export const removeProduct = (index) => {
    return {
        type: 'REMOVE_PRODUCT',
        value: index
    }
}

export const fetchCategories = () => {
    return dispatch => {
        // /check response from url
      fetch(url + "/admin/") 
        .then(response => response.json())
        .then(response => {
          const action = {
            type: "FETCH_CATEGORY",
            value: response.Results
          };
          dispatch(action);
        });
    };
  };
  
  export const deleteCategories = index => {
    return {
      type: "DELETE_CATEGORY",
      value: index
    };
  };