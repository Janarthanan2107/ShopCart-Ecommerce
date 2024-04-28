import React from "react";

const AlertCard = () => {
  return (
    <div className="p-6 py-12 w-full dark:bg-violet-600 dark:text-gray-50">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <h2 className="text-center text-6xl tracking-tighter font-bold">
            Up to
            <br className="sm:hidden" /> 50% Off
          </h2>
          <h2 className="-mt-5 text-center text-6xl tracking-tighter font-bold animate-ping hidden lg:block">
            Shop
            <br className="sm:hidden" /> now
          </h2>
          <div className="space-x-2 text-center py-2 lg:py-0">
            <span>Plus free shipping! Use code:</span>
            <span className="font-bold text-lg">Shopify2103</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertCard;
