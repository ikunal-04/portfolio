"use client"
import React from 'react';
import Image from 'next/image';
// import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { NavbarButton } from '@/components/ui/resizable-navbar';
import { IconBrandGithub, IconBrandX } from '@tabler/icons-react';
// import { Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="gradient-hero min-h-screen flex py-40 justify-center relative text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-start">
        <div className='flex items-center justify-between mb-6'>
          <h1 className="text-4xl md:text-6xl font-bold opacity-0 animate-fade-in text-white" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            kunal garg
          </h1>
          <div>
            <Image
              // src="https://pbs.twimg.com/profile_images/1916464904330002432/hyjqcG8a_400x400.jpg"
              src={"/image.png"}
              alt="logo"
              width={74}
              height={74}
              className="rounded-full"
            />
          </div>
        </div>
        <p className="text-lg mb-6 leading-relaxed max-w-2xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
          A passionate full-stack developer specializing in Web3 technologies and modern interfaces.
          Building digital experiences that merge creativity with technical excellence.
          Focused on crafting solutions that make a difference.
          Got an idea, project, or position that matches my skills? Or just want to say hello? Don’t be shy reach out!
          I&apos;m always excited to collaborate, connect, and create.
        </p>
        <Separator className="bg-white/20 mb-3" />
        <div className='flex justify-between items-center'>
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
            {/* <Link
              href="mailto:kunalgarg054@gmail.com?subject=Let's%20Collaborate%20or%20Connect!&body=Hey%20Kunal%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20I'd%20love%20to%20connect%20or%20discuss%20a%20project%20idea.%0A%0ALooking%20forward%20to%20hearing%20from%20you!"
              className="text-white/60 hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </Link> */}
          </div>
          <p
            className="flex items-center justify-end gap-2 text-white/90 hover:text-white transition-colors opacity-0 animate-fade-in"
            style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
          >
            <NavbarButton
              href="mailto:kunalgarg054@gmail.com?subject=Let's%20Collaborate%20or%20Connect!&body=Hey%20Kunal%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20I'd%20love%20to%20connect%20or%20discuss%20a%20project%20idea.%0A%0ALooking%20forward%20to%20hearing%20from%20you!"
            >
              Get in touch
            </NavbarButton>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
