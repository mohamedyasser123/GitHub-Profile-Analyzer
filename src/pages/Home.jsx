import React, { useMemo } from 'react'
import { useGithubUser } from '../hooks/useGithubUser'
import SearchBar from '../components/search/SearchBar'
import ProfileCard from '../components/profile/ProfileCard' 
import ProfileStats from '../components/profile/ProfileStats'
import RepoList from '../components/repos/RepoList'
import { analyzeRepo } from '../utils/analyzeRepo'
import LanguageChart from '../components/profile/LanguageChart'
import LoadingSkeleton from '../components/common/LoadingSkeleton'

const Home = () => {
  const { user, repos, loading, error, fetchUser } = useGithubUser();

  const stats = useMemo(() => {
    if (!repos || repos.length === 0) return null;
    return analyzeRepo(repos);
  }, [repos]);

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-gray-950 py-12 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-[#171717] dark:text-white mb-4 tracking-tight">
            Profile <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">Insights</span>
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto font-medium">
            Unlock deep analytics for any developer profile. Enter a username to begin.
          </p>
        </div>

        <SearchBar onSearch={fetchUser} isLoading={loading} />

        {error && (
          <div className="mb-8 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-2xl flex items-center gap-3 text-red-700 dark:text-red-400">
            <svg className="w-6 h-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="font-semibold">{error}</p>
          </div>
        )}

        {loading && (
          <div className="mt-8">
            <LoadingSkeleton />
          </div>
        )}

        {!loading && user && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <ProfileCard user={user} />
            <ProfileStats stats={stats} />
            <LanguageChart languages={stats?.languages} />
            <RepoList repos={repos} />
          </div>
        )}

        {!user && !loading && !error && (
          <div className="mt-20 text-center py-20 bg-white dark:bg-gray-800/50 rounded-3xl border-2 border-dashed border-gray-200 dark:border-gray-700">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-50 dark:bg-blue-900/30 rounded-full mb-6 text-blue-600 dark:text-blue-400">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold dark:text-white mb-2">Ready to explore?</h3>
            <p className="text-gray-500 dark:text-gray-400">Enter a username above to see the magic happen.</p>
          </div>
        )}
        
      </div>
      
    </div>
  )
}

export default Home
