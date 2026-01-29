'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from '@/components/Layout/Header'
import { Upload, CheckCircle, AlertCircle, Zap, TrendingUp } from 'lucide-react'
import { toast } from 'react-toastify'

interface ATSIssue {
  id: string
  severity: 'error' | 'warning' | 'info'
  title: string
  description: string
  suggestion?: string
}

interface ATSSuggestion {
  id: string
  text: string
  impact: 'high' | 'medium' | 'low'
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 100, damping: 15 } },
}

export default function ATSCheckPage() {
  const [file, setFile] = useState<File | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [atsScore, setAtsScore] = useState<number | null>(null)
  const [issues, setIssues] = useState<ATSIssue[]>([])
  const [suggestions, setSuggestions] = useState<ATSSuggestion[]>([])
  const [dragActive, setDragActive] = useState(false)

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(e.type === 'dragenter' || e.type === 'dragover')
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    const files = e.dataTransfer.files
    if (files[0]) {
      setFile(files[0])
    }
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFile(e.target.files[0])
    }
  }

  const handleAnalyze = async () => {
    if (!file) {
      toast.error('Please select a file')
      return
    }

    setIsAnalyzing(true)

    // Simulate analysis
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Mock data
    const mockScore = Math.floor(Math.random() * 40) + 60
    setAtsScore(mockScore)

    const mockIssues: ATSIssue[] = [
      {
        id: '1',
        severity: 'error',
        title: 'Missing contact information',
        description: 'Email address not found in resume',
        suggestion: 'Add your email address in the header section',
      },
      {
        id: '2',
        severity: 'warning',
        title: 'Weak action verbs',
        description: 'Some job descriptions use passive language',
        suggestion: 'Start descriptions with strong verbs like "Managed", "Designed", "Implemented"',
      },
      {
        id: '3',
        severity: 'warning',
        title: 'Missing industry keywords',
        description: 'Consider adding more industry-specific terms',
        suggestion: 'Add keywords from job descriptions you\'re targeting',
      },
    ]

    const mockSuggestions: ATSSuggestion[] = [
      { id: '1', text: 'Add measurable achievements', impact: 'high' },
      { id: '2', text: 'Include relevant certifications', impact: 'high' },
      { id: '3', text: 'Optimize formatting for ATS readability', impact: 'medium' },
      { id: '4', text: 'Use consistent date formats', impact: 'medium' },
      { id: '5', text: 'Add more keywords from target job descriptions', impact: 'high' },
    ]

    setIssues(mockIssues)
    setSuggestions(mockSuggestions)
    setIsAnalyzing(false)
    toast.success('Analysis complete!')
  }

  return (
    <div className="min-h-screen bg-surface-50 flex flex-col">
      <Header />

      <motion.div
        className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">ATS Resume Optimizer</h1>
          <p className="text-lg text-surface-600">
            Upload your resume to get instant ATS compatibility score and improvement suggestions
          </p>
        </motion.div>

        {/* Upload Section */}
        {atsScore === null && (
          <motion.div className="space-y-6" variants={itemVariants}>
            {/* Drag & Drop Area */}
            <motion.div
              className={`relative rounded-2xl border-2 border-dashed transition-all ${dragActive
                  ? 'border-primary-500 bg-primary-50'
                  : 'border-surface-300 bg-white hover:border-surface-400'
                }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              whileHover={{ scale: 1.02 }}
            >
              <div className="p-12 text-center">
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 mb-4"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Upload className="w-8 h-8 text-primary-600" />
                </motion.div>

                <h3 className="text-lg font-bold mb-2">Upload your resume</h3>
                <p className="text-surface-600 mb-6">
                  Drag and drop your PDF or DOCX file, or click to browse
                </p>

                <input
                  type="file"
                  accept=".pdf,.docx,.doc"
                  onChange={handleFileSelect}
                  className="hidden"
                  id="file-input"
                />

                <label htmlFor="file-input" className="btn btn-primary">
                  Choose File
                </label>

                {file && (
                  <motion.p className="text-sm text-success mt-4 flex items-center justify-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <CheckCircle className="w-4 h-4" />
                    {file.name} selected
                  </motion.p>
                )}
              </div>
            </motion.div>

            {/* Analyze Button */}
            <motion.button
              className="w-full btn btn-primary btn-lg"
              onClick={handleAnalyze}
              disabled={!file || isAnalyzing}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isAnalyzing ? (
                <>
                  <motion.div
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                  Analyzing...
                </>
              ) : (
                <>
                  <Zap className="w-5 h-5" />
                  Analyze Resume
                </>
              )}
            </motion.button>
          </motion.div>
        )}

        {/* Results Section */}
        {atsScore !== null && (
          <motion.div className="space-y-8" variants={containerVariants} initial="hidden" animate="visible">
            {/* Score Card */}
            <motion.div
              className="card bg-gradient-to-br from-primary-50 to-accent-50 border-2 border-primary-200"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-8">
                <motion.div
                  className="relative w-32 h-32 flex items-center justify-center"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#e7e5e4" strokeWidth="8" />
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="url(#gradient)"
                      strokeWidth="8"
                      strokeLinecap="round"
                      initial={{ strokeDasharray: '0 282.7' }}
                      animate={{ strokeDasharray: `${(atsScore / 100) * 282.7} 282.7` }}
                      transition={{ duration: 1 }}
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#6197ff" />
                        <stop offset="100%" stopColor="#eb9662" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute text-center">
                    <motion.div
                      className="text-4xl font-bold text-primary-700"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      {atsScore}
                    </motion.div>
                    <div className="text-xs text-surface-600">Score</div>
                  </div>
                </motion.div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4">ATS Compatibility Score</h3>
                  <div className="space-y-2">
                    <p className="text-surface-700">
                      {atsScore >= 80
                        ? 'Excellent! Your resume is well-optimized for ATS systems.'
                        : atsScore >= 60
                          ? 'Good start! Follow the suggestions below to improve further.'
                          : 'Your resume needs some improvements for better ATS compatibility.'}
                    </p>
                    <motion.button
                      className="btn btn-primary btn-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Download Full Report
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Issues Section */}
            {issues.length > 0 && (
              <motion.div className="space-y-4" variants={itemVariants}>
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <AlertCircle className="w-6 h-6 text-warning" />
                  Issues Found
                </h3>
                <div className="space-y-3">
                  <AnimatePresence>
                    {issues.map((issue, index) => (
                      <motion.div
                        key={issue.id}
                        className={`card border-l-4 ${issue.severity === 'error'
                            ? 'border-error bg-error/5'
                            : issue.severity === 'warning'
                              ? 'border-warning bg-warning/5'
                              : 'border-info bg-info/5'
                          }`}
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="flex gap-4">
                          <div className="flex-shrink-0">
                            {issue.severity === 'error' ? (
                              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-error/20">
                                <AlertCircle className="w-5 h-5 text-error" />
                              </div>
                            ) : (
                              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-warning/20">
                                <AlertCircle className="w-5 h-5 text-warning" />
                              </div>
                            )}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-surface-900">{issue.title}</h4>
                            <p className="text-sm text-surface-600 mt-1">{issue.description}</p>
                            {issue.suggestion && (
                              <p className="text-sm text-primary-700 font-medium mt-2">💡 {issue.suggestion}</p>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </motion.div>
            )}

            {/* Suggestions Section */}
            {suggestions.length > 0 && (
              <motion.div className="space-y-4" variants={itemVariants}>
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-success" />
                  Improvement Suggestions
                </h3>
                <div className="grid gap-3">
                  <AnimatePresence>
                    {suggestions.map((suggestion, index) => (
                      <motion.div
                        key={suggestion.id}
                        className={`card border-l-4 ${suggestion.impact === 'high'
                            ? 'border-success bg-success/5'
                            : suggestion.impact === 'medium'
                              ? 'border-info bg-info/5'
                              : 'border-surface-300 bg-surface-50'
                          }`}
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="flex items-center justify-between gap-4">
                          <div className="flex-1">
                            <p className="font-medium text-surface-900">{suggestion.text}</p>
                            <p className="text-xs text-surface-500 mt-1">
                              Impact: {suggestion.impact.charAt(0).toUpperCase() + suggestion.impact.slice(1)}
                            </p>
                          </div>
                          <motion.div
                            className={`px-3 py-1 rounded-full text-xs font-bold text-white ${suggestion.impact === 'high'
                                ? 'bg-success'
                                : suggestion.impact === 'medium'
                                  ? 'bg-info'
                                  : 'bg-surface-400'
                              }`}
                          >
                            {suggestion.impact === 'high' ? '+15%' : suggestion.impact === 'medium' ? '+8%' : '+3%'}
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </motion.div>
            )}

            {/* Action Buttons */}
            <motion.div className="flex gap-4 pt-6" variants={itemVariants}>
              <motion.button
                className="btn btn-primary flex-1"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Back to Resume Editor
              </motion.button>
              <motion.button
                className="btn btn-secondary flex-1"
                onClick={() => {
                  setAtsScore(null)
                  setFile(null)
                  setIssues([])
                  setSuggestions([])
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Analyze Another Resume
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}
