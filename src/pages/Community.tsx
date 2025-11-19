import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Community = () => {
  const posts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600",
      caption: "Best midnight ride ever! #Bunkroot",
      author: "Sarah M.",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600",
      caption: "Found my zen 🧘",
      author: "Raj K.",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600",
      caption: "Making memories with the tribe",
      author: "Maya S.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl md:text-8xl font-display font-bold mb-6">
              THE TRIBE
            </h1>
            <p className="text-xl text-muted-foreground mb-12">
              Share the moment that made you feel alive. #Bunkroot
            </p>
            
            <div className="flex gap-4 mb-12">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-[hsl(var(--neon-start))] to-[hsl(var(--neon-end))] text-black font-bold"
              >
                Share Your Story
              </Button>
              <Button size="lg" variant="outline">
                Join WhatsApp Group
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {posts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="overflow-hidden bg-card border-2 border-border hover:border-accent transition-all cursor-pointer">
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.caption}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-sm mb-2">{post.caption}</p>
                      <p className="text-xs text-muted-foreground">by {post.author}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Community;
