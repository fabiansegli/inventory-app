import { connect } from 'react-redux';
import Products from "../components/Products";
import { changeStock } from "../Redux/actions"


const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

const mapDispatchToProps=(dispatch) => {
    return {
        changeStock:(product) => dispatch(changeStock(product))
            
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)