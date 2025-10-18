import React from 'react';
import { Bookmark, Share2, Eye, Star, StarHalf } from 'lucide-react';
const NewsCard = ({ news }) => {
  // Destructure and format the necessary data
  const { title, rating, total_view, author, thumbnail_url, details, tags } = news;

  // Function to format the date string (e.g., "August 24, 2022")
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Function to render the star rating
  const renderStars = (ratingValue) => {
    const fullStars = Math.floor(ratingValue);
    const hasHalfStar = ratingValue % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="w-4 h-4 text-orange-400 fill-orange-400" />);
    }
    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="w-4 h-4 text-orange-400 fill-orange-400" />);
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-orange-400" />);
    }
    return stars;
  };

  // Convert the ISO date to the desired format
  const publishedDate = formatDate(author.published_date);

  // Get the first sentence or a snippet of the details
  const detailSnippet = details.split('. ')[0] + (details.includes('.') ? '...' : '');
  
  // Format view count for better readability
  const formattedViews = total_view.toLocaleString();
  
  // Format the date for the Tag Cloud line
  const tagCloudDate = new Date(author.published_date).toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <div className="max-w-xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden border border-gray-100 p-5">
      
      {/* 1. Header (Author, Date, Actions) */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-3">
          {/* Author Image */}
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img src={author.img} alt={author.name} className="object-cover w-full h-full" />
          </div>
          {/* Author Name and Date */}
          <div>
            <p className="text-sm font-semibold text-gray-800">{author.name}</p>
            <p className="text-xs text-gray-500">{publishedDate}</p>
          </div>
        </div>
        {/* Actions (Bookmark & Share) */}
        <div className="flex space-x-3 text-gray-500">
          <button className="hover:text-red-500 transition-colors">
            <Bookmark className="w-5 h-5" />
          </button>
          <button className="hover:text-red-500 transition-colors">
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* 2. Title */}
      <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 leading-tight">
        {title}
      </h2>

      {/* 3. Image */}
      <div className="mb-4 rounded-lg overflow-hidden">
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full h-auto object-cover max-h-72"
        />
      </div>

      {/* 4. Tag Cloud and Snippet */}
      <div className="mb-4">
        <p className="text-sm text-gray-600 mb-3">
          <span className="font-bold">{tagCloudDate}</span> | Tag Cloud Tags: {tags.join(', ')} – {detailSnippet}
        </p>
        <button className="text-red-500 font-semibold text-sm hover:text-red-600 transition-colors">
          Read More
        </button>
      </div>

      {/* 5. Footer (Rating and Views) */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="flex items-center space-x-2">
          {renderStars(rating.number)}
          <span className="text-sm font-semibold text-gray-800">{rating.number.toFixed(1)}</span>
        </div>
        <div className="flex items-center space-x-1 text-gray-500">
          <Eye className="w-4 h-4" />
          <span className="text-sm">{formattedViews}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;