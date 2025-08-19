import { Badge } from "@/components/ui/badge";
import { Coffee, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-24 pb-16 text-center animate-fade-in">
      <div className="max-w-4xl mx-auto">
        {/* Coffee Badge */}
        <Badge variant="secondary" className="mb-6 coffee-badge text-lg px-4 py-2">
          <Coffee className="h-4 w-4 mr-2" />
          Welcome with Cup of Coffee ∞
        </Badge>

        {/* Name and Title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
          Er. Saroj Acharya
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-4">
          Computer Engineer
        </h2>

        {/* Organization */}
        <div className="flex items-center justify-center gap-2 text-lg text-muted-foreground mb-8">
          <MapPin className="h-5 w-5" />
          <span>Office of the Chief Minister and Council of Ministers</span>
        </div>
        
        <p className="text-xl text-muted-foreground">
          Government of Bagamati Province
        </p>

        {/* Decorative Element */}
        <div className="mt-12 w-24 h-1 hero-gradient mx-auto rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;