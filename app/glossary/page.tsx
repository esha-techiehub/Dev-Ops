import { Book } from "lucide-react";

export const metadata = {
  title: "Glossary | DevSecOps Academy",
  description: "DevOps terminology and definitions",
};

const terms = [
  {
    term: "CI/CD",
    definition:
      "Continuous Integration and Continuous Deployment. A practice of automating the integration of code changes and deploying them to production.",
  },
  {
    term: "Container",
    definition:
      "A lightweight, standalone, executable package that includes everything needed to run software.",
  },
  {
    term: "Docker",
    definition:
      "A platform for developing, shipping, and running applications in containers.",
  },
  {
    term: "Kubernetes (K8s)",
    definition:
      "An open-source container orchestration platform for automating deployment, scaling, and management of containerized applications.",
  },
  {
    term: "Infrastructure as Code (IaC)",
    definition:
      "Managing and provisioning infrastructure through machine-readable definition files rather than manual processes.",
  },
  {
    term: "GitOps",
    definition:
      "A paradigm that uses Git as a single source of truth for declarative infrastructure and applications.",
  },
  {
    term: "Microservices",
    definition:
      "An architectural style that structures an application as a collection of loosely coupled services.",
  },
  {
    term: "Service Mesh",
    definition:
      "A dedicated infrastructure layer for handling service-to-service communication in a microservices architecture.",
  },
  {
    term: "Observability",
    definition:
      "The ability to measure a system's internal states by examining its outputs (logs, metrics, traces).",
  },
  {
    term: "Blue-Green Deployment",
    definition:
      "A deployment strategy that reduces downtime by running two identical production environments.",
  },
];

export default function GlossaryPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border bg-muted px-4 py-1.5 text-sm">
            <Book className="h-4 w-4 text-primary" />
            <span>A-Z Glossary</span>
          </div>

          <h1 className="mb-4 text-4xl font-bold tracking-tight">
            DevOps Glossary
          </h1>
          <p className="text-lg text-muted-foreground">
            Essential DevOps terminology and definitions
          </p>
        </div>

        <div className="space-y-6">
          {terms.map((item) => (
            <div
              key={item.term}
              className="rounded-lg border bg-card p-6"
            >
              <h2 className="mb-2 text-xl font-semibold">{item.term}</h2>
              <p className="text-muted-foreground">{item.definition}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
