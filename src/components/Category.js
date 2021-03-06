import React from 'react'
import { Card, CardContent, CardActions, Divider } from '@material-ui/core'
import { Link } from 'react-router-dom'

export default function Category(props) {
      let category = props.match.params.category
      let productInCategory = props.products.filter(product => category == product.Category)
     
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
                           <b> Product Info </b>
                        </Link>
                    </CardActions>
                </Card>
            ))}
        </div>
    )
}
