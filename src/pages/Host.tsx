import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Host = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-display font-bold mb-4 md:mb-6 break-words">
              BECOME A HOST
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 md:mb-12">
              Got a wild idea? Share your unique experience with the community.
            </p>
            
            <div className="bg-card border-2 border-border rounded-lg p-8 mb-12">
              <h2 className="text-3xl font-display font-bold mb-6">Why Host with BunkRoot?</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="text-4xl mb-3">💰</div>
                  <h3 className="font-bold text-lg mb-2">Earn Money</h3>
                  <p className="text-muted-foreground text-sm">
                    Turn your passion into income
                  </p>
                </div>
                <div>
                  <div className="text-4xl mb-3">🌟</div>
                  <h3 className="font-bold text-lg mb-2">Share Your Passion</h3>
                  <p className="text-muted-foreground text-sm">
                    Connect with like-minded people
                  </p>
                </div>
                <div>
                  <div className="text-4xl mb-3">🚀</div>
                  <h3 className="font-bold text-lg mb-2">Grow Your Brand</h3>
                  <p className="text-muted-foreground text-sm">
                    Build a following and reputation
                  </p>
                </div>
              </div>
            </div>
            
            <form className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-lg font-bold mb-2 block">Your Name</Label>
                <Input id="name" placeholder="Enter your name" className="h-12" />
              </div>
              
              <div>
                <Label htmlFor="email" className="text-lg font-bold mb-2 block">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" className="h-12" />
              </div>
              
              <div>
                <Label htmlFor="experience" className="text-lg font-bold mb-2 block">What's Your Experience About?</Label>
                <Input id="experience" placeholder="e.g., Midnight Motorcycle Ride" className="h-12" />
              </div>
              
              <div>
                <Label htmlFor="description" className="text-lg font-bold mb-2 block">Describe Your Experience</Label>
                <Textarea 
                  id="description" 
                  placeholder="Tell us what makes it special..." 
                  className="min-h-32"
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="category" className="text-lg font-bold mb-2 block">Category</Label>
                  <Input id="category" placeholder="Thrill, Calm, Culture..." className="h-12" />
                </div>
                <div>
                  <Label htmlFor="price" className="text-lg font-bold mb-2 block">Price Range</Label>
                  <Input id="price" placeholder="₹1,000 - ₹5,000" className="h-12" />
                </div>
              </div>
              
              <Button 
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-[hsl(var(--neon-start))] to-[hsl(var(--neon-end))] text-black font-bold text-lg py-6"
              >
                Submit Your Experience
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Host;
