import React from 'react';

const reviews = [
  {
    id: 1,
    text: "Excellent institute in terms of faculty and management",
    image: "https://images.unsplash.com/photo-1517242022020-1a5a3c8e0e8a?w=500&auto=format&fit=crop&q=60",
    rating: 3,
  },
  {
    id: 2,
    text: "An excellent place to enhance your career and skills.",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=500&auto=format&fit=crop&q=60",
    rating: 5,
  },
  {
    id: 3,
    text: "A great platform to learn new technologies and improve your knowledge.",
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=500&auto=format&fit=crop&q=60",
    rating: 4,
  },
];

const Reviews = () => {
  return (
    <div className="py-32 text-black bg-gray-50" id='reviews'>
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-36">REVIEWS</h2> {/* Removed padding-top and increased margin-bottom */}
      <div className="flex flex-col items-center justify-center px-4 space-y-8 md:flex-row md:space-x-6 md:space-y-0">
        {reviews.map(review => (
          <div key={review.id} className="relative w-full h-64 max-w-xs p-6 text-center transition-transform transform bg-white rounded-lg shadow-lg md:max-w-sm hover:scale-105">
            <div className="absolute top-0 transform -translate-x-1/2 -translate-y-1/2 left-1/2">
              <img src={review.image} alt="Reviewer" className="w-24 h-24 border-4 border-white rounded-full shadow-md" />
            </div>
            <p className="mt-12 mb-4 text-lg text-gray-700">{review.text}</p>
            {review.rating !== null && (
              <div className="flex justify-center">
                {Array.from({ length: review.rating }, (_, index) => (
                  <span key={index} className="text-lg text-yellow-500">⭐</span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;