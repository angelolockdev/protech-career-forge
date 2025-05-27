
import { Button } from "@/components/ui/button";
import { Brain, Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-lg">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              ProtechResume
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">
              Fonctionnalités
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">
              Tarifs
            </a>
            <Link to="/cv-analysis" className="text-gray-600 hover:text-blue-600 transition-colors">
              Analyser CV
            </Link>
            <Button variant="outline" className="mr-2">
              Connexion
            </Button>
            <Link to="/dashboard">
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                Commencer
              </Button>
            </Link>
          </nav>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">
                Fonctionnalités
              </a>
              <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">
                Tarifs
              </a>
              <Link to="/cv-analysis" className="text-gray-600 hover:text-blue-600 transition-colors">
                Analyser CV
              </Link>
              <div className="flex flex-col space-y-2">
                <Button variant="outline">
                  Connexion
                </Button>
                <Link to="/dashboard">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                    Commencer
                  </Button>
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
