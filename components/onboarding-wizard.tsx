"use client";

import { useState } from "react";
import { SpotlightCard } from "@/components/motion-primitives";
import { Button } from "@/components/ui/button";
import { BrandBrainModal } from "@/components/brand-brain-modal";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Camera,
  Check,
  Globe,
  Sparkles,
} from "lucide-react";
type Step = "welcome" | "choose-path" | "website-input" | "preferences-input";
type Path = "website" | "no-website" | null;

export function OnboardingWizard() {
  const [step, setStep] = useState<Step>("welcome");
  const [path, setPath] = useState<Path>(null);
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [brandName, setBrandName] = useState("");
  const [instagramHandle, setInstagramHandle] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isFinished, setIsFinished] = useState(false);

  async function runWebsiteFlow() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return { success: true };
  }

  async function runPreferencesFlow() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return { success: true };
  }

  if (isFinished) {
    return (
      <div className="bg-ambient flex min-h-screen items-center justify-center px-4 py-8">
        <SpotlightCard className="w-full max-w-md p-8 text-center sm:p-10">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground">
            <Check className="h-6 w-6" />
          </div>
          <h1 className="mt-6 text-2xl font-semibold">Onboarding Complete</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            This is where the user would be redirected after finishing the flow.
          </p>
          <Button
            className="mt-7 w-full sm:w-auto"
            onClick={() => window.location.reload()}
          >
            Restart Flow
          </Button>
        </SpotlightCard>
      </div>
    );
  }

  return (
    <div className="bg-ambient relative flex min-h-screen items-center overflow-hidden px-4 py-8 sm:px-8 lg:px-12">
      <motion.div
        aria-hidden
        animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute inset-x-0 top-0 h-125 bg-[radial-gradient(circle_at_50%_0%,color-mix(in_oklab,var(--foreground)_8%,transparent),transparent_60%)]"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[minmax(260px,0.75fr)_minmax(460px,1fr)] lg:gap-20">
        <aside className="hidden lg:block">
          <div className="flex items-center gap-2 text-sm font-semibold tracking-tight">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              B
            </span>
            BrandPilot
          </div>
          <div className="mt-20 max-w-sm">
            <p className="font-mono text-[0.8rem] uppercase tracking-[0.3em] text-muted-foreground">
              Your brand, understood
            </p>
            <h2 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-tight xl:text-5xl">
              Make every piece of content sound like you.
            </h2>
            <p className="mt-6 max-w-xs text-sm leading-6 text-muted-foreground">
              Build a brand that feels clear, consistent, and unmistakably
              yours.
            </p>
          </div>
          <div className="mt-20 flex items-center gap-3 text-xs text-muted-foreground">
            <span className="h-px w-10 bg-accent" />
            Built for your next chapter
          </div>
        </aside>

        <main className="relative w-full max-w-lg justify-self-center lg:justify-self-end">
          <AnimatePresence mode="wait">
            {step === "welcome" && (
              <motion.div
                key="welcome"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.45 }}
              >
                <SpotlightCard className="p-7 text-center sm:p-10">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-accent-foreground shadow-soft">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <p className="font-mono text-[0.8rem] uppercase tracking-[0.3em] text-muted-foreground mt-2.5">
                    Get started
                  </p>
                  <h1 className="mt-4 text-3xl font-semibold tracking-tight">
                    Let&apos;s build your Brand Brain
                  </h1>
                  <p className="mx-auto mt-3 max-w-sm text-sm text-muted-foreground">
                    A few quick steps, and BrandPilot will understand your
                    business well enough to generate content in your actual
                    voice.
                  </p>
                  <Button
                    className="mt-8 w-full sm:w-auto"
                    size="lg"
                    onClick={() => setStep("choose-path")}
                  >
                    Get started <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </SpotlightCard>
              </motion.div>
            )}

            {step === "choose-path" && (
              <motion.div
                key="choose-path"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.45 }}
              >
                <div className="mb-8 flex items-start justify-between gap-6">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                      Step 1 of 2
                    </p>
                    <h1 className="mt-3 text-2xl font-semibold tracking-tight">
                      How do customers find you?
                    </h1>
                  </div>
                  <div className="mt-1 flex gap-1.5" aria-label="Step 1 of 2">
                    <span className="h-1.5 w-8 rounded-full bg-accent" />
                    <span className="h-1.5 w-8 rounded-full bg-border" />
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <button
                    onClick={() => {
                      setPath("website");
                      setStep("website-input");
                    }}
                    className="text-left"
                  >
                    <SpotlightCard className="h-full p-5 transition hover:-translate-y-1 sm:p-6">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                        <Globe className="h-5 w-5" />
                      </span>
                      <p className="mt-4 font-medium">I have a website</p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        We&apos;ll read it and build your brand profile
                        automatically.
                      </p>
                    </SpotlightCard>
                  </button>

                  <button
                    onClick={() => {
                      setPath("no-website");
                      setStep("preferences-input");
                    }}
                    className="text-left"
                  >
                    <SpotlightCard className="h-full p-5 transition hover:-translate-y-1 sm:p-6">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-foreground">
                        <Camera className="h-5 w-5" />
                      </span>
                      <p className="mt-4 font-medium">
                        I don&apos;t have a website
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Just Instagram or WhatsApp — that&apos;s fine too.
                      </p>
                    </SpotlightCard>
                  </button>
                </div>
              </motion.div>
            )}

            {step === "website-input" && (
              <motion.div
                key="website-input"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.45 }}
              >
                <SpotlightCard className="p-6 sm:p-8">
                  <div className="flex items-center justify-between gap-4">
                    <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                      Step 2 of 2
                    </p>
                    <span className="text-xs text-muted-foreground">
                      Website path
                    </span>
                  </div>
                  <h1 className="mt-3 text-xl font-semibold tracking-tight">
                    What&apos;s your website?
                  </h1>

                  <input
                    value={websiteUrl}
                    onChange={(e) => setWebsiteUrl(e.target.value)}
                    placeholder="https://yourbusiness.com"
                    className="mt-6 h-12 w-full rounded-lg border border-input bg-background/70 px-4 text-sm outline-none transition placeholder:text-muted-foreground/70 focus:border-ring focus:ring-2 focus:ring-ring/20"
                  />
                  {error && (
                    <p className="mt-2 text-xs text-red-500">{error}</p>
                  )}

                  <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row">
                    <Button
                      variant="outline"
                      className="sm:px-4"
                      onClick={() => setStep("choose-path")}
                    >
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back
                    </Button>
                    <Button
                      className="flex-1"
                      disabled={websiteUrl.trim().length < 4}
                      onClick={() => {
                        setError(null);
                        setShowModal(true);
                      }}
                    >
                      <Sparkles className="mr-2 h-4 w-4" /> Analyze & Continue
                    </Button>
                  </div>
                </SpotlightCard>
              </motion.div>
            )}

            {step === "preferences-input" && (
              <motion.div
                key="preferences-input"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.45 }}
              >
                <SpotlightCard className="p-6 sm:p-8">
                  <div className="flex items-center justify-between gap-4">
                    <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                      Step 2 of 2
                    </p>
                    <span className="text-xs text-muted-foreground">
                      Manual path
                    </span>
                  </div>
                  <h1 className="mt-3 text-xl font-semibold tracking-tight">
                    Tell us about your brand
                  </h1>

                  <div className="mt-6 space-y-4">
                    <div>
                      <label className="text-xs font-medium text-muted-foreground">
                        Brand name
                      </label>
                      <input
                        value={brandName}
                        onChange={(e) => setBrandName(e.target.value)}
                        className="mt-1.5 h-12 w-full rounded-lg border border-input bg-background/70 px-4 text-sm outline-none transition placeholder:text-muted-foreground/70 focus:border-ring focus:ring-2 focus:ring-ring/20"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-muted-foreground">
                        Instagram handle
                      </label>
                      <input
                        value={instagramHandle}
                        onChange={(e) => setInstagramHandle(e.target.value)}
                        placeholder="@yourbrand"
                        className="mt-1.5 h-12 w-full rounded-lg border border-input bg-background/70 px-4 text-sm outline-none transition placeholder:text-muted-foreground/70 focus:border-ring focus:ring-2 focus:ring-ring/20"
                      />
                    </div>
                  </div>
                  {error && (
                    <p className="mt-2 text-xs text-red-500">{error}</p>
                  )}

                  <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row">
                    <Button
                      variant="outline"
                      className="sm:px-4"
                      onClick={() => setStep("choose-path")}
                    >
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back
                    </Button>
                    <Button
                      className="flex-1"
                      disabled={brandName.trim().length < 1}
                      onClick={() => {
                        setError(null);
                        setShowModal(true);
                      }}
                    >
                      <Sparkles className="mr-2 h-4 w-4" /> Build Brand Brain
                    </Button>
                  </div>
                </SpotlightCard>
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>

      <BrandBrainModal
        isOpen={showModal}
        run={path === "website" ? runWebsiteFlow : runPreferencesFlow}
        onDone={(result) => {
          setShowModal(false);
          if (!result.success) {
            setError(result.error ?? "Something went wrong");
            return;
          }
          setIsFinished(true);
        }}
      />
    </div>
  );
}
