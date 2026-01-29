'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Header from '@/components/Layout/Header'
import {
  FileText,
  Zap,
  CheckCircle,
  Briefcase,
  ArrowRight,
  Sparkles,
  Download,
  MessageSquare,
} from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 100, damping: 15 },
  },
}

const featureVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring' as const, stiffness: 100, damping: 15 },
  },
  hover: {
    scale: 1.05,
    transition: { type: 'spring' as const, stiffness: 300, damping: 20 },
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen text-surface-900">
      <Header />

      {/* Hero Section */}
      <motion.section
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div className="space-y-8" variants={containerVariants} initial="hidden" animate="visible">
            <motion.div className="space-y-4" variants={itemVariants}>
              <motion.div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge border border-primary-500/30"
                whileHover={{ scale: 1.05 }}
              >
                <Sparkles className="w-4 h-4 text-accent-400" />
                <span className="text-primary-200">Perfect for Blue-Collar Professionals</span>
              </motion.div>

              <h1 className="text-5xl sm:text-6xl font-bold leading-tight text-glow">
                <span className="text-gradient">Land Your Dream Job</span>
                <br />
                with an ATS-Optimized Resume
              </h1>

              <p className="text-xl text-surface-600 leading-relaxed">
                ResumeDia helps electricians, plumbers, construction workers, and other trades professionals create
                resumes that pass ATS filters and impress hiring managers.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div className="flex flex-col sm:flex-row gap-4 pt-4" variants={itemVariants}>
              <Link href="/resume-maker">
                <motion.button
                  className="btn btn-primary btn-lg w-full sm:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Create Your Resume
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>

              <motion.button
                className="btn btn-secondary btn-lg w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Try Demo
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10" variants={containerVariants}>
              {[
                { label: 'ATS Optimized', value: '100%' },
                { label: 'Mobile Ready', value: '100%' },
                { label: 'Offline Support', value: '✓' },
              ].map((stat, index) => (
                <motion.div key={index} variants={itemVariants} className="text-center">
                  <motion.p className="text-2xl font-bold text-accent-400" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 + index * 0.1 }}>
                    {stat.value}
                  </motion.p>
                  <p className="text-sm text-surface-500">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            className="relative hidden md:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, type: 'spring' as const, stiffness: 100 }}
          >
            {/* Floating Cards Animation */}
            <div className="relative w-full h-96">
              <motion.div
                className="absolute top-0 right-0 w-72 h-48 glass bg-gradient-to-br from-primary-600/20 to-primary-900/40 rounded-2xl p-6 text-white border border-primary-500/30"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary-500/20 flex items-center justify-center mb-4 border border-primary-500/30">
                  <FileText className="w-6 h-6 text-primary-300" />
                </div>
                <h4 className="font-bold text-lg mb-1 text-primary-100">Resume Builder</h4>
                <p className="text-sm text-surface-400">Create professional resumes in minutes with our galaxy editor</p>
              </motion.div>

              <motion.div
                className="absolute top-32 left-0 w-72 h-48 glass bg-gradient-to-br from-accent-600/20 to-accent-900/40 rounded-2xl p-6 text-white border border-accent-500/30"
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 0.5, ease: "easeInOut" }}
              >
                <div className="w-12 h-12 rounded-xl bg-accent-500/20 flex items-center justify-center mb-4 border border-accent-500/30">
                  <Zap className="w-6 h-6 text-accent-300" />
                </div>
                <h4 className="font-bold text-lg mb-1 text-accent-100">ATS Optimizer</h4>
                <p className="text-sm text-surface-400">Get instant AI scoring and suggestions to beat the bots</p>
              </motion.div>

              <div className="absolute inset-0 pointer-events-none -z-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-600/20 rounded-full blur-[100px] animate-pulse-glow" />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-4xl font-bold mb-4 text-glow">Why Choose ResumeDia?</h2>
          <p className="text-xl text-surface-500">Built specifically for blue-collar professionals</p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            {
              icon: FileText,
              title: 'ATS-Optimized Templates',
              description: 'Templates designed to pass through applicant tracking systems with high scores',
            },
            {
              icon: Zap,
              title: 'Real-Time Scoring',
              description: 'Get instant feedback on your resume with our AI-powered ATS analyzer',
            },
            {
              icon: MessageSquare,
              title: 'AI Chat Assistant',
              description: 'Get personalized suggestions to improve your resume and stand out',
            },
            {
              icon: Briefcase,
              title: 'Job Matching',
              description: 'Find relevant job opportunities that match your skills and experience',
            },
            {
              icon: Download,
              title: 'Easy Download',
              description: 'Download your resume as PDF, DOCX, or any format you need',
            },
            {
              icon: CheckCircle,
              title: 'Mobile-First',
              description: 'Build and edit your resume on the go, works perfectly on any device',
            },
          ].map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                className="card hover:border-primary-500/50 group"
                variants={featureVariants}
                whileHover="hover"
              >
                <motion.div
                  className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center mb-4 group-hover:bg-primary-600 group-hover:shadow-lg group-hover:shadow-primary-600/40 transition-all duration-300 border border-primary-500/20"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="w-6 h-6 text-primary-400 group-hover:text-white transition-colors" />
                </motion.div>
                <h3 className="text-xl font-bold mb-2 text-surface-200 group-hover:text-primary-300 transition-colors">{feature.title}</h3>
                <p className="text-surface-500 leading-relaxed group-hover:text-surface-400 transition-colors">{feature.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          className="relative bg-black/40 backdrop-blur-xl border border-primary-500/30 rounded-3xl p-12 sm:p-16 text-center space-y-8 overflow-hidden hover:border-primary-500/50 transition-colors duration-500"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
        >
          {/* Background Glow */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-600/20 to-accent-600/20 -z-10" />
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-primary-500/20 blur-[100px] rounded-full" />

          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-4 text-glow">Ready to Get Hired?</h2>
            <p className="text-lg text-surface-300 max-w-2xl mx-auto">
              Join thousands of blue-collar professionals who've already landed their dream jobs with ResumeDia.
            </p>
          </div>

          <motion.div className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center pt-4" variants={itemVariants}>
            <Link href="/resume-maker">
              <motion.button
                className="btn btn-primary btn-lg px-8 py-4 shadow-xl shadow-primary-900/50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Building Now
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="border-t border-white/5 bg-black/20 py-12 backdrop-blur-sm"
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-surface-600">
          <p>&copy; 2024 ResumeDia. Crafted with ❤️ and Stardust.</p>
        </div>
      </motion.footer>
    </div>
  )
}
