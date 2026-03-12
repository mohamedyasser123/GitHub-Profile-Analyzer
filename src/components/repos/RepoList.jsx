import React from 'react';
import RepoCard from './RepoCard';

const RepoList = ({ repos }) => {
  if (!repos || repos.length === 0) return null;

  return (
    <div className="mt-16">
      <div className="flex items-center gap-3 mb-8">
        <h2 className="text-2xl font-extrabold text-[#171717] dark:text-white tracking-tight">Featured Repositories</h2>
        <span className="px-3 py-1 text-xs font-black text-violet-600 bg-violet-50 dark:bg-violet-900/30 dark:text-violet-400 rounded-full">
          {repos.length}
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {repos.map(repo => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
};

export default RepoList;
