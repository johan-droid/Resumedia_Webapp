# ResumeDia - Complete FREE Tech Stack
## Zero-Budget Production-Grade Resume Maker for Blue-Collar Professionals

---

## 🎯 COST SUMMARY
**Total Monthly Cost: $0** (Except domain name ~$2/year)

All tools, services, and infrastructure used in this stack are completely free with generous free tiers.

---

## 1. FRONTEND STACK (100% FREE)

### **Core Framework:**
```
Next.js 15 (Vercel Free Tier) - FREE
├── React 19
├── TypeScript 5.7
└── TailwindCSS 4 + Shadcn/UI
```

### **Why Free:**
- **Next.js**: Free, open-source, unlimited deployments
- **Vercel**: 100 deployments/day free (more than enough)
- **TailwindCSS**: Open-source, free forever
- **Shadcn/UI**: Open-source component library

### **Frontend Dependencies (All FREE & Open Source):**
```json
{
  "dependencies": {
    "next": "^15.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "zustand": "^4.4.0",
    "@tanstack/react-query": "^5.28.0",
    "tailwindcss": "^4.0.0",
    "@radix-ui/react-dialog": "^1.1.0",
    "@radix-ui/react-dropdown-menu": "^2.0.0",
    "axios": "^1.6.0",
    "socket.io-client": "^4.7.0",
    "zod": "^3.22.0",
    "dexie": "^3.2.4",
    "workbox-window": "^7.0.0",
    "react-hook-form": "^7.48.0",
    "jspdf": "^2.5.1",
    "html2canvas": "^1.4.1",
    "pdfjs-dist": "^3.11.174",
    "docx": "^8.5.0",
    "pdf-parse": "^1.1.1",
    "mammoth": "^1.6.0"
  },
  "devDependencies": {
    "typescript": "^5.7.0",
    "tailwindcss": "^4.0.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0"
  }
}
```

### **Offline Capability (FREE):**
```typescript
// src/services/pwa-setup.ts
// Service Workers + PWA Manifest = FREE
// IndexedDB = Browser built-in, FREE
// Background Sync = Browser API, FREE

// workbox = FREE (npm package)
// Handles caching strategies automatically
```

### **Frontend Hosting:**
**OPTION 1: Vercel (Recommended)**
- Free tier: 100GB bandwidth/month, unlimited projects
- Automatic deployments from GitHub
- Auto-scaling
- No credit card needed for free tier

**OPTION 2: Netlify (Backup)**
- Free tier: 300 build minutes/month, unlimited bandwidth
- GitHub integration
- Form submissions: 100/month free

**OPTION 3: GitHub Pages**
- Completely free static hosting
- Only works for static sites (but Next.js exports static)

### **Setup for Vercel (FREE):**
```bash
# 1. Create Next.js project
npx create-next-app@latest resumedia --typescript

# 2. Push to GitHub
git init
git add .
git commit -m "Initial commit"
git push -u origin main

# 3. Connect GitHub to Vercel (via vercel.com)
# - Sign up with GitHub account (free)
# - Import project
# - Automatic deployments on every push
# - NO CREDIT CARD REQUIRED for free tier
```

---

## 2. BACKEND STACK (100% FREE)

### **Core Framework:**
```
NestJS + Node.js (v20 LTS) - FREE, Open Source
├── Express.js (built-in)
├── TypeScript
└── Microservices-ready
```

### **Backend Dependencies (All FREE):**
```json
{
  "dependencies": {
    "@nestjs/common": "^10.0.0",
    "@nestjs/core": "^10.0.0",
    "@nestjs/jwt": "^11.0.0",
    "@nestjs/passport": "^10.0.0",
    "@nestjs/websockets": "^10.0.0",
    "@nestjs/platform-socket.io": "^10.0.0",
    "@nestjs/platform-express": "^10.0.0",
    "prisma": "^5.7.0",
    "passport": "^0.7.0",
    "passport-jwt": "^4.0.0",
    "passport-local": "^1.0.0",
    "bcryptjs": "^2.4.3",
    "jsonwebtoken": "^9.1.0",
    "class-validator": "^0.14.0",
    "class-transformer": "^0.5.0",
    "socket.io": "^4.7.0",
    "axios": "^1.6.0",
    "helmet": "^7.1.0",
    "compression": "^1.7.4",
    "morgan": "^1.10.0",
    "dotenv": "^16.3.1",
    "pdfjs-dist": "^3.11.174",
    "pdf-parse": "^1.1.1",
    "mammoth": "^1.6.0",
    "docx": "^8.5.0",
    "multer": "^1.4.5"
  },
  "devDependencies": {
    "@nestjs/cli": "^10.0.0",
    "@nestjs/schematics": "^10.0.0",
    "typescript": "^5.7.0",
    "@types/node": "^20.0.0",
    "@types/express": "^4.17.0"
  }
}
```

### **Backend Hosting (COMPLETELY FREE):**

#### **OPTION 1: Railway (BEST - $5/month but FREE tier exists)**
Actually, let me give you COMPLETELY free alternatives...

