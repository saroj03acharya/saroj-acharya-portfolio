import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Moon, Sun, Download, Coffee, MapPin, GraduationCap, Briefcase } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import About from "@/components/About";
import Skills from "@/components/Skills";
import MiniProjects from "@/components/MiniProjects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);
  const { toast } = useToast();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const handleResumeDownload = () => {
    toast({
      title: "Resume Download",
      description: "Resume download will be available soon!",
    });
  };

  return (
    <div className={`min-h-screen smooth-scroll ${darkMode ? "dark" : ""}`}>
      {/* Fixed Dark Mode Toggle */}
      <Button
        variant="outline"
        size="icon"
        className="fixed top-6 right-6 z-50 shadow-elegant"
        onClick={toggleDarkMode}
      >
        {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      </Button>

      {/* Fixed Resume Download */}
      <Button
        variant="secondary"
        className="fixed top-6 left-6 z-50 shadow-elegant"
        onClick={handleResumeDownload}
      >
        <Download className="h-4 w-4 mr-2" />
        Resume
      </Button>

      <main className="container mx-auto px-4 space-y-16">
        <Hero />
        <Overview/>
        <About />
        <Skills />
        <MiniProjects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default Index;