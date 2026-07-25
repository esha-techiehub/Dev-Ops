"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ModuleHeaderProps {
  title: string;
  description: string;
  level: "beginner" | "intermediate" | "advanced";
  duration: string;
  lastUpdated: string;
}

export function ModuleHeader({
  title,
  description,
  level,
  duration,
  lastUpdated,
}: ModuleHeaderProps) {
  const levelColors = {
    beginner: "success",
    intermediate: "info",
    advanced: "warning",
  } as const;

  return (
    <div className="border-b pb-8">
      <Button asChild variant="ghost" size="sm" className="mb-4">
        <Link href="/modules">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Modules
        </Link>
      </Button>

      <div className="flex flex-wrap items-center gap-2 mb-4">
        <Badge variant={levelColors[level]}>{level}</Badge>
        <Badge variant="outline">{duration}</Badge>
      </div>

      <h1 className="text-4xl font-bold tracking-tight mb-3">{title}</h1>
      <p className="text-xl text-muted-foreground mb-4">{description}</p>

      <div className="text-sm text-muted-foreground">
        Last updated: {lastUpdated}
      </div>
    </div>
  );
}
