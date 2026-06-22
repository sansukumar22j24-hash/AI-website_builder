'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projectsData, allTags } from '@/lib/projects'
import { ExternalLink, Github } from 'lucide-react'

export default function ProjectsSection() {
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const filteredProjects = useMemo(() => {
    if (selectedTags.length === 0) return projectsData
    return projectsData.filter(project =>
      selectedTags.every(tag => project.tags.includes(tag))
    )
  }, [selectedTags])

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    )
  }

  const clearFilters = () => setSelectedTags([])

  return (
    <section id="projects" className="py-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Featured Projects</h2>
          <p className="text-muted-foreground mb-8">
            Click on tags to filter projects by technology
          </p>
        </motion.div>

        {/* Filter Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          <AnimatePresence>
            {allTags.map(tag => (
              <motion.button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                  selectedTags.includes(tag)
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tag}
              </motion.button>
            ))}
          </AnimatePresence>
          {selectedTags.length > 0 && (
            <motion.button
              onClick={clearFilters}
              className="px-3 py-1 rounded-full text-sm font-medium bg-destructive/10 text-destructive hover:bg-destructive/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Clear
            </motion.button>
          )}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <motion.div
            layout
            className="grid md:grid-cols-2 gap-6"
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="group relative rounded-lg overflow-hidden border border-border/40 hover:border-primary/50 transition-all"
                >
                  <div className="aspect-video bg-muted relative overflow-hidden">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                        <p className="text-muted-foreground">No image available</p>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                        >
                          <ExternalLink className="w-5 h-5 text-white" />
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                        >
                          <Github className="w-5 h-5 text-white" />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="p-4 bg-card border-t border-border/40">
                    <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs rounded-full bg-muted/50 text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-muted-foreground">No projects found with selected filters.</p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
