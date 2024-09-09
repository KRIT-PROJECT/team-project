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
    <div className="text-black py-10 bg-gray-50">
      <h2 className="text-3xl font-bold mb-36 text-center text-gray-800">REVIEWS</h2> {/* Removed padding-top and increased margin-bottom */}
      <div className="flex flex-col md:flex-row justify-center items-center md:space-x-6 space-y-8 md:space-y-0 px-4">
        {reviews.map(review => (
          <div key={review.id} className="relative bg-white p-6 rounded-lg text-center w-full max-w-xs md:max-w-sm shadow-lg transition-transform transform hover:scale-105 h-64">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <img src={review.image} alt="Reviewer" className="rounded-full w-24 h-24 border-4 border-white shadow-md" />
            </div>
            <p className="mt-12 mb-4 text-gray-700 text-lg">{review.text}</p>
            {review.rating !== null && (
              <div className="flex justify-center">
                {Array.from({ length: review.rating }, (_, index) => (
                  <span key={index} className="text-yellow-500 text-lg">⭐</span>
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