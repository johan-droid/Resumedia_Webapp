# ResumeDia - Production Grade Tech Stack Outline
## Blue-Collar Resume Maker with AI-Powered ATS & Chat Features

---

## 1. PROJECT OVERVIEW (Based on Your Wireframe)

### **Core User Flow:**
```
HOME PAGE 
  ↓ (All Care & Features)
RESUME MAKER PAGE 
  ├─ Chat Section (Mic + Message Box)
  ├─ Preview Section
  └─ Resume Building Interface
    ↓
ATS VALIDATION PAGE (Upload Document Check)
  ├─ ATS Score Analysis
  ├─ AD Suggestions (AI-powered improvements)
  └─ Score Display
    ↓
JOB WINDOW (Job Recommendations)
  └─ Suggestions from uploaded document
    ↓
RESUMES ALREADY MADE (Gallery)
  └─ User's resume collection
```

### **Key Features to Build:**
1. **Resume Maker** - Drag & drop builder with templates
2. **Chat-Based Assistance** - Mic input + text suggestions
3. **ATS Optimizer** - Upload resume → Get ATS score + AI suggestions
4. **Job Recommendations** - Surface relevant jobs based on resume
5. **Resume Gallery** - Store & manage multiple resumes
6. **Offline Capability** - Work without internet
7. **PDF Export** - Download as PDF

---

## 2. FRONTEND STACK (Client-Side Architecture)

### **Core Framework:**
```
Next.js 15 (App Router)
├── React 19
├── TypeScript 5.7
└── TailwindCSS 4 + Shadcn/UI
```

### **Why This Combination?**
- **Next.js 15**: Server Components for SEO, better performance
- **React 19**: Concurrent rendering for complex forms, improved hooks
- **TypeScript**: Catch bugs before production
- **TailwindCSS**: Rapid styling, no CSS maintenance
- **Shadcn/UI**: Pre-built accessible components (buttons, inputs, modals)

### **State Management Layer:**
```
Zustand (Global State)
├── userStore (Auth, profile, preferences)
├── resumeStore (Current resume being edited)
├── templateStore (Available templates)
└── uiStore (UI states, modals, notifications)

React Query (Server State)
├── useQuery (Fetch ATS scores, job recommendations)
├── useMutation (Upload resume, save changes)
└── useInfiniteQuery (Pagination for resume gallery)
```

### **Offline & Sync Layer:**
```
IndexedDB (Local Storage)
├── Table: resumes (id, title, content, timestamp)
├── Table: drafts (unsaved changes)
├── Table: templates (cached templates)
└── Table: syncQueue (offline actions to sync)

Service Workers (PWA)
├── Cache static assets (Next.js output)
├── Cache API responses (templates, job data)
├── Background sync (When online, push drafts to server)
└── Offline page fallback

Sync Manager
├── Detect connection change
├── Queue changes while offline
└── Auto-sync on reconnection
```

### **Real-Time Features:**
```
Socket.io (WebSocket)
├── Chat messages (Mic input transcription)
├── Live preview updates (as user types)
├── Collaborative editing (if multi-user in future)
└── ATS score real-time feedback

Speech Recognition
├── Web Speech API (Native browser)
├── Fallback to AssemblyAI (for reliability)
└── Transcription to text → Suggestions
```

### **File Uploads & PDF:**
```
PDF Generation (Client-Side)
├── pdfkit (for layout-heavy resumes)
├── html2pdf (for template-based exports)
└── Sharp (Image optimization for PDFs)

File Upload
├── File validation (only PDF, DOCX)
├── Progress tracking
├── Client-side compression
└── FormData for multipart upload

Document Parsing
├── pdf-parse (Extract text from PDFs)
├── docx (Extract text from DOCX files)
└── regex parsing (Extract sections: Experience, Education)
```

### **Frontend Project Structure:**
```
src/
├── app/
│   ├── page.tsx (Home page)
│   ├── layout.tsx (Root layout)
│   ├── (auth)/
│   │   ├── login/page.tsx
│   │   ├── signup/page.tsx
│   │   └── layout.tsx
│   ├── (app)/
│   │   ├── resume-maker/page.tsx
│   │   ├── ats-check/page.tsx
│   │   ├── job-window/page.tsx
│   │   ├── my-resumes/page.tsx
│   │   └── settings/page.tsx
│   └── api/
│       ├── auth/[...nextauth]/route.ts
│       ├── upload/route.ts
│       └── sync/route.ts (Offline sync endpoint)
├── components/
│   ├── ResumeMaker/
│   │   ├── Editor.tsx
│   │   ├── Preview.tsx
│   │   ├── ChatSection.tsx
│   │   ├── TemplateSelector.tsx
│   │   └── DragDropBuilder.tsx
│   ├── ATS/
│   │   ├── FileUpload.tsx
│   │   ├── ScoreDisplay.tsx
│   │   ├── SuggestionsList.tsx
│   │   └── AIRecommendations.tsx
│   ├── Navigation/
│   │   ├── Header.tsx
│   │   ├── Sidebar.tsx
│   │   └── MobileNav.tsx
│   └── shared/
│       ├── Button.tsx
│       ├── Modal.tsx
│       ├── Toast.tsx
│       └── Loading.tsx
├── hooks/
│   ├── useResume.ts (Resume context)
│   ├── useOfflineSync.ts (Sync offline changes)
│   ├── useATS.ts (ATS check logic)
│   ├── useChat.ts (Chat with AI)
│   └── useStorage.ts (IndexedDB wrapper)
├── services/
│   ├── api.ts (API client with retry logic)
│   ├── storage.ts (IndexedDB operations)
│   ├── pdfGenerator.ts (PDF creation)
│   ├── documentParser.ts (PDF/DOCX parsing)
│   └── websocket.ts (Socket.io connection)
├── stores/
│   ├── userStore.ts (Zustand)
│   ├── resumeStore.ts (Zustand)
│   ├── templateStore.ts (Zustand)
│   └── uiStore.ts (Zustand)
├── utils/
│   ├── validators.ts (Input validation with Zod)
│   ├── formatters.ts (Date, phone, email formatting)
│   ├── constants.ts (API URLs, colors, templates)
│   └── helpers.ts (Utility functions)
└── styles/
    └── globals.css (Tailwind config)
```

