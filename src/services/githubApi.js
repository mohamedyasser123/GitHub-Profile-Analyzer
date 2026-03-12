import axios from "axios"

export const githubApi={
  async getUser(username) {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`)
      return response.data
    } catch (error) {
      if (error.response?.status === 403 || error.response?.status === 429) {
        throw new Error("API rate limit exceeded. Please try again later.")
      }
      if (error.response?.status === 404) {
        throw new Error("User not found.")
      }
      const errorMsg = error.response?.data?.message || error.message || "Failed to fetch user"
      throw new Error(errorMsg)
    }
  },
  async getRepos(username) {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}/repos?sort=updated&per_page=10`)
      return response.data
    } catch (error) {
      if (error.response?.status === 403 || error.response?.status === 429) {
        throw new Error("API rate limit exceeded. Please try again later.")
      }
      const errorMsg = error.response?.data?.message || error.message || "Failed to fetch repositories"
      throw new Error(errorMsg)
    }
  }
}