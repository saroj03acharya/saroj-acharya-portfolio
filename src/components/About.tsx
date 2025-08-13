import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Briefcase, BookOpen } from "lucide-react";

const About = () => {
  return (
    <section className="animate-slide-up">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About</h2>
      
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {/* Education */}
        <Card className="shadow-card card-gradient">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-primary" />
              Education
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold">Bachelor of Engineering</h4>
                <p className="text-sm text-muted-foreground">Computer Science</p>
              </div>
              <div>
                <h4 className="font-semibold">Master in Public Administration</h4>
                <p className="text-sm text-muted-foreground">Currently Pursuing</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Current Work */}
        <Card className="shadow-card card-gradient">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-primary" />
              Current Work
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold">Government Developer</h4>
                <p className="text-sm text-muted-foreground">Hetauda, Bagmati Province</p>
              </div>
              <p className="text-sm">
                Developing digital solutions for government services, 
                focusing on citizen-centric applications and administrative systems.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Current Studies */}
        <Card className="shadow-card card-gradient">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              Current Focus
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold">Public Administration</h4>
                <p className="text-sm text-muted-foreground">Master's Degree</p>
              </div>
              <p className="text-sm">
                Bridging technology and governance, learning how to create 
                more effective digital government services.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;