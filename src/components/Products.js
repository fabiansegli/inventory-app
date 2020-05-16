import React from 'react'
import { Container, Paper, Chip } from '@material-ui/core'
import { Link } from "react-router-dom"

const Product = (props) => {
    let id = props.match.params.id
    let product = props.products.find(product => id == product.id)
console.log("Hello", props)
    return (
        <Container maxWidth="sm" className="product-container">
            <Paper className="product-paper">
                <h2>{product.Name}</h2>
                {
                    Object.keys(product).map((key, index) => {
                        if(key=="Category") {
                            return(
                         <Link to ={`/categories/${product[key]}`}key={index}>
                             <Chip label={`${key}: ${product[key]}`}></Chip>
                         </Link>
                            )
                        }else if(key=="Type") {
                            return(
                                <Link to ={`/types/${product[key]}`}key={index}>
                                    <Chip label={`${key}: ${product[key]}`}></Chip>
                                </Link>
                                   )
                        } else{
                            return <Chip key={index} label={`${key}: ${product[key]}`}></Chip>
                        }
                    })
                }
            </Paper>
        </Container>
    )
}

export default Product
