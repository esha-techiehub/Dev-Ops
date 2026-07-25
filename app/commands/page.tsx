import { Terminal, Copy } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Command Reference | DevSecOps Academy",
  description: "Essential DevOps commands for daily operations",
};

const commandCategories = [
  {
    category: "Git Commands",
    commands: [
      { cmd: "git clone <url>", desc: "Clone a repository" },
      { cmd: "git status", desc: "Check repository status" },
      { cmd: "git add .", desc: "Stage all changes" },
      { cmd: "git commit -m 'message'", desc: "Commit changes" },
      { cmd: "git push origin main", desc: "Push to remote" },
      { cmd: "git pull", desc: "Pull latest changes" },
    ],
  },
  {
    category: "Docker Commands",
    commands: [
      { cmd: "docker build -t image:tag .", desc: "Build image" },
      { cmd: "docker run -d -p 8080:80 image", desc: "Run container" },
      { cmd: "docker ps", desc: "List running containers" },
      { cmd: "docker logs container", desc: "View container logs" },
      { cmd: "docker exec -it container bash", desc: "Enter container shell" },
      { cmd: "docker-compose up -d", desc: "Start compose services" },
    ],
  },
  {
    category: "Kubernetes Commands",
    commands: [
      { cmd: "kubectl get pods", desc: "List all pods" },
      { cmd: "kubectl get services", desc: "List all services" },
      { cmd: "kubectl apply -f file.yaml", desc: "Apply configuration" },
      { cmd: "kubectl describe pod <name>", desc: "Describe a pod" },
      { cmd: "kubectl logs <pod>", desc: "View pod logs" },
      { cmd: "kubectl exec -it <pod> -- bash", desc: "Enter pod shell" },
    ],
  },
  {
    category: "Linux Commands",
    commands: [
      { cmd: "ls -la", desc: "List all files with details" },
      { cmd: "cd /path/to/dir", desc: "Change directory" },
      { cmd: "mkdir directory", desc: "Create directory" },
      { cmd: "chmod 755 file", desc: "Change file permissions" },
      { cmd: "systemctl status service", desc: "Check service status" },
      { cmd: "journalctl -u service", desc: "View service logs" },
    ],
  },
];

export default function CommandsPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border bg-muted px-4 py-1.5 text-sm">
            <Terminal className="h-4 w-4 text-primary" />
            <span>Command Reference</span>
          </div>

          <h1 className="mb-4 text-4xl font-bold tracking-tight">
            Essential Commands
          </h1>
          <p className="text-lg text-muted-foreground">
            Quick reference for commonly used DevOps commands
          </p>
        </div>

        <div className="space-y-8">
          {commandCategories.map((section) => (
            <div key={section.category}>
              <h2 className="mb-4 text-2xl font-bold">{section.category}</h2>
              <div className="space-y-3">
                {section.commands.map((item, index) => (
                  <div
                    key={index}
                    className="group rounded-lg border bg-card p-4"
                  >
                    <div className="mb-2 flex items-center justify-between">
                      <code className="rounded bg-muted px-2 py-1 text-sm font-mono">
                        {item.cmd}
                      </code>
                      <button
                        className="opacity-0 transition-opacity group-hover:opacity-100"
                        onClick={() => navigator.clipboard.writeText(item.cmd)}
                      >
                        <Copy className="h-4 w-4 text-muted-foreground hover:text-foreground" />
                      </button>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