#### **OPTION 2: Render.com (FREE Tier)**
- Free tier: 1 web service, auto-sleeps after 15 min inactivity
- PostgreSQL: 90 days free, then $7/month
- **Good for MVP, not production**

#### **OPTION 3: Heroku (NO LONGER FREE - Discontinued in Nov 2022)**
Scratch this, Heroku ended free tier.

#### **OPTION 4: Fly.io (BEST FREE OPTION)**
```bash
# Sign up free (no credit card for 30 days)
curl -L https://fly.io/install.sh | sh

# Login
flyctl auth login

# Deploy
flyctl launch --name resumedia-backend

# Pricing: 3 free shared-cpu-1x 256MB VMs
# That's enough for your MVP!
```

**Fly.io Free Tier:**
- 3 free shared-cpu-1x 256MB machines
- 160GB/month bandwidth
- 3GB persistent storage
- Perfect for backend + database combo

#### **OPTION 5: Replit (For Learning/Testing)**
```bash
# Go to replit.com
# Create new Repl → Select Node.js
# Code in browser
# Deploy with Replit Deployments (free)
```

#### **OPTION 6: Your Own Server (FREE)**
Use a **free tier cloud VM**:
- **Google Cloud**: $300 free credit, 1 free e2-micro instance
- **AWS**: 1 free t2.micro instance for 12 months
- **Azure**: $200 free credit + free tier for 12 months
- **DigitalOcean**: Actually paid ($5/month minimum), skip

### **Recommended Setup: Fly.io**
```bash
# Deploy NestJS backend to Fly.io (FREE)

# 1. Create Dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]

# 2. Create fly.toml
[env]
NODE_ENV = "production"

[[services]]
internal_port = 3000
protocol = "tcp"
[services.concurrency]
type = "connections"
hard_limit = 100
soft_limit = 80

# 3. Deploy
flyctl deploy

# 4. View logs
flyctl logs

# NO COST! (Until you exceed free tier)
```

---

## 3. DATABASE (100% FREE)

### **OPTION 1: PostgreSQL on Fly.io (Included in Free Tier)**
```bash
# Create PostgreSQL database on Fly.io
flyctl postgres create --name resumedia-db

# Automatically get connection string
# Set as environment variable in backend

# Free: 3GB storage, 1GB RAM
# Perfect for MVP
```

### **OPTION 2: SQLite (Super Simple, FREE)**
```bash
# SQLite = file-based database
# No setup, no hosting needed
# Perfect for getting started

# In development: store in /data/app.db
# In production: persist volume to Fly.io

# Prisma schema works with SQLite
datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

# .env
DATABASE_URL="file:./prisma/dev.db"
```

**SQLite Limitations:**
- Only 1 concurrent write (fine for < 50 users)
- No complex scaling
- But 100% free and zero setup!

### **OPTION 3: Supabase (PostgreSQL + Free Tier)**
```
Free tier:
- PostgreSQL database
- 500MB storage
- 1GB bandwidth
- NO credit card needed
```

