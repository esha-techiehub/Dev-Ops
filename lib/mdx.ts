import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content");

export interface MDXFrontmatter {
  title: string;
  description: string;
  date?: string;
  author?: string;
  tags?: string[];
  draft?: boolean;
}

export interface MDXModule {
  frontmatter: MDXFrontmatter;
  content: string;
  slug: string;
}

export async function getMDXFiles(dir: string): Promise<string[]> {
  const fullPath = path.join(contentDirectory, dir);
  
  if (!fs.existsSync(fullPath)) {
    return [];
  }

  const files = fs.readdirSync(fullPath);
  return files.filter((file) => file.endsWith(".mdx"));
}

export async function getMDXContent(
  dir: string,
  slug: string
): Promise<MDXModule | null> {
  try {
    const fullPath = path.join(contentDirectory, dir, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      frontmatter: data as MDXFrontmatter,
      content,
      slug,
    };
  } catch (error) {
    return null;
  }
}

export async function getAllMDXContent(dir: string): Promise<MDXModule[]> {
  const files = await getMDXFiles(dir);
  const modules: MDXModule[] = [];

  for (const file of files) {
    const slug = file.replace(/\.mdx$/, "");
    const module = await getMDXContent(dir, slug);
    if (module && !module.frontmatter.draft) {
      modules.push(module);
    }
  }

  return modules.sort((a, b) => {
    if (a.frontmatter.date && b.frontmatter.date) {
      return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime();
    }
    return 0;
  });
}

export function getReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}
