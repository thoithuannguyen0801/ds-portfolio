"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function CopyEmail({
  email,
  className,
}: {
  email: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label="Copy email address"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-5 text-sm font-medium transition-colors hover:border-primary/40 hover:text-primary",
        className,
      )}
    >
      {copied ? (
        <>
          <Check className="h-4 w-4 text-primary" />
          Copied!
        </>
      ) : (
        <>
          <Copy className="h-4 w-4" />
          Copy email
        </>
      )}
    </button>
  );
}