### **Key Frontend Dependencies:**
```json
{
  "dependencies": {
    "next": "15.0.0",
    "react": "19.0.0",
    "react-dom": "19.0.0",
    "zustand": "^4.4.0",
    "@tanstack/react-query": "^5.28.0",
    "tailwindcss": "^4.0.0",
    "@shadcn/ui": "^0.8.0",
    "axios": "^1.6.0",
    "socket.io-client": "^4.7.0",
    "zod": "^3.22.0",
    "pdfkit": "^0.13.0",
    "pdf-parse": "^1.1.1",
    "docx": "^8.5.0",
    "dexie": "^3.2.4",
    "workbox-window": "^7.0.0",
    "react-beautiful-dnd": "^13.1.0",
    "react-hook-form": "^7.48.0"
  }
}
```

---

## 3. BACKEND STACK (Server-Side Architecture)

### **Core Framework:**
```
NestJS + Node.js (v20 LTS)
├── TypeScript 5.7
├── Express.js (underlying)
└── Microservices-ready
```

### **Backend Modules Structure:**
```
src/
├── main.ts (Bootstrap)
├── app.module.ts (Root module)
├── common/
│   ├── decorators/
│   │   ├── Auth.decorator.ts
│   │   ├── Roles.decorator.ts
│   │   └── RateLimit.decorator.ts
│   ├── filters/
│   │   ├── HttpExceptionFilter.ts
│   │   └── ValidationExceptionFilter.ts
│   ├── guards/
│   │   ├── JwtAuthGuard.ts
│   │   ├── RolesGuard.ts
│   │   └── RateLimitGuard.ts
│   ├── interceptors/
│   │   ├── LoggingInterceptor.ts
│   │   ├── TransformInterceptor.ts
│   │   └── ErrorInterceptor.ts
│   ├── pipes/
│   │   └── ValidationPipe.ts
│   └── middleware/
│       ├── CorsMiddleware.ts
│       └── LoggerMiddleware.ts
├── auth/
│   ├── auth.service.ts (JWT, refresh tokens)
│   ├── auth.controller.ts
│   ├── jwt.strategy.ts
│   ├── local.strategy.ts
│   └── auth.module.ts
├── users/
│   ├── users.service.ts (CRUD operations)
│   ├── users.controller.ts
│   ├── users.module.ts
│   ├── dto/
│   │   ├── create-user.dto.ts
│   │   └── update-user.dto.ts
│   └── entities/
│       └── user.entity.ts
├── resumes/
│   ├── resumes.service.ts
│   ├── resumes.controller.ts
│   ├── resumes.module.ts
│   ├── dto/
│   │   ├── create-resume.dto.ts
│   │   ├── update-resume.dto.ts
│   │   └── resume-query.dto.ts
│   └── entities/
│       └── resume.entity.ts
├── ats/ (ATS Scoring Engine)
│   ├── ats.service.ts (Core ATS logic)
│   ├── ats.controller.ts
│   ├── ats.module.ts
│   ├── scanner.service.ts (Resume scanning)
│   ├── suggester.service.ts (AI suggestions)
│   ├── matcher.service.ts (Job matching)
│   └── dto/
│       └── ats-check.dto.ts
├── chat/
│   ├── chat.gateway.ts (WebSocket handler)
│   ├── chat.service.ts
│   ├── chat.module.ts
│   ├── ai-assist.service.ts (AI suggestions)
│   └── speech-service.ts (Transcription)
├── jobs/
│   ├── jobs.service.ts (Job recommendations)
│   ├── jobs.controller.ts
│   ├── jobs.module.ts
│   └── dto/
│       └── job-query.dto.ts
├── upload/
│   ├── upload.service.ts
│   ├── upload.controller.ts
│   ├── upload.module.ts
│   ├── parsers/
│   │   ├── pdf-parser.ts
│   │   └── docx-parser.ts
│   └── validators/
│       └── file-validator.ts
├── templates/
│   ├── templates.service.ts
│   ├── templates.controller.ts
│   ├── templates.module.ts
│   └── dto/
│       └── template.dto.ts
├── notifications/
│   ├── notifications.service.ts
│   ├── email.service.ts (SendGrid)
│   ├── sms.service.ts (Twilio - optional)
│   └── notifications.module.ts
├── sync/
│   ├── sync.service.ts (Handle offline sync)
│   ├── sync.controller.ts
│   └── sync.module.ts
└── config/
    ├── database.config.ts
    ├── jwt.config.ts
    ├── redis.config.ts
    └── aws.config.ts
```

