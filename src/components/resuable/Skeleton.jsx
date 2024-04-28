import React from "react";

const Skeleton = () => {
  return (
    <div className="py-8 px-4 w-3/5 mx-auto">
      <div className="animate-pulse flex items-center space-x-4">
        <div className="rounded-full bg-slate-700 h-36 w-36"></div>
        <div className="flex-1 space-y-6 py-1">
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-700 rounded col-span-3"></div>
              <div className="h-2 bg-slate-700 rounded col-span-1"></div>
            </div>
            <br />
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-700 rounded col-span-3"></div>
              <div className="h-2 bg-slate-700 rounded col-span-2"></div>
              <div className="h-2 bg-slate-700 rounded col-span-1"></div>
            </div>
          </div>
          <div className="h-2 bg-slate-700 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
