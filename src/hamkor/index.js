import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import './hamkor.css';

const Data1 = [
    {
        img: "https://vatanparvar.uz/wp-content/uploads/2021/07/coat-of-arms-1.png",
        title: "Yoshlar Iishlari agentlig",
        className: "card card1 text-center"
    },
    {
        img: "https://vatanparvar.uz/wp-content/uploads/2021/08/milliy-gvardiya-1.png",
        title: "O'zbekiston Respublikasi Milliy gvardiasi",
        className: "card card1 text-center"
    },
    {
        img: "https://vatanparvar.uz/wp-content/uploads/2021/08/ichki-ishlar.png",
        title: "O'zbekiston Respublikasi Ichki Ishlar Vazirligi",
        className: "card card1 text-center"
    },
    {
        img: "https://vatanparvar.uz/wp-content/uploads/2021/10/mdf.png",
        title: "O'zbekiston Respublikasi mudofaa Vazirligi",
        className: "card card1 text-center offset-lg-5"
    },
    {
        img: "https://vatanparvar.uz/wp-content/uploads/2021/07/coat-of-arms-1.png",
        title: "O'zbekiston Respublikasi Turizm va Sport vazirligi",
        className: "card card1 text-center offset-lg-5"
    },
]

const Hamkor = () => {
    const { darkMode } = useContext(ThemeContext);
    return (
        <div className={darkMode ? "hamkorr p-1 LightMode " : "hamkorr p-1 qorabu"}>
            <div className="container">
                <div className='d-flex justify-content-center align-items-center'>
                    <div className='spanBu'></div>
                    <h1 className={darkMode ? "text-dark m-4" : "text-light m-4"}>HAMKORLAR</h1>
                    <div className='spanBu'></div>
                </div>
                <div className="row">
                    {
                        Data1.map((v, i) => {
                            return (
                                <div className="col-4 anime" key={i}>
                                    <div className={v.className} >
                                        <div className='justifiyy-content-center'><img src={v.img} class="card-img-top ou " alt="vatanparvar" width="w-100" /></div>
                                        <div className="card-body">
                                            <p className="card-text text-light">{v.title}</p>
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

export default Hamkor
