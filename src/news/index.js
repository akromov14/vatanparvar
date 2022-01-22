import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import './news.css'
// import { AiFillStar } from 'react-icons/ai';

const Data = [
    {
        class: "card animate__animated animate__rollIn",
        img: "https://vatanparvar.uz/wp-content/uploads/2022/01/IMG_25133.png",
        text: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
        class: "card animate__animated animate__rollIn",
        img: "https://vatanparvar.uz/wp-content/uploads/2022/01/photo_2022-01-11_15-13-59.jpg",
        text: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
        class: "card animate__animated animate__rollIn",
        img: "https://vatanparvar.uz/wp-content/uploads/2022/01/IMG_2951.jpg",
        text: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
        class: "card animate__animated animate__rollIn",
        img: "https://vatanparvar.uz/wp-content/uploads/2021/11/IMG_7872.jpg",
        text: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
        class: "card animate__animated animate__rollIn",
        img: "https://vatanparvar.uz/wp-content/uploads/2021/11/IMG_7872.jpg",
        text: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
        class: "card animate__animated animate__rollIn",
        img: "https://vatanparvar.uz/wp-content/uploads/2021/11/IMG_7872.jpg",
        text: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
]

const News = () => {
    const { darkMode } = useContext(ThemeContext);
    return (
        <div className={darkMode ? "rell p-1 LightMode " : "rell p-1 qorabu"}>
            <div className='container pb-5 pt-5'>
                <div className='d-flex justify-content-center align-items-center'>
                    <div className='span'></div><h1 className={darkMode ? "text-dark gg fao " : "text-light gg fao"}>YANGILIKLAR</h1><div className='span'></div>
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

export default News;
