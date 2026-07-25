import { Book, ExternalLink } from "lucide-react";

export const metadata = {
  title: "Resources | DevSecOps Academy",
  description: "Curated DevOps resources, documentation, and learning materials",
};

const resources = [
  {
    category: "Official Documentation",
    items: [
      { name: "Kubernetes Docs", url: "https://kubernetes.io/docs/" },
      { name: "Docker Docs", url: "https://docs.docker.com/" },
      { name: "Terraform Docs", url: "https://developer.hashicorp.com/terraform" },
      { name: "AWS Documentation", url: "https://docs.aws.amazon.com/" },
      { name: "Jenkins Docs", url: "https://www.jenkins.io/doc/" },
    ],
  },
  {
    category: "Tools & Platforms",
    items: [
      { name: "GitHub Actions", url: "https://docs.github.com/actions" },
      { name: "GitLab CI/CD", url: "https://docs.gitlab.com/ee/ci/" },
      { name: "Ansible", url: "https://docs.ansible.com/" },
      { name: "Prometheus", url: "https://prometheus.io/docs/" },
      { name: "Grafana", url: "https://grafana.com/docs/" },
    ],
  },
  {
    category: "Learning Platforms",
    items: [
      { name: "A Cloud Guru", url: "https://acloudguru.com/" },
      { name: "KodeKloud", url: "https://kodekloud.com/" },
      { name: "Linux Academy", url: "https://linuxacademy.com/" },
      { name: "Udemy DevOps", url: "https://www.udemy.com/topic/devops/" },
    ],
  },
  {
    category: "Community & Forums",
    items: [
      { name: "DevOps Subreddit", url: "https://www.reddit.com/r/devops/" },
      { name: "Stack Overflow", url: "https://stackoverflow.com/questions/tagged/devops" },
      { name: "DevOps.com", url: "https://devops.com/" },
      { name: "CNCF Slack", url: "https://slack.cncf.io/" },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border bg-muted px-4 py-1.5 text-sm">
            <Book className="h-4 w-4 text-primary" />
            <span>Curated Resources</span>
          </div>

          <h1 className="mb-4 text-4xl font-bold tracking-tight">
            Resources & Links
          </h1>
          <p className="text-lg text-muted-foreground">
            Essential documentation, tools, and learning materials for your DevOps journey
          </p>
        </div>

        <div className="space-y-8">
          {resources.map((section) => (
            <div key={section.category}>
              <h2 className="mb-4 text-2xl font-bold">{section.category}</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {section.items.map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-lg border bg-card p-4 transition-all hover:shadow-lg"
                  >
                    <span className="font-medium group-hover:text-primary">
                      {item.name}
                    </span>
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
