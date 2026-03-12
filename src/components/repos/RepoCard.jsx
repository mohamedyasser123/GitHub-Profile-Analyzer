import React from 'react';
import { formatNumber } from '../../utils/formatters';

const RepoCard = ({ repo }) => {
  return (
    <a 
      href={repo.html_url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="block p-5 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-violet-500/5 hover:border-violet-200 dark:hover:border-violet-900/50 transition-all group"
    >
      <div className="flex flex-col h-full">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-bold text-gray-900 dark:text-gray-100 group-hover:text-violet-600 transition-colors truncate pr-2 tracking-tight">
            {repo.name}
          </h3>
          <span className="px-2 py-0.5 text-[10px] font-bold text-violet-600 bg-violet-50 dark:bg-violet-900/30 dark:text-violet-400 rounded-full uppercase tracking-tighter">
            {repo.visibility}
          </span>
        </div>
        
        <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-4 flex-grow font-medium leading-relaxed">
          {repo.description || 'Exploring the boundaries of code...'}
        </p>
        
        <div className="flex items-center gap-5 text-xs text-gray-400 dark:text-gray-500 font-bold uppercase tracking-wider">
          {repo.language && (
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-violet-500 shadow-sm shadow-violet-500/50"></span>
              <span>{repo.language}</span>
            </div>
          )}
          
          <div className="flex items-center gap-1 group-hover:text-violet-400 transition-colors" title={repo.stargazers_count}>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118l-3.976-2.888a1 1 0 00-1.175 0l-3.976 2.888c-.784.57-1.838-.197-1.539-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
            <span>{formatNumber(repo.stargazers_count)}</span>
          </div>
          
          <div className="flex items-center gap-1" title={repo.forks_count}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
            <span>{formatNumber(repo.forks_count)}</span>
          </div>
        </div>
      </div>
    </a>
  );
};

export default RepoCard;
