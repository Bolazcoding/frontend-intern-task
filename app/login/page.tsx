"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { LoginForm } from "@/components/login-form";
import { ArrowLeft, Sparkles } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="relative flex min-h-screen items-center justify-center px-6 py-12">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-foreground/5 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-foreground/5 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-sm"
      >
        {/* Back button */}
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to home
        </Link>

        {/* Logo */}
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 rounded-full border border-border/50 bg-background/50 px-4 py-2"
          >
            <span className="flex size-8 items-center justify-center rounded-full bg-foreground/10 text-xs font-semibold">
              BP
            </span>
            <span className="text-sm font-medium">BrandPilot</span>
          </Link>
        </div>

        {/* Header */}
        <div className="mt-8">
          <h1 className="text-2xl font-medium tracking-tight">Welcome back</h1>
          <p className="mt-1.5 text-sm text-muted-foreground">
            Log in to your account to continue
          </p>
        </div>

        {/* Form */}
        <div className="mt-6">
          <LoginForm />
        </div>

        {/* Footer */}
        <div className="mt-6 space-y-3 text-center">
          <p className="text-sm text-muted-foreground">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="font-medium text-foreground hover:underline">
              Sign up
            </Link>
          </p>

          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-border" />
            <span className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-muted-foreground/40">
              <Sparkles className="h-3 w-3" />
              Secure login
            </span>
            <span className="h-px w-8 bg-border" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}