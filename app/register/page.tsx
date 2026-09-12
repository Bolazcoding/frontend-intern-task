"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { RegisterForm } from "@/components/register-form";
import { ArrowLeft, Sparkles } from "lucide-react";

export default function RegisterPage() {
  return (
    <div className="bg-ambient relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-8 sm:px-6 sm:py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-sm rounded-2xl border border-border/70 bg-card/80 p-6 shadow-lift backdrop-blur-sm sm:p-8"
      >
        {/* Back button */}
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-xs font-medium text-muted-foreground transition hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to home
        </Link>

        {/* Logo */}
        <div className="mt-7">
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 rounded-xl border border-border/70 bg-background/70 px-3 py-2"
          >
            <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-xs font-semibold text-primary-foreground">
              BP
            </span>
            <span className="text-sm font-medium">BrandPilot</span>
          </Link>
        </div>

        {/* Header */}
        <div className="mt-7">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            New workspace
          </p>
          <h1 className="mt-3 text-2xl font-semibold tracking-tight">
            Create an account
          </h1>
          <p className="mt-1.5 text-sm text-muted-foreground">
            Start building your brand with BrandPilot
          </p>
        </div>

        {/* Form */}
        <div className="mt-6">
          <RegisterForm />
        </div>

        {/* Footer */}
        <div className="mt-6 space-y-3 text-center">
          <p className="text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-foreground hover:underline"
            >
              Sign in
            </Link>
          </p>

          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-border" />
            <span className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-muted-foreground/40">
              <Sparkles className="h-3 w-3" />
              Secure signup
            </span>
            <span className="h-px w-8 bg-border" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
