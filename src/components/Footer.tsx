import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/bunkroot-logo.png";
const Footer = () => {
  return <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-12 xl:px-20 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <img src={logo} alt="BunkRoot" className="h-8 mb-4" />
            <p className="text-sm text-muted-foreground">
              Escape Routine. Stay Rooted.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-accent">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/explore" className="text-muted-foreground hover:text-accent transition-colors">All Experiences</Link></li>
              <li><Link to="/explore?category=thrill" className="text-muted-foreground hover:text-accent transition-colors">Thrill</Link></li>
              <li><Link to="/explore?category=calm" className="text-muted-foreground hover:text-accent transition-colors">Calm</Link></li>
              <li><Link to="/explore?category=culture" className="text-muted-foreground hover:text-accent transition-colors">Culture</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-accent">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-muted-foreground hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/host" className="text-muted-foreground hover:text-accent transition-colors">Become a Host</Link></li>
              
              <li><Link to="/contact" className="text-muted-foreground hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-accent">Stay Connected</h4>
            <p className="text-sm text-muted-foreground mb-4">Join the Bunker's Cult</p>
            <Button asChild className="bg-gradient-to-r from-[hsl(var(--neon-start))] to-[hsl(var(--neon-end))] text-black font-bold w-full">
              <a href="https://chat.whatsapp.com/ERuQGFK0ZZD2G0iNTy8eUn" target="_blank" rel="noopener noreferrer">
                Join WhatsApp Group
              </a>
            </Button>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2025 BunkRoot. Off the Routine.</p>
          <div className="flex gap-4 text-sm">
            <Link to="/terms" className="text-muted-foreground hover:text-accent transition-colors">Terms</Link>
            <Link to="/privacy" className="text-muted-foreground hover:text-accent transition-colors">Privacy</Link>
            <Link to="/cookies" className="text-muted-foreground hover:text-accent transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;