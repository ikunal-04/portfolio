"use client"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

type ExperienceItem = {
  title: string
  company: string
  period: string
  description: string[]
  technologies: string[]
}

const experienceItems: ExperienceItem[] = [
  {
    title: "Fullstack Blockchain Developer Intern",
    company: "Buildorz",
    period: "Dec 2024 - Present",
    description: [
      "Created and deployed application from group idea to production, scaling it to 1000+ users.",
      "Developed a user-friendly web application using React.js, Redux, and TailwindCSS, collaborating with a cross-functional team.",
      "Have worked on multiple projects, including a decentralized application (dApp) and defi projects.",
      "Worked on a multiple technologies and services like privy, zerodev and integrated into our applications."
    ],
    technologies: ["Node.js", "Express.js", "MongoDB", "TypeScript", "React.js"],
  },
  {
    title: "Backend Developer Intern",
    company: "Inggage",
    period: "Dec 2024 - Feb 2025",
    description: [
      "Created and deployed chat feature, helping brands to effectively connect with creators and vice-versa.",
      "Designed and architected the tracking system for effective content delivery by creators."
    ],
    technologies: ["Node.js", "Express.js", "MongoDB", "TypeScript", "React.js"],
  },
  {
    title: "Full-Stack Developer (Freelance)",
    company: "Self-Employed",
    period: "Apr 2024 - Dec 2024",
    description: [
      "Created and deployed multiple full-stack applications, enhancing client satisfaction by 30%.",
      "Provided debugging and low-level design solutions, improving code efficiency and maintainability."
    ],
    technologies: ["Next.js", "React.js", "TailwindCSS", "MongoDB", "TypeScript"],
  },
  {
    title: "Frontend Engineer",
    company: "BizOAlly",
    period: "Apr 2024 - May 2024",
    description: [
      "Developed a user-friendly web application using React.js, Redux, and TailwindCSS, collaborating with a cross-functional team.",
      "Improved UI/UX design and performance, resulting in a 20% increase in user engagement."
    ],
    technologies: ["React.js", "Redux", "TailwindCSS"],
  },
]

const Experience = () => {
  return (
    <section id="experience" className="relative py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <h2 className="section-title">Experience</h2>

        <div className="space-y-12 relative">
          <div className="absolute left-8 md:left-12 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#a93117] via-[#a93117]/50 to-[#a93117]/10 hidden sm:block"></div>

          {experienceItems.map((item, index) => (
            <motion.div
              key={item.company + item.title}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="absolute left-8 md:left-12 top-8 w-4 h-4 rounded-full bg-[#a93117] transform -translate-x-1/2 hidden sm:block z-20 shadow-[0_0_15px_rgba(169,49,23,0.5)]"></div>

              <Card className="ml-0 sm:ml-20 bg-black/40 backdrop-blur-sm border border-white/5 hover:border-[#a93117]/30 transition-all duration-300 overflow-hidden group">
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                    <div className="flex items-start gap-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white group-hover:text-[#a93117] transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-white/70 font-medium">{item.company}</p>
                      </div>
                    </div>
                    <span className="text-sm text-white/60 px-4 py-1.5 bg-white/5 rounded-full border border-white/10 group-hover:border-[#a93117]/20 transition-colors duration-300">
                      {item.period}
                    </span>
                  </div>

                  <ul className="space-y-3 mb-6 pl-4">
                    {item.description.map((desc, i) => (
                      <li
                        key={i}
                        className="text-white/80 flex items-start group-hover:text-white/90 transition-colors duration-300"
                      >
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#a93117] mt-2 mr-3 flex-shrink-0"></span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-white/70 hover:bg-[#a93117]/10 hover:border-[#a93117]/30 hover:text-white transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
