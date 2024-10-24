import React, { useEffect } from "react";
import { Row,Col, Table } from "react-bootstrap";
import { useState } from "react";
import CartImage from '../assets/cart.png'
import {Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Cart({cartItems, handleClearCart}){
    const [totalQuantity,setTotalQuantity]=useState(0);
    const [totalPrice,setTotalPrice]=useState(0);
    const navigate=useNavigate();

    useEffect(()=>{
        let tempPrice=0;
        let tempQuantity=0;
        Object.keys(cartItems).map((cartItemId)=>{
            const details=cartItems[cartItemId];
            tempQuantity+=details.quantity;
            tempPrice+=details.price*details.quantity;
        })
        setTotalQuantity(tempQuantity);
        setTotalPrice(tempPrice);
    },[])
    return(
        <div>
            <Row>
                <Col style={{marginLeft:"1rem"}}>
                    <div style={{display:'flex', justifyContent:"space-around"}}>
                        <h3>Your Cart Items</h3>
                        <Button onClick={()=>{
                            handleClearCart();
                            setTotalPrice(0);
                            setTotalQuantity(0);
                        }}>Remove All Items</Button>
                    </div>
                    
                    <Table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th>Price($)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(cartItems).map((cartItemId)=>{
                                const itemDetails=cartItems[cartItemId];
                                return(
                                    <tr>
                                        <td>{itemDetails.title}</td>
                                        <td>{itemDetails.quantity}</td>
                                        <td>{itemDetails.price}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td>Total</td>
                                <td>{totalQuantity}</td>
                                <td>{totalPrice}</td>
                            </tr>
                        </tfoot>
                    </Table>
                    <Button onClick={()=>{
                        handleClearCart();
                        navigate('/checkout')
                    }}>CheckOut</Button>
                </Col>

                <Col>
                    <img style={{height:"25rem", width:"25rem"}} src={CartImage} alt="" />
                </Col>
            </Row>
        </div>
    )
}