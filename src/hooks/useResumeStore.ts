import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface ExperienceItem {
  id: string
  jobTitle: string
  company: string
  startDate: string
  endDate: string
  isCurrently: boolean
  description: string
}

export interface EducationItem {
  id: string
  school: string
  degree: string
  field: string
  graduationDate: string
}

export interface SkillItem {
  id: string
  name: string
  proficiency: 'beginner' | 'intermediate' | 'expert'
}

export interface Resume {
  id: string
  title: string
  templateId: string
  fullName: string
  email: string
  phone: string
  location: string
  summary: string
  experiences: ExperienceItem[]
  education: EducationItem[]
  skills: SkillItem[]
  isDraft: boolean
  atsScore?: number
  createdAt: Date
  updatedAt: Date
}

export interface ResumeStore {
  currentResume: Resume | null
  resumes: Resume[]
  isLoading: boolean
  error: string | null
  
  // Actions
  setCurrentResume: (resume: Resume) => void
  createResume: (template: string) => void
  updateResume: (resume: Resume) => void
  deleteResume: (id: string) => void
  addExperience: (experience: ExperienceItem) => void
  updateExperience: (id: string, experience: ExperienceItem) => void
  deleteExperience: (id: string) => void
  addEducation: (education: EducationItem) => void
  updateEducation: (id: string, education: EducationItem) => void
  deleteEducation: (id: string) => void
  addSkill: (skill: SkillItem) => void
  updateSkill: (id: string, skill: SkillItem) => void
  deleteSkill: (id: string) => void
  setError: (error: string | null) => void
  clearError: () => void
}

export const useResumeStore = create<ResumeStore>()(
  persist(
    (set, get) => ({
      currentResume: null,
      resumes: [],
      isLoading: false,
      error: null,

      setCurrentResume: (resume) => set({ currentResume: resume }),

      createResume: (templateId: string) => {
        const newResume: Resume = {
          id: `resume_${Date.now()}`,
          title: 'New Resume',
          templateId,
          fullName: '',
          email: '',
          phone: '',
          location: '',
          summary: '',
          experiences: [],
          education: [],
          skills: [],
          isDraft: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
        set((state) => ({
          resumes: [newResume, ...state.resumes],
          currentResume: newResume,
        }))
      },

      updateResume: (resume) => {
        set((state) => ({
          currentResume: resume,
          resumes: state.resumes.map((r) => (r.id === resume.id ? resume : r)),
        }))
      },

      deleteResume: (id) => {
        set((state) => ({
          resumes: state.resumes.filter((r) => r.id !== id),
          currentResume: state.currentResume?.id === id ? null : state.currentResume,
        }))
      },

      addExperience: (experience) => {
        set((state) => {
          if (!state.currentResume) return state
          return {
            currentResume: {
              ...state.currentResume,
              experiences: [...state.currentResume.experiences, experience],
              updatedAt: new Date(),
            },
          }
        })
      },

      updateExperience: (id, experience) => {
        set((state) => {
          if (!state.currentResume) return state
          return {
            currentResume: {
              ...state.currentResume,
              experiences: state.currentResume.experiences.map((e) =>
                e.id === id ? experience : e
              ),
              updatedAt: new Date(),
            },
          }
        })
      },

      deleteExperience: (id) => {
        set((state) => {
          if (!state.currentResume) return state
          return {
            currentResume: {
              ...state.currentResume,
              experiences: state.currentResume.experiences.filter((e) => e.id !== id),
              updatedAt: new Date(),
            },
          }
        })
      },

      addEducation: (education) => {
        set((state) => {
          if (!state.currentResume) return state
          return {
            currentResume: {
              ...state.currentResume,
              education: [...state.currentResume.education, education],
              updatedAt: new Date(),
            },
          }
        })
      },

      updateEducation: (id, education) => {
        set((state) => {
          if (!state.currentResume) return state
          return {
            currentResume: {
              ...state.currentResume,
              education: state.currentResume.education.map((e) =>
                e.id === id ? education : e
              ),
              updatedAt: new Date(),
            },
          }
        })
      },

      deleteEducation: (id) => {
        set((state) => {
          if (!state.currentResume) return state
          return {
            currentResume: {
              ...state.currentResume,
              education: state.currentResume.education.filter((e) => e.id !== id),
              updatedAt: new Date(),
            },
          }
        })
      },

      addSkill: (skill) => {
        set((state) => {
          if (!state.currentResume) return state
          return {
            currentResume: {
              ...state.currentResume,
              skills: [...state.currentResume.skills, skill],
              updatedAt: new Date(),
            },
          }
        })
      },

      updateSkill: (id, skill) => {
        set((state) => {
          if (!state.currentResume) return state
          return {
            currentResume: {
              ...state.currentResume,
              skills: state.currentResume.skills.map((s) => (s.id === id ? skill : s)),
              updatedAt: new Date(),
            },
          }
        })
      },

      deleteSkill: (id) => {
        set((state) => {
          if (!state.currentResume) return state
          return {
            currentResume: {
              ...state.currentResume,
              skills: state.currentResume.skills.filter((s) => s.id !== id),
              updatedAt: new Date(),
            },
          }
        })
      },

      setError: (error) => set({ error }),
      clearError: () => set({ error: null }),
    }),
    {
      name: 'resumedia-store',
      partialize: (state) => ({
        currentResume: state.currentResume,
        resumes: state.resumes,
      }),
    }
  )
)
