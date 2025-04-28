import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

type Skill = {
  category: string;
  items: string[];
};

const skills: Skill[] = [
  {
    category: "Programming Languages",
    items: ["TypeScript", "JavaScript", "Java", "Solidity", "Lua"]
  },
  {
    category: "Frameworks & Libraries",
    items: ["React.js", "Next.js", "Node.js", "Express.js", "Cloudflare", "AOS", "Zustand", "Recoil", "Hardhat"]
  },
  {
    category: "Databases",
    items: ["MongoDB", "PostgreSQL", "MySQL", "NeonDB"]
  },
  {
    category: "ORM",
    items: ["Mongoose", "Prisma"]
  },
  {
    category: "UI Libraries",
    items: ["TailwindCSS", "ShadcnUI", "NextUI", "Radix"]
  },
  {
    category: "Tools & Platforms",
    items: ["React Hook Form", "Zod", "Yup", "Turborepo", "Postman", "Bash", "Linux", "Ubuntu", "Zsh", "Docker"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="bg-black text-white section-padding">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Skills</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-16">
          {skills.map((skill) => (
            <Card key={skill.category} className="bg-white/5 border-white/10 hover:bg-white/10 transition-all">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span 
                      key={item} 
                      className="text-sm px-3 py-1.5 bg-white/10 rounded-full text-white/80"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
