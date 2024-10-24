import { Row,Col,Form,Button } from "react-bootstrap";
import './css/Login.css'
import logoWhite from '../assets/logo_white.png';
import loginImg from '../assets/login.png';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login({setUser}){
    const [email,setEmail]=useState('');
    const navigate=useNavigate();
    return(
        <div className="login_page">
            <Row className="row">
                <Col>
                <div className="login_details">
                    <h5>
                        <img src={logoWhite} alt="" style={{height:"1.5rem"}} />
                        InstaBuy!
                    </h5>
                    <h1>InstaBuy!</h1>
                    <h6>One place where brands come together from all across the world.</h6>
                    <Form>
                        <div  className="login_form">
                            <Form.Group  className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter Email address" onChange={(e)=>setEmail(e.target.value)} />
                            </Form.Group>

                            <Form.Group  className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Enter Password" />
                            </Form.Group>
                        </div>
                        
                        <Button onClick={()=>{
                            localStorage.setItem('userEmail',email);
                            setUser(email);
                            navigate('/');
                        }} className="start_shopping" type="submit">
                            Start Shopping
                        </Button>
                    </Form>
                    <div className="join_us_link">
                        <p>Join the club <a onClick={()=>navigate('/signup')}>Click here</a></p>                
                    </div>
                </div>    
                </Col>
                
                <Col>
                    <img src={loginImg} alt="" style={{height:"30rem", paddingLeft:"2.5rem"}}/>
                </Col>
            </Row>
        </div>
    )
}

export default Login;