### **Database Layer (PostgreSQL):**
```sql
-- Users Table
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  full_name VARCHAR(255),
  phone VARCHAR(20),
  profession VARCHAR(100), -- e.g., "Electrician", "Plumber"
  experience_level VARCHAR(50), -- "Entry", "Mid", "Senior"
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Resumes Table
CREATE TABLE resumes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL, -- "Electrician Resume", "Plumber Resume"
  template_id UUID REFERENCES templates(id),
  content JSONB NOT NULL, -- Structured resume data
  ats_score INTEGER, -- Last calculated ATS score (0-100)
  ats_last_checked TIMESTAMP,
  is_draft BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  INDEX idx_user_resumes (user_id),
  INDEX idx_ats_score (ats_score)
);

-- Resume Sections (Normalized)
CREATE TABLE resume_experiences (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  resume_id UUID NOT NULL REFERENCES resumes(id) ON DELETE CASCADE,
  job_title VARCHAR(255),
  company VARCHAR(255),
  start_date DATE,
  end_date DATE,
  description TEXT,
  is_current BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW(),
  INDEX idx_resume_experiences (resume_id)
);

CREATE TABLE resume_education (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  resume_id UUID NOT NULL REFERENCES resumes(id) ON DELETE CASCADE,
  school VARCHAR(255),
  degree VARCHAR(100),
  field VARCHAR(100),
  graduation_date DATE,
  description TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  INDEX idx_resume_education (resume_id)
);

CREATE TABLE resume_skills (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  resume_id UUID NOT NULL REFERENCES resumes(id) ON DELETE CASCADE,
  skill_name VARCHAR(100),
  proficiency_level VARCHAR(50), -- "Beginner", "Intermediate", "Expert"
  endorsements INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  INDEX idx_resume_skills (resume_id)
);

-- Templates Table
CREATE TABLE templates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  description TEXT,
  category VARCHAR(100), -- "Modern", "Professional", "Creative"
  template_json JSONB NOT NULL, -- Template structure
  industry VARCHAR(100), -- "Construction", "Healthcare", "Trades"
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT NOW()
);

-- ATS Scores Table (History)
CREATE TABLE ats_scores (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  resume_id UUID NOT NULL REFERENCES resumes(id) ON DELETE CASCADE,
  score INTEGER,
  issues JSONB, -- Array of ATS issues found
  suggestions JSONB, -- Array of AI suggestions
  checked_at TIMESTAMP DEFAULT NOW(),
  INDEX idx_resume_ats_scores (resume_id)
);

-- Chat Messages Table
CREATE TABLE chat_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  resume_id UUID REFERENCES resumes(id) ON DELETE CASCADE,
  message_text TEXT NOT NULL,
  is_user_message BOOLEAN DEFAULT TRUE,
  ai_response TEXT,
  context JSONB, -- Additional context (e.g., which section user is editing)
  created_at TIMESTAMP DEFAULT NOW(),
  INDEX idx_user_chat (user_id),
  INDEX idx_resume_chat (resume_id)
);

-- Jobs Recommendations Table
CREATE TABLE job_recommendations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  resume_id UUID REFERENCES resumes(id),
  job_title VARCHAR(255),
  company VARCHAR(255),
  location VARCHAR(255),
  salary_range VARCHAR(100),
  job_description TEXT,
  match_score DECIMAL(3,2), -- 0.0 to 1.0
  external_job_id VARCHAR(255), -- ID from external job API
  source VARCHAR(50), -- "indeed", "linkedin", "ziprecruiter"
  created_at TIMESTAMP DEFAULT NOW(),
  INDEX idx_user_jobs (user_id),
  INDEX idx_match_score (match_score)
);

-- Sync Queue (For offline changes)
CREATE TABLE sync_queue (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id),
  action VARCHAR(50), -- "CREATE", "UPDATE", "DELETE"
  entity_type VARCHAR(50), -- "resume", "experience", "skill"
  entity_id VARCHAR(255),
  payload JSONB, -- The data to sync
  synced_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  INDEX idx_unsync (user_id, synced_at)
);
```

### **ORM & Database Connection:**
```typescript
// Prisma (ORM)
// prisma/schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id            String    @id @default(cuid())
  email         String    @unique
  passwordHash  String
  fullName      String?
  phone         String?
  profession    String?   // e.g., "Electrician"
  experienceLevel String?
  
  resumes       Resume[]
  chatMessages  ChatMessage[]
  jobRecommendations JobRecommendation[]
  syncQueue     SyncQueueItem[]
  
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
  
  @@index([email])
}

model Resume {
  id            String    @id @default(cuid())
  userId        String
  user          User      @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  title         String
  templateId    String?
  template      Template? @relation(fields: [templateId], references: [id])
  content       Json      // Full resume JSON
  atsScore      Int?
  atsLastChecked DateTime?
  isDraft       Boolean   @default(true)
  
  experiences   ResumeExperience[]
  educations    ResumeEducation[]
  skills        ResumeSkill[]
  atsScores     ATSScore[]
  chatMessages  ChatMessage[]
  jobRecommendations JobRecommendation[]
  
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
  
  @@index([userId])
  @@index([atsScore])
}

// ... (other models similarly defined)
```

