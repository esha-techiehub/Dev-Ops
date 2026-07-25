export interface RoadmapStep {
  phase: string;
  title: string;
  description: string;
  duration: string;
  topics: string[];
  skills: string[];
  level: "beginner" | "intermediate" | "advanced";
}

export const roadmap: RoadmapStep[] = [
  {
    phase: "Months 1-3",
    title: "Foundation Phase",
    description: "Master the fundamentals of DevOps, Linux, and version control",
    duration: "3 months",
    level: "beginner",
    topics: [
      "DevOps Culture & Principles",
      "Linux Fundamentals",
      "Shell Scripting",
      "Git & Version Control",
      "Basic CI/CD Concepts",
    ],
    skills: [
      "Linux command line proficiency",
      "Git workflow mastery",
      "Shell scripting automation",
      "Basic Jenkins pipeline setup",
    ],
  },
  {
    phase: "Months 4-6",
    title: "Containerization & Cloud",
    description: "Learn Docker, Kubernetes, and cloud platform fundamentals",
    duration: "3 months",
    level: "intermediate",
    topics: [
      "Docker Fundamentals",
      "Container Best Practices",
      "Kubernetes Basics",
      "AWS/Azure/GCP Core Services",
      "Infrastructure as Code (Terraform)",
    ],
    skills: [
      "Docker containerization",
      "Kubernetes orchestration",
      "Cloud infrastructure management",
      "Terraform provisioning",
    ],
  },
  {
    phase: "Months 7-9",
    title: "Advanced DevOps Practices",
    description: "Implement monitoring, security, and advanced deployment strategies",
    duration: "3 months",
    level: "intermediate",
    topics: [
      "Monitoring & Observability",
      "DevSecOps Security Practices",
      "Advanced CI/CD Pipelines",
      "Configuration Management (Ansible)",
      "Deployment Strategies",
    ],
    skills: [
      "Prometheus & Grafana setup",
      "Security scanning integration",
      "Blue-green & canary deployments",
      "Ansible automation",
    ],
  },
  {
    phase: "Months 10-12",
    title: "Expert Level & Specialization",
    description: "Master advanced topics and complete real-world projects",
    duration: "3 months",
    level: "advanced",
    topics: [
      "Advanced Kubernetes (Service Mesh, Operators)",
      "GitOps with ArgoCD/Flux",
      "Platform Engineering",
      "Chaos Engineering",
      "Multi-Cloud Strategies",
    ],
    skills: [
      "Service mesh implementation",
      "GitOps workflows",
      "Platform engineering",
      "Production-grade architectures",
    ],
  },
];
