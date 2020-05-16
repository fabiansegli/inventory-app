import { connect } from 'react-redux'
import Category from '../components/Category'

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(Category)