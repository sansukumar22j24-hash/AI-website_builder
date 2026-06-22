export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  image: string
  link?: string
  github?: string
  featured?: boolean
}

export const projectsData: Project[] = [
  // Add your projects here in this format:
  // {
  //   id: '1',
  //   title: 'Project Name',
  //   description: 'Brief description of your project',
  //   tags: ['React', 'TypeScript', 'Tailwind'],
  //   image: '/project-image.png',
  //   link: 'https://project-link.com',
  //   github: 'https://github.com/username/project',
  //   featured: true
  // },
]

export const allTags = Array.from(
  new Set(projectsData.flatMap(project => project.tags))
)
