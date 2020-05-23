const dotenv =require("dotenv")
dotenv.config()
const shopifyPassword = process.env.SHOPIFY_PASSWORD
const url = `https://tinyhousecoffeeroasters.myshopify.com`

export const addProduct = (addProduct) => {
    return {
        type: 'ADD_PRODUCT',
        value: addProduct
    }
}

export const removeProduct = (index) => {
    return {
        type: 'REMOVE_PRODUCT',
        value: index
    }
}

export const fetchCategories = () => {
    var headers = new Headers();
    headers.append('Authorization', 'Basic ' + btoa('fabian@tinyhousecoffeeroasters.com' + ':' + shopifyPassword));
    headers.append('X-Shopify-Access-Token', 'Basic ' + "API key"); //Here's where the key number goes
    headers.append('Access-Control-Allow-Origin' , '*')
    return dispatch => {
        // /check response from url
      fetch(`https://cors-anywhere.herokuapp.com/${url}/admin/products.json?limit=250&page=1`, {headers: headers})
        .then(response => response.json())
        .then(response => {
            console.log("response", response)
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

  export const changeStock = product => {
      return {
          type: "CHANGE_STOCK",
          value: product
      }
  }