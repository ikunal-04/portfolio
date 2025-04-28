
import React from 'react';
import { Separator } from "@/components/ui/separator";

const About = () => {
  return (
    <section id="about" className="bg-black text-white section-padding min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-white/90">
              I&apos;m a passionate full-stack developer with 1+ years of experience building digital products
              and experiences. My journey in tech started with traditional web development and has evolved
              to include blockchain and Web3 technologies.
            </p>
            <p className="text-lg leading-relaxed text-white/90">
              I specialize in creating intuitive, high-performance applications that solve real problems.
              My approach combines technical excellence with clean design principles to deliver solutions
              that not only work well but also provide exceptional user experiences.
            </p>
            <p className="text-lg leading-relaxed text-white/90">
              When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source
              projects, or sharing my knowledge through technical writing and mentorship.
            </p>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-[#a93117]">Frontend Development</h3>
              <Separator className="bg-white/20 mb-3" />
              <p className="text-white/80">
                Creating responsive and intuitive interfaces using modern frameworks and design principles.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3 text-[#a93117]">Backend Architecture</h3>
              <Separator className="bg-white/20 mb-3" />
              <p className="text-white/80">
                Building scalable server-side applications and APIs with a focus on performance and security.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3 text-[#a93117]">Web3 Development</h3>
              <Separator className="bg-white/20 mb-3" />
              <p className="text-white/80">
                Developing decentralized applications and smart contracts on various blockchain platforms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
