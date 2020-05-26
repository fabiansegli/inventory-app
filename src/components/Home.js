import React from 'react'
import { Card, CardContent, CardActions, Divider } from '@material-ui/core'
import { Link } from 'react-router-dom'

const Home = (props) => {
    console.log("props in home component", props)
    props.fetchCategories()
    return (
        <div className="card-container">
            {props.products.map((product, idx) => (
                <Card key={idx} className="card">
                    <CardContent className="text-gray" >
                        <span>{product.Name.toUpperCase()}</span>
                        <ul className="card-list">
                        <li>Size: {product["Size"]}</li>
                        <li>Volume: {product["Volume"]}</li>
                        <li>Category: {product["Category"]}</li>
                        <li>Type: {product["Type"]}</li>
                        <li><b>Stock: {product["Stock"]}</b></li>
                        </ul>
                    </CardContent>
                    <Divider />
                    <CardActions style={{ color: 'black' }}>
                        <Link to={`/products/${product.id}`}>
                            <b> Product Info </b>
                        </Link>
                    </CardActions>
                </Card>  
            ))}
        </div>
    )
}

export default Home
