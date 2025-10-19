import React, { use } from 'react';
import MyContainer from './MyContainer';
import Marquee from 'react-fast-marquee';

const LatestNews = ({newsPromiss}) => {
 const newsData = use(newsPromiss);
 const brakingNews = newsData.filter(news=>news.others?.is_trending&&news.others?.is_today_pick);
 console.log(brakingNews);
    return (
        <MyContainer className="latestNews flex items-center gap-5 bg-base-300 p-3">
            <button className='btn btn-secondary text-xl font-medium'>Latest</button>
            <Marquee className='flex gap-5'>
                {
                    brakingNews.map(news=><p className='text-lg font-semibold mr-3'>{news.title} || </p>)
                }
            </Marquee>
        </MyContainer>
    );
};

export default LatestNews;