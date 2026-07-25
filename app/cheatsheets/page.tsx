import { FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Cheat Sheets | DevSecOps Academy",
  description: "Quick reference guides for DevOps tools and technologies",
};

const cheatSheets = [
  {
    title: "Docker Cheat Sheet",
    description: "Essential Docker commands and best practices",
    topics: ["Containers", "Images", "Networks", "Volumes"],
    level: "beginner",
  },
  {
    title: "Kubernetes Cheat Sheet",
    description: "kubectl commands and Kubernetes resource management",
    topics: ["Pods", "Services", "Deployments", "ConfigMaps"],
    level: "intermediate",
  },
  {
    title: "Git Cheat Sheet",
    description: "Git workflows, branching, and collaboration",
    topics: ["Branching", "Merging", "Rebasing", "Workflows"],
    level: "beginner",
  },
  {
    title: "Terraform Cheat Sheet",
    description: "Infrastructure as Code with Terraform",
    topics: ["Resources", "State", "Modules", "Workspaces"],
    level: "intermediate",
  },
  {
    title: "AWS CLI Cheat Sheet",
    description: "Common AWS CLI commands for DevOps",
    topics: ["EC2", "S3", "IAM", "CloudFormation"],
    level: "intermediate",
  },
  {
    title: "Linux Commands Cheat Sheet",
    description: "Essential Linux commands for DevOps engineers",
    topics: ["File System", "Processes", "Networking", "Permissions"],
    level: "beginner",
  },
];

export default function CheatSheetsPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border bg-muted px-4 py-1.5 text-sm">
            <FileText className="h-4 w-4 text-primary" />
            <span>Quick Reference</span>
          </div>

          <h1 className="mb-4 text-4xl font-bold tracking-tight">
            Cheat Sheets
          </h1>
          <p className="text-lg text-muted-foreground">
            Quick reference guides for essential DevOps tools and commands
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {cheatSheets.map((sheet) => (
            <div
              key={sheet.title}
              className="rounded-lg border bg-card p-6 transition-all hover:shadow-lg"
            >
              <div className="mb-3 flex items-start justify-between">
                <h2 className="text-xl font-semibold">{sheet.title}</h2>
                <Badge
                  variant={
                    sheet.level === "beginner" ? "success" : "info"
                  }
                >
                  {sheet.level}
                </Badge>
              </div>

              <p className="mb-4 text-sm text-muted-foreground">
                {sheet.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {sheet.topics.map((topic) => (
                  <Badge key={topic} variant="outline">
                    {topic}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-lg border bg-muted/50 p-8 text-center">
          <h2 className="mb-4 text-2xl font-bold">Downloadable PDFs Coming Soon</h2>
          <p className="text-muted-foreground">
            Printable PDF cheat sheets will be available soon for offline reference.
          </p>
        </div>
      </div>
    </div>
  );
}
