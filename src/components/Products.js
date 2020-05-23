import React, { useState } from 'react'
import { Container, Paper, Chip } from '@material-ui/core'
import { Link } from "react-router-dom"

const Product = (props) => {
    let id = props.match.params.id
    let product = props.products.find(product => id == product.id)

const [change, setChange] = useState(0);

    return (
        <Container maxWidth="sm" className="product-container">
            <Paper style={{ backgroundColor: "#e0e0e0"}} className="product-paper">
            <img className="img"
               style={{ height: "180px", width: "200px" }} 
               src={product.src}>
            </img>
                <h2>{product.Name}</h2>
                {
                    Object.keys(product).map((key, index) => {
                        if(key=="Category") {
                            return(
                         <Link to ={`/categories/${product[key]}`}key={index}>
                             <Chip className="link-category" label={`${key}: ${product[key]}`}></Chip>
                         </Link>
                            )
                        }else if(key=="Type") {
                            return(
                                <Link to ={`/types/${product[key]}`}key={index}>
                                    <Chip className="link-type" label={`${key}: ${product[key]}`}></Chip>
                                </Link>
                                   )
                        }else if(key=="src") {
                            return (
                                null
                            )
                        }
                        else{
                            return <Chip key={index} label={`${key}: ${product[key]}`}></Chip>
                        }
                    })
                }
                <input className="box-input"
                    type="number" 
                    value={change} 
                    onChange={(e)=> {
                        setChange(e.target.value)
                    } }
                >
                </input>
                <button className="inv-button" style={{ backgroundColor: "#5ca383" }} onClick={()=> {
                    let temp = product
                    temp.Stock+=Number(change)
                    props.changeStock(temp)
                    setChange(0)
                }}>Add Inventory</button>
            </Paper>
        </Container>
    )
}

export default Product
