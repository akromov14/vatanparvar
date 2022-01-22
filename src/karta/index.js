import React from 'react';
import BasicTable from './table';
import './karta.css';

const Karta = () => {
    return (
        <div className='karta'>
            <div className='charchash'></div>
            <div className="container charvhash2">
                <h1 className='text-center mb-4 text-light'>KARTA</h1>
                <BasicTable />
            </div>
        </div>
    )
}

export default Karta
