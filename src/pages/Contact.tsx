import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  const whatsappNumber = "917907536782";
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappMessage = `Hi BunkRoot! 👋

*New Contact Form Submission*

Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

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
            <h1 className="text-6xl md:text-8xl font-display font-bold mb-6">
              GET IN TOUCH
            </h1>
            <p className="text-xl text-muted-foreground mb-12">
              Questions? Ideas? Just want to chat? We're here.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-card border-2 border-border rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4">Quick Contact</h3>
                <div className="space-y-4">
                  <a 
                    href={`https://wa.me/${whatsappNumber}?text=Hi BunkRoot! I have a question...`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button 
                      className="w-full bg-gradient-to-r from-[hsl(var(--neon-start))] to-[hsl(var(--neon-end))] text-black font-bold"
                      size="lg"
                    >
                      💬 WhatsApp Us
                    </Button>
                  </a>
                  <Button variant="outline" size="lg" className="w-full">
                    📧 hello@bunkroot.com
                  </Button>
                </div>
              </div>
              
              <div className="bg-card border-2 border-border rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4">FAQ</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-bold mb-1">How do I book?</p>
                    <p className="text-muted-foreground">Click the experience and hit "Book via WhatsApp"</p>
                  </div>
                  <div>
                    <p className="font-bold mb-1">Can I cancel?</p>
                    <p className="text-muted-foreground">Check individual experience policies</p>
                  </div>
                  <div>
                    <p className="font-bold mb-1">How do I become a host?</p>
                    <p className="text-muted-foreground">Visit our Become a Host page</p>
                  </div>
                </div>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="bg-card border-2 border-border rounded-lg p-8 space-y-6">
              <h3 className="text-2xl font-bold mb-4">Send Us a Message</h3>
              
              <div>
                <Label htmlFor="name">Name</Label>
                <Input 
                  id="name" 
                  placeholder="Your name" 
                  className="mt-2" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="your@email.com" 
                  className="mt-2"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us what's on your mind..." 
                  className="mt-2 min-h-32"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-[hsl(var(--neon-start))] to-[hsl(var(--neon-end))] text-black font-bold"
                size="lg"
              >
                Send via WhatsApp
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;
