import React, { useEffect } from "react";
import { Row,Col } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import './css/ProductDetails.css'
import { useState } from "react";
import {Button} from "react-bootstrap";
import axios from "axios";
import { Card } from "react-bootstrap";

export default function ProductDetails({cartItems, handleAddToCart}){
    const location = useLocation();
    const navigate = useNavigate();
    const {title,price,images,description,category,id}=location.state;

    //ReadMore readless
    const [isExpanded, setIsExpanded] = useState(false);
    // Toggle the "Read More" state
    const toggleDescription = (event) => {
        event.preventDefault();
        setIsExpanded(!isExpanded);
    };
    // Limit description to a certain number of characters
    const shortDescription = description.length > 100 ? description.substring(0, 100) + "..." : description;

    //categories
    const [otherproducts,setOtherProducts]=useState([]);

    useEffect(()=>{
        async function getData() {
            const response=await axios.get(`https://api.escuelajs.co/api/v1/categories/${category.id || 1}/products?limit=12&offset=0`);
            setOtherProducts(response.data);
        }
        getData();
    },[])

    return(
        <div>
            <Row>
                <Col lg={2}>
                    <div className="panel_images">
                        {images.map((image,index)=>{
                            return(
                                <img key={index} src={image} alt="" />
                            )
                        })}
                    </div>
                </Col>

                <Col lg={5}>
                    <div className="main_image_display">
                        <img src={images[0]} alt="" />
                        <h5>{title}</h5>
                        <h4 style={{color:"#216ad9"}}>Price: $.{price}</h4>
                        <p>
                            {isExpanded ? description : shortDescription}
                            {description.length > 100 && (
                                <a href='#' onClick={toggleDescription} className="read-more-link">
                                {isExpanded ? "Read Less" : "Read More"}
                                </a>
                            )}
                        </p>
                        <Button onClick={()=>{
                            if(id in cartItems){
                                const currentItem = cartItems[id];
                                handleAddToCart({[id]:{title,price,quantity:currentItem.quantity +1}})
                            }else{
                                handleAddToCart({[id]:{title,price,quantity:1}})
                            }
                        }}>Add To Cart</Button>
                    </div>
                </Col>

                <Col lg={5}>
                    <div>
                        <h2>Similar Products</h2>
                    </div>
                    <div className="similar_products">
                        {otherproducts.map((product)=>{
                            if(product.id ==id) return;
                            return(
                                <Card className="similar_products_card" key={product.id}>
                                    <Card.Img  src={product.images[0]} />
                                    <Card.Title>{product.title}</Card.Title>
                                    <div className="price_bar">
                                        <Card.Text>{`Price :$${product.price}`}</Card.Text>
                                        <Button onClick={()=>navigate(`/product/${product.id}`,{state:product})}>View Item</Button>
                                    </div>
                                </Card>
                            )
                        })} 
                    </div>
                </Col>
            </Row>
        </div>
    )
}