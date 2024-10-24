import Carousel from 'react-bootstrap/Carousel';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';
import HomeImageOne from '../assets/Home1.png';
import HomeImageTwo from '../assets/Home2.png';
import HomeImageThree from '../assets/Home3.png';

import './css/Home.css'
//brand images
import brand1 from '../assets/brand1.png';
import brand2 from '../assets/brand2.png';
import brand3 from '../assets/brand3.png';
import brand4 from '../assets/brand4.png';
import brand5 from '../assets/brand5.png';
import brand6 from '../assets/brand6.png';
import { useNavigate } from 'react-router-dom';
function Home({user}){
    const navigate=useNavigate();

    const handleCTAClick = ()=>{
        if(user){
            navigate('/productsGallery');
        }else{
            navigate('/login');
        }
    }
    return(
        <div className='home-page-main'>
            <Carousel>
                <Carousel.Item style={{height:"88vh"}}>
                    <Row className='Home-page-data'>
                        <Col>
                            <div className='Home-text'>
                                <h3><i>SHOP WITH UTMOST</i></h3>
                                <h2><i>STYLE</i></h2>
                                <h6>Shop from the latest trendy clothes to the best gadgets. 
                                    With Star Shopper you save 10% every time you shop!
                                </h6>
                                <Button onClick={handleCTAClick} className='Button_browse'>Browse Products</Button>
                                <h6>Products available from :</h6>
                                <div className="brands">
                                    <img src={brand1} alt="" />
                                    <img src={brand2} alt="" />
                                    <img src={brand3} alt="" />
                                    <img src={brand4} alt="" />
                                    <img src={brand5} alt="" />
                                    <img src={brand6} alt="" />
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <img src={HomeImageOne} alt="" style={{height: "88vh"}}/>
                        </Col>
                    </Row>
                </Carousel.Item>

                <Carousel.Item style={{height:"88vh"}}>
                    <Row className='Home-page-data'>
                        <Col>
                            <div className='Home-text'>
                                <h3><i>SHOP WITH UTMOST</i></h3>
                                <h2><i>DISCOUNTS</i></h2>
                                <h6>Shop from the latest trendy clothes to the best gadgets. 
                                    With Star Shopper you save 10% every time you shop!
                                </h6>
                                <Button onClick={handleCTAClick} className='Button_browse'>Browse Products</Button>
                                <h6>Products available from :</h6>
                                <div className="brands">
                                    <img src={brand1} alt="" />
                                    <img src={brand2} alt="" />
                                    <img src={brand3} alt="" />
                                    <img src={brand4} alt="" />
                                    <img src={brand5} alt="" />
                                    <img src={brand6} alt="" />
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <img src={HomeImageTwo} alt="" style={{height: "88vh"}}/>
                        </Col>
                    </Row>
                </Carousel.Item>

                <Carousel.Item style={{height:"88vh"}}>
                    <Row className='Home-page-data'>
                        <Col>
                            <div className='Home-text'>
                                <h3><i>SHOP WITH UTMOST</i></h3>
                                <h2><i>MODELS</i></h2>
                                <h6>Shop from the latest trendy clothes to the best gadgets. 
                                    With Star Shopper you save 10% every time you shop!
                                </h6>
                                <Button onClick={handleCTAClick} className='Button_browse'>Browse Products</Button>
                                <h6>Products available from :</h6>
                                <div className="brands">
                                    <img src={brand1} alt="" />
                                    <img src={brand2} alt="" />
                                    <img src={brand3} alt="" />
                                    <img src={brand4} alt="" />
                                    <img src={brand5} alt="" />
                                    <img src={brand6} alt="" />
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <img src={HomeImageThree} alt="" style={{height: "88vh"}}/>
                        </Col>
                    </Row>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Home;