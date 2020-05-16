import React from 'react'
import { Card, CardContent, CardActions, Divider } from '@material-ui/core'
import products from '../products.json'
import { Link } from 'react-router-dom'

export default function Category(props) {
      let category = props.match.params.category
      let productInCategory = products.filter(product => category == product.Category)
     
    return (
        <div className="card-container">
                   {productInCategory.map((product, idx) => (
                <Card key={idx} className="card">
                    <CardContent className="text-gray">
                        <span>{product.Name.toUpperCase()}</span>
                        <ul>
                        <li>Size: {product["Size"]}</li>
                        <li>Volume: {product["Volume"]}</li>
                        <li>Category: {product["Category"]}</li>
                        <li>Type: {product["Type"]}</li>
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
