"use client";

import { BookOpen, Clock, Calendar } from "lucide-react";

interface ModuleMetaProps {
  readingTime: number;
  topics: string[];
  lastUpdated: string;
}

export function ModuleMeta({ readingTime, topics, lastUpdated }: ModuleMetaProps) {
  return (
    <div className="rounded-lg border bg-muted/50 p-6">
      <h3 className="mb-4 text-sm font-semibold">Module Information</h3>
      
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <Clock className="mt-0.5 h-4 w-4 text-muted-foreground" />
          <div>
            <div className="text-sm font-medium">Reading Time</div>
            <div className="text-sm text-muted-foreground">{readingTime} min</div>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <BookOpen className="mt-0.5 h-4 w-4 text-muted-foreground" />
          <div>
            <div className="text-sm font-medium">Topics Covered</div>
            <div className="text-sm text-muted-foreground">{topics.length} topics</div>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Calendar className="mt-0.5 h-4 w-4 text-muted-foreground" />
          <div>
            <div className="text-sm font-medium">Last Updated</div>
            <div className="text-sm text-muted-foreground">{lastUpdated}</div>
          </div>
        </div>
      </div>

      <div className="mt-6 border-t pt-4">
        <h4 className="mb-2 text-sm font-medium">What You'll Learn</h4>
        <ul className="space-y-1">
          {topics.slice(0, 5).map((topic, index) => (
            <li key={index} className="text-sm text-muted-foreground">
              • {topic}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
