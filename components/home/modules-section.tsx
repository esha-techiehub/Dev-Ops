"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { modules, getFeaturedModules } from "@/data/modules";
import * as Icons from "lucide-react";

export function ModulesSection() {
  const featuredModules = getFeaturedModules();
  const displayModules = featuredModules.length > 0 ? featuredModules : modules.slice(0, 6);

  return (
    <section className="border-b bg-muted/30 py-20 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Learning Modules
          </h2>
          <p className="text-lg text-muted-foreground">
            Structured curriculum from foundations to advanced topics
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayModules.map((module, index) => {
            const IconComponent = (Icons as any)[module.icon] || Icons.Box;
            
            return (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={`/modules/${module.slug}`}
                  className="group block h-full"
                >
                  <div className="flex h-full flex-col rounded-lg border bg-card p-6 transition-all hover:shadow-lg">
                    <div className="mb-4 flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <span
                        className={`rounded-full px-2 py-1 text-xs font-medium ${
                          module.level === "beginner"
                            ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                            : module.level === "intermediate"
                            ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                            : "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400"
                        }`}
                      >
                        {module.level}
                      </span>
                    </div>

                    <h3 className="mb-2 text-xl font-semibold group-hover:text-primary">
                      {module.title}
                    </h3>
                    <p className="mb-4 flex-1 text-sm text-muted-foreground">
                      {module.description}
                    </p>

                    <div className="flex items-center justify-between border-t pt-4 text-sm">
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{module.duration}</span>
                      </div>
                      <span className="flex items-center gap-1 font-medium text-primary">
                        Learn More
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Button asChild variant="outline" size="lg">
            <Link href="/modules">
              View All Modules
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
