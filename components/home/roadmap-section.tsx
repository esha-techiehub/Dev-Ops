"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const roadmapSteps = [
  {
    phase: "Months 1-3",
    title: "Beginner Level",
    topics: [
      "Linux fundamentals and shell scripting",
      "Git version control mastery",
      "Basic CI/CD with Jenkins",
      "Docker fundamentals",
    ],
  },
  {
    phase: "Months 4-6",
    title: "Intermediate Level",
    topics: [
      "Kubernetes basics and orchestration",
      "Infrastructure as Code (Terraform, Ansible)",
      "Cloud platforms (AWS/Azure/GCP)",
      "Monitoring and logging systems",
    ],
  },
  {
    phase: "Months 7-12",
    title: "Advanced Level",
    topics: [
      "Advanced Kubernetes patterns",
      "GitOps and progressive delivery",
      "DevSecOps security practices",
      "Microservices and service mesh",
      "Platform engineering concepts",
    ],
  },
];

export function RoadmapSection() {
  return (
    <section className="border-b py-20 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Your Learning Roadmap
          </h2>
          <p className="text-lg text-muted-foreground">
            Structured path from beginner to advanced DevSecOps engineer
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-4xl">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 h-full w-0.5 bg-border md:left-1/2" />

          <div className="space-y-12">
            {roadmapSteps.map((step, index) => (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <div className="flex items-center gap-8 md:gap-16">
                  <div
                    className={`flex-1 ${
                      index % 2 === 0 ? "md:text-right" : "md:order-2"
                    }`}
                  >
                    <div className="rounded-lg border bg-card p-6">
                      <div className="mb-2 text-sm font-medium text-primary">
                        {step.phase}
                      </div>
                      <h3 className="mb-4 text-xl font-semibold">
                        {step.title}
                      </h3>
                      <ul className="space-y-2">
                        {step.topics.map((topic) => (
                          <li
                            key={topic}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-4 border-background bg-primary">
                    <span className="text-xl font-bold text-primary-foreground">
                      {index + 1}
                    </span>
                  </div>

                  <div className="hidden flex-1 md:block" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