### **Key Backend Dependencies:**
```json
{
  "dependencies": {
    "@nestjs/common": "^10.0.0",
    "@nestjs/core": "^10.0.0",
    "@nestjs/jwt": "^11.0.0",
    "@nestjs/passport": "^10.0.0",
    "@nestjs/websockets": "^10.0.0",
    "@nestjs/platform-socket.io": "^10.0.0",
    "@prisma/client": "^5.7.0",
    "passport": "^0.7.0",
    "passport-jwt": "^4.0.0",
    "passport-local": "^1.0.0",
    "bcryptjs": "^2.4.3",
    "jsonwebtoken": "^9.1.0",
    "redis": "^4.6.0",
    "socket.io": "^4.7.0",
    "class-validator": "^0.14.0",
    "class-transformer": "^0.5.0",
    "openai": "^4.26.0",
    "axios": "^1.6.0",
    "pdfjs-dist": "^3.11.174",
    "pdf-parse": "^1.1.1",
    "docx": "^8.5.0",
    "@sendgrid/mail": "^7.7.0",
    "multer": "^1.4.5",
    "helmet": "^7.1.0",
    "compression": "^1.7.4",
    "morgan": "^1.10.0",
    "dotenv": "^16.3.1"
  }
}
```

---

## 4. AI & NLP LAYER (Critical for ATS & Chat)

### **Chosen: OpenAI API (GPT-4) + Pinecone (Vector DB)**

### **Why These?**
- **GPT-4**: Most accurate for understanding resume context, ATS requirements
- **Pinecone**: Vector embeddings for job matching (semantic similarity)
- **Alternative**: Anthropic Claude for privacy-conscious approach

### **AI Service Integration:**
```typescript
// src/chat/ai-assist.service.ts
import { OpenAI } from 'openai'

@Injectable()
export class AIAssistService {
  private openai: OpenAI

  constructor() {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    })
  }

  // Generate suggestions for resume improvement
  async generateSuggestions(
    resumeContent: string,
    jobDescription?: string
  ): Promise<string[]> {
    const prompt = `You are an expert resume reviewer for blue-collar professionals.
    
    Resume:
    ${resumeContent}
    
    ${jobDescription ? `Job Description:\n${jobDescription}` : ''}
    
    Provide 5 specific, actionable suggestions to improve this resume for ATS (Applicant Tracking System) compatibility.
    Format as JSON array of strings.`

    const response = await this.openai.chat.completions.create({
      model: 'gpt-4-turbo',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.7,
      max_tokens: 500
    })

    return JSON.parse(response.choices[0].message.content)
  }

  // Chat assistance for resume building
  async chatAssistance(
    userMessage: string,
    resumeContext: string,
    conversationHistory: Array<{ role: string; content: string }>
  ): Promise<string> {
    conversationHistory.push({
      role: 'user',
      content: userMessage
    })

    const response = await this.openai.chat.completions.create({
      model: 'gpt-4-turbo',
      messages: [
        {
          role: 'system',
          content: `You are a helpful resume assistant for blue-collar workers. 
          You help them write better resumes for their field (construction, plumbing, electrical work, etc).
          Be concise, supportive, and focus on practical advice. Current resume context: ${resumeContext}`
        },
        ...conversationHistory as any
      ],
      temperature: 0.8,
      max_tokens: 300
    })

    return response.choices[0].message.content
  }
}
```

### **ATS Scoring Engine:**
```typescript
// src/ats/ats.service.ts
@Injectable()
export class ATSService {
  async calculateATSScore(
    resumeText: string,
    jobDescription?: string
  ): Promise<{ score: number; issues: string[]; suggestions: string[] }> {
    
    // 1. Extract keywords from job description
    const jobKeywords = await this.extractKeywords(jobDescription)
    
    // 2. Extract keywords from resume
    const resumeKeywords = await this.extractKeywords(resumeText)
    
    // 3. Check for ATS-unfriendly elements
    const issues = this.checkATSIssues(resumeText)
    
    // 4. Calculate match score
    const matchScore = this.calculateMatchScore(resumeKeywords, jobKeywords)
    
    // 5. Check formatting (most ATS systems hate these)
    const formattingIssues = this.checkFormatting(resumeText)
    
    const score = Math.round(
      (matchScore * 0.6) + 
      ((100 - formattingIssues.length * 5) * 0.4)
    )

    // 6. Get AI suggestions
    const suggestions = await this.aiAssist.generateSuggestions(resumeText)

    return {
      score: Math.min(100, score),
      issues: [...issues, ...formattingIssues],
      suggestions
    }
  }

  private checkATSIssues(text: string): string[] {
    const issues: string[] = []

    // Check for common ATS killers
    if (text.includes('OBJECTIVE') && text.length < 200) {
      issues.push('Weak objective statement - ATS systems skip vague objectives')
    }

    if (!this.hasEmailInText(text)) {
      issues.push('Email not found in resume - ATS systems need clear contact info')
    }

    if (!this.hasPhoneInText(text)) {
      issues.push('Phone number not found - ATS systems need clear contact info')
    }

    if (text.split('\n').length < 10) {
      issues.push('Resume too short - ATS systems prefer detailed descriptions')
    }

    return issues
  }

  private checkFormatting(text: string): string[] {
    const issues: string[] = []

    // Tables, columns, headers cause parsing issues
    if (text.includes('\t') && text.match(/\t{2,}/)) {
      issues.push('Multiple tabs detected - ATS may misparse columns')
    }

    // Unusual characters
    if (text.match(/[®™©]/)) {
      issues.push('Special symbols found - Remove ®™© symbols for ATS compatibility')
    }

    // Dates in unusual format
    if (!text.match(/\d{1,2}\/\d{1,2}\/\d{4}|\d{4}-\d{2}-\d{2}/)) {
      issues.push('Date format unclear - Use MM/DD/YYYY or YYYY-MM-DD')
    }

    return issues
  }
}
```

