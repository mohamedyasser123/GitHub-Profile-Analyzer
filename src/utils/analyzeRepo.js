export const analyzeRepo = (repos) => {
  let totalStars = 0
  let languages = {}
  let topRepo = null

  repos.forEach((repo) => {

    totalStars += repo.stargazers_count

    if (repo.language) {
      languages[repo.language] =
        (languages[repo.language] || 0) + 1
    }

    if (!topRepo || repo.stargazers_count > topRepo.stargazers_count) {
      topRepo = repo
    }

  })

  return {
    totalStars,
    languages,
    topRepo
  }
}   