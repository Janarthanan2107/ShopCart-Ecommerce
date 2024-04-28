import React from "react";

const Tag = ({ item, selectedCategory, handleCategoryClick }) => {
  return (
    <div
      className={`flex shadow-md gap-6 rounded-lg overflow-hidden divide-x w-[150px] text-xl font-medium dark:bg-gray-50 dark:divide-gray-300 cursor-pointer border-b-4 ${
        selectedCategory === item.name
          ? "border-violet-600 font-semibold dark:bg-gray-600 text-white"
          : "hover:border-violet-600 dark:text-slate-900"
      }`}
      onClick={() => handleCategoryClick(item.name)}
    >
      <div className="flex items-center gap-2 p-4">
        <span className="text-[13px]">{item.name}</span>
        <span
          className={`text-[18px] ${
            selectedCategory === item.name ? "text-white" : " text-violet-600"
          }`}
        >
          {item.icon}
        </span>
      </div>
    </div>
  );
};

export default Tag;
