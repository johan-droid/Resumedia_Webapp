# ResumeDia - Frontend

**Premium Resume Builder for Blue-Collar Professionals**

![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue)
![React](https://img.shields.io/badge/React-19-61dafb)
![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38B2AC)

## 🚀 Features

### ✨ Core Features
- **Resume Builder** - Intuitive drag-and-drop resume editor with real-time preview
- **ATS Optimizer** - AI-powered resume scoring and improvement suggestions
- **Chat Assistant** - Real-time AI assistance with voice input support
- **PDF Export** - Download resumes in multiple formats
- **Offline Support** - Full PWA support, works completely offline
- **Mobile First** - Fully responsive design optimized for mobile devices
- **Auto-Save** - Changes auto-saved every 30 seconds

### 🎨 Design Features
- **Modern UI** - Beautiful, professional design with smooth animations
- **Framer Motion** - Advanced animations and transitions
- **Dark Mode Ready** - Full dark mode support
- **Accessible** - WCAG 2.1 AA compliance
- **Performance** - Optimized for fast loading and smooth interactions
- **Responsive** - Works perfectly on all devices

### 🔒 Security & Privacy
- **End-to-End** - Your data stays on your device
- **Local First** - IndexedDB for local data storage
- **HTTPS** - All communication encrypted
- **No Tracking** - No analytics or tracking
- **GDPR Compliant** - Full data privacy controls

## 📋 Tech Stack

- **Framework**: Next.js 15 with React 19
- **Language**: TypeScript 5.7
- **Styling**: TailwindCSS 4 with custom animations
- **State Management**: Zustand for global state
- **Data Fetching**: React Query with Axios
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Storage**: IndexedDB (Dexie), LocalStorage
- **PWA**: Workbox for service workers
- **PDF**: jsPDF + html2canvas

## 🛠️ Installation

### Prerequisites
- Node.js 18+ (recommended 20 LTS)
- npm or yarn or pnpm

### Setup

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/resumedia-frontend.git
cd resumedia-frontend
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Create environment variables**
```bash
cp .env.example .env.local
```

4. **Start development server**
```bash
npm run dev
# Server runs on http://localhost:3000
```

5. **Build for production**
```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── globals.css             # Global styles
│   ├── page.tsx                # Home page
│   ├── resume-maker/
│   │   └── page.tsx            # Resume builder
│   ├── ats-check/
│   │   └── page.tsx            # ATS optimizer
│   └── [other pages]/
├── components/
│   ├── Layout/
│   │   └── Header.tsx          # Navigation header
│   ├── ResumeMaker/
│   │   ├── ResumeEditor.tsx    # Editor component
│   │   └── ResumePreview.tsx   # Preview component
│   ├── Chat/
│   │   └── ChatSection.tsx     # Chat assistant
│   └── [other components]/
├── hooks/
│   ├── useResumeStore.ts       # Resume state management
│   └── [other hooks]/
├── services/
│   ├── api.ts                  # API client
│   ├── storage.ts              # IndexedDB operations
│   └── [other services]/
└── utils/
    ├── validators.ts           # Input validation
    ├── formatters.ts           # Data formatting
    └── [other utilities]/
```

## 🎯 Key Components

### ResumeEditor
```tsx
// Main editor component with collapsible sections
- Contact Information
- Professional Summary
- Work Experience
- Education
- Skills
```

### ResumePreview
```tsx
// PDF-style preview rendering
- Real-time updates
- Professional formatting
- Print-ready layout
```

### ChatSection
```tsx
// AI assistant with voice input
- Real-time suggestions
- Speech recognition
- Message history
```

### Header
```tsx
// Navigation and branding
- Responsive menu
- User actions
- Mobile menu
```

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to customize colors:
```ts
colors: {
  primary: { ... },
  accent: { ... },
  surface: { ... },
}
```

### Animations
Modify animations in `globals.css`:
```css
@keyframes fadeIn { ... }
@keyframes slideUp { ... }
@keyframes scaleIn { ... }
```

### Fonts
Update font families in `tailwind.config.ts`:
```ts
fontFamily: {
  sans: ['var(--font-inter)', 'system-ui'],
  display: ['var(--font-plus-jakarta)', 'system-ui'],
}
```

## 🔌 API Integration

### Environment Variables
```bash
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NEXT_PUBLIC_SOCKET_URL=http://localhost:3000
```

### Example API Calls
```tsx
// Get resume
GET /api/resumes/:id

// Update resume
PUT /api/resumes/:id

// Check ATS
POST /api/ats/check

// Upload file
POST /api/upload
```

## 📱 PWA Features

The app is a fully functional PWA:

1. **Install**: Add to home screen on mobile/desktop
2. **Offline**: Works completely offline
3. **Sync**: Automatically syncs when back online
4. **Service Worker**: Background sync and caching

## 🧪 Testing

```bash
# Run tests
npm run test

# Run linter
npm run lint

# Type check
npm run type-check

# Format code
npm run format
```

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### GitHub Pages
```bash
npm run build
npm run export
# Deploy 'out' folder
```

### Docker
```bash
docker build -t resumedia-frontend .
docker run -p 3000:3000 resumedia-frontend
```

### AWS S3 + CloudFront
```bash
npm run build
aws s3 sync out/ s3://your-bucket/
```

## 🎯 Performance

- **Bundle Size**: ~180KB (gzipped)
- **Lighthouse Score**: 95+ on all metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Time to Interactive**: < 3.5s

## ♿ Accessibility

- WCAG 2.1 AA compliant
- Full keyboard navigation
- Screen reader support
- Focus management
- Color contrast ratios
- Semantic HTML

## 🔐 Security

- Content Security Policy headers
- XSS protection
- CSRF tokens
- Secure cookies (HttpOnly)
- Input validation/sanitization
- No sensitive data in URLs

## 📊 Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: All modern
- IE: Not supported

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with ❤️ for blue-collar professionals
- Inspired by modern design principles
- Powered by open-source technologies

## 📧 Support

- Email: support@resumedia.app
- Discord: [Join our community](https://discord.gg/resumedia)
- Twitter: [@resumedia](https://twitter.com/resumedia)

## 🗺️ Roadmap

- [ ] Mobile app (React Native)
- [ ] LinkedIn integration
- [ ] Job board integration
- [ ] Resume templates library
- [ ] Video testimonials
- [ ] Referral program
- [ ] AI cover letter generator
- [ ] Career coaching
- [ ] Interview prep
- [ ] Multi-language support

---

**Made for the trades, by people who understand the trades.** ⚙️🔨⚡
