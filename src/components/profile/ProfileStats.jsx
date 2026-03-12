import React from 'react';
import { formatNumber } from '../../utils/formatters';

const ProfileStats = ({ stats }) => {
  if (!stats) return null;

  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="p-5 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
        <div className="w-11 h-11 rounded-xl bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center shrink-0">
          <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118l-3.976-2.888a1 1 0 00-1.175 0l-3.976 2.888c-.784.57-1.838-.197-1.539-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
        </div>
        <div>
          <p className="text-xs font-bold text-amber-500 uppercase tracking-widest mb-0.5">Total Stars</p>
          <p className="text-2xl font-black text-gray-900 dark:text-white" title={stats.totalStars}>{formatNumber(stats.totalStars)}</p>
        </div>
      </div>

      <div className="p-5 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
        <div className="w-11 h-11 rounded-xl bg-violet-50 dark:bg-violet-900/20 flex items-center justify-center shrink-0">
          <svg className="w-5 h-5 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        </div>
        <div className="min-w-0">
          <p className="text-xs font-bold text-violet-500 uppercase tracking-widest mb-0.5">Top Repo</p>
          <p className="text-lg font-black text-gray-900 dark:text-white truncate" title={stats.topRepo?.name}>
            {stats.topRepo?.name ?? '—'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileStats;
