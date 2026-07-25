import { roadmap } from "@/data/roadmap";
import { Check, Clock, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Learning Roadmap | DevSecOps Academy",
  description: "Your structured path from beginner to advanced DevSecOps engineer",
};

export default function RoadmapPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight">
            Learning Roadmap
          </h1>
          <p className="text-lg text-muted-foreground">
            Structured 12-month journey from DevOps fundamentals to advanced
            cloud-native engineering
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 h-full w-0.5 bg-border md:left-1/2" />

          <div className="space-y-12">
            {roadmap.map((step, index) => (
              <div key={step.phase} className="relative">
                <div className="flex items-start gap-8 md:gap-16">
                  {/* Content - alternating sides on desktop */}
                  <div
                    className={`flex-1 ${
                      index % 2 === 0 ? "md:text-right" : "md:order-2"
                    }`}
                  >
                    <div className="rounded-lg border bg-card p-6 shadow-sm">
                      <div className="mb-3 flex items-center gap-2 text-sm">
                        <Badge
                          variant={
                            step.level === "beginner"
                              ? "success"
                              : step.level === "intermediate"
                              ? "info"
                              : "warning"
                          }
                        >
                          {step.level}
                        </Badge>
                        <span className="text-muted-foreground">
                          {step.phase}
                        </span>
                      </div>

                      <h2 className="mb-2 text-2xl font-bold">{step.title}</h2>
                      <p className="mb-4 text-muted-foreground">
                        {step.description}
                      </p>

                      <div className="mb-4 flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{step.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <BookOpen className="h-4 w-4" />
                          <span>{step.topics.length} topics</span>
                        </div>
                      </div>

                      <div>
                        <h3 className="mb-3 text-sm font-semibold">
                          Topics Covered
                        </h3>
                        <ul className="space-y-2">
                          {step.topics.map((topic, topicIndex) => (
                            <li
                              key={topicIndex}
                              className="flex items-start gap-2 text-sm"
                            >
                              <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                              <span>{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-4 border-t pt-4">
                        <h3 className="mb-3 text-sm font-semibold">
                          Skills You'll Gain
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {step.skills.map((skill, skillIndex) => (
                            <Badge key={skillIndex} variant="outline">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Timeline node */}
                  <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-4 border-background bg-primary">
                    <span className="text-xl font-bold text-primary-foreground">
                      {index + 1}
                    </span>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden flex-1 md:block" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-lg border bg-muted/50 p-8 text-center">
          <h2 className="mb-4 text-2xl font-bold">Ready to Start?</h2>
          <p className="mb-6 text-muted-foreground">
            Begin your journey with Module 1: Foundations and work your way
            through our comprehensive curriculum.
          </p>
          <a
            href="/modules/foundations"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90"
          >
            Start Learning
          </a>
        </div>
      </div>
    </div>
  );
}
