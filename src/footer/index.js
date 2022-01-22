import React from 'react';
import { BsFillTelephoneFill } from 'react-icons/bs'
import './footer.css'


const Footer = () => {
    return <div>
        <div className="container-fluid pp">
            <div className="row">
                <div className="col-3">
                    <div className='brinchi'>
                        <img className='Logo' src="https://vatanparvar.uz/wp-content/uploads/2021/11/vatanparvar-logo.png" alt="" />
                        <p className='ps-1'>O’ZBEKISTON RESPUBLIKASI MUDOFAASIGA<br /> KO’MAKLASHUVCHI <span className='spann'> «VATANPARVAR» </span> TASHKILOTI</p>
                    </div>
                </div>
                <div className="col-3">
                    <ul>
                        <li>Markaziy kengash</li>
                        <li>Rahbariyat</li>
                        <li>Markaziy apparat</li>
                        <li>Tassarufidagi tashkilotlor</li>
                    </ul>
                </div>
                <div className="col-3">
                    <ul>
                        <li>Markaziy kengash</li>
                        <li>Rahbariyat</li>
                        <li>Markaziy apparat</li>
                        <li>Tassarufidagi tashkilotlor</li>
                    </ul>
                </div>
                <div className="col-3">
                    <ul>
                        <li>Markaziy kengash</li>
                        <li>Rahbariyat</li>
                        <li>Markaziy apparat</li>
                        <li>Tassarufidagi tashkilotlor</li>
                    </ul>
                </div>
                <div className="col-3">
                    <ul>
                        <li><a href="tel:+998781503150"><BsFillTelephoneFill /></a>+998 (78) 150-31-50</li>
                        <li><a href="tel:+998781503151"><BsFillTelephoneFill /></a>+998 (78) 150-31-51</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>;
};

export default Footer;
