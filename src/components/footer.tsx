
import React from 'react';
import { Separator } from "@/components/ui/separator";
import { Mail } from 'lucide-react';
import { IconBrandX, IconBrandGithub } from '@tabler/icons-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 max-w-sm">
            <h3 className="text-2xl font-bold">kunal garg</h3>
            <p className="text-white/60 mt-2">a friendly guy who just loves to research, learn, build, develop, deploy and repeat!!</p>
          </div>
          
          <div className="flex gap-6">
            <a 
              href="https://github.com/ikunal-04" 
              target="_blank" 
              rel="noreferrer"
              className="text-white/60 hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <IconBrandGithub className="w-5 h-5" />
            </a>
            <a 
              href="https://x.com/kunalg_twt" 
              target="_blank" 
              rel="noreferrer"
              className="text-white/60 hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <IconBrandX className="w-5 h-5" />
            </a>
            <a 
              href="mailto:kunalgarg054@gmail.com" 
              className="text-white/60 hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <Separator className="my-8 bg-white/10" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-white/60 text-sm">
          <p>© {currentYear} kunal garg. All rights reserved.</p>
          {/* <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
