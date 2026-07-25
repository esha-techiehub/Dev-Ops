export interface Module {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon: string;
  level: "beginner" | "intermediate" | "advanced";
  duration: string;
  topics: string[];
  featured?: boolean;
}

export interface NavItem {
  title: string;
  href: string;
  description?: string;
  icon?: string;
  disabled?: boolean;
}

export interface SidebarNavItem extends NavItem {
  items?: SidebarNavItem[];
}

export interface ModuleContent {
  title: string;
  description: string;
  content: string;
  slug: string;
  readingTime: number;
  lastUpdated: string;
}

export interface SearchResult {
  title: string;
  slug: string;
  excerpt: string;
  type: "module" | "lab" | "command" | "interview" | "mcq";
}