### **Job Matching with Pinecone:**
```typescript
// src/jobs/job-matcher.service.ts
import { Pinecone } from '@pinecone-database/pinecone'

@Injectable()
export class JobMatcherService {
  private pc: Pinecone

  constructor() {
    this.pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY })
  }

  async findMatchingJobs(
    resumeContent: string,
    limit: number = 10
  ): Promise<JobRecommendation[]> {
    // 1. Get embedding of resume
    const resumeEmbedding = await this.getEmbedding(resumeContent)

    // 2. Query Pinecone for similar jobs
    const index = this.pc.Index('jobs')
    const queryResponse = await index.query({
      vector: resumeEmbedding,
      topK: limit,
      includeMetadata: true
    })

    // 3. Map results to job recommendations
    return queryResponse.matches.map(match => ({
      jobId: match.metadata.jobId,
      title: match.metadata.title,
      company: match.metadata.company,
      matchScore: match.score,
      description: match.metadata.description
    }))
  }

  private async getEmbedding(text: string): Promise<number[]> {
    const response = await fetch('https://api.openai.com/v1/embeddings', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'text-embedding-3-small',
        input: text
      })
    })

    const data = await response.json()
    return data.data[0].embedding
  }
}
```

---

## 5. SPEECH & TRANSCRIPTION (Chat Mic Feature)

### **Chosen: AssemblyAI (Backend) + Web Speech API (Frontend)**

### **Why AssemblyAI?**
- Highly accurate transcription for various accents (important for blue-collar workers)
- Supports real-time transcription
- Affordable ($0.15 per hour)
- Automatic punctuation

### **Implementation:**
```typescript
// Frontend: Web Speech API (Free, Built-in)
const useSpeechRecognition = () => {
  const [transcript, setTranscript] = useState('')
  const [listening, setListening] = useState(false)

  const startListening = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    const recognition = new SpeechRecognition()
    
    recognition.continuous = true
    recognition.interimResults = true
    
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
    }
    
    recognition.start()
    setListening(true)
  }

  return { transcript, listening, startListening }
}

// Backend: AssemblyAI for reliable transcription
@Injectable()
export class SpeechService {
  private assemblyAI: AssemblyAI

  constructor() {
    this.assemblyAI = new AssemblyAI({
      apiKey: process.env.ASSEMBLY_AI_KEY
    })
  }

  async transcribeAudio(audioUrl: string): Promise<string> {
    const transcript = await this.assemblyAI.transcripts.transcribe({
      audio_url: audioUrl,
      language_code: 'en_us'
    })

    return transcript.text
  }
}
```

---

## 6. FILE UPLOAD & DOCUMENT PARSING

### **PDF/DOCX Parser Service:**
```typescript
// src/upload/parsers/document-parser.ts
@Injectable()
export class DocumentParserService {
  
  async parseResume(file: Express.Multer.File): Promise<ParsedResume> {
    let text: string

    if (file.mimetype === 'application/pdf') {
      text = await this.parsePDF(file.buffer)
    } else if (
      file.mimetype ===
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ) {
      text = await this.parseDOCX(file.buffer)
    } else {
      throw new BadRequestException('Unsupported file format')
    }

    // Extract sections
    return this.extractSections(text)
  }

  private async parsePDF(buffer: Buffer): Promise<string> {
    const pdf = await pdfParse(buffer)
    return pdf.text
  }

  private async parseDOCX(buffer: Buffer): Promise<string> {
    const docxData = await mammoth.extractRawText({ arrayBuffer: buffer })
    return docxData.value
  }

  private extractSections(text: string): ParsedResume {
    const sections = {
      contact: this.extractContact(text),
      summary: this.extractSummary(text),
      experience: this.extractExperience(text),
      education: this.extractEducation(text),
      skills: this.extractSkills(text),
      certifications: this.extractCertifications(text)
    }

    return sections
  }

  private extractContact(text: string) {
    const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/
    const phoneRegex = /(?:\+?1[-.\s]?)?\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})/

    return {
      email: text.match(emailRegex)?.[0],
      phone: text.match(phoneRegex)?.[0]
    }
  }

  private extractExperience(text: string) {
    // Uses regex and AI to extract experience blocks
    const experienceSection = text.match(/EXPERIENCE[\s\S]*?(?=EDUCATION|SKILLS|$)/i)
    
    if (!experienceSection) return []

    // Parse individual experiences
    return experienceSection[0].split(/\n(?=[A-Z])/).map(exp => ({
      jobTitle: this.extractJobTitle(exp),
      company: this.extractCompany(exp),
      duration: this.extractDuration(exp),
      description: exp.trim()
    }))
  }
}
```

