import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../components/MainLayout/NewsCard';

const CategoryNews = () => {
    const [news, setNews] = useState([])
    const { id } = useParams();
    const newsData = useLoaderData()
    useEffect(() => {
        if (id === "0") {
            setNews(newsData)
            return
        }
        if (id === "1") {
            const filteredNews = newsData.filter(news => news.others.is_trending === true)
            setNews(filteredNews)
            return
        }
        const filteredNews = newsData.filter(news => news.category_id === Number(id))
        setNews(filteredNews)
    }, [id, newsData])

    return (
        <div>
            <h2 className='text-2xl'>Toall <span className='text-secondary font-bold'>({news.length})</span> News Found</h2>
            <div className='grid grid-cols-1 gap-5'>
                {
                    news.map(news => <NewsCard key={news.id} news={news} />)
                }
            </div>
        </div>
    );
};

export default CategoryNews;