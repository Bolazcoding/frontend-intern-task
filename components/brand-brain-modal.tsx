"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Loader2 } from "lucide-react";

const STAGES = [
  "Reading business information",
  "Understanding your audience",
  "Detecting your brand voice",
  "Discovering content opportunities",
  "Building marketing profile",
  "Preparing AI assistant",
];

const STAGE_DURATION_MS = 700;

interface BrandBrainModalProps {
  isOpen: boolean;
  run: () => Promise<{ success: boolean; error?: string }>;
  onDone: (result: { success: boolean; error?: string }) => void;
}

export function BrandBrainModal({ isOpen, run, onDone }: BrandBrainModalProps) {
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    if (!isOpen) {
      const resetTimer = setTimeout(() => setActiveStage(0), 0);
      return () => clearTimeout(resetTimer);
    }

    let cancelled = false;
    const workPromise = run();

    const stageTimer = setInterval(() => {
      setActiveStage((s) => Math.min(s + 1, STAGES.length - 1));
    }, STAGE_DURATION_MS);

    const minDelay = new Promise((resolve) =>
      setTimeout(resolve, STAGE_DURATION_MS * STAGES.length),
    );

    Promise.all([workPromise, minDelay]).then(([result]) => {
      clearInterval(stageTimer);
      if (!cancelled) onDone(result);
    });

    return () => {
      cancelled = true;
      clearInterval(stageTimer);
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/45 px-4 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="w-full max-w-sm rounded-2xl border border-border/80 bg-card p-7 text-card-foreground shadow-lift sm:p-8"
          >
            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-accent-foreground">
              <Loader2 className="h-5 w-5 animate-spin" />
            </div>
            <h2 className="mt-5 text-center text-lg font-semibold">
              Building your Brand Brain...
            </h2>

            <div className="mt-6 space-y-3">
              {STAGES.map((stage, i) => {
                const done = i < activeStage;
                const active = i === activeStage;
                return (
                  <div key={stage} className="flex items-center gap-3 text-sm">
                    <span
                      className={
                        done
                          ? "flex h-6 w-6 items-center justify-center rounded-full bg-accent text-accent-foreground"
                          : active
                            ? "flex h-6 w-6 items-center justify-center rounded-full bg-secondary"
                            : "flex h-6 w-6 items-center justify-center rounded-full border border-border"
                      }
                    >
                      {done ? (
                        <Check className="h-3 w-3" />
                      ) : active ? (
                        <Loader2 className="h-4 w-4 animate-spin text-primary" />
                      ) : null}
                    </span>
                    <span
                      className={
                        done || active
                          ? "text-foreground"
                          : "text-muted-foreground"
                      }
                    >
                      {stage}
                    </span>
                  </div>
                );
              })}
            </div>

            <p className="mt-6 text-center text-xs text-muted-foreground">
              Almost done...
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
