import { Coffee, Github, Linkedin, Heart, Facebook, Instagram, Mail, Contact } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-24 bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Coffee Badge */}
          <div className="flex items-center gap-2 coffee-badge">
            <Coffee className="h-5 w-5" />
            <span className="font-semibold">Cup of Coffee ∞</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/adelinmoshy/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              aria-label="Facebook Profile"
            >
              <Facebook className="h-5 w-5 text-primary" />
            </a>
            <a
              href="https://www.instagram.com/adelinmoshy/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              aria-label="Instagram Profile"
            >
              <Instagram className="h-5 w-5 text-primary" />
            </a>
            <a
              href="tel:+9779867235042"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              aria-label="Contact Profile"
            >
              <Contact className="h-5 w-5 text-primary" />
            </a>
            <a
              href="https://www.linkedin.com/in/saroj-acharya-96b3ba1b6/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-5 w-5 text-primary" />
            </a>
            <a
              href="https://github.com/saroj03acharya"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="h-5 w-5 text-primary" />
            </a>
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>by ER. Saroj Acharya</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;