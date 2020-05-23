import { connect } from 'react-redux'
import Home from '../components/Home'
import { fetchCategories } from "../Redux/actions"

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}
const mapDispatchToProps=(dispatch) => {
    return {
        fetchCategories:() => dispatch(fetchCategories())
            
        
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home)