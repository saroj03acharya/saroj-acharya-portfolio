import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, XCircle, RotateCcw, Trophy } from "lucide-react";

const SkillQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const questions = [
    {
      question: "Which HTML tag is used for the largest heading?",
      options: ["<h6>", "<h1>", "<header>", "<heading>"],
      correct: 1,
      category: "HTML",
      explanation: "The <h1> tag represents the highest level heading in HTML."
    },
    {
      question: "What does CSS stand for?",
      options: ["Computer Style Sheets", "Creative Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets"],
      correct: 2,
      category: "CSS",
      explanation: "CSS stands for Cascading Style Sheets, used for styling web pages."
    },
    {
      question: "Which method is used to add an element at the end of an array in JavaScript?",
      options: ["push()", "add()", "insert()", "append()"],
      correct: 0,
      category: "JavaScript",
      explanation: "The push() method adds one or more elements to the end of an array."
    },
    {
      question: "What is React primarily used for?",
      options: ["Backend development", "Database management", "User interface development", "Server configuration"],
      correct: 2,
      category: "React",
      explanation: "React is a JavaScript library primarily used for building user interfaces."
    },
    {
      question: "Which database is known as a NoSQL document database?",
      options: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"],
      correct: 2,
      category: "Database",
      explanation: "MongoDB is a NoSQL document database that stores data in flexible, JSON-like documents."
    }
  ];

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === null) return;

    const newAnswers = [...answers, selectedAnswer];
    setAnswers(newAnswers);

    if (selectedAnswer === questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    setShowResult(true);
    
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        setQuizCompleted(true);
      }
    }, 2000);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnswers([]);
    setQuizCompleted(false);
  };

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) return "Excellent! You have strong technical knowledge.";
    if (percentage >= 60) return "Good job! You have solid understanding.";
    if (percentage >= 40) return "Not bad! Some areas need improvement.";
    return "Keep learning! There's room for growth.";
  };

  const getRecommendations = () => {
    const weakAreas: string[] = [];
    answers.forEach((answer, index) => {
      if (answer !== questions[index].correct) {
        weakAreas.push(questions[index].category);
      }
    });
    
    const uniqueWeakAreas = [...new Set(weakAreas)];
    return uniqueWeakAreas.length > 0 ? uniqueWeakAreas : ["Continue practicing all areas"];
  };

  if (quizCompleted) {
    return (
      <Card className="text-center">
        <CardHeader>
          <div className="flex justify-center mb-4">
            <Trophy className="h-12 w-12 text-yellow-500" />
          </div>
          <CardTitle>Quiz Completed!</CardTitle>
          <CardDescription>
            You scored {score} out of {questions.length} questions
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-2xl font-bold text-primary">
            {Math.round((score / questions.length) * 100)}%
          </div>
          
          <p className="text-sm">{getScoreMessage()}</p>
          
          <div className="space-y-2">
            <h4 className="font-semibold">Recommended Learning Areas:</h4>
            <div className="flex flex-wrap justify-center gap-2">
              {getRecommendations().map((area) => (
                <Badge key={area} variant="outline">{area}</Badge>
              ))}
            </div>
          </div>
          
          <Button onClick={resetQuiz} className="flex items-center gap-2">
            <RotateCcw className="h-4 w-4" />
            Take Quiz Again
          </Button>
        </CardContent>
      </Card>
    );
  }

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <Badge variant="outline">
          Question {currentQuestion + 1} of {questions.length}
        </Badge>
        <Badge>{currentQ.category}</Badge>
      </div>

      <Progress value={progress} className="mb-6" />

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">{currentQ.question}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {currentQ.options.map((option, index) => {
            let buttonClass = "w-full text-left justify-start h-auto p-4 ";
            
            if (showResult) {
              if (index === currentQ.correct) {
                buttonClass += "bg-success text-success-foreground border-success";
              } else if (index === selectedAnswer && index !== currentQ.correct) {
                buttonClass += "bg-destructive text-destructive-foreground border-destructive";
              } else {
                buttonClass += "opacity-50";
              }
            } else if (selectedAnswer === index) {
              buttonClass += "bg-primary text-primary-foreground";
            } else {
              buttonClass += "variant-outline";
            }

            return (
              <Button
                key={index}
                variant="outline"
                className={buttonClass}
                onClick={() => handleAnswerSelect(index)}
                disabled={showResult}
              >
                <div className="flex items-center gap-3">
                  {showResult && index === currentQ.correct && (
                    <CheckCircle className="h-5 w-5" />
                  )}
                  {showResult && index === selectedAnswer && index !== currentQ.correct && (
                    <XCircle className="h-5 w-5" />
                  )}
                  <span>{option}</span>
                </div>
              </Button>
            );
          })}

          {showResult && (
            <div className="mt-4 p-4 bg-muted/50 rounded-lg animate-fade-in">
              <p className="text-sm font-medium mb-2">Explanation:</p>
              <p className="text-sm text-muted-foreground">{currentQ.explanation}</p>
            </div>
          )}
        </CardContent>
      </Card>

      {!showResult && (
        <Button 
          onClick={handleNextQuestion} 
          disabled={selectedAnswer === null}
          className="w-full"
        >
          {currentQuestion === questions.length - 1 ? "Finish Quiz" : "Next Question"}
        </Button>
      )}

      <div className="text-xs text-muted-foreground text-center mt-6 p-4 bg-muted/30 rounded-lg">
        💡 This quiz demonstrates conditional rendering, state management, and progressive disclosure
      </div>
    </div>
  );
};

export default SkillQuiz;