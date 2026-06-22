'use client'

import { motion } from 'framer-motion'

export default function AboutSection() {
  const skills = [
    'React',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'Node.js',
    'PostgreSQL',
    'Framer Motion',
    'Prisma',
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="about" className="py-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">About Me</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4 text-muted-foreground"
          >
            <p>
              I&apos;m a passionate full-stack developer with a love for creating beautiful, 
              functional web applications. With expertise in modern web technologies, I transform 
              ideas into reality through clean, maintainable code.
            </p>
            <p>
              My journey in web development started with a curiosity about how things work on the web. 
              Since then, I&apos;ve built numerous projects ranging from small components to complex, 
              scalable applications that serve thousands of users.
            </p>
            <p>
              When I&apos;m not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with the developer community.
            </p>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6">Skills & Technologies</h3>
            <motion.div
              className="grid grid-cols-2 gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {skills.map(skill => (
                <motion.div
                  key={skill}
                  variants={itemVariants}
                  className="p-4 rounded-lg border border-border/40 bg-card/50 hover:border-primary/50 hover:bg-card/80 transition-all backdrop-blur-sm text-center"
                >
                  <span className="font-semibold text-sm">{skill}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 gap-4 mt-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={itemVariants} className="text-center">
                <p className="text-3xl font-bold text-primary">5+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </motion.div>
              <motion.div variants={itemVariants} className="text-center">
                <p className="text-3xl font-bold text-primary">50+</p>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
