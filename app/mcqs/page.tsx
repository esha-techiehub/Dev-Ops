import { CheckCircle } from "lucide-react";

export const metadata = {
  title: "MCQs | DevSecOps Academy",
  description: "Multiple choice questions to test your DevOps knowledge",
};

const quizzes = [
  {
    title: "Linux Fundamentals Quiz",
    questions: 20,
    difficulty: "Beginner",
    topics: ["Linux Commands", "File System", "Permissions"],
  },
  {
    title: "Git & Version Control Quiz",
    questions: 15,
    difficulty: "Beginner",
    topics: ["Git Commands", "Branching", "Merging"],
  },
  {
    title: "Docker Basics Quiz",
    questions: 25,
    difficulty: "Intermediate",
    topics: ["Containers", "Images", "Networking"],
  },
  {
    title: "Kubernetes Fundamentals Quiz",
    questions: 30,
    difficulty: "Intermediate",
    topics: ["Pods", "Services", "Deployments"],
  },
  {
    title: "CI/CD Pipelines Quiz",
    questions: 20,
    difficulty: "Intermediate",
    topics: ["Jenkins", "GitHub Actions", "Best Practices"],
  },
  {
    title: "DevSecOps Quiz",
    questions: 25,
    difficulty: "Advanced",
    topics: ["Security", "Scanning", "Compliance"],
  },
];

export default function MCQsPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border bg-muted px-4 py-1.5 text-sm">
            <CheckCircle className="h-4 w-4 text-primary" />
            <span>Test Your Knowledge</span>
          </div>

          <h1 className="mb-4 text-4xl font-bold tracking-tight">
            MCQ Quizzes
          </h1>
          <p className="text-lg text-muted-foreground">
            Test your DevOps knowledge with topic-wise multiple choice questions
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {quizzes.map((quiz) => (
            <div
              key={quiz.title}
              className="rounded-lg border bg-card p-6 transition-all hover:shadow-lg"
            >
              <div className="mb-4">
                <h2 className="mb-2 text-xl font-semibold">{quiz.title}</h2>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>{quiz.questions} questions</span>
                  <span>•</span>
                  <span className="font-medium">{quiz.difficulty}</span>
                </div>
              </div>

              <div className="mb-4 flex flex-wrap gap-2">
                {quiz.topics.map((topic) => (
                  <span
                    key={topic}
                    className="rounded-full bg-muted px-2 py-1 text-xs"
                  >
                    {topic}
                  </span>
                ))}
              </div>

              <button className="w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
                Start Quiz
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-lg border bg-primary/5 p-8">
          <h2 className="mb-4 text-2xl font-bold">Interactive Quizzes Coming Soon</h2>
          <p className="text-muted-foreground">
            Full interactive quiz experience with instant feedback, explanations, and progress tracking will be available soon.
          </p>
        </div>
      </div>
    </div>
  );
}