**Why Supabase:**
- Managed PostgreSQL (don't manage servers)
- Free tier is actually generous
- Built on open-source (safe bet)
- Easy migrations with Prisma

```bash
# Go to supabase.com
# Sign up (free, no credit card)
# Create project (instant PostgreSQL)
# Copy connection string
# Done!
```

### **Recommended: Supabase**
```typescript
// .env
DATABASE_URL="postgresql://[user]:[password]@db.supabase.co:5432/postgres"

// Prisma handles the rest
// prisma migrate dev
// Automatic schema sync
```

---

## 4. AI & NLP (100% FREE)

### **PROBLEM: OpenAI GPT-4 costs money**

### **SOLUTION: Open-Source LLMs (FREE)**

#### **OPTION 1: Ollama (Best for Self-Hosted AI)**
```bash
# Download Ollama: https://ollama.ai
# Run locally or on server
# Download models (completely free)

ollama pull llama2         # 7B - 4GB
ollama pull neural-chat    # Smaller, faster
ollama pull mistral        # 7B - fast

# Start server
ollama serve

# API available at localhost:11434
```

#### **OPTION 2: Local LLM API**
```typescript
// Use Ollama's REST API (FREE)
async function generateSuggestions(resumeContent: string) {
  const response = await fetch('http://localhost:11434/api/generate', {
    method: 'POST',
    body: JSON.stringify({
      model: 'neural-chat',
      prompt: `You are a resume expert. Improve this resume: ${resumeContent}`,
      stream: false
    })
  })
  
  const data = await response.json()
  return data.response
}
```

**Why Ollama?**
- Download once, use forever (offline)
- No API costs
- Models 7B-13B = run on modest hardware
- Neural-Chat model = optimized for instructions

#### **OPTION 3: Hugging Face Inference API (FREE Tier)**
```typescript
// Hugging Face offers free inference endpoints
// Sign up: huggingface.co
// Create free inference endpoint
// Rate limited but free

import { HfInference } from "@huggingface/inference"

const client = new HfInference(process.env.HF_API_KEY)

const output = await client.textGeneration({
  model: "mistralai/Mistral-7B-Instruct-v0.1",
  inputs: "Resume improvements: ...",
})
```

#### **OPTION 4: Replicate (Free Credits)**
```bash
# Replicate gives free credits monthly
# Run open-source models
# Perfect for development

# Examples:
# - Llama 2 (7B, 13B, 70B)
# - Mistral 7B
# - Neural Chat
```

### **Recommended Setup: Ollama (Self-Hosted)**

**Why?**
- No API keys needed
- No rate limits
- No costs ever
- Work offline
- Perfect for blue-collar users (offline-first)

### **Running on your server:**
```bash
# On Fly.io with backend
# Add Ollama to Docker

FROM ollama/ollama
# Or use separate instance with shared storage
```

### **But Ollama is heavy. Lighter Alternative: FastChat (Chinese solution, free)**
```bash
# pip install fschat
# python -m fastchat.serve.controller
# python -m fastchat.serve.model_worker --model-name neural-chat
# python -m fastchat.serve.openai_api_server

# Now you have OpenAI-compatible API!
```

---

## 5. ATS SCORING (100% FREE)

### **Build your own ATS scorer (no AI needed):**

```typescript
// src/ats/ats.service.ts (Zero external cost)

@Injectable()
export class ATSService {
  private atsKeywords = {
    construction: [
      'OSHA',
      'site safety',
      'concrete',
      'framing',
      'electrical',
      'plumbing',
      'carpentry',
      'equipment operation',
      'blueprint reading'
    ],
    electrical: [
      'wiring',
      'circuit breaker',
      'transformer',
      'electrical code',
      'NEC',
      'OSHA 30',
      'arc flash'
    ],
    plumbing: [
      'pipe fitting',
      'sewer',
      'water pressure',
      'code compliance',
      'fixtures',
      'troubleshooting'
    ]
  }

  async calculateATSScore(
    resumeText: string,
    profession: string
  ): Promise<{ score: number; issues: string[]; suggestions: string[] }> {
    
    const text = resumeText.toLowerCase()
    const keywords = this.atsKeywords[profession] || []
    
    // 1. Keyword matching
    let matchedKeywords = 0
    const suggestedKeywords: string[] = []
    
    for (const keyword of keywords) {
      if (text.includes(keyword.toLowerCase())) {
        matchedKeywords++
      } else {
        suggestedKeywords.push(keyword)
      }
    }
    
    const keywordScore = (matchedKeywords / keywords.length) * 60 // 60% weight
    
    // 2. Formatting checks (ATS killers)
    const issues: string[] = []
    let formatScore = 40 // 40% weight
    
    if (text.includes('objective') && text.split('objective').length < 5) {
      issues.push('⚠️ Weak objective statement - Consider removing or improving')
      formatScore -= 5
    }
    
    if (!text.match(/\b[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}\b/)) {
      issues.push('❌ Email not found - Add your email address')
      formatScore -= 10
    }
    
    if (!text.match(/\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/)) {
      issues.push('❌ Phone number not found - Add your phone number')
      formatScore -= 10
    }
    
    if (text.split('\n').length < 10) {
      issues.push('⚠️ Resume too short - Add more experience details')
      formatScore -= 5
    }
    
    // Check for formatting issues (ATS fails on these)
    if (text.includes('®') || text.includes('™')) {
      issues.push('⚠️ Special symbols detected - Remove ®™© for ATS compatibility')
      formatScore -= 5
    }
    
    if (text.match(/\t{2,}/)) {
      issues.push('⚠️ Multiple tabs detected - Use single spaces instead')
      formatScore -= 5
    }
    
    const finalScore = Math.round(keywordScore + formatScore)
    
    // Suggestions
    const suggestions = [
      ...suggestedKeywords.slice(0, 3).map(k => `💡 Add keyword: "${k}"`),
      issues.length > 0 ? '💡 Fix formatting issues above' : '',
      'Include specific projects and measurements (e.g., "Managed $500K project")',
      'Use action verbs: "Designed", "Implemented", "Managed"'
    ].filter(Boolean)
    
    return {
      score: Math.min(100, finalScore),
      issues,
      suggestions
    }
  }

  // Generate job matching score (no AI needed)
  async matchWithJob(
    resumeText: string,
    jobDescription: string,
    profession: string
  ): Promise<number> {
    const resumeKeywords = this.extractKeywords(resumeText)
    const jobKeywords = this.extractKeywords(jobDescription)
    
    const matches = resumeKeywords.filter(k => 
      jobKeywords.includes(k)
    ).length
    
    return Math.round((matches / Math.max(jobKeywords.length, 1)) * 100)
  }

  private extractKeywords(text: string): string[] {
    // Simple keyword extraction (no ML needed)
    return text
      .toLowerCase()
      .split(/\s+/)
      .filter(word => word.length > 4) // Only substantial words
      .filter(word => !this.isCommonWord(word))
      .slice(0, 50) // Top 50 keywords
  }

  private isCommonWord(word: string): boolean {
    const common = ['with', 'from', 'have', 'that', 'this', 'were', 'been', 'also', 'more']
    return common.includes(word)
  }
}
```

**ATS Scoring Strategy (NO AI NEEDED):**
1. Extract keywords from job description
2. Check which keywords appear in resume
3. Check for ATS-hostile formatting
4. Calculate percentage match
5. Suggest missing keywords

**Cost: $0**

---

## 6. SPEECH RECOGNITION (100% FREE)

### **OPTION 1: Web Speech API (Built-in browser)**
```typescript
// Completely free, built into browser
// Works offline after first load
// No API keys needed

export const useSpeechRecognition = () => {
  const [transcript, setTranscript] = useState('')
  const [listening, setListening] = useState(false)

  const startListening = () => {
    const SpeechRecognition = 
      window.SpeechRecognition || window.webkitSpeechRecognition
    
    if (!SpeechRecognition) {
      alert('Speech recognition not supported in your browser')
      return
    }

    const recognition = new SpeechRecognition()
    recognition.continuous = true
    recognition.interimResults = true
    recognition.lang = 'en-US'

    recognition.onresult = (event) => {
      let interimTranscript = ''
      
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript
        
        if (event.results[i].isFinal) {
          setTranscript(prev => prev + ' ' + transcript)
        } else {
          interimTranscript += transcript
        }
      }
      
      // Show live transcription
      console.log('Interim:', interimTranscript)
    }

    recognition.onend = () => setListening(false)
    recognition.onerror = (event) => {
      console.error('Speech error', event.error)
    }

    recognition.start()
    setListening(true)
  }

  const stopListening = () => {
    // Stop recognition
  }

  return { transcript, listening, startListening, stopListening }
}
```

**Web Speech API:**
- ✅ Completely free
- ✅ Works offline
- ✅ No API keys
- ❌ Not perfectly accurate
- ❌ Varies by browser

### **OPTION 2: Vosk (Open-Source Offline STT)**
```bash
# Install Vosk
pip install vosk

# Download model (once, free)
wget https://alphacephei.com/vosk/models/vosk-model-en-us-0.22.zip

# Use in backend
from vosk import Model, KaldiRecognizer

model = Model("model")
rec = KaldiRecognizer(model, 16000)

# Process audio
result = rec.PartialResult()
```

**Vosk:**
- ✅ Open-source
- ✅ Offline (no API)
- ✅ Completely free
- ❌ Less accurate than cloud services
- ✅ Good enough for resume building

### **OPTION 3: Hugging Face (Free API with limits)**
```bash
# Hugging Face has free speech-to-text models
# Free tier: Rate limited but works

# Model: "facebook/wav2vec2-large-xlsr-53-english"
```

### **Recommended: Web Speech API + Vosk Backup**
```typescript
// Try browser API first (instant, free)
// Fallback to Vosk if user prefers accuracy
// Or allow manual typing
```

---

## 7. DOCUMENT PARSING (100% FREE)

### **All libraries are open-source and free:**

```typescript
// src/upload/document-parser.ts

import * as pdfParse from 'pdf-parse'
import * as mammoth from 'mammoth'
import { docx } from 'docx'

@Injectable()
export class DocumentParserService {
  
  async parseResume(file: Express.Multer.File): Promise<ParsedResume> {
    let text: string

    if (file.mimetype === 'application/pdf') {
      text = await this.parsePDF(file.buffer)
    } else if (file.mimetype.includes('wordprocessingml')) {
      text = await this.parseDOCX(file.buffer)
    } else if (file.mimetype === 'text/plain') {
      text = file.buffer.toString('utf-8')
    } else {
      throw new BadRequestException('Unsupported file format')
    }

    return this.extractSections(text)
  }

  private async parsePDF(buffer: Buffer): Promise<string> {
    try {
      const pdf = await pdfParse(buffer)
      return pdf.text
    } catch (error) {
      throw new BadRequestException('Failed to parse PDF')
    }
  }

  private async parseDOCX(buffer: Buffer): Promise<string> {
    try {
      const result = await mammoth.extractRawText({ arrayBuffer: buffer })
      return result.value
    } catch (error) {
      throw new BadRequestException('Failed to parse DOCX')
    }
  }

  private extractSections(text: string): ParsedResume {
    return {
      contact: this.extractContact(text),
      summary: this.extractSummary(text),
      experience: this.extractExperience(text),
      education: this.extractEducation(text),
      skills: this.extractSkills(text)
    }
  }

  private extractContact(text: string) {
    const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/
    const phoneRegex = /(?:\+?1[-.\s]?)?\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})/

    return {
      email: text.match(emailRegex)?.[0] || '',
      phone: text.match(phoneRegex)?.[0] || ''
    }
  }

  private extractExperience(text: string): Experience[] {
    // Simple extraction - improved with better parsing
    const experiences: Experience[] = []
    const experienceSection = text.match(
      /EXPERIENCE[\s\S]*?(?=EDUCATION|SKILLS|$)/i
    )

    if (!experienceSection) return []

    // Split by job entries
    const jobs = experienceSection[0].split(/\n(?=[A-Z])/i)

    jobs.forEach(job => {
      const titleMatch = job.match(/^([^\n]+)/i)
      const companyMatch = job.match(/(?:at|@|\|)\s*([^\n,]+)/i)
      const dateMatch = job.match(/(\d{1,2}\/\d{1,2}\/\d{4}|\d{4})/g)

      if (titleMatch) {
        experiences.push({
          title: titleMatch[1].trim(),
          company: companyMatch?.[1]?.trim() || '',
          startDate: dateMatch?.[0] || '',
          endDate: dateMatch?.[1] || '',
          description: job.trim()
        })
      }
    })

    return experiences
  }

  private extractEducation(text: string): Education[] {
    const educations: Education[] = []
    const eduSection = text.match(/EDUCATION[\s\S]*?(?=SKILLS|$)/i)

    if (!eduSection) return []

    const schools = eduSection[0].split(/\n(?=[A-Z])/i)

    schools.forEach(school => {
      const schoolMatch = school.match(/^([^\n]+)/i)
      const degreeMatch = school.match(
        /(bachelor|master|phd|associate|diploma|certificate|degree)[\w\s]*/i
      )

      if (schoolMatch) {
        educations.push({
          school: schoolMatch[1].trim(),
          degree: degreeMatch?.[0]?.trim() || '',
          description: school.trim()
        })
      }
    })

    return educations
  }

  private extractSkills(text: string): string[] {
    const skillsSection = text.match(/SKILLS[\s\S]*?(?=$)/i)

    if (!skillsSection) return []

    return skillsSection[0]
      .split(/[,\n]/)
      .map(s => s.trim())
      .filter(s => s.length > 0 && s.length < 50)
      .slice(0, 20)
  }

  private extractSummary(text: string): string {
    const summarySection = text.match(/(?:SUMMARY|OBJECTIVE)[\s\S]*?(?=EXPERIENCE|$)/i)
    return summarySection ? summarySection[0].trim() : ''
  }
}
```

**Cost: $0** (All open-source)

---

## 8. PDF EXPORT (100% FREE)

### **jsPDF (Client-side PDF generation)**
```typescript
// src/services/pdf-generator.ts

import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

export const generatePDF = async (
  htmlElement: HTMLElement,
  filename: string
) => {
  try {
    // Convert HTML to canvas
    const canvas = await html2canvas(htmlElement, {
      scale: 2,
      useCORS: true,
      backgroundColor: '#ffffff'
    })

    // Create PDF
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    })

    const imgData = canvas.toDataURL('image/png')
    const pdfWidth = pdf.internal.pageSize.getWidth()
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width

    let heightLeft = pdfHeight
    let position = 0

    // Add multiple pages if needed
    pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, pdfHeight)
    heightLeft -= pdf.internal.pageSize.getHeight()

    while (heightLeft >= 0) {
      position = heightLeft - pdfHeight
      pdf.addPage()
      pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, pdfHeight)
      heightLeft -= pdf.internal.pageSize.getHeight()
    }

    // Download
    pdf.save(filename)
  } catch (error) {
    console.error('PDF generation failed', error)
  }
}
```

**Why Client-Side PDF?**
- ✅ No server needed
- ✅ Instant download
- ✅ No API costs
- ✅ Works offline
- ❌ Limited styling control (but good enough)

---

## 9. JOB RECOMMENDATIONS (100% FREE)

### **Build your own job database (or use free APIs):**

#### **OPTION 1: Create CSV of free jobs**
```csv
job_id,title,company,location,description,skills
1,"Electrician","ABC Electric","New York, NY","Looking for experienced electrician...","electrical,code,safety"
2,"Plumber","XYZ Plumbing","Los Angeles, CA","Need licensed plumber...","plumbing,fixtures"
```

Load into database, match against resume keywords.

#### **OPTION 2: Free Job APIs**

**JSearch (RapidAPI - Free Tier)**
```bash
# Sign up: rapidapi.com
# Search: "jsearch"
# Free: 100 requests/month

# But that's not enough... skip this
```

**Adzuna API (Free Tier)**
```bash
# adzuna.com
# Free tier: Limited calls
# Not ideal
```

**Build your own with web scraping (Caution!)**
```typescript
// Scrape public job boards
// Check Terms of Service first!
// Only for educational purposes

// Better: Partner with local job boards
// For blue-collar workers, local boards matter more
```

### **BEST SOLUTION: Use AI to match resume with local opportunities**

```typescript
// src/jobs/job-matcher.service.ts
// NO external API needed

@Injectable()
export class JobMatcherService {
  // Your local job database
  private jobs = [
    {
      id: 1,
      title: 'Electrician',
      company: 'Local Electric Co',
      location: 'New York, NY',
      skills: ['electrical work', 'wiring', 'code compliance']
    },
    // ... more jobs
  ]

  async findMatchingJobs(
    resumeText: string,
    profession: string,
    location: string
  ): Promise<JobMatch[]> {
    const resumeKeywords = this.extractKeywords(resumeText)

    const matches = this.jobs
      .filter(job => 
        // Match profession
        job.title.toLowerCase().includes(profession.toLowerCase()) ||
        // Match location
        job.location.toLowerCase().includes(location.toLowerCase())
      )
      .map(job => ({
        ...job,
        matchScore: this.calculateMatch(resumeKeywords, job.skills)
      }))
      .sort((a, b) => b.matchScore - a.matchScore)
      .slice(0, 10)

    return matches
  }

  private calculateMatch(
    resumeKeywords: string[],
    jobSkills: string[]
  ): number {
    const matches = resumeKeywords.filter(k =>
      jobSkills.some(js => js.toLowerCase().includes(k.toLowerCase()))
    ).length

    return Math.round((matches / jobSkills.length) * 100)
  }

  private extractKeywords(text: string): string[] {
    return text
      .toLowerCase()
      .split(/\s+/)
      .filter(w => w.length > 4)
      .slice(0, 50)
  }
}
```

**Monetization Idea:** Partner with local trade schools, unions, or job boards to get job listings in exchange for referrals.

---

## 10. STORAGE (100% FREE)

### **OPTION 1: File System (If self-hosted)**
```typescript
// Store files on server disk
// For Fly.io: Use ephemeral storage (lost on restart)
// Or mount persistent volume (free for small size)

import * as fs from 'fs'
import * as path from 'path'

@Injectable()
export class FileStorageService {
  private uploadDir = '/data/uploads'

  async saveFile(file: Express.Multer.File): Promise<string> {
    const filename = `${Date.now()}-${file.originalname}`
    const filepath = path.join(this.uploadDir, filename)

    fs.writeFileSync(filepath, file.buffer)
    return filename
  }

  async getFile(filename: string): Promise<Buffer> {
    return fs.readFileSync(path.join(this.uploadDir, filename))
  }
}
```

### **OPTION 2: Cloudinary (Free Tier - 25 GB)**
```bash
# Sign up: cloudinary.com
# Free tier:
# - 25 GB storage
# - 25 GB bandwidth/month
# - Unlimited transformations

# More than enough for MVP!
```

```typescript
import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET
})

@Injectable()
export class CloudinaryService {
  async uploadResume(file: Express.Multer.File): Promise<string> {
    return new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { folder: 'resumedia/resumes' },
        (error, result) => {
          if (error) reject(error)
          resolve(result.secure_url)
        }
      )
      stream.end(file.buffer)
    })
  }
}
```

---

## 11. DATABASE (BEST FREE OPTION)

### **Supabase (PostgreSQL - FREE TIER)**
```bash
# Go to supabase.com
# Sign up (GitHub login, free)
# Create project (instant)
# Get connection string
# Use Prisma to connect

# Free tier:
# - 500MB storage
# - 2GB bandwidth/month
# - 50MB file uploads
# - Perfect for MVP
```

```typescript
// .env
DATABASE_URL="postgresql://[user]:[password]@db.supabase.co:5432/postgres"

// Run migrations
// npx prisma migrate dev

// Deploy schema to Supabase
// npx prisma migrate deploy
```

---

## 12. WEBSOCKET (Chat Feature - 100% FREE)

### **Socket.io (Open-source)**
```typescript
// Backend (NestJS)
import { WebSocketGateway, WebSocketServer, SubscribeMessage, MessageBody } from '@nestjs/websockets'

@WebSocketGateway()
export class ChatGateway {
  @WebSocketServer()
  server: any

  @SubscribeMessage('chat-message')
  handleMessage(@MessageBody() message: string) {
    this.server.emit('chat-response', {
      message,
      timestamp: new Date()
    })
  }
}

// Frontend (React)
import io from 'socket.io-client'

export const useChat = () => {
  const [socket, setSocket] = useState(null)
  const [messages, setMessages] = useState([])

  useEffect(() => {
    const newSocket = io(process.env.NEXT_PUBLIC_BACKEND_URL)
    
    newSocket.on('chat-response', (msg) => {
      setMessages(prev => [...prev, msg])
    })

    setSocket(newSocket)
    return () => newSocket.disconnect()
  }, [])

  const sendMessage = (message: string) => {
    socket?.emit('chat-message', message)
  }

  return { messages, sendMessage }
}
```

**Cost: $0** (Open-source)

---

## 13. DEPLOYMENT SUMMARY

| Component | Service | Free Tier | How to Use |
|-----------|---------|-----------|-----------|
| **Frontend** | Vercel | 100GB bandwidth, unlimited projects | Connect GitHub repo, auto-deploy |
| **Backend** | Fly.io | 3 shared-cpu VMs, 160GB bandwidth | `flyctl launch` |
| **Database** | Supabase | 500MB storage, 2GB bandwidth | Copy connection string to Prisma |
| **File Storage** | Cloudinary | 25GB storage, 25GB bandwidth | Npm package, set env vars |
| **AI** | Ollama (self-hosted) | Unlimited | Run on your Fly.io instance |
| **Speech** | Web Speech API | Unlimited | Browser built-in |
| **Domain** | Namecheap | - | ~$2/year |
| **Email** | Resend (25/day free) or Mailgun | 100/month | Use if needed |
| **Total Monthly** | **$0** | All free | Perfect! |

---

## 14. COMPLETE DEPLOYMENT GUIDE

### **Step 1: Setup Backend (Fly.io)**

```bash
# Install Fly CLI
curl -L https://fly.io/install.sh | sh

# Login (free account)
flyctl auth login

# Create app
flyctl launch --name resumedia-api --builder dockerfile

# Add environment variables
flyctl secrets set \
  JWT_SECRET=your-secret-key \
  NODE_ENV=production

# Deploy
flyctl deploy

# View logs
flyctl logs
```

### **Step 2: Setup Database (Supabase)**

```bash
# 1. Go to supabase.com
# 2. Sign up with GitHub (free)
# 3. Create organization
# 4. Create project
# 5. Copy connection string

# .env.production
DATABASE_URL="postgresql://[user]:[password]@db.supabase.co:5432/postgres"

# Run migrations
npx prisma migrate deploy

# Done!
```

### **Step 3: Deploy Frontend (Vercel)**

```bash
# 1. Push to GitHub
git push origin main

# 2. Go to vercel.com
# 3. Sign in with GitHub
# 4. Import project
# 5. Add environment variables:
NEXT_PUBLIC_BACKEND_URL=https://resumedia-api.fly.dev

# 6. Deploy (automatic on push)
```

### **Step 4: Setup AI (Ollama - Optional)**

```bash
# If you have decent hardware:
# Download Ollama from ollama.ai
# Run: ollama pull neural-chat
# Start: ollama serve

# Then use Web Speech API + simple keyword matching
# (Don't need heavy AI for MVP)
```

---

## 15. ZERO-COST ARCHITECTURE DIAGRAM

```
┌─────────────────────────────────────────────────┐
│         FRONTEND (Vercel - FREE)                │
│  Next.js 15 + React 19 + Tailwind CSS          │
│  - PWA + Service Workers (offline)              │
│  - IndexedDB (local data)                       │
│  - Web Speech API (speech-to-text)              │
│  - jsPDF (PDF generation)                       │
└──────────────┬──────────────────────────────────┘
               │ HTTPS (FREE Let's Encrypt)
┌──────────────▼──────────────────────────────────┐
│       BACKEND (Fly.io - FREE Tier)              │
│  NestJS + Node.js + TypeScript                  │
│  - JWT Authentication                          │
│  - Socket.io (WebSocket)                        │
│  - ATS Scoring (custom, no AI)                  │
│  - File parsing (pdf-parse, mammoth)            │
│  - Rate limiting                                │
└──────────────┬──────────────────────────────────┘
               │
    ┌──────────┴──────────┐
    │                     │
┌───▼────────┐  ┌────────▼──────┐
│  DATABASE  │  │    STORAGE     │
│  Supabase  │  │  Cloudinary    │
│ (FREE)     │  │  (FREE 25GB)   │
│ PostgreSQL │  │  Or filesystem │
│ 500MB      │  │                │
└────────────┘  └────────────────┘
```

---

## 16. COMPLETE TECH STACK (ZERO-COST SUMMARY)

```
FRONTEND:
✅ Next.js 15 (Vercel - FREE)
✅ React 19
✅ TypeScript
✅ TailwindCSS
✅ Shadcn/UI
✅ Zustand (state management)
✅ React Query
✅ Socket.io-client
✅ jsPDF + html2canvas
✅ PWA + Service Workers

BACKEND:
✅ NestJS
✅ Node.js v20
✅ TypeScript
✅ Express.js
✅ Socket.io
✅ Helmet.js (security)

DATABASE:
✅ PostgreSQL (Supabase - FREE)
✅ Prisma (ORM)

AI/NLP:
✅ Custom ATS scorer (no external API)
✅ Keyword matching
✅ Optional: Ollama (self-hosted)
✅ Optional: Hugging Face (limited free)

STORAGE:
✅ Cloudinary (25GB free) OR File system

DEPLOYMENT:
✅ Fly.io (backend - FREE tier)
✅ Vercel (frontend - FREE)
✅ Supabase (database - FREE)

SPEECH:
✅ Web Speech API (browser built-in)
✅ Optional: Vosk (open-source offline)

TOTAL COST: $0/month (except ~$2/year domain)
```

---

## 17. PRODUCTION CHECKLIST

- [ ] Security
  - [ ] JWT authentication with refresh tokens
  - [ ] Rate limiting (prevent abuse)
  - [ ] Input validation (Zod + class-validator)
  - [ ] CORS configured correctly
  - [ ] HTTPS enabled (Let's Encrypt free)
  - [ ] Helmet.js headers
  - [ ] Password hashing (bcryptjs)

- [ ] Performance
  - [ ] Frontend: < 2s load time
  - [ ] Compression enabled (gzip)
  - [ ] CDN for static files (Vercel auto)
  - [ ] Database indexing on frequently queried fields
  - [ ] Caching strategies

- [ ] Reliability
  - [ ] Error handling (Sentry - free tier)
  - [ ] Logging (console + file logs)
  - [ ] Database backups (Supabase auto)
  - [ ] Monitoring (Fly.io built-in)

- [ ] User Experience
  - [ ] Mobile responsive (tested)
  - [ ] Offline functionality (tested)
  - [ ] Accessibility (keyboard nav, screen reader)
  - [ ] Loading states
  - [ ] Error messages (helpful)

- [ ] Testing
  - [ ] Unit tests (Jest - free)
  - [ ] Integration tests
  - [ ] E2E tests (Cypress - free)

---

## 18. GROWTH ROADMAP

**Phase 1 (MVP) - Weeks 1-8**
- [ ] User auth
- [ ] Basic resume builder (1-2 templates)
- [ ] PDF export
- [ ] Simple ATS score
- [ ] Cost: $0
- [ ] Target: 50 users

**Phase 2 (Features) - Weeks 9-16**
- [ ] More templates (5+)
- [ ] Chat assistance (Web Speech API)
- [ ] Better ATS scoring
- [ ] Job recommendations (from manual job board)
- [ ] Cost: $0
- [ ] Target: 500 users

**Phase 3 (Scale) - Weeks 17+**
- [ ] If > 500 users: Migrate to paid tier
- [ ] Better AI (upgrade to paid OpenAI)
- [ ] Advanced analytics
- [ ] Monetization (freemium model)
- [ ] Cost: $20-50/month
- [ ] Target: 5,000+ users

---

## 19. DEPLOYMENT SCRIPTS (Copy-Paste Ready)

### **Deploy Everything (One Command)**

```bash
#!/bin/bash
# deploy.sh

# 1. Deploy frontend
cd frontend
npm run build
git push origin main
# (Vercel auto-deploys)

# 2. Deploy backend
cd ../backend
flyctl deploy

# 3. Run migrations
flyctl ssh console -C "npm run prisma:migrate:deploy"

echo "✅ Deployment complete!"
```

### **Local Development Setup**

```bash
# .devcontainer/Dockerfile (for consistent dev environment)
FROM node:20-alpine

RUN apk add --no-cache postgresql-client

WORKDIR /workspace

COPY . .

RUN npm install

EXPOSE 3000 3001 5432

CMD ["/bin/sh"]
```

```yaml
# docker-compose.yml
version: '3.8'
services:
  postgres:
    image: postgres:16-alpine
    environment:
      POSTGRES_USER: dev
      POSTGRES_PASSWORD: dev
      POSTGRES_DB: resumedia
    ports:
      - "5432:5432"

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"

  backend:
    build: ./backend
    ports:
      - "3000:3000"
    environment:
      DATABASE_URL: postgresql://dev:dev@postgres:5432/resumedia
    depends_on:
      - postgres

  frontend:
    build: ./frontend
    ports:
      - "3001:3000"
    environment:
      NEXT_PUBLIC_BACKEND_URL: http://localhost:3000
```

---

## 20. FAQ - ZERO-COST SPECIFIC

**Q: Will Vercel free tier be enough?**
A: Yes! 100GB bandwidth is massive. 1000 users × 100KB resume per month = 100GB only if each user regenerates 100x per month. You're safe for MVP.

**Q: What if I exceed Fly.io free tier?**
A: Pay $5/month for better tier. But you should be fine for 1000 users on free tier.

**Q: How do I handle AI without paying OpenAI?**
A: Use keyword-based ATS (I provided code above). For chat, use Web Speech API + simple templates. Or run Ollama locally.

**Q: Database storage limit 500MB - is that enough?**
A: Yes! 500MB = 50,000 resumes of 10KB each. You're fine for MVP.

**Q: What about email sending (password reset, etc)?**
A: Use free Resend (25/day) or Mailgun (100/month free). Or skip emails for MVP.

**Q: Can I switch from free tier later?**
A: Yes! Architecture supports scaling. Just change env vars and connection strings.

**Q: Is this safe for production?**
A: Absolutely! All tools are production-grade. Supabase runs Fortune 500 companies' data. Fly.io is solid. Vercel powers millions of apps.

---

## 🎯 FINAL SUMMARY

**Your tech stack is completely FREE and production-grade:**

| What | Technology | Cost |
|-----|-----------|------|
| Hosting Backend | Fly.io | $0 |
| Hosting Frontend | Vercel | $0 |
| Database | Supabase | $0 |
| File Storage | Cloudinary | $0 |
| Domain | Namecheap | ~$2/year |
| **TOTAL** | **Everything** | **$0/month** |

**You can launch a full-featured resume builder for blue-collar workers with ZERO cost.**

When you get paying customers → upgrade to paid tiers and profit! 🚀

