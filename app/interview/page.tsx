import { HelpCircle } from "lucide-react";

export const metadata = {
  title: "Interview Questions | DevSecOps Academy",
  description: "Common DevOps interview questions and answers",
};

const categories = [
  {
    category: "Linux & Shell Scripting",
    questions: [
      "What is the difference between soft link and hard link?",
      "How do you check disk usage in Linux?",
      "Explain the Linux boot process",
      "What is a cron job and how do you set it up?",
    ],
  },
  {
    category: "Git & Version Control",
    questions: [
      "What is the difference between git pull and git fetch?",
      "How do you resolve merge conflicts?",
      "Explain git rebase vs git merge",
      "What is git cherry-pick?",
    ],
  },
  {
    category: "Docker",
    questions: [
      "What is the difference between CMD and ENTRYPOINT?",
      "How do you optimize Docker image size?",
      "Explain Docker networking modes",
      "What are multi-stage builds?",
    ],
  },
  {
    category: "Kubernetes",
    questions: [
      "What is the difference between Deployment and StatefulSet?",
      "Explain Kubernetes networking",
      "What are init containers?",
      "How does Horizontal Pod Autoscaler work?",
    ],
  },
  {
    category: "CI/CD",
    questions: [
      "What is the difference between CI and CD?",
      "Explain Jenkins pipeline stages",
      "How do you implement blue-green deployment?",
      "What are GitHub Actions?",
    ],
  },
];

export default function InterviewPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border bg-muted px-4 py-1.5 text-sm">
            <HelpCircle className="h-4 w-4 text-primary" />
            <span>200+ Questions</span>
          </div>

          <h1 className="mb-4 text-4xl font-bold tracking-tight">
            Interview Questions
          </h1>
          <p className="text-lg text-muted-foreground">
            Common DevOps interview questions to prepare for your next job
          </p>
        </div>

        <div className="space-y-8">
          {categories.map((section) => (
            <div key={section.category}>
              <h2 className="mb-4 text-2xl font-bold">{section.category}</h2>
              <div className="space-y-3">
                {section.questions.map((question, index) => (
                  <div
                    key={index}
                    className="rounded-lg border bg-card p-4 transition-all hover:shadow-md"
                  >
                    <p className="font-medium">{question}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-lg border bg-muted/50 p-8 text-center">
          <h2 className="mb-4 text-2xl font-bold">Detailed Answers Coming Soon</h2>
          <p className="text-muted-foreground">
            We're preparing comprehensive answers with examples for all interview questions.
          </p>
        </div>
      </div>
    </div>
  );
}