---

## 7. REDIS CACHING & SESSION MANAGEMENT

### **Redis Configuration:**
```typescript
// src/config/redis.config.ts
import Redis from 'redis'

export const redisClient = Redis.createClient({
  url: process.env.REDIS_URL || 'redis://localhost:6379',
  socket: {
    reconnectStrategy: (retries) => Math.min(retries * 50, 500)
  }
})

// Cache strategies
export class CacheService {
  
  // Cache ATS scores (1 hour validity)
  async cacheATSScore(resumeId: string, score: number) {
    await redisClient.setEx(
      `ats:${resumeId}`,
      3600, // 1 hour
      JSON.stringify(score)
    )
  }

  // Cache job recommendations (12 hours)
  async cacheJobRecommendations(userId: string, jobs: Job[]) {
    await redisClient.setEx(
      `jobs:${userId}`,
      43200, // 12 hours
      JSON.stringify(jobs)
    )
  }

  // Rate limiting
  async checkRateLimit(userId: string): Promise<boolean> {
    const key = `rate-limit:${userId}`
    const current = await redisClient.incr(key)
    
    if (current === 1) {
      await redisClient.expire(key, 60) // 1 minute window
    }
    
    return current <= 100 // 100 requests per minute
  }
}
```

---

## 8. SECURITY ARCHITECTURE

### **Authentication Flow:**
```typescript
// JWT + httpOnly Cookies
@Controller('auth')
export class AuthController {
  @Post('login')
  async login(@Body() credentials: LoginDto, @Res() res: Response) {
    const user = await this.authService.validateUser(
      credentials.email,
      credentials.password
    )
    
    if (!user) {
      throw new UnauthorizedException('Invalid credentials')
    }

    // Generate tokens
    const accessToken = this.authService.generateAccessToken(user)
    const refreshToken = this.authService.generateRefreshToken(user)

    // Store refresh token in Redis
    await redisClient.setEx(
      `refresh:${user.id}`,
      7 * 24 * 60 * 60, // 7 days
      refreshToken
    )

    // Return in httpOnly cookie
    res.cookie('accessToken', accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 3600000 // 1 hour
    })

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
    })

    return res.json({ success: true })
  }
}
```

### **Input Validation (Zod + Class Validator):**
```typescript
// DTO with validation
export class CreateResumeDto {
  @IsString()
  @MinLength(3)
  @MaxLength(255)
  title: string

  @IsUUID()
  templateId: string

  @IsObject()
  content: Record<string, any>
}

// Request automatically validated
@Post()
@UseGuards(JwtAuthGuard)
async createResume(
  @Body(new ValidationPipe()) createResumeDto: CreateResumeDto,
  @Req() req: Request
) {
  return await this.resumesService.create(req.user.id, createResumeDto)
}
```

### **Rate Limiting:**
```typescript
@UseGuards(RateLimitGuard)
@Post('ats/check')
async checkATS(@Body() dto: ATSCheckDto) {
  // Max 10 ATS checks per hour per user
  return await this.atsService.calculateScore(dto)
}
```

---

## 9. DEPLOYMENT & INFRASTRUCTURE

### **Docker Setup:**
```dockerfile
# Dockerfile (Backend)
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["node", "dist/main.js"]
```

```dockerfile
# Dockerfile (Frontend)
FROM node:20-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./
RUN npm ci --only=production

EXPOSE 3000
CMD ["npm", "start"]
```

### **Docker Compose (Local Development):**
```yaml
version: '3.8'

services:
  postgres:
    image: postgres:16-alpine
    environment:
      POSTGRES_DB: resumedia_db
      POSTGRES_USER: resumedia
      POSTGRES_PASSWORD: ${DB_PASSWORD}
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"

  backend:
    build: ./backend
    ports:
      - "3000:3000"
    depends_on:
      - postgres
      - redis
    environment:
      DATABASE_URL: postgresql://resumedia:${DB_PASSWORD}@postgres:5432/resumedia_db
      REDIS_URL: redis://redis:6379
      JWT_SECRET: ${JWT_SECRET}
      OPENAI_API_KEY: ${OPENAI_API_KEY}
    volumes:
      - ./backend/src:/app/src

  frontend:
    build: ./frontend
    ports:
      - "3001:3000"
    depends_on:
      - backend
    environment:
      NEXT_PUBLIC_API_URL: http://localhost:3000
    volumes:
      - ./frontend/src:/app/src
```

### **Production Deployment (AWS/Railway):**

**Option 1: Railway (Easiest)**
```yaml
# railway.json
{
  "build": {
    "builder": "dockerfile"
  },
  "deploy": {
    "startCommand": "npm start",
    "restartPolicyType": "on_failure"
  }
}
```

**Option 2: AWS ECS**
```bash
# Build and push images
docker build -t resumedia-backend:latest ./backend
docker tag resumedia-backend:latest ${AWS_ACCOUNT}.dkr.ecr.us-east-1.amazonaws.com/resumedia-backend:latest
docker push ${AWS_ACCOUNT}.dkr.ecr.us-east-1.amazonaws.com/resumedia-backend:latest

# Deploy with ECS Fargate
aws ecs create-service \
  --cluster resumedia \
  --service-name resumedia-backend \
  --task-definition resumedia-backend:1 \
  --desired-count 2 \
  --launch-type FARGATE
```

