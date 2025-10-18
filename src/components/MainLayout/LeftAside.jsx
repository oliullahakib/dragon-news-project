import React, { use } from 'react';
import { NavLink } from 'react-router';

const LeftAside = ({categoriesPromiss}) => {
     const categories = use(categoriesPromiss);
    return (
        <div>
             <h2 className='text-xl font-semibold'>All Caterogy</h2>
                <div className="category-btn grid grid-cols-1 gap-3 text-xl font-medium text-accent mt-5 ">
                    {
                        categories.map(news=><NavLink className={({isActive})=>isActive?'bg-base-300 text-2xl text-black btn justify-start py-6':''} key={news.id} to={`/category/${news.id}`}>{news.name}</NavLink>)
                    }
                </div>
        </div>
    );
};

export default LeftAside;