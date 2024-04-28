import React from "react";

const Skeleton = () => {
  return (
    <div class="py-8 px-4 w-3/5 mx-auto">
      <div class="animate-pulse flex items-center space-x-4">
        <div class="rounded-full bg-slate-700 h-36 w-36"></div>
        <div class="flex-1 space-y-6 py-1">
          <div class="space-y-3">
            <div class="grid grid-cols-3 gap-4">
              <div class="h-2 bg-slate-700 rounded col-span-3"></div>
              <div class="h-2 bg-slate-700 rounded col-span-1"></div>
            </div>
            <br />
            <div class="grid grid-cols-3 gap-4">
              <div class="h-2 bg-slate-700 rounded col-span-3"></div>
              <div class="h-2 bg-slate-700 rounded col-span-2"></div>
              <div class="h-2 bg-slate-700 rounded col-span-1"></div>
            </div>
          </div>
          <div class="h-2 bg-slate-700 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
