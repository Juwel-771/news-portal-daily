import React from 'react';
import Header from '../Shared/Header/Header';
import { useParams } from 'react-router';
import RightSideNav from '../Shared/RightSideNav/RightSideNav';
import Navbar from '../Shared/Navbar/Navbar';

const NewsDetails = () => {

    const {id} = useParams();
    
    return (
        <div>
            <h2>News Details</h2>
            <Header></Header>
            <Navbar></Navbar>
            <div className='grid md:grid-cols-4'>
                <div className='col-span-3'>
                    <h2 className='text-2xl'>News Details</h2>
                    <p>{id}</p>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;