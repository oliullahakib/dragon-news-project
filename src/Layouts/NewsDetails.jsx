import React from 'react';
import Header from '../components/MainLayout/Header';
import RightAside from '../components/MainLayout/RightAside';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {
    const {id}=useParams()
    const allNews = useLoaderData();
    const singleNews = allNews.find(news =>news.id===id);
    console.log(singleNews)
    const {thumbnail_url,title,details}=singleNews;
    return (
        <div>
           <header>
            <Header/>
           </header>
           <main className='container mx-auto grid grid-cols-12 mt-8'>
            <section className='px-8 col-span-9'>
            <div className='border border-base-200 flex flex-col justify-center p-5'>
             <img className='w-fit mx-auto my-5' src={thumbnail_url} alt="" />
            <h2 className='text-2xl font-semibold'>{title}</h2>
            <p className='text-accent'>{details}</p>
            </div>
            </section>
            <aside className='col-span-3'>
            <RightAside/>
            </aside>
           </main>
        </div>
    );
};

export default NewsDetails;