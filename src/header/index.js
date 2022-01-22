import React from 'react'
import { Carousel } from 'react-bootstrap';
import './header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='absolute'>
                <div className='abb'>
                    <p className='text-center'>Yoshlarga va fuqarolarga mudofaa sohasida asosiy  bilimlarni o'rgatish va ularni harbiy xizmatga tayyorlash davlat hokimyati organlariga ko'maklashish</p>
                </div>
            </div>
            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100 imgbu"
                        src="https://vatanparvar.uz/wp-content/uploads/2021/10/photo_2021-10-20_16-57-21.jpg"
                        alt="First slide"
                    />
                    {/* <Carousel.Caption>
                        <h5>Yoshlarga va fuqarolarga mudofaa sohasida asosiy  bilimlarni o'rgatish va ularni harbiy xizmatga tayyorlash davlat hokimyati organlariga ko'maklashish</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://vatanparvar.uz/wp-content/uploads/2021/10/photo_2021-10-20_16-56-49.jpg"
                        alt="Second slide"
                    />
                    {/* <Carousel.Caption>
                        <h5>Second slide label</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://vatanparvar.uz/wp-content/uploads/2021/10/photo_2021-10-20_16-57-42.jpg"
                        alt="Third slide"
                    />
                    {/* <Carousel.Caption>
                        <h5>Third slide label</h5>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Header;
