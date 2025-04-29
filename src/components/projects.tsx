import React from 'react';
import { Github, Link } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Project = {
  title: string;
  description: string;
  type: ('web3' | 'traditional')[];
  link: string;
  github?: string;
  technologies: string[];
};

const projects: Project[] = [
  {
    title: "aoVest",
    description: "Vesting app for token management on Arweave, featuring automated token transfers and modular UI for rapid updates.",
    type: ["web3"],
    link: "https://ao-vest.ar-io.net/",
    github: "https://github.com/ikunal-04/aovest",
    technologies: ["TypeScript", "Lua", "AOS", "React.js", "TailwindCSS", "Zustand"]
  },
  {
    title: "EaseMyExpo",
    description: "Fully dynamic website for EaseMyExpo with 50+ custom stall designs and event management services.",
    type: ["traditional"],
    link: "https://easemyexpo.com/",
    technologies: ["TypeScript", "React.js", "MongoDB", "Node.js", "Express.js", "TailwindCSS"]
  },
  {
    title: "CryptoBasket",
    description: "Comprehensive crypto finance platform featuring a user dashboard for portfolio tracking and management.",
    type: ["web3", "traditional"],
    link: "https://basket-finance-landing-page.vercel.app/",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "Node.js", "Express.js", "MongoDB"]
  },
  {
    title: "OnchainAura",
    description: "A full-stack application that analyzes users' onchain activities to generate personalized Aura scores, integrating smart contracts and backend services for comprehensive analytics.",
    type: ["web3"],
    link: "https://www.onchainaura.fun/",
    github: "https://github.com/ikunal-04/aura",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "Solidity", "Hardhat", "Ethers.js", "Node.js", "Express.js"]
  },
  {
    title: "ResolutionDAO",
    description: "End-to-end decentralized autonomous organization platform enabling users to create and vote on proposals, with integrated smart contracts and a user-friendly interface.",
    type: ["web3"],
    link: "https://resolutiondao.vercel.app/",
    github: "https://github.com/ikunal-04/holiday-hackathon",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "Solidity", "Hardhat", "Ethers.js"]
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-black text-white section-padding min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Projects</h2>
        
        <Tabs defaultValue="all" className="w-full mt-12">
          <div className="flex justify-center mb-12">
            <TabsList className="bg-white/5">
              <TabsTrigger value="all">all projects</TabsTrigger>
              <TabsTrigger value="web3">web3</TabsTrigger>
              <TabsTrigger value="traditional">traditional</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all" className="mt-6">
            <ProjectGrid projects={projects} />
          </TabsContent>
          
          <TabsContent value="web3" className="mt-6">
          <ProjectGrid projects={projects.filter(p => p.type.includes('web3'))} />
          </TabsContent>
          
          <TabsContent value="traditional" className="mt-6">
            <ProjectGrid projects={projects.filter(p => p.type.includes('traditional'))} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

const ProjectGrid = ({ projects }: { projects: Project[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project) => (
        <Card key={project.title} className="bg-white/5 border-white/10 text-white overflow-hidden hover:bg-white/10 transition-colors">
          <CardHeader>
            <CardTitle className="text-xl">{project.title}</CardTitle>
            <CardDescription className="text-white/70">{project.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="text-xs px-2 py-1 bg-white/10 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <div className="flex gap-4">
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer" className="text-white/70 hover:text-white transition-colors">
                  <Github size={20} />
                </a>
              )}
              <a href={project.link} target="_blank" rel="noreferrer" className="text-white/70 hover:text-white transition-colors">
                <Link size={20} />
              </a>
            </div>
            <span className="text-xs text-white/50 gap-2">{project.type}</span>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default Projects;