### **CI/CD Pipeline (GitHub Actions):**
```yaml
# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Build & Test Backend
        run: |
          cd backend
          npm ci
          npm run lint
          npm run test
          npm run build

      - name: Build Frontend
        run: |
          cd frontend
          npm ci
          npm run lint
          npm run build

      - name: Push to Docker Registry
        run: |
          docker login -u ${{ secrets.DOCKER_USERNAME }} -p ${{ secrets.DOCKER_PASSWORD }}
          docker build -t resumedia-backend:${{ github.sha }} ./backend
          docker push resumedia-backend:${{ github.sha }}

      - name: Deploy to Railway
        run: |
          npm install -g railway
          railway deploy --token ${{ secrets.RAILWAY_TOKEN }}
```

---

## 10. IDENTIFIED BLIND SPOTS & FIXES

### **🚨 Blind Spot #1: Offline Sync Conflicts**
**Problem**: User edits resume offline, backend makes changes simultaneously → Data merge conflicts
**Solution**:
```typescript
// Implement operational transformation
export class SyncConflictResolver {
  async resolveConflict(
    clientData: Resume,
    serverData: Resume,
    lastKnownVersion: Resume
  ): Promise<Resume> {
    // If conflict only in different sections → merge
    // If conflict in same section → server wins, notify user
    // Store client version for user to review
    
    const merged = this.mergeChanges(lastKnownVersion, clientData, serverData)
    return merged
  }
}
```

### **🚨 Blind Spot #2: Large File Uploads**
**Problem**: 10MB resume uploads → timeout/memory issues
**Solution**:
```typescript
// Chunked upload
export class ChunkedUploadService {
  async uploadChunk(
    chunk: Buffer,
    chunkIndex: number,
    totalChunks: number,
    fileId: string
  ) {
    // Store chunk in S3
    await s3.upload({
      Bucket: 'resumedia-uploads',
      Key: `chunks/${fileId}/${chunkIndex}`,
      Body: chunk
    })

    // When all chunks received, merge
    if (chunkIndex === totalChunks - 1) {
      await this.mergeChunks(fileId)
    }
  }
}
```

### **🚨 Blind Spot #3: ATS Score Gaming**
**Problem**: Users add hidden keywords to boost score → Low quality resumes get high scores
**Solution**:
```typescript
// Detect keyword stuffing
export class QualityCheckService {
  async detectKeywordStuffing(resume: string): Promise<boolean> {
    const wordFrequency = this.getWordFrequency(resume)
    
    // If same word appears 5+ times in 100 words → suspicious
    const keywordDensity = this.calculateKeywordDensity(wordFrequency)
    
    return keywordDensity > 0.15 // 15% keyword density is red flag
  }
}
```

### **🚨 Blind Spot #4: Mobile Optimization**
**Problem**: Blue-collar workers often use phones → UX must be mobile-first
**Solution**:
```typescript
// Mobile-first design
// Frontend: Use responsive grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {/* Mobile: 1 col, Tablet: 2 cols, Desktop: 3 cols */}
</div>

// Touch-friendly buttons
<button className="min-h-12 min-w-12 px-4 py-3">
  {/* Min 48x48px for touch targets */}
</button>

// Offline-first on mobile
// Cache frequently accessed pages
```

### **🚨 Blind Spot #5: Accessibility for Non-Tech Users**
**Problem**: Blue-collar users may not be tech-savvy → Complex UI = lost users
**Solution**:
```typescript
// WCAG 2.1 AA compliance
// 1. Keyboard navigation
<div role="button" tabIndex={0} onClick={handleClick} onKeyDown={(e) => {
  if (e.key === 'Enter' || e.key === ' ') handleClick()
}}>

// 2. Screen reader support
<label htmlFor="job-title">What's your job title?</label>
<input id="job-title" aria-label="Job title input" />

// 3. Color contrast
// Use colors with contrast ratio >= 4.5:1 for text

// 4. Simple language
// Avoid jargon, use short sentences
```

### **🚨 Blind Spot #6: Data Privacy (GDPR/CCPA)**
**Problem**: Storing user resumes = storing sensitive data → Legal liability
**Solution**:
```typescript
// Implement data deletion
@Delete('user/:id')
async deleteUser(@Param('id') userId: string) {
  // Delete all user data
  await db.user.delete({ where: { id: userId } })
  
  // Delete all resumes
  await db.resume.deleteMany({ where: { userId } })
  
  // Delete from S3
  await s3.deleteFolder(`user-uploads/${userId}`)
  
  // Anonymize in analytics
  await analytics.anonymize(userId)
  
  // Log deletion for compliance
  await auditLog.create({
    action: 'USER_DELETED',
    userId,
    timestamp: new Date()
  })
}
```

### **🚨 Blind Spot #7: Job Market Data**
**Problem**: Where do job recommendations come from?
**Solution**:
```typescript
// Integrate job APIs
// Option 1: Indeed API (need partnerships)
// Option 2: LinkedIn API (expensive)
// Option 3: JSearch (cheap, easy) - https://rapidapi.com/laimoon-laimoon-default/api/jsearch
// Option 4: Build scraper (risky, ToS violation)

// Recommendation: Use Pinecone + weekly batch job updates
// Preload jobs into Pinecone, sync weekly
```

