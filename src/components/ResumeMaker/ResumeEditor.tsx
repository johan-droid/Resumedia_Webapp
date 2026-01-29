'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useResumeStore, Resume, ExperienceItem, EducationItem, SkillItem } from '@/hooks/useResumeStore'
import { Plus, Trash2, Edit2, ChevronDown, ChevronUp } from 'lucide-react'
import { toast } from 'react-toastify'

interface ResumeEditorProps {
  resume: Resume
}

const sectionVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 100, damping: 15 },
  },
  exit: { opacity: 0, y: -10 },
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring' as const, stiffness: 100, damping: 15 },
  },
  exit: { opacity: 0, x: 20 },
}

export default function ResumeEditor({ resume }: ResumeEditorProps) {
  const {
    updateResume,
    addExperience,
    updateExperience,
    deleteExperience,
    addEducation,
    updateEducation,
    deleteEducation,
    addSkill,
    updateSkill,
    deleteSkill,
  } = useResumeStore()

  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    contact: true,
    summary: true,
    experience: true,
    education: false,
    skills: false,
  })

  const [editingItem, setEditingItem] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const handleContactChange = (field: string, value: string) => {
    updateResume({
      ...resume,
      [field]: value,
      updatedAt: new Date(),
    })
  }

  const handleAddExperience = () => {
    const newExperience: ExperienceItem = {
      id: `exp_${Date.now()}`,
      jobTitle: '',
      company: '',
      startDate: '',
      endDate: '',
      isCurrently: false,
      description: '',
    }
    addExperience(newExperience)
    setEditingItem(newExperience.id)
  }

  const handleAddEducation = () => {
    const newEducation: EducationItem = {
      id: `edu_${Date.now()}`,
      school: '',
      degree: '',
      field: '',
      graduationDate: '',
    }
    addEducation(newEducation)
    setEditingItem(newEducation.id)
  }

  const handleAddSkill = () => {
    const newSkill: SkillItem = {
      id: `skill_${Date.now()}`,
      name: '',
      proficiency: 'intermediate',
    }
    addSkill(newSkill)
    setEditingItem(newSkill.id)
  }

  return (
    <motion.div className="space-y-4 max-w-3xl mx-auto" initial="hidden" animate="visible" variants={sectionVariants}>
      {/* Contact Information Section */}
      <EditableSection
        title="Contact Information"
        isExpanded={expandedSections.contact}
        onToggle={() => toggleSection('contact')}
      >
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4" variants={sectionVariants}>
          <input
            type="text"
            placeholder="Full Name"
            value={resume.fullName}
            onChange={(e) => handleContactChange('fullName', e.target.value)}
            className="input-base"
          />
          <input
            type="email"
            placeholder="Email"
            value={resume.email}
            onChange={(e) => handleContactChange('email', e.target.value)}
            className="input-base"
          />
          <input
            type="tel"
            placeholder="Phone"
            value={resume.phone}
            onChange={(e) => handleContactChange('phone', e.target.value)}
            className="input-base"
          />
          <input
            type="text"
            placeholder="Location"
            value={resume.location}
            onChange={(e) => handleContactChange('location', e.target.value)}
            className="input-base"
          />
        </motion.div>
      </EditableSection>

      {/* Professional Summary Section */}
      <EditableSection
        title="Professional Summary"
        isExpanded={expandedSections.summary}
        onToggle={() => toggleSection('summary')}
      >
        <motion.textarea
          placeholder="Write a brief summary of your professional background and goals..."
          value={resume.summary}
          onChange={(e) => handleContactChange('summary', e.target.value)}
          className="input-base min-h-28 resize-none"
          variants={sectionVariants}
        />
      </EditableSection>

      {/* Experience Section */}
      <EditableSection
        title="Work Experience"
        isExpanded={expandedSections.experience}
        onToggle={() => toggleSection('experience')}
        action={
          <motion.button
            className="btn btn-sm btn-primary"
            onClick={handleAddExperience}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Plus className="w-4 h-4" />
            Add Experience
          </motion.button>
        }
      >
        <AnimatePresence>
          {resume.experiences.map((exp, index) => (
            <ExperienceItemComponent
              key={exp.id}
              experience={exp}
              isEditing={editingItem === exp.id}
              onEdit={() => setEditingItem(exp.id)}
              onSave={() => setEditingItem(null)}
              onUpdate={(updated) => updateExperience(exp.id, updated)}
              onDelete={() => deleteExperience(exp.id)}
              index={index}
            />
          ))}
        </AnimatePresence>
      </EditableSection>

      {/* Education Section */}
      <EditableSection
        title="Education"
        isExpanded={expandedSections.education}
        onToggle={() => toggleSection('education')}
        action={
          <motion.button
            className="btn btn-sm btn-primary"
            onClick={handleAddEducation}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Plus className="w-4 h-4" />
            Add Education
          </motion.button>
        }
      >
        <AnimatePresence>
          {resume.education.map((edu, index) => (
            <EducationItemComponent
              key={edu.id}
              education={edu}
              isEditing={editingItem === edu.id}
              onEdit={() => setEditingItem(edu.id)}
              onSave={() => setEditingItem(null)}
              onUpdate={(updated) => updateEducation(edu.id, updated)}
              onDelete={() => deleteEducation(edu.id)}
              index={index}
            />
          ))}
        </AnimatePresence>
      </EditableSection>

      {/* Skills Section */}
      <EditableSection
        title="Skills"
        isExpanded={expandedSections.skills}
        onToggle={() => toggleSection('skills')}
        action={
          <motion.button
            className="btn btn-sm btn-primary"
            onClick={handleAddSkill}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Plus className="w-4 h-4" />
            Add Skill
          </motion.button>
        }
      >
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <AnimatePresence>
            {resume.skills.map((skill, index) => (
              <SkillItemComponent
                key={skill.id}
                skill={skill}
                isEditing={editingItem === skill.id}
                onEdit={() => setEditingItem(skill.id)}
                onSave={() => setEditingItem(null)}
                onUpdate={(updated) => updateSkill(skill.id, updated)}
                onDelete={() => deleteSkill(skill.id)}
                index={index}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </EditableSection>
    </motion.div>
  )
}

// Reusable Components

interface EditableSectionProps {
  title: string
  isExpanded: boolean
  onToggle: () => void
  action?: React.ReactNode
  children: React.ReactNode
}

function EditableSection({ title, isExpanded, onToggle, action, children }: EditableSectionProps) {
  return (
    <motion.div
      className="card glass overflow-hidden border border-white/10"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.button
        className="w-full flex items-center justify-between p-4 -m-4 hover:bg-white/5 transition-colors"
        onClick={onToggle}
      >
        <h3 className="font-bold text-lg text-white">{title}</h3>
        <div className="flex items-center gap-2">
          {action}
          <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
            <ChevronDown className="w-5 h-5 text-gray-400" />
          </motion.div>
        </div>
      </motion.button>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ type: 'spring' as const, stiffness: 300, damping: 30 }}
            className="border-t border-white/10 overflow-hidden"
          >
            <motion.div className="p-4 space-y-4" variants={sectionVariants}>
              {children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// Experience Item Component
interface ExperienceItemComponentProps {
  experience: ExperienceItem
  isEditing: boolean
  onEdit: () => void
  onSave: () => void
  onUpdate: (updated: ExperienceItem) => void
  onDelete: () => void
  index: number
}

function ExperienceItemComponent({
  experience,
  isEditing,
  onEdit,
  onSave,
  onUpdate,
  onDelete,
  index,
}: ExperienceItemComponentProps) {
  if (isEditing) {
    return (
      <motion.div
        className="bg-white/5 rounded-lg p-4 space-y-3 border border-white/10 backdrop-blur-sm"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <input
          type="text"
          placeholder="Job Title"
          value={experience.jobTitle}
          onChange={(e) => onUpdate({ ...experience, jobTitle: e.target.value })}
          className="input-base"
          autoFocus
        />
        <input
          type="text"
          placeholder="Company"
          value={experience.company}
          onChange={(e) => onUpdate({ ...experience, company: e.target.value })}
          className="input-base"
        />
        <div className="grid grid-cols-2 gap-3">
          <input
            type="date"
            value={experience.startDate}
            onChange={(e) => onUpdate({ ...experience, startDate: e.target.value })}
            className="input-base"
          />
          <input
            type="date"
            value={experience.endDate}
            onChange={(e) => onUpdate({ ...experience, endDate: e.target.value })}
            className="input-base"
            disabled={experience.isCurrently}
          />
        </div>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={experience.isCurrently}
            onChange={(e) => onUpdate({ ...experience, isCurrently: e.target.checked })}
            className="w-4 h-4 rounded border-white/20 bg-white/10 text-primary-500 focus:ring-primary-500/50"
          />
          <span className="text-sm text-gray-300">Currently working here</span>
        </label>
        <textarea
          placeholder="Description of your responsibilities and achievements..."
          value={experience.description}
          onChange={(e) => onUpdate({ ...experience, description: e.target.value })}
          className="input-base min-h-24 resize-none"
        />
        <div className="flex gap-2 justify-end">
          <motion.button className="btn btn-secondary btn-sm" onClick={onSave} whileTap={{ scale: 0.95 }}>
            Save
          </motion.button>
          <motion.button className="btn btn-ghost btn-sm text-error hover:bg-error/10" onClick={onDelete} whileTap={{ scale: 0.95 }}>
            <Trash2 className="w-4 h-4" />
            Delete
          </motion.button>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors cursor-pointer group border border-transparent hover:border-white/10"
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={onEdit}
    >
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1">
          <h4 className="font-bold text-white">{experience.jobTitle || 'Job Title'}</h4>
          <p className="text-sm text-gray-400">{experience.company || 'Company'}</p>
          <p className="text-xs text-gray-500 mt-1">
            {experience.startDate} {experience.endDate && `- ${experience.endDate}`}
            {experience.isCurrently && ' - Present'}
          </p>
          {experience.description && (
            <p className="text-sm text-gray-300 mt-2 line-clamp-2">{experience.description}</p>
          )}
        </div>
        <motion.button
          className="btn btn-ghost btn-sm opacity-0 group-hover:opacity-100 transition-opacity text-gray-400 hover:text-white"
          onClick={(e) => {
            e.stopPropagation()
            onEdit()
          }}
          whileHover={{ scale: 1.1 }}
        >
          <Edit2 className="w-4 h-4" />
        </motion.button>
      </div>
    </motion.div>
  )
}

// Education Item Component
interface EducationItemComponentProps {
  education: EducationItem
  isEditing: boolean
  onEdit: () => void
  onSave: () => void
  onUpdate: (updated: EducationItem) => void
  onDelete: () => void
  index: number
}

function EducationItemComponent({
  education,
  isEditing,
  onEdit,
  onSave,
  onUpdate,
  onDelete,
  index,
}: EducationItemComponentProps) {
  if (isEditing) {
    return (
      <motion.div
        className="bg-white/5 rounded-lg p-4 space-y-3 border border-white/10 backdrop-blur-sm"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <input
          type="text"
          placeholder="School/University"
          value={education.school}
          onChange={(e) => onUpdate({ ...education, school: e.target.value })}
          className="input-base"
          autoFocus
        />
        <input
          type="text"
          placeholder="Degree"
          value={education.degree}
          onChange={(e) => onUpdate({ ...education, degree: e.target.value })}
          className="input-base"
        />
        <input
          type="text"
          placeholder="Field of Study"
          value={education.field}
          onChange={(e) => onUpdate({ ...education, field: e.target.value })}
          className="input-base"
        />
        <input
          type="date"
          value={education.graduationDate}
          onChange={(e) => onUpdate({ ...education, graduationDate: e.target.value })}
          className="input-base"
        />
        <div className="flex gap-2 justify-end">
          <motion.button className="btn btn-secondary btn-sm" onClick={onSave} whileTap={{ scale: 0.95 }}>
            Save
          </motion.button>
          <motion.button className="btn btn-ghost btn-sm text-error hover:bg-error/10" onClick={onDelete} whileTap={{ scale: 0.95 }}>
            <Trash2 className="w-4 h-4" />
            Delete
          </motion.button>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors cursor-pointer group border border-transparent hover:border-white/10"
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={onEdit}
    >
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1">
          <h4 className="font-bold text-white">{education.school || 'School'}</h4>
          <p className="text-sm text-gray-400">
            {education.degree} {education.field && `in ${education.field}`}
          </p>
          {education.graduationDate && (
            <p className="text-xs text-gray-500 mt-1">Graduated: {education.graduationDate}</p>
          )}
        </div>
        <motion.button
          className="btn btn-ghost btn-sm opacity-0 group-hover:opacity-100 transition-opacity text-gray-400 hover:text-white"
          onClick={(e) => {
            e.stopPropagation()
            onEdit()
          }}
          whileHover={{ scale: 1.1 }}
        >
          <Edit2 className="w-4 h-4" />
        </motion.button>
      </div>
    </motion.div>
  )
}

// Skill Item Component
interface SkillItemComponentProps {
  skill: SkillItem
  isEditing: boolean
  onEdit: () => void
  onSave: () => void
  onUpdate: (updated: SkillItem) => void
  onDelete: () => void
  index: number
}

function SkillItemComponent({
  skill,
  isEditing,
  onEdit,
  onSave,
  onUpdate,
  onDelete,
  index,
}: SkillItemComponentProps) {
  if (isEditing) {
    return (
      <motion.div
        className="bg-white/5 rounded-lg p-3 space-y-2 border border-white/10 backdrop-blur-sm col-span-full sm:col-span-1"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <input
          type="text"
          placeholder="Skill name"
          value={skill.name}
          onChange={(e) => onUpdate({ ...skill, name: e.target.value })}
          className="input-base"
          autoFocus
        />
        <select
          value={skill.proficiency}
          onChange={(e) =>
            onUpdate({ ...skill, proficiency: e.target.value as 'beginner' | 'intermediate' | 'expert' })
          }
          className="input-base bg-surface-100 text-white"
        >
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="expert">Expert</option>
        </select>
        <div className="flex gap-2">
          <motion.button className="btn btn-secondary btn-sm flex-1" onClick={onSave} whileTap={{ scale: 0.95 }}>
            Save
          </motion.button>
          <motion.button
            className="btn btn-ghost btn-sm text-error hover:bg-error/10"
            onClick={onDelete}
            whileTap={{ scale: 0.95 }}
          >
            <Trash2 className="w-4 h-4" />
          </motion.button>
        </div>
      </motion.div>
    )
  }

  const proficiencyColors = {
    beginner: 'bg-white/10 text-gray-300 border-white/10',
    intermediate: 'bg-primary-500/10 text-primary-300 border-primary-500/20',
    expert: 'bg-accent-500/10 text-accent-300 border-accent-500/20',
  }

  return (
    <motion.div
      className="bg-white/5 rounded-lg p-3 hover:bg-white/10 transition-colors cursor-pointer group border border-transparent hover:border-white/10"
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={onEdit}
    >
      <div className="flex justify-between items-center gap-2">
        <div className="flex-1 min-w-0">
          <p className="font-medium text-white truncate">{skill.name || 'Skill'}</p>
          <span className={`text-xs px-2 py-0.5 rounded border inline-block mt-1 ${proficiencyColors[skill.proficiency]}`}>
            {skill.proficiency}
          </span>
        </div>
        <motion.button
          className="btn btn-ghost btn-sm opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 text-gray-400 hover:text-white"
          onClick={(e) => {
            e.stopPropagation()
            onEdit()
          }}
          whileHover={{ scale: 1.1 }}
        >
          <Edit2 className="w-3 h-3" />
        </motion.button>
      </div>
    </motion.div>
  )
}
