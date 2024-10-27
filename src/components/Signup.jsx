import { Row,Col,Form,Button } from "react-bootstrap";
import './css/Signup.css'
import logoWhite from '../assets/logo_white.png';
import SignupImg from '../assets/Signup.png';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup({setUser}){
    const [email,setEmail]=useState('');
    const navigate=useNavigate();
    return(
        <div className="signup_page">
            <Row className="row">
                <Col>
                <div className="signup_details">
                    <h5>
                        <img src={logoWhite} alt="" style={{height:"1.5rem"}} />
                        InstaBuy!
                    </h5>
                    <h1>InstaBuy!</h1>
                    <h6>One place where brands come together from all across the world.</h6>
                    <Form>
                        <div  className="signup_form">
                            <div className="secA">
                                <Form.Group  className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Enter Email address" onChange={(e)=>{console.log(e.target.value);setEmail(e.target.value)}} />
                                </Form.Group>

                                <Form.Group  className="mb-3" controlId="formBasicPassword">
                                    <Form.Control type="password" placeholder="Enter Password" />
                                </Form.Group>
                            </div>
                            <div className="secB">
                                <Form.Group  className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="text" placeholder="Enter Fullname" />
                                </Form.Group>
                            </div>
                        </div>
                        
                        <Button onClick={()=>{
                            localStorage.setItem('userEmail',email);
                            setUser(email);
                            navigate('/');}}
                            className="join_shopping" type="submit">
                            Join the club
                        </Button>
                    </Form>

                    <div className="already_mem_link">
                        <p>Already a member? <a className="links" onClick={()=>navigate('/login')}>Click here</a></p>
                    </div>
                    </div>
                </Col>
                <Col>
                <img src={SignupImg} alt="" style={{height:"30rem", paddingLeft:"2.5rem"}}/>
                </Col>
            </Row>
        </div>
    )
}