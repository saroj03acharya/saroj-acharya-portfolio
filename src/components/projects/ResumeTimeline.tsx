import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Briefcase, Calendar, MapPin } from "lucide-react";

const ResumeTimeline = () => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const timelineItems = [
    {
      id: 1,
      type: "education",
      title: "Bachelor of Engineering",
      subtitle: "Computer Engineering",
      location: "Nepal",
      period: "2017 - 2022",
      description: "Graduated with honors, specialized in computer engineering and web development. Completed capstone project on government digital services.",
      icon: GraduationCap,
      color: "text-blue-600"
    },
    {
      id: 2,
      type: "work",
      title: "Lecture",
      subtitle: "Bachelor of Information Technology",
      location: "Kawasoti, Nawalparasi",
      period: "2022 - 2023",
      description: "",
      icon: Briefcase,
      color: "text-green-600"
    },
    {
      id: 3,
      type: "education",
      title: "Master in Public Administration",
      subtitle: "Currently Pursuing",
      institution: "University",
      location: "Nepal",
      period: "2022 - Present",
      description: "Focusing on digital governance, public policy, and technology integration in government services.",
      icon: GraduationCap,
      color: "text-blue-600"
    },
    {
      id: 4,
      type: "work",
      title: "System and Project Management",
      subtitle: "Infomation and Communication Coordination Section",
      location: "Office of the Chief Minister and Council of Ministers",
      period: "2024 - Present",
      description: "Leading development of digital government solutions, implementing modern web technologies for citizen services and administrative efficiency.Developed citizen service portals and administrative systems. Worked on digitizing government processes and improving accessibility.",
      icon: Briefcase,
      color: "text-green-600"
    }
  ];

  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground mb-6">
        Click on any timeline item to view details
      </p>
      
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>
        
        <div className="space-y-6">
          {timelineItems.map((item, index) => {
            const Icon = item.icon;
            const isSelected = selectedItem === item.id;
            
            return (
              <div
                key={item.id}
                className={`relative flex items-start gap-4 cursor-pointer transition-all duration-200 ${
                  isSelected ? 'transform scale-105' : 'hover:transform hover:scale-102'
                }`}
                onClick={() => setSelectedItem(isSelected ? null : item.id)}
              >
                {/* Icon */}
                <div className={`flex-shrink-0 w-16 h-16 rounded-full bg-background border-2 border-primary flex items-center justify-center ${isSelected ? 'shadow-elegant' : ''}`}>
                  <Icon className={`h-6 w-6 ${item.color}`} />
                </div>
                
                {/* Content */}
                <Card className={`flex-1 transition-all duration-200 ${isSelected ? 'shadow-elegant border-primary' : 'shadow-card'}`}>
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-semibold text-lg">{item.title}</h4>
                        <p className="text-primary font-medium">{item.subtitle}</p>
                        <p className="text-sm text-muted-foreground">{item.institution}</p>
                      </div>
                      <Badge variant={item.type === 'education' ? 'secondary' : 'default'}>
                        {item.type}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {item.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {item.location}
                      </div>
                    </div>
                    
                    {isSelected && (
                      <div className="animate-fade-in">
                        <p className="text-sm leading-relaxed">{item.description}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ResumeTimeline;