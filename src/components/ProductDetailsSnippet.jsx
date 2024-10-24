import React from "react";
import { Button,Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


export default function ProductDetailsSnippet(){
    const navigate=useNavigate
    return(
        <>
            <Card.Img src={product.images[0]} />
            <Card.Title>{product.title}</Card.Title>
            <div className="price_bar">
                <Card.Text>{`Price :$${product.price}`}</Card.Text>
                <Button onClick={()=>navigate(`/product/${product.id}`,{state:product})}>View Item</Button>
            </div>
        </>
    )
}