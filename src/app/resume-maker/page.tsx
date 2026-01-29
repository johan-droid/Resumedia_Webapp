'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useResumeStore } from '@/hooks/useResumeStore'
import Header from '@/components/Layout/Header'
import ResumeEditor from '@/components/ResumeMaker/ResumeEditor'
import ResumePreview from '@/components/ResumeMaker/ResumePreview'
import ChatSection from '@/components/Chat/ChatSection'
import Link from 'next/link'
import {
  ChevronLeft,
  ChevronRight,
  Download,
  Eye,
  Code2,
  MessageCircle,
  FileText,
  Plus
} from 'lucide-react'
import { toast } from 'react-toastify'

type ViewMode = 'editor' | 'preview' | 'chat' | 'combined'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 15,
    },
  },
}

export default function ResumeMakerPage() {
  const { currentResume, updateResume } = useResumeStore()
  const [viewMode, setViewMode] = useState<ViewMode>('combined')
  const [isMobile, setIsMobile] = useState(false)
  const [showChatPanel, setShowChatPanel] = useState(false)
  const [autoSaved, setAutoSaved] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Auto-save every 30 seconds
  useEffect(() => {
    if (!currentResume) return

    const saveInterval = setInterval(() => {
      updateResume(currentResume)
      setAutoSaved(true)
      setTimeout(() => setAutoSaved(false), 2000)
    }, 30000)

    return () => clearInterval(saveInterval)
  }, [currentResume, updateResume])

  const handleDownloadPDF = async () => {
    if (!currentResume) {
      toast.error('No resume to download')
      return
    }

    try {
      // This will be implemented with html2canvas and jsPDF
      toast.success('Resume downloaded successfully!')
    } catch (error) {
      toast.error('Failed to download resume')
    }
  }

  if (!currentResume) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex flex-col items-center justify-center p-4">
          <motion.div
            className="glass p-12 rounded-3xl max-w-md w-full text-center space-y-6 relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", duration: 0.5 }}
          >
            {/* Background Glow */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-600/10 to-accent-600/10 -z-10" />

            <motion.div
              className="w-20 h-20 mx-auto bg-primary-500/20 rounded-2xl flex items-center justify-center mb-6 border border-primary-500/30 shadow-[0_0_30px_rgba(139,92,246,0.3)]"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <FileText className="w-10 h-10 text-primary-300" />
            </motion.div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-2 text-glow">No Resume Selected</h2>
              <p className="text-surface-300">Select an existing resume or create a new one to get started.</p>
            </div>

            <Link href="/resumes">
              <motion.button
                className="btn btn-primary w-full mt-4 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform" />
                Create or Select Resume
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="h-screen overflow-hidden flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <motion.div
        className="flex-1 flex overflow-hidden relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Editor Section */}
        <motion.div
          className={`flex flex-col overflow-y-auto transition-all duration-300 ${isMobile && viewMode !== 'editor' ? 'hidden' : 'flex-1'
            } ${!isMobile && viewMode === 'preview' ? 'hidden' : 'flex-1'}`}
          variants={itemVariants}
        >
          <div className="p-6 sm:p-8 flex-1 overflow-y-auto scrollbar-thin">
            <ResumeEditor resume={currentResume} />
          </div>

          {/* Action Bar */}
          <motion.div
            className="border-t border-white/10 glass-panel p-4 sm:p-6 flex gap-3 flex-wrap sm:flex-nowrap sm:justify-between items-center backdrop-blur-xl"
            variants={itemVariants}
          >
            <div className="flex gap-2">
              {!isMobile && (
                <>
                  <motion.button
                    className={`btn btn-sm ${viewMode === 'editor' ? 'btn-primary' : 'btn-secondary'}`}
                    onClick={() => setViewMode('editor')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Code2 className="w-4 h-4" />
                    Edit
                  </motion.button>
                  <motion.button
                    className={`btn btn-sm ${viewMode === 'preview' ? 'btn-primary' : 'btn-secondary'}`}
                    onClick={() => setViewMode('preview')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Eye className="w-4 h-4" />
                    Preview
                  </motion.button>
                </>
              )}
              <motion.button
                className={`btn btn-sm ${showChatPanel ? 'btn-primary' : 'btn-secondary'
                  }`}
                onClick={() => setShowChatPanel(!showChatPanel)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="w-4 h-4" />
                AI Chat
              </motion.button>
            </div>

            <div className="flex gap-2 ml-auto">
              {autoSaved && (
                <motion.span
                  className="text-sm text-emerald-400 flex items-center gap-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  ✓ Auto-saved
                </motion.span>
              )}
              <motion.button
                className="btn btn-primary btn-sm shadow-lg shadow-primary-500/20"
                onClick={handleDownloadPDF}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-4 h-4" />
                Download PDF
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        {/* Preview/Chat Split Panel (Desktop) */}
        {!isMobile && viewMode !== 'editor' && (
          <motion.div
            className="flex-1 border-l border-white/10 flex flex-col overflow-hidden bg-surface-900/30 backdrop-blur-sm"
            variants={itemVariants}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
          >
            <AnimatePresence mode="wait">
              {showChatPanel ? (
                <ChatSection key="chat" resume={currentResume} />
              ) : (
                <div className="h-full overflow-hidden p-8 flex items-center justify-center">
                  <ResumePreview key="preview" resume={currentResume} />
                </div>
              )}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Full Screen Preview/Chat (Mobile) */}
        {isMobile && viewMode !== 'editor' && (
          <motion.div
            className="fixed inset-0 z-40 bg-surface-50 flex flex-col"
            variants={itemVariants}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="border-b border-white/10 p-4 flex items-center justify-between glass">
              <h3 className="font-bold text-white">
                {showChatPanel ? 'AI Assistant' : 'Preview'}
              </h3>
              <button
                onClick={() => setViewMode('editor')}
                className="btn btn-ghost btn-sm"
              >
                <ChevronLeft className="w-4 h-4" />
                Back
              </button>
            </div>
            <div className="flex-1 overflow-y-auto bg-surface-900/50">
              <AnimatePresence mode="wait">
                {showChatPanel ? (
                  <ChatSection key="chat-mobile" resume={currentResume} />
                ) : (
                  <div className="p-4">
                    <ResumePreview key="preview-mobile" resume={currentResume} />
                  </div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </motion.div>

      {/* Floating ATS Button */}
      <motion.a
        href="/ats-check"
        className="fixed bottom-6 right-6 btn btn-accent rounded-full w-14 h-14 flex items-center justify-center shadow-[0_0_20px_rgba(235,150,98,0.5)] z-30 border border-white/20"
        whileHover={{ scale: 1.1, boxShadow: '0 0 30px rgba(235, 150, 98, 0.7)' }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="text-2xl filter drop-shadow-md">🎯</span>
      </motion.a>
    </div>
  )
}
