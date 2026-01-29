'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Resume } from '@/hooks/useResumeStore'
import { Mail, Phone, MapPin } from 'lucide-react'

interface ResumePreviewProps {
  resume: Resume
}

const previewVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 100, damping: 15 },
  },
}

export default function ResumePreview({ resume }: ResumePreviewProps) {
  return (
    <motion.div
      className="h-full overflow-y-auto bg-white p-4 sm:p-8"
      variants={previewVariants}
      initial="hidden"
      animate="visible"
    >
      {/* PDF-style container */}
      <motion.div
        className="max-w-2xl mx-auto bg-white"
        style={{
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
          aspectRatio: '8.5 / 11',
        }}
      >
        <motion.div className="h-full overflow-y-auto p-8 text-surface-900 space-y-4" variants={previewVariants}>
          {/* Header */}
          <motion.div className="text-center space-y-2 pb-4 border-b border-surface-200" variants={itemVariants}>
            <h1 className="text-3xl font-bold text-primary-700">{resume.fullName || 'Your Name'}</h1>
            <div className="flex flex-col sm:flex-row justify-center gap-4 text-sm text-surface-600">
              {resume.email && (
                <div className="flex items-center gap-1 justify-center sm:justify-start">
                  <Mail className="w-4 h-4" />
                  <span>{resume.email}</span>
                </div>
              )}
              {resume.phone && (
                <div className="flex items-center gap-1 justify-center sm:justify-start">
                  <Phone className="w-4 h-4" />
                  <span>{resume.phone}</span>
                </div>
              )}
              {resume.location && (
                <div className="flex items-center gap-1 justify-center sm:justify-start">
                  <MapPin className="w-4 h-4" />
                  <span>{resume.location}</span>
                </div>
              )}
            </div>
          </motion.div>

          {/* Summary */}
          {resume.summary && (
            <motion.section className="space-y-2" variants={itemVariants}>
              <h2 className="text-lg font-bold text-primary-700 uppercase tracking-wide">Summary</h2>
              <p className="text-sm text-surface-700 leading-relaxed">{resume.summary}</p>
            </motion.section>
          )}

          {/* Experience */}
          {resume.experiences.length > 0 && (
            <motion.section className="space-y-3" variants={itemVariants}>
              <h2 className="text-lg font-bold text-primary-700 uppercase tracking-wide">Experience</h2>
              <motion.div className="space-y-3" variants={previewVariants}>
                {resume.experiences.map((exp) => (
                  <motion.div key={exp.id} className="space-y-1" variants={itemVariants}>
                    <div className="flex justify-between items-start gap-2">
                      <div>
                        <p className="font-bold text-surface-900">{exp.jobTitle}</p>
                        <p className="text-sm text-surface-600">{exp.company}</p>
                      </div>
                      <p className="text-xs text-surface-500 whitespace-nowrap">
                        {exp.startDate} {exp.endDate ? `- ${exp.endDate}` : exp.isCurrently ? '- Present' : ''}
                      </p>
                    </div>
                    {exp.description && (
                      <p className="text-sm text-surface-700 leading-tight">{exp.description}</p>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>
          )}

          {/* Education */}
          {resume.education.length > 0 && (
            <motion.section className="space-y-3" variants={itemVariants}>
              <h2 className="text-lg font-bold text-primary-700 uppercase tracking-wide">Education</h2>
              <motion.div className="space-y-3" variants={previewVariants}>
                {resume.education.map((edu) => (
                  <motion.div key={edu.id} className="space-y-1" variants={itemVariants}>
                    <div className="flex justify-between items-start gap-2">
                      <div>
                        <p className="font-bold text-surface-900">{edu.school}</p>
                        <p className="text-sm text-surface-600">
                          {edu.degree} {edu.field && `in ${edu.field}`}
                        </p>
                      </div>
                      {edu.graduationDate && (
                        <p className="text-xs text-surface-500 whitespace-nowrap">{edu.graduationDate}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>
          )}

          {/* Skills */}
          {resume.skills.length > 0 && (
            <motion.section className="space-y-3" variants={itemVariants}>
              <h2 className="text-lg font-bold text-primary-700 uppercase tracking-wide">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {resume.skills.map((skill) => (
                  <motion.span
                    key={skill.id}
                    className="inline-block bg-primary-50 text-primary-700 px-3 py-1 rounded text-sm font-medium"
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.section>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
