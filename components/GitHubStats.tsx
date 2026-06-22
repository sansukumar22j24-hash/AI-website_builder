'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Github, GitBranch, Star, Users } from 'lucide-react'

interface GitHubUser {
  login: string
  name: string
  bio: string
  public_repos: number
  followers: number
  following: number
  avatar_url: string
}

interface GitHubRepo {
  name: string
  description: string
  stargazers_count: number
  language: string
}

const GITHUB_USERNAME = 'YOUR_GITHUB_USERNAME' // Update this with your GitHub username

export default function GitHubStats() {
  const [user, setUser] = useState<GitHubUser | null>(null)
  const [topRepos, setTopRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        // Fetch user data
        const userRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
        const userData = await userRes.json()
        setUser(userData)

        // Fetch top repositories
        const reposRes = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=stars&per_page=6`
        )
        const reposData = await reposRes.json()
        setTopRepos(reposData.slice(0, 3))
      } catch (error) {
        console.error('Failed to fetch GitHub data:', error)
      } finally {
        setLoading(false)
      }
    }

    if (GITHUB_USERNAME !== 'YOUR_GITHUB_USERNAME') {
      fetchGitHubData()
    } else {
      setLoading(false)
    }
  }, [])

  if (GITHUB_USERNAME === 'YOUR_GITHUB_USERNAME') {
    return (
      <section className="py-12 px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="p-6 rounded-lg border border-border/40 bg-card/30 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-3">
              <Github className="w-5 h-5 text-primary" />
              <h3 className="font-bold">GitHub Stats</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Update the <code className="bg-muted px-2 py-1 rounded">GITHUB_USERNAME</code> in the GitHubStats component to display your GitHub statistics.
            </p>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">GitHub Activity</h2>
        </motion.div>

        {loading ? (
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="h-24 bg-muted rounded-lg animate-pulse"
              />
            ))}
          </div>
        ) : user ? (
          <>
            {/* User Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-4 mb-8"
            >
              <div className="p-4 rounded-lg border border-border/40 bg-card/50 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Public Repos</p>
                    <p className="text-2xl font-bold">{user.public_repos}</p>
                  </div>
                  <GitBranch className="w-8 h-8 text-primary/60" />
                </div>
              </div>

              <div className="p-4 rounded-lg border border-border/40 bg-card/50 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Followers</p>
                    <p className="text-2xl font-bold">{user.followers}</p>
                  </div>
                  <Users className="w-8 h-8 text-primary/60" />
                </div>
              </div>

              <div className="p-4 rounded-lg border border-border/40 bg-card/50 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Following</p>
                    <p className="text-2xl font-bold">{user.following}</p>
                  </div>
                  <Users className="w-8 h-8 text-primary/60" />
                </div>
              </div>
            </motion.div>

            {/* Top Repositories */}
            {topRepos.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold mb-4">Top Repositories</h3>
                <div className="space-y-3">
                  {topRepos.map((repo, index) => (
                    <motion.a
                      key={repo.name}
                      href={`https://github.com/${GITHUB_USERNAME}/${repo.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="group p-4 rounded-lg border border-border/40 bg-card/50 hover:border-primary/50 hover:bg-card/80 transition-all backdrop-blur-sm"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-semibold group-hover:text-primary transition-colors">{repo.name}</h4>
                          {repo.description && (
                            <p className="text-sm text-muted-foreground mt-1">{repo.description}</p>
                          )}
                        </div>
                        {repo.language && (
                          <span className="text-xs px-2 py-1 rounded-full bg-muted/50 text-muted-foreground whitespace-nowrap ml-4">
                            {repo.language}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-4 mt-3 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Star className="w-4 h-4" />
                          {repo.stargazers_count}
                        </span>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            )}
          </>
        ) : (
          <div className="text-center text-muted-foreground">
            Unable to load GitHub data
          </div>
        )}
      </div>
    </section>
  )
}
