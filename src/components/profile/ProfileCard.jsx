import React from 'react'
import { formatNumber } from '../../utils/formatters'

const ProfileCard = ({user}) => {
  if (!user) return null;
  
  return (
    <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-800 transition-all">
      <div className="h-32 bg-gradient-to-r from-violet-600 to-indigo-700"></div>
      
      <div className="px-8 pb-8">
        <div className="relative flex flex-col items-center md:items-start md:flex-row gap-6 -mt-16">
          <img 
            src={user.avatar_url} 
            alt={user.login} 
            className="w-32 h-32 rounded-3xl border-4 border-white dark:border-gray-900 shadow-lg object-cover bg-white"
          />
          <div className="flex-1 mt-16 md:mt-18 text-center md:text-left">
            <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white leading-tight">
              {user.name || user.login}
            </h1>
            <p className="text-violet-600 dark:text-violet-400 font-semibold tracking-wide">@{user.login}</p>
          </div>
          <div className="md:mt-20">
            <a 
              href={user.html_url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-2.5 bg-violet-600 text-white rounded-full font-bold hover:bg-violet-700 transition-all text-sm shadow-lg shadow-violet-500/20"
            >
              Analyze Profile
            </a>
          </div>
        </div>

        <div className="mt-8">
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl font-medium">
            {user.bio || "This developer prefers to keep their bio a mystery."}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6 mt-10">
          <div className="p-5 bg-violet-50 dark:bg-violet-900/10 rounded-2xl text-center border border-violet-100 dark:border-violet-900/20">
            <p className="text-xs font-bold text-violet-400 dark:text-violet-500 uppercase tracking-widest mb-1">Followers</p>
            <p className="text-2xl font-black text-gray-900 dark:text-white" title={user.followers}>{formatNumber(user.followers)}</p>
          </div>
          <div className="p-5 bg-indigo-50 dark:bg-indigo-900/10 rounded-2xl text-center border border-indigo-100 dark:border-indigo-900/20">
            <p className="text-xs font-bold text-indigo-400 dark:text-indigo-500 uppercase tracking-widest mb-1">Following</p>
            <p className="text-2xl font-black text-gray-900 dark:text-white" title={user.following}>{formatNumber(user.following)}</p>
          </div>
          <div className="p-5 bg-purple-50 dark:bg-purple-900/10 rounded-2xl text-center border border-purple-100 dark:border-purple-900/20">
            <p className="text-xs font-bold text-purple-400 dark:text-purple-500 uppercase tracking-widest mb-1">Repos</p>
            <p className="text-2xl font-black text-gray-900 dark:text-white" title={user.public_repos}>{formatNumber(user.public_repos)}</p>
          </div>
        </div>
        
        {user.location && (
          <div className="mt-8 flex items-center gap-2 text-gray-500 dark:text-gray-400">
            <svg className="w-5 h-5 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-sm font-semibold">{user.location}</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProfileCard