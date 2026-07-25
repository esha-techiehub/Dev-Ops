"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import type { SidebarNavItem } from "@/types";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface DocsSidebarProps {
  items: SidebarNavItem[];
}

export function DocsSidebar({ items }: DocsSidebarProps) {
  return (
    <div className="w-full">
      {items.map((item, index) => (
        <div key={index} className="pb-4">
          <SidebarSection item={item} />
        </div>
      ))}
    </div>
  );
}

function SidebarSection({ item }: { item: SidebarNavItem }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="space-y-2">
      {item.items && item.items.length > 0 ? (
        <>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex w-full items-center justify-between rounded-md px-2 py-1.5 text-sm font-semibold hover:bg-accent"
          >
            <span>{item.title}</span>
            <ChevronDown
              className={cn(
                "h-4 w-4 transition-transform",
                isOpen && "rotate-180"
              )}
            />
          </button>
          {isOpen && (
            <div className="ml-2 space-y-1 border-l pl-3">
              {item.items.map((subItem, index) => (
                <Link
                  key={index}
                  href={subItem.href}
                  className={cn(
                    "block rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-accent",
                    pathname === subItem.href
                      ? "bg-accent font-medium text-accent-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  {subItem.title}
                </Link>
              ))}
            </div>
          )}
        </>
      ) : (
        <Link
          href={item.href}
          className={cn(
            "block rounded-md px-2 py-1.5 text-sm font-semibold transition-colors hover:bg-accent",
            pathname === item.href
              ? "bg-accent text-accent-foreground"
              : "text-muted-foreground"
          )}
        >
          {item.title}
        </Link>
      )}
    </div>
  );
}
