"use client";

import { motion } from "framer-motion";
import {
  Rocket,
  Code,
  Shield,
  Gauge,
  Terminal,
  Cloud,
} from "lucide-react";

const features = [
  {
    title: "Hands-On Learning",
    description:
      "Real-world labs and projects that simulate production environments.",
    icon: Rocket,
  },
  {
    title: "Modern Tech Stack",
    description:
      "Learn Docker, Kubernetes, Terraform, Jenkins, and cloud platforms.",
    icon: Code,
  },
  {
    title: "Security First",
    description:
      "DevSecOps practices with container scanning, SAST, DAST, and compliance.",
    icon: Shield,
  },
  {
    title: "Performance Focus",
    description:
      "Load testing, monitoring, observability, and optimization strategies.",
    icon: Gauge,
  },
  {
    title: "Command Mastery",
    description:
      "Comprehensive command references and cheat sheets for daily tasks.",
    icon: Terminal,
  },
  {
    title: "Cloud Expertise",
    description:
      "Deep dive into AWS, Azure, and GCP with multi-cloud strategies.",
    icon: Cloud,
  },
];

export function FeaturesSection() {
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
            Why Choose DevSecOps Academy
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive, practical, and industry-focused training designed to
            make you job-ready.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg border bg-card p-6 transition-all hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
