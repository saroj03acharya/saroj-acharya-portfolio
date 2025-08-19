import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ResumeTimeline from "@/components/projects/ResumeTimeline";
import CodePlayground from "@/components/projects/CodePlayground";
import SkillQuiz from "@/components/projects/SkillQuiz";

const MiniProjects = () => {
  return (
    <section className="animate-slide-up">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Interactive Fields</h2>
      
      <div className="space-y-8 max-w-6xl mx-auto">
        {/* Resume Timeline */}
        <Card className="shadow-card card-gradient">
          <CardHeader>
            <CardTitle>📚 Resume Timeline</CardTitle>
            <CardDescription>
              Interactive timeline of my education and work experience
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResumeTimeline />
          </CardContent>
        </Card>

        {/* Code Playground */}
        <Card className="shadow-card card-gradient">
          <CardHeader>
            <CardTitle>💻 Code Playground</CardTitle>
            <CardDescription>
              Live HTML/CSS/JS editor with instant preview
            </CardDescription>
          </CardHeader>
          <CardContent>
            <CodePlayground />
          </CardContent>
        </Card>

        {/* Skill Quiz */}
        <Card className="shadow-card card-gradient">
          <CardHeader>
            <CardTitle>🧠 Skill Quiz</CardTitle>
            <CardDescription>
              Test your knowledge and discover learning paths
            </CardDescription>
          </CardHeader>
          <CardContent>
            <SkillQuiz />
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default MiniProjects;