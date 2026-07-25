import { modules } from "@/data/modules";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import * as Icons from "lucide-react";

export const metadata = {
  title: "Learning Modules | DevSecOps Academy",
  description: "Comprehensive DevSecOps learning modules from beginner to advanced",
};

export default function ModulesPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight">
            Learning Modules
          </h1>
          <p className="text-lg text-muted-foreground">
            12 comprehensive modules covering everything from DevOps fundamentals
            to advanced cloud-native architectures
          </p>
        </div>

        <div className="mb-8 flex flex-wrap gap-4">
          <Button variant="outline">All Modules</Button>
          <Button variant="ghost">Beginner</Button>
          <Button variant="ghost">Intermediate</Button>
          <Button variant="ghost">Advanced</Button>
        </div>

        <div className="space-y-6">
          {modules.map((module) => {
            const IconComponent = (Icons as any)[module.icon] || Icons.Box;

            return (
              <Link
                key={module.id}
                href={`/modules/${module.slug}`}
                className="group block"
              >
                <div className="flex gap-6 rounded-lg border bg-card p-6 transition-all hover:shadow-lg">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>

                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-2">
                      <h2 className="text-2xl font-semibold group-hover:text-primary">
                        {module.title}
                      </h2>
                      <Badge
                        variant={
                          module.level === "beginner"
                            ? "success"
                            : module.level === "intermediate"
                            ? "info"
                            : "warning"
                        }
                      >
                        {module.level}
                      </Badge>
                    </div>

                    <p className="mb-4 text-muted-foreground">
                      {module.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{module.duration}</span>
                        </div>
                        <div>{module.topics.length} topics</div>
                      </div>

                      <span className="flex items-center gap-1 text-sm font-medium text-primary">
                        Start Learning
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
