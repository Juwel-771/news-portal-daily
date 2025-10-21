import React from 'react';
import Header from '../Shared/Header/Header';
import Navbar from '../Shared/Navbar/Navbar';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../Shared/RightSideNav/RightSideNav';
import BreakingNews from './BreakingNews';
import { useLoaderData } from 'react-router';
import NewsCard from './NewsCard';

const Home = () => {

    const news = useLoaderData();
    console.log(news);

    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <h1 className='text-3xl font-poppins'>This is Home</h1>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className='md:col-span-2'>
                    <div className='md:col-span'>
                        {
                            news.map(aNews => <NewsCard key = {aNews._id} news = {aNews}></NewsCard>)
                        }
                    </div>
                </div>
                <div >
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;