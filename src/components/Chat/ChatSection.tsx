'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Resume } from '@/hooks/useResumeStore'
import { Mic, Send, Loader, Zap } from 'lucide-react'
import { toast } from 'react-toastify'

interface Message {
  id: string
  type: 'user' | 'assistant'
  content: string
  timestamp: Date
}

interface ChatSectionProps {
  resume: Resume
}

const messageVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring' as const, stiffness: 100, damping: 15 },
  },
}

export default function ChatSection({ resume }: ChatSectionProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'assistant',
      content: `Hi! I'm your AI Resume Assistant. I can help you improve your resume by:
      • Suggesting better job descriptions
      • Adding keywords that ATS systems look for
      • Improving your professional summary
      • Formatting your experience better

      What would you like help with?`,
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState('')
  const [isListening, setIsListening] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const recognitionRef = useRef<any>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Initialize speech recognition
  useEffect(() => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
    if (SpeechRecognition) {
      recognitionRef.current = new SpeechRecognition()
      recognitionRef.current.continuous = false
      recognitionRef.current.interimResults = true

      recognitionRef.current.onresult = (event: any) => {
        let interimTranscript = ''
        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcript = event.results[i][0].transcript
          if (event.results[i].isFinal) {
            setInput((prev) => prev + ' ' + transcript)
          } else {
            interimTranscript += transcript
          }
        }
      }

      recognitionRef.current.onend = () => {
        setIsListening(false)
      }
    }
  }, [])

  const toggleListening = () => {
    if (recognitionRef.current) {
      if (isListening) {
        recognitionRef.current.stop()
      } else {
        recognitionRef.current.start()
      }
      setIsListening(!isListening)
    } else {
      toast.error('Speech recognition not supported in your browser')
    }
  }

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!input.trim()) return

    // Add user message
    const userMessage: Message = {
      id: `msg_${Date.now()}`,
      type: 'user',
      content: input,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    // Simulate AI response
    setTimeout(() => {
      const suggestions = generateSuggestions(input, resume)
      const assistantMessage: Message = {
        id: `msg_${Date.now() + 1}`,
        type: 'assistant',
        content: suggestions,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, assistantMessage])
      setIsLoading(false)
    }, 1000)
  }

  return (
    <motion.div
      className="h-full flex flex-col bg-gradient-to-br from-primary-50 to-surface-50 p-4 sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Chat Header */}
      <motion.div
        className="pb-4 border-b border-surface-200 mb-4"
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <h3 className="font-bold text-lg flex items-center gap-2">
          <Zap className="w-5 h-5 text-accent-500" />
          AI Resume Assistant
        </h3>
        <p className="text-sm text-surface-600 mt-1">Get real-time suggestions to improve your resume</p>
      </motion.div>

      {/* Messages */}
      <motion.div
        className="flex-1 overflow-y-auto space-y-4 mb-4 scrollbar-thin"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
          },
        }}
        initial="hidden"
        animate="visible"
      >
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              variants={messageVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: 10 }}
            >
              <div
                className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg ${message.type === 'user'
                  ? 'bg-primary-600 text-white rounded-br-none'
                  : 'bg-white text-surface-900 shadow-sm border border-surface-200 rounded-bl-none'
                  }`}
              >
                <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                <p className={`text-xs mt-1 ${message.type === 'user' ? 'text-primary-100' : 'text-surface-500'}`}>
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {isLoading && (
          <motion.div className="flex justify-start" variants={messageVariants}>
            <div className="bg-white text-surface-900 shadow-sm border border-surface-200 px-4 py-3 rounded-lg rounded-bl-none">
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-primary-500 animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-2 h-2 rounded-full bg-primary-500 animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-2 h-2 rounded-full bg-primary-500 animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          </motion.div>
        )}

        <div ref={messagesEndRef} />
      </motion.div>

      {/* Input */}
      <motion.form
        className="flex gap-2"
        onSubmit={handleSendMessage}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <motion.button
          type="button"
          className={`btn btn-icon ${isListening ? 'bg-accent-500 text-white' : 'bg-surface-200'}`}
          onClick={toggleListening}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          title="Click to start voice input"
        >
          <Mic className={`w-5 h-5 ${isListening ? 'animate-pulse' : ''}`} />
        </motion.button>

        <input
          type="text"
          placeholder="Ask for suggestions..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="input-base flex-1"
          disabled={isLoading}
        />

        <motion.button
          type="submit"
          className="btn btn-primary btn-icon"
          disabled={isLoading || !input.trim()}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isLoading ? <Loader className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
        </motion.button>
      </motion.form>
    </motion.div>
  )
}

// Helper function to generate suggestions
function generateSuggestions(userMessage: string, resume: Resume): string {
  const messageLower = userMessage.toLowerCase()

  if (messageLower.includes('job') || messageLower.includes('describe')) {
    return `Here are tips to improve your job descriptions:

1. Start with strong action verbs: "Managed", "Designed", "Implemented", "Optimized"
2. Add metrics: "Increased efficiency by 30%", "Saved $10K annually"
3. Use industry keywords from the job posting
4. Focus on impact, not just duties

For example, instead of "Responsible for safety", write:
"Maintained perfect safety record on ${resume.experiences[0]?.company || 'job site'}, ensuring OSHA compliance for 20+ team members"`

  } else if (messageLower.includes('summary') || messageLower.includes('profile')) {
    return `Tips for a strong professional summary:

1. Keep it 2-3 sentences max
2. Include your key skills and experience
3. Add a unique achievement or specialty
4. Use keywords relevant to your profession

Example for your field:
"Experienced ${resume.fullName ? 'professional' : 'tradesperson'} with [X] years of hands-on expertise. Proven track record of [key achievement]. Skilled in [top 3 skills]. Seeking to leverage expertise to [career goal]."`

  } else if (messageLower.includes('skill')) {
    return `Tips for better skills section:

1. List 5-10 most relevant skills
2. Prioritize by relevance to target job
3. Group similar skills together
4. Include technical and soft skills

For your profession, consider adding:
• OSHA Certifications
• Equipment Operation
• Safety Compliance
• Team Leadership
• Blueprint Reading`

  } else {
    return `I can help you with:
• ✏️ Improving your job descriptions
• 📝 Enhancing your professional summary
• 🎯 Optimizing keywords for ATS
• 🛠️ Adding more relevant skills
• 📊 Formatting tips

What would you like to improve?`
  }
}
