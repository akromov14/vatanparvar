import React, { useContext } from 'react';
import './about.css'
import { AiFillStar } from 'react-icons/ai';
import { ThemeContext } from '../ThemeContext';

const Data = [


    {
        class: "card animate__animated animate__rollIn",
        img: "https://vatanparvar.uz/wp-content/uploads/2021/07/news-3-1.jpg",
        text: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
        class: "card animate__animated animate__rollIn",
        img: "https://vatanparvar.uz/wp-content/uploads/2021/07/activity-3.jpg",
        text: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
        class: "card animate__animated animate__rollIn",
        img: "https://vatanparvar.uz/wp-content/uploads/2021/07/activity-1.jpg",
        text: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
        class: "card animate__animated animate__rollIn",
        img: "https://vatanparvar.uz/wp-content/uploads/2021/07/activity-2.jpg",
        text: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
        class: "card animate__animated animate__rollIn",
        img: "https://vatanparvar.uz/wp-content/uploads/2021/07/activity-4.jpg",
        text: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
        class: "card animate__animated animate__rollIn",
        img: "https://stillmedab.olympic.org/media/Photos/2016/08/15/part-2/15-08-2016-boxing-91kg-heavyweight-men-05.jpg",
        text: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
]

const About = () => {
    const { darkMode } = useContext(ThemeContext);
    return (

        <div className={darkMode ? "rell p-1 LightMode " : "rell p-1 qorabu"}>
            <AiFillStar className='staricon' />
            <AiFillStar className='staricon2' />
            <AiFillStar className='staricon3' />
            <AiFillStar className='staricon4' />
            <div className='container pb-5 pt-5'>
                <div className='d-flex justify-content-center align-items-center'>
                    <div className='span'></div><h1 className={darkMode ? "text-dark gg fao " : "text-light gg fao"}>FAOLIYAT</h1><div className='span'></div>
                </div>
                <div className="row">
                    {
                        Data.map((v, i) => {
                            return (
                                <div className="col-4" key={i}>
                                    <div className={v.class} >
                                        <img src={v.img} className="card-img-top" alt="vatanparvar" />
                                        <div className="card-body">
                                            <p className="card-text fw-bold">{v.text}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default About;
