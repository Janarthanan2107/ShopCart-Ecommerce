import React from "react";

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 fill-current text-yellow-500"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M19.834 7.62a.5.5 0 0 0-.476-.346l-6.28-.365-2.815-5.7a.5.5 0 0 0-.894 0l-2.814 5.7-6.28.364a.5.5 0 0 0-.277.856l4.553 4.431-1.076 6.274a.5.5 0 0 0 .725.527L10 15.587l5.635 2.967a.5.5 0 0 0 .725-.527l-1.076-6.274 4.553-4.43a.5.5 0 0 0 .097-.51z"
          />
        </svg>
      );
    } else {
      stars.push(
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 fill-current text-gray-400"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M19.834 7.62a.5.5 0 0 0-.476-.346l-6.28-.365-2.815-5.7a.5.5 0 0 0-.894 0l-2.814 5.7-6.28.364a.5.5 0 0 0-.277.856l4.553 4.431-1.076 6.274a.5.5 0 0 0 .725.527L10 15.587l5.635 2.967a.5.5 0 0 0 .725-.527l-1.076-6.274 4.553-4.43a.5.5 0 0 0 .097-.51z"
          />
        </svg>
      );
    }
  }
  return <div className="flex">{stars}</div>;
};

export default StarRating;
 