import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="text-center space-y-6">
        <h1 className="text-8xl font-bold text-primary neon-text glitch">404</h1>
        <div className="space-y-2">
          <p className="text-2xl font-mono text-secondary">SYSTEM_ERROR: PAGE_NOT_FOUND</p>
          <p className="text-muted-foreground">The requested route could not be found in the system.</p>
        </div>
        <Button asChild className="bg-gradient-to-r from-primary to-secondary hover:opacity-80 neon-border">
          <Link to="/" className="flex items-center gap-2">
            <Home className="w-4 h-4" />
            RETURN TO HOME
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
