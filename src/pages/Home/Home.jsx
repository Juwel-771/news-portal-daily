import React from 'react';
import Header from '../Shared/Header/Header';
import Navbar from '../Shared/Navbar/Navbar';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../Shared/RightSideNav/RightSideNav';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <h1 className='text-3xl font-poppins'>This is Home</h1>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-4'>
                <div className='border'>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className='col-span-2 border'>
                    <h2>News Coming soon</h2>
                </div>
                <div className='border'>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;