import React from 'react'
import CountUp from 'react-countup'
import { DiAptana } from 'react-icons/di';
import { FiUsers } from 'react-icons/fi';
import { MdOutlineSportsKabaddi } from 'react-icons/md';
import { GiRead } from 'react-icons/gi';
import './static.css'

const Static = () => {
    return (
        <div className="section">
            <div className='abbb'></div>
            <div className='container bu'>
                <h1 className='text-center text-light'>STATISTIKA</h1>
                <div className="row">
                    <div className="col-3 text-center">
                        <h1 className='icon1'><DiAptana /></h1>
                        <h1 className='icon1'><CountUp end={211} duration={8} /></h1>
                        <p>AVTOMAKTABLAR SONI</p>
                    </div>
                    <div className="col-3 text-center">
                        <h1 className='icon1'><FiUsers /></h1>
                        <h1 className='icon1'><CountUp end={200000} duration={8} /></h1>
                        <p>TASHKILOT A`ZOLARI SONI</p>
                    </div>
                    <div className="col-3 text-center">
                        <h1 className='icon1'><MdOutlineSportsKabaddi /></h1>
                        <h1 className='icon1'><CountUp end={7777} duration={8} /></h1>
                        <p>SPORTCHILAR SONI</p>
                    </div>
                    <div className="col-3 text-center">
                        <h1 className='icon1'><GiRead /></h1>
                        <h1 className='icon1'><CountUp end={150000} duration={8} /></h1>
                        <p>YILLIK BITIRUVCHIAR SONI</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Static;
