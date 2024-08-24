import React from 'react';

const reviews = [
  {
    id: 1,
    text: "Excellent institute in terms of faculty and management",
    image: "https://tse2.mm.bing.net/th?id=OIP.QzwE_eLC9D6Pj3gif02xYgHaLH&pid=Api&P=0&h=180",
    rating: 3,
  },
  {
    id: 2,
    text: "Excellent place to enhance your career",
    image: "https://tse2.mm.bing.net/th?id=OIP.QzwE_eLC9D6Pj3gif02xYgHaLH&pid=Api&P=0&h=180",
    rating: 5,
  },
  {
    id: 3,
    text: "A good platform to learn new things and technologies",
    image: "https://tse2.mm.bing.net/th?id=OIP.QzwE_eLC9D6Pj3gif02xYgHaLH&pid=Api&P=0&h=180",
    rating: 1,
  },
];

const Reviews = () => {
  return (
    <div className="text-black py-10">
      <h2 className="text-3xl font-bold mb-8 text-center">REVIEWS</h2>
      <div className="flex flex-col md:flex-row justify-center md:space-x-9 space-y-8 md:space-y-0">
        {reviews.map(review => (
          <div key={review.id} className="relative bg-blue-800 p-6 rounded-lg text-center w-full md:w-64 shadow-lg pt-16">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <img src={review.image} alt="Reviewer" className="rounded-full w-24 h-24 border-4 border-white" />
            </div>
            <p className="mt-12 mb-4">"{review.text}"</p>
            {review.rating !== null && (
              <div className="flex justify-center">
                {Array.from({ length: review.rating }, (_, index) => (
                  <span key={index} className="text-yellow-500">⭐</span>
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
