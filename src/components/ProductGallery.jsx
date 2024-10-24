import axios from "axios";
import { useEffect, useState } from "react"
import { Card } from "react-bootstrap";
import './css/productGallery.css'
import {Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function ProductGallery(){
    const [products,setProducts]=useState([]);
    const navigate=useNavigate();
    useEffect(()=>{
        async function getProducts(){
            const response = await axios.get('https://api.escuelajs.co/api/v1/products?offset=0&limit=20');
            setProducts(response.data);
        }
        getProducts();
    },[]);
    return(
        <div className="productGallery">
            <h3>Select Products</h3>
            <div className="products">
                {products.map((product)=>{
                    return(
                        <Card key={product.id}>
                            <Card.Img src={product.images[0]} />
                            <Card.Title>{product.title}</Card.Title>
                            <div className="price_bar">
                                <Card.Text>{`Price :$${product.price}`}</Card.Text>
                                <Button onClick={()=>navigate(`/product/${product.id}`,{state:product})}>View Item</Button>
                            </div>
                        </Card>
                    )
                })} 
            </div>    
        </div>
    )
}