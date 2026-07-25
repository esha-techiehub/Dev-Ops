"use client";

import { motion } from "framer-motion";
import { Users, BookOpen, Award, TrendingUp } from "lucide-react";

const stats = [
  {
    label: "Active Learners",
    value: "10K+",
    icon: Users,
    description: "Students worldwide",
  },
  {
    label: "Learning Modules",
    value: "12",
    icon: BookOpen,
    description: "Comprehensive topics",
  },
  {
    label: "Hands-on Labs",
    value: "50+",
    icon: Award,
    description: "Practical exercises",
  },
  {
    label: "Success Rate",
    value: "95%",
    icon: TrendingUp,
    description: "Job placement",
  },
];

export function StatsSection() {
  return (
    <section className="border-b py-16 md:py-20">
      <div className="container">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="mb-1 text-3xl font-bold">{stat.value}</div>
              <div className="font-medium">{stat.label}</div>
              <div className="text-sm text-muted-foreground">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