### **🚨 Blind Spot #8: Transcription Quality**
**Problem**: Worker with heavy accent → Speech recognition fails
**Solution**:
```typescript
// Use AssemblyAI instead of browser Speech API
// AssemblyAI trained on diverse accents
// Fallback to manual text input
// Show user what was transcribed, let them edit
```

### **🚨 Blind Spot #9: Cost Scalability**
**Problem**: OpenAI API calls = $$$ at scale
**Solution**:
```typescript
// Cache AI responses
const cacheKey = `ai:${resumeId}:suggestions`
const cached = await redis.get(cacheKey)
if (cached) return JSON.parse(cached)

// Get new suggestions
const suggestions = await openai.chat.completions.create(...)
await redis.setEx(cacheKey, 86400, JSON.stringify(suggestions)) // 24h cache

// Batch processing for non-urgent tasks
// Use job queue (Bull) for background ATS checks
```

### **🚨 Blind Spot #10: PDF Parsing Accuracy**
**Problem**: Different resume formats → Parsing failures
**Solution**:
```typescript
// Use multiple parsers
try {
  text = await pdfParse(buffer)
} catch {
  // Fallback: Use Textract (AWS)
  const response = await aws.textract.detectDocumentText({
    Document: { Bytes: buffer }
  })
  text = response.DocumentMetadata.Pages.map(p => p.Text).join('')
}

// Validate extracted data
const validation = this.validateParsedResume(text)
if (!validation.isValid) {
  return { success: false, message: 'Could not parse resume. Please try manual entry.' }
}
```

---

## 11. FINAL TECH STACK SUMMARY TABLE

| Layer | Technology | Why | Cost |
|-------|-----------|-----|------|
| **Frontend** | Next.js 15 + React 19 | SSR, built-in optimization | Free |
| **Frontend State** | Zustand | Minimal boilerplate | Free |
| **Frontend Offline** | PWA + IndexedDB + Service Workers | Blue-collar users need offline | Free |
| **Frontend UI** | TailwindCSS + Shadcn/UI | Rapid development, accessible | Free |
| **Backend** | NestJS + Node.js | Structured, scalable | Free |
| **Backend Validation** | Zod + class-validator | Type-safe, production-ready | Free |
| **Database** | PostgreSQL | Relational, reliable, affordable | $10-50/mo |
| **Database ORM** | Prisma | Type-safe, auto-migrations | Free |
| **Cache/Session** | Redis | Fast, built for scale | $5-20/mo |
| **Authentication** | JWT + bcryptjs | Stateless, secure | Free |
| **AI/Chat** | OpenAI GPT-4 + Pinecone | Best accuracy + semantic search | $20-100/mo |
| **Speech** | AssemblyAI + Web Speech API | Accurate transcription | $15-50/mo |
| **Document Parsing** | pdf-parse + docx + AWS Textract | Reliable extraction | $0.50 per page |
| **Email** | SendGrid | Reliable delivery | Free-$100/mo |
| **File Storage** | AWS S3 | Scalable, reliable | $1-10/mo |
| **Monitoring** | Sentry + Better Stack | Error tracking + uptime | Free-$50/mo |
| **Hosting (Backend)** | Railway or AWS ECS | Easy scaling | $10-100/mo |
| **Hosting (Frontend)** | Vercel | Next.js optimized | Free-$20/mo |
| **CI/CD** | GitHub Actions | Free with GitHub | Free |
| **Total Monthly Cost** | | MVP: $50-150, Growth: $200-300 | Scales with usage |

---

## 12. PHASED ROLLOUT PLAN

### **Phase 1: MVP (Weeks 1-8)**
- ✅ User authentication
- ✅ Basic resume builder (3 templates)
- ✅ PDF export
- ✅ Simple ATS score (keyword matching)
- **Cost**: $50/month
- **Users**: Beta testers (50)

### **Phase 2: AI Features (Weeks 9-16)**
- ✅ OpenAI integration (chat + suggestions)
- ✅ Better ATS scoring (semantic analysis)
- ✅ Job recommendations (Pinecone)
- ✅ Speech recognition
- **Cost**: $100/month
- **Users**: 500

### **Phase 3: Scale (Weeks 17-24)**
- ✅ Multiple job APIs
- ✅ User analytics dashboard
- ✅ Testimonials & social proof
- ✅ Referral system
- **Cost**: $200/month
- **Users**: 10,000

### **Phase 4: Enterprise (Weeks 25+)**
- ✅ Bulk resume upload
- ✅ Team features
- ✅ Advanced analytics
- ✅ Integrations (LinkedIn, Indeed)
- **Cost**: $500+/month
- **Users**: 100,000+

---

## 13. SUCCESS METRICS & KPIs

| Metric | Target | How to Measure |
|--------|--------|-----------------|
| User Signup | 1,000 in 3 months | Google Analytics |
| Resume Creation Rate | 70% of signups create resume | Database queries |
| ATS Check Usage | 50% of created resumes checked | Event tracking |
| Job Apply Rate | 40% apply to recommendations | Click tracking |
| User Retention | 30-day retention = 40% | Cohort analysis |
| App Performance | < 2s load time | Lighthouse CI |
| Uptime | 99.9% | Monitoring service |
| Cost per User | < $0.50 | Simple division |

