import { Info, AlertTriangle, AlertCircle, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type CalloutType = "info" | "warning" | "error" | "success";

interface CalloutProps {
  type?: CalloutType;
  title?: string;
  children: React.ReactNode;
}

const calloutConfig = {
  info: {
    icon: Info,
    className: "border-blue-200 bg-blue-50 dark:border-blue-900/50 dark:bg-blue-900/20",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  warning: {
    icon: AlertTriangle,
    className: "border-yellow-200 bg-yellow-50 dark:border-yellow-900/50 dark:bg-yellow-900/20",
    iconColor: "text-yellow-600 dark:text-yellow-400",
  },
  error: {
    icon: AlertCircle,
    className: "border-red-200 bg-red-50 dark:border-red-900/50 dark:bg-red-900/20",
    iconColor: "text-red-600 dark:text-red-400",
  },
  success: {
    icon: CheckCircle,
    className: "border-green-200 bg-green-50 dark:border-green-900/50 dark:bg-green-900/20",
    iconColor: "text-green-600 dark:text-green-400",
  },
};

export function Callout({ type = "info", title, children }: CalloutProps) {
  const config = calloutConfig[type];
  const Icon = config.icon;

  return (
    <div className={cn("my-6 rounded-lg border p-4", config.className)}>
      <div className="flex gap-3">
        <Icon className={cn("h-5 w-5 shrink-0 mt-0.5", config.iconColor)} />
        <div className="flex-1 space-y-2">
          {title && <div className="font-semibold">{title}</div>}
          <div className="text-sm [&>p]:leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  );
}
