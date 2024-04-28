import React from "react";

const PromotionCard = ({ promotion }) => {
  return (
    <article
      key={promotion.id}
      className="flex flex-col bg-white shadow-md rounded-md"
    >
      <a rel="noopener noreferrer" href="#" aria-label="Limited Time Offer">
        <img
          alt="Limited Time Offer"
          className="object-cover w-full h-52 dark:bg-gray-500"
          style={{ borderRadius: "8px 8px 0 0" }}
          src={promotion.imageSrc}
        />
      </a>
      <div className="flex flex-col flex-1 p-6">
        <p className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">
          {promotion.promotionType}
        </p>
        <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
          {promotion.title}
        </h3>
        <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
          <span>{promotion.validity}</span>
          <span>{promotion.views}</span>
        </div>
      </div>
    </article>
  );
};

export default PromotionCard;
