import React from 'react';
import { Trophy, Award } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface Achievement {
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
}

const achievements: Achievement[] = [
  {
    title: "Arweave India Hacker House Winner",
    description: "Secured $3,000 bounty as winner of Arweave India Hacker House 2.",
    icon: Trophy,
    color: "bg-[#a93117]/10 border-[#a93117]/20 text-[#a93117]"
  },
  {
    title: "Funding for a Hackathon Project",
    description: "Received $5,000 funding for a hackathon project.",
    icon: Award,
    color: "bg-purple-500/10 border-purple-500/20 text-purple-500"
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="bg-black text-white section-padding">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Achievements</h2>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="relative overflow-hidden border border-white/10 rounded-xl p-6 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm hover:from-white/10 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex flex-col h-full">
                <div className={cn("p-3 rounded-lg inline-flex w-fit mb-5", achievement.color)}>
                  <achievement.icon className="h-6 w-6" />
                </div>
                
                <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                <p className="text-sm text-white/70 mb-4 flex-grow">{achievement.description}</p>
                
                <Badge 
                  variant="outline" 
                  className={cn("w-fit", achievement.color)}
                >
                  Achievement
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
