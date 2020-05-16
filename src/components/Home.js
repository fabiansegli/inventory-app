import React from 'react'
import { Card, CardContent, CardActions, Divider } from '@material-ui/core'
import products from '../products.json'
import { Link } from 'react-router-dom'

const Home = () => {
    console.log('PRODUCTS', products)
    return (
        <div className="card-container">
            {products.map((product, idx) => (
                <Card key={idx} className="card">
                    <CardContent className="text-gray" >
                        <span>{product.Name.toUpperCase()}</span>
                        <ul className="card-list">
                        <li>Size: {product["Size"]}</li>
                        <li>Volume: {product["Volume"]}</li>
                        <li>Category: {product["Category"]}</li>
                        <li>Type: {product["Type"]}</li>
                        <li>Stock: {product["Stock"]}</li>
                        </ul>
                    </CardContent>
                    <Divider />
                    <CardActions style={{ color: 'black' }}>
                        <Link to={`/products/${product.id}`}>
                            <b> See more Details </b>
                        </Link>
                    </CardActions>
                </Card>
            ))}
        </div>
    )
}

export default Home
