
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Calendar } from 'lucide-react';
import { Button } from "@/components/ui/button";

type BlogPost = {
  title: string;
  excerpt: string;
  date: string;
  url: string;
  readTime: string;
};

const blogPosts: BlogPost[] = [
  {
    title: "Rollups Made Easy: Unlocking Ethereum’s Scalability Secret",
    excerpt: "With the ongoing rise of Ethereum, the number of transactions per second has been increasing rapidly. This surge has led to higher gas prices, making transactions expensive for users.",
    date: "Jan 1, 2025",
    url: "https://medium.com/@kunalgarg054/rollups-made-easy-unlocking-ethereums-scalability-secret-bbc9d1e9ab99",
    readTime: "3 min read"
  },
];

const Blog = () => {
  return (
    <section id="blog" className="bg-black text-white section-padding">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Blogs</h2>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map((post, index) => (
            <Card 
              key={index}
              className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-xs text-white/60 mb-3">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                  <span className="inline-block h-1 w-1 rounded-full bg-white/40"></span>
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {post.title}
                </h3>
                
                <p className="text-white/80 mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <Button 
                  variant="outline" 
                  className="mt-auto border-white/20 hover:bg-white/10 text-white"
                  asChild
                >
                  <a href={post.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    Read on Medium
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* <div className="flex justify-center mt-12">
          <Button 
            variant="outline" 
            className="border-white/20 hover:bg-white/10 text-white"
            asChild
          >
            <a href="https://medium.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              View all articles on Medium
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default Blog;