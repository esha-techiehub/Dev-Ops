"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  children: string;
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
}

export function CodeBlock({
  children,
  language = "bash",
  filename,
  showLineNumbers = false,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative my-6 overflow-hidden rounded-lg border bg-muted">
      {filename && (
        <div className="flex items-center justify-between border-b bg-muted px-4 py-2">
          <span className="text-sm font-medium">{filename}</span>
          {language && (
            <span className="text-xs text-muted-foreground uppercase">
              {language}
            </span>
          )}
        </div>
      )}

      <div className="relative">
        <pre className="overflow-x-auto p-4 text-sm">
          <code className={cn("language-" + language)}>{children}</code>
        </pre>

        <Button
          size="icon"
          variant="ghost"
          className="absolute right-2 top-2 opacity-0 transition-opacity group-hover:opacity-100"
          onClick={handleCopy}
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-500" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
          <span className="sr-only">Copy code</span>
        </Button>
      </div>
    </div>
  );
}
