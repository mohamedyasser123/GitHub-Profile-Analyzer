import React from 'react';

const LoadingSkeleton = () => {
  return (
    <div className="space-y-8 animate-pulse w-full max-w-5xl mx-auto">
      <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-800">
        <div className="h-32 bg-gray-200 dark:bg-gray-800"></div>
        <div className="px-8 pb-8">
          <div className="relative flex flex-col items-center md:items-start md:flex-row gap-6 -mt-16">
            <div className="w-32 h-32 rounded-3xl border-4 border-white dark:border-gray-900 bg-gray-200 dark:bg-gray-800 shrink-0"></div>
            <div className="flex-1 mt-16 md:mt-18 text-center md:text-left w-full">
              <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded-lg w-48 mb-3 mx-auto md:mx-0"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-32 mx-auto md:mx-0"></div>
            </div>
          </div>
          <div className="mt-8">
            <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-1/2"></div>
          </div>
          <div className="grid grid-cols-3 gap-6 mt-10">
            {[1, 2, 3].map(i => (
              <div key={i} className="p-5 bg-gray-100 dark:bg-gray-800 rounded-2xl h-24"></div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {[1, 2].map(i => (
          <div key={i} className="p-5 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 h-24"></div>
        ))}
      </div>

      <div className="mt-16">
        <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded-lg w-48 mb-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="p-5 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl h-36"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;
