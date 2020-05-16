import { connect } from 'react-redux'
import Total from '../components/Total'

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(Total)