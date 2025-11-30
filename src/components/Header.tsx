import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/bunkroot-logo.png";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [{
    path: "/",
    label: "Home"
  }, {
    path: "/explore",
    label: "Explore"
  }, {
    path: "/contact",
    label: "Contact"
  }];
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="BunkRoot" className="h-8" />
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => <Link key={link.path} to={link.path} className="relative text-sm font-semibold tracking-wide transition-colors hover:text-accent">
                {link.label}
                {location.pathname === link.path && <motion.div layoutId="activeNav" className="absolute -bottom-[1.5rem] left-0 right-0 h-0.5 bg-gradient-to-r from-[hsl(var(--neon-start))] to-[hsl(var(--neon-end))]" />}
              </Link>)}
          </nav>

          <div className="flex items-center gap-4">
            <Link to="/host" className="hidden md:inline-flex">
              <Button variant="outline" size="sm">
                Become a Host
              </Button>
            </Link>
            
            

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle>
                    <img src={logo} alt="BunkRoot" className="h-6" />
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-6 mt-8">
                  {navLinks.map(link => <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)} className="text-lg font-semibold tracking-wide transition-colors hover:text-accent">
                      {link.label}
                    </Link>)}
                  <div className="border-t border-border pt-6 flex flex-col gap-3">
                    <Link to="/host" onClick={() => setIsOpen(false)}>
                      <Button variant="outline" className="w-full">
                        Become a Host
                      </Button>
                    </Link>
                    
                    
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>;
};
export default Header;