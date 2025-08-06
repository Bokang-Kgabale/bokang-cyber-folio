import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary/30">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-primary neon-text">
            &lt;BOKANG.DEV/&gt;
          </Link>
          
          <div className="flex space-x-6">
            <Link to="/">
              <Button 
                variant={location.pathname === "/" ? "default" : "ghost"}
                className="text-foreground hover:text-primary transition-colors"
              >
                HOME
              </Button>
            </Link>
            <Link to="/projects">
              <Button 
                variant={location.pathname === "/projects" ? "default" : "ghost"}
                className="text-foreground hover:text-primary transition-colors"
              >
                PROJECTS
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;