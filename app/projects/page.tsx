import { Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Real-World Projects | DevSecOps Academy",
  description: "Build production-ready DevOps projects from scratch",
};

const projects = [
  {
    id: 1,
    title: "3-Tier Web Application Deployment",
    description:
      "Deploy a complete 3-tier application with frontend, backend, and database on AWS using Docker and Kubernetes",
    level: "intermediate",
    duration: "2 weeks",
    technologies: [
      "AWS",
      "Docker",
      "Kubernetes",
      "React",
      "Node.js",
      "PostgreSQL",
    ],
  },
  {
    id: 2,
    title: "Complete CI/CD Pipeline",
    description:
      "Build an end-to-end CI/CD pipeline with automated testing, security scanning, and deployment to multiple environments",
    level: "intermediate",
    duration: "2 weeks",
    technologies: ["Jenkins", "GitHub Actions", "Docker", "Terraform", "AWS"],
  },
  {
    id: 3,
    title: "Infrastructure as Code with Terraform",
    description:
      "Automate AWS infrastructure provisioning using Terraform with modules, state management, and best practices",
    level: "intermediate",
    duration: "1 week",
    technologies: ["Terraform", "AWS", "VPC", "EC2", "S3", "RDS"],
  },
  {
    id: 4,
    title: "Monitoring & Observability Stack",
    description:
      "Set up a complete monitoring solution with Prometheus, Grafana, ELK stack, and distributed tracing",
    level: "advanced",
    duration: "2 weeks",
    technologies: [
      "Prometheus",
      "Grafana",
      "Elasticsearch",
      "Logstash",
      "Kibana",
      "Jaeger",
    ],
  },
  {
    id: 5,
    title: "DevSecOps Pipeline with Security Scanning",
    description:
      "Implement a DevSecOps pipeline with SAST, DAST, container scanning, and secrets management",
    level: "advanced",
    duration: "2 weeks",
    technologies: [
      "SonarQube",
      "Trivy",
      "OWASP ZAP",
      "HashiCorp Vault",
      "Jenkins",
    ],
  },
  {
    id: 6,
    title: "Microservices on Kubernetes with Service Mesh",
    description:
      "Deploy microservices architecture with Istio service mesh, observability, and traffic management",
    level: "advanced",
    duration: "3 weeks",
    technologies: ["Kubernetes", "Istio", "Docker", "Prometheus", "Grafana"],
  },
];

export default function ProjectsPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border bg-muted px-4 py-1.5 text-sm">
            <Briefcase className="h-4 w-4 text-primary" />
            <span>Industry-Ready Projects</span>
          </div>

          <h1 className="mb-4 text-4xl font-bold tracking-tight">
            Real-World Projects
          </h1>
          <p className="text-lg text-muted-foreground">
            Build production-grade DevOps solutions that you can showcase in your
            portfolio and interviews.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="rounded-lg border bg-card p-6 transition-all hover:shadow-lg"
            >
              <div className="mb-4 flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 font-bold text-primary">
                    {index + 1}
                  </div>
                  <div>
                    <h2 className="mb-1 text-2xl font-semibold">
                      {project.title}
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      Duration: {project.duration}
                    </p>
                  </div>
                </div>
                <Badge
                  variant={
                    project.level === "intermediate" ? "info" : "warning"
                  }
                >
                  {project.level}
                </Badge>
              </div>

              <p className="mb-4 text-muted-foreground">{project.description}</p>

              <div>
                <h3 className="mb-2 text-sm font-semibold">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-lg border bg-primary/5 p-8">
          <h2 className="mb-4 text-2xl font-bold">Capstone Project</h2>
          <p className="mb-4 text-muted-foreground">
            After completing all modules, you'll work on a comprehensive capstone
            project that combines everything you've learned:
          </p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>
                End-to-end CI/CD pipeline with Jenkins and GitHub Actions
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Infrastructure provisioning with Terraform</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Kubernetes deployment with Helm charts</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>
                Complete monitoring and observability with Prometheus & Grafana
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Security scanning and compliance automation</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
