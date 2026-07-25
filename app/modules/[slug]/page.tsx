import { notFound } from "next/navigation";
import { getModuleBySlug } from "@/data/modules";
import { ModuleHeader } from "@/components/module/module-header";
import { ModuleMeta } from "@/components/module/module-meta";
import { DocsSidebar } from "@/components/layout/docs-sidebar";
import { sidebarNav } from "@/data/navigation";

export async function generateStaticParams() {
  const modules = await import("@/data/modules").then((mod) => mod.modules);
  return modules.map((module) => ({
    slug: module.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const module = getModuleBySlug(params.slug);
  
  if (!module) {
    return {
      title: "Module Not Found",
    };
  }

  return {
    title: `${module.title} | DevSecOps Academy`,
    description: module.description,
  };
}

export default function ModulePage({ params }: { params: { slug: string } }) {
  const module = getModuleBySlug(params.slug);

  if (!module) {
    notFound();
  }

  return (
    <div className="container flex gap-8 py-8">
      {/* Sidebar */}
      <aside className="hidden w-64 shrink-0 lg:block">
        <div className="sticky top-20">
          <DocsSidebar items={sidebarNav} />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-w-0">
        <article className="mx-auto max-w-3xl">
          <ModuleHeader
            title={module.title}
            description={module.description}
            level={module.level}
            duration={module.duration}
            lastUpdated="July 25, 2026"
          />

          <div className="mt-8 prose prose-slate dark:prose-invert max-w-none">
            <h2>Overview</h2>
            <p>
              This module covers {module.title.toLowerCase()}, providing you with
              comprehensive knowledge and hands-on experience with industry-standard
              tools and practices.
            </p>

            <h2>Learning Objectives</h2>
            <ul>
              {module.topics.map((topic, index) => (
                <li key={index}>{topic}</li>
              ))}
            </ul>

            <h2>Prerequisites</h2>
            <p>
              Before starting this module, you should have:
            </p>
            <ul>
              <li>Basic understanding of command line interfaces</li>
              <li>Familiarity with basic programming concepts</li>
              <li>A development environment set up</li>
            </ul>

            <h2>What You'll Build</h2>
            <p>
              Throughout this module, you'll work on practical exercises and
              real-world scenarios that mirror production environments.
            </p>

            <div className="not-prose my-8 rounded-lg border bg-muted/50 p-6">
              <h3 className="mb-4 text-lg font-semibold">Coming Soon</h3>
              <p className="text-sm text-muted-foreground">
                Detailed module content with interactive code examples, diagrams,
                and hands-on labs will be available soon. Stay tuned!
              </p>
            </div>
          </div>
        </article>
      </main>

      {/* Right Sidebar - Meta Info */}
      <aside className="hidden w-64 shrink-0 xl:block">
        <div className="sticky top-20">
          <ModuleMeta
            readingTime={15}
            topics={module.topics}
            lastUpdated="July 25, 2026"
          />
        </div>
      </aside>
    </div>
  );
}
