import type { NavItem, SidebarNavItem } from "@/types";

export const mainNav: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Modules",
    href: "/modules",
  },
  {
    title: "Roadmap",
    href: "/roadmap",
  },
  {
    title: "Labs",
    href: "/labs",
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "Resources",
    href: "/resources",
  },
];

export const sidebarNav: SidebarNavItem[] = [
  {
    title: "Getting Started",
    href: "/modules",
    items: [
      {
        title: "Introduction",
        href: "/modules/introduction",
      },
      {
        title: "Setup Environment",
        href: "/modules/setup",
      },
    ],
  },
  {
    title: "Learning Path",
    href: "/modules",
    items: [
      {
        title: "Foundations",
        href: "/modules/foundations",
      },
      {
        title: "Build & Automation",
        href: "/modules/build-automation",
      },
      {
        title: "Containerization",
        href: "/modules/containerization",
      },
      {
        title: "Infrastructure as Code",
        href: "/modules/infrastructure-as-code",
      },
      {
        title: "Cloud Platforms",
        href: "/modules/cloud-platforms",
      },
      {
        title: "Continuous Deployment",
        href: "/modules/continuous-deployment",
      },
      {
        title: "Monitoring & Observability",
        href: "/modules/monitoring-observability",
      },
      {
        title: "Security (DevSecOps)",
        href: "/modules/devsecops",
      },
      {
        title: "Performance & Optimization",
        href: "/modules/performance-optimization",
      },
      {
        title: "Advanced Topics",
        href: "/modules/advanced-topics",
      },
      {
        title: "Practical Projects",
        href: "/modules/projects",
      },
      {
        title: "Emerging Technologies",
        href: "/modules/emerging-tech",
      },
    ],
  },
  {
    title: "Practice",
    href: "/practice",
    items: [
      {
        title: "Interview Questions",
        href: "/interview",
      },
      {
        title: "MCQs",
        href: "/mcqs",
      },
      {
        title: "Commands",
        href: "/commands",
      },
      {
        title: "Cheat Sheets",
        href: "/cheatsheets",
      },
    ],
  },
];
