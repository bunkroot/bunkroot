import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl md:text-8xl font-display font-bold mb-12">
              OUR STORY
            </h1>
            
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                BunkRoot was born from a simple idea: life shouldn't be a loop of the same routine. 
                We believe in the power of small escapes — moments that break the monotony and remind 
                you what it feels like to be truly alive.
              </p>
              
              <h2 className="text-4xl font-display font-bold mb-6 mt-12">
                ESCAPE ROUTINE. STAY ROOTED.
              </h2>
              
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Our tagline captures what we're all about. We help you escape the mundane, but we're 
                not about running away from life. We're about staying connected to what matters — 
                experiences, people, and moments that ground you.
              </p>
              
              <h2 className="text-4xl font-display font-bold mb-6 mt-12">
                THE MANIFESTO
              </h2>
              
              <div className="bg-card border-l-4 border-accent p-8 my-8">
                <p className="text-lg font-semibold mb-4">
                  "We reject the ordinary. We embrace the weird, the wild, and the wonderful."
                </p>
                <p className="text-lg font-semibold mb-4">
                  "We believe experiences are currency. Collect them."
                </p>
                <p className="text-lg font-semibold">
                  "We're building a tribe of people who refuse to sleepwalk through life."
                </p>
              </div>
              
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Join us. Bunk the routine. Make some noise. Share your story.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
