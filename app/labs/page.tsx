import { Flask, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Hands-On Labs | DevSecOps Academy",
  description: "Practical hands-on labs for real-world DevOps scenarios",
};

const labs = [
  {
    id: 1,
    title: "Docker Container Basics",
    description: "Build, run, and manage Docker containers from scratch",
    level: "beginner",
    duration: "45 min",
    topics: ["Docker", "Containers", "CLI"],
  },
  {
    id: 2,
    title: "Kubernetes Deployment",
    description: "Deploy a multi-tier application on Kubernetes",
    level: "intermediate",
    duration: "90 min",
    topics: ["Kubernetes", "Deployments", "Services"],
  },
  {
    id: 3,
    title: "CI/CD with Jenkins",
    description: "Build a complete CI/CD pipeline using Jenkins",
    level: "intermediate",
    duration: "120 min",
    topics: ["Jenkins", "CI/CD", "Automation"],
  },
  {
    id: 4,
    title: "Terraform AWS Infrastructure",
    description: "Provision AWS infrastructure using Terraform",
    level: "intermediate",
    duration: "90 min",
    topics: ["Terraform", "AWS", "IaC"],
  },
  {
    id: 5,
    title: "Monitoring with Prometheus",
    description: "Set up monitoring and alerting with Prometheus and Grafana",
    level: "advanced",
    duration: "120 min",
    topics: ["Prometheus", "Grafana", "Monitoring"],
  },
];

export default function LabsPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border bg-muted px-4 py-1.5 text-sm">
            <Flask className="h-4 w-4 text-primary" />
            <span>50+ Hands-On Labs</span>
          </div>

          <h1 className="mb-4 text-4xl font-bold tracking-tight">
            Practical Labs
          </h1>
          <p className="text-lg text-muted-foreground">
            Learn by doing. Practice real-world DevOps scenarios in
            production-like environments.
          </p>
        </div>

        <div className="grid gap-6">
          {labs.map((lab) => (
            <div
              key={lab.id}
              className="rounded-lg border bg-card p-6 transition-all hover:shadow-lg"
            >
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <h2 className="mb-2 text-2xl font-semibold">{lab.title}</h2>
                  <p className="text-muted-foreground">{lab.description}</p>
                </div>
                <Badge
                  variant={
                    lab.level === "beginner"
                      ? "success"
                      : lab.level === "intermediate"
                      ? "info"
                      : "warning"
                  }
                >
                  {lab.level}
                </Badge>
              </div>

              <div className="mb-4 flex flex-wrap gap-2">
                {lab.topics.map((topic) => (
                  <Badge key={topic} variant="outline">
                    {topic}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  Duration: {lab.duration}
                </span>
                <Button variant="outline" size="sm" className="gap-2">
                  Start Lab
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-lg border bg-muted/50 p-8 text-center">
          <h2 className="mb-4 text-2xl font-bold">More Labs Coming Soon</h2>
          <p className="text-muted-foreground">
            We're continuously adding new hands-on labs covering advanced topics,
            cloud platforms, and emerging technologies.
          </p>
        </div>
      </div>
    </div>
  );
}
