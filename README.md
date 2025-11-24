# Vite React Blog - Technical Task Submission

## Demo Link:

## Overview

This project is a complete implementation of the Frontend Developer
Technical Task assigned by **Vynspire AI Labs**. It follows modern
frontend engineering standards with a clean architecture, performance
optimization, and strong TypeScript usage.

---

## Technologies Used & Why

### **1. Vite**

- Lightning-fast development server\
- Faster HMR and builds\
- Perfect for modern React dev workflows

### **2. React + TypeScript**

- Strong type safety\
- More predictable maintainability\
- 0 usage of `any`

### **3. Redux Toolkit + Redux Thunk (Hybrid Architecture)**

- Used exclusively for **authentication**\
- Clean, predictable global state\
- Modern Redux with minimal boilerplate\
- Thunk supports async login/register flows

### **4. React Query**

- Best choice for server-state\
- Caching, refetching, pagination support\
- Used for **Posts CRUD and listing**

### **5. React Hook Form + Yup**

- High-performance form handling\
- Excellent validation structure\
- Fewer component re-renders compared to Formik

### **6. Tailwind CSS**

- Utility‑first styling\
- Makes UI responsive quickly\
- Consistent design system

### **7. Context API (Dark/Light Mode)**

- Lightweight\
- No global render bloat\
- Clean UI state separation

### **8. React Router v6 + Lazy Loading**

- Clean component routing\
- Code splitting for performance

---

## Installation & Running the Project

### **1. Clone the repository**

```bash
git clone <your-github-link>
cd your-project-folder
```

### **2. Install dependencies**

```bash
npm install
```

### **3. Start development server**

```bash
npm run dev
```

### **4. Build for production**

```bash
npm run build
```

### **5. Preview production**

```bash
npm run preview
```

---

## Folder Structure (Simplified)

    src/
     ├── api/              # React Query API hooks
     ├── components/       # Reusable UI components
     ├── context/          # Theme context
     ├── redux/         # Redux slices + store
     ├── hooks/            # Auth + shared hooks
     ├── lib/              # Error boundary + utilities
     ├── pages/            # Screens (Login, Register, Posts, Landing)
     ├── routes/           # Routing config + protected routes
     ├── services/         # API wrappers (auth, posts)
     ├── types/            # TypeScript interfaces
     └── styles/           # Global + Tailwind styles
     └── layout/           # Layout for Dashboard and Home

---

## Credits & Attribution

This project may include UI inspirations or patterns derived from
external sources. Full credit goes to their original authors.

Possible referenced inspirations: - **Tailwind UI** - **Dribbble**
(various UI layout inspirations) - **Behance** - **Open-source React
projects**

If specific UI/UX or design assets were adapted, add credits below:

    https://dribbble.com/shots/26078497-Ai-Blog-website-Hero-section
     https://dribbble.com/shots/18491011-Login-page-Invooce
     https://www.behance.net/gallery/236104403/AI-Content-Writing-Brainwind-Audio-Brand-voice?tracking_source=search_projects|blog+website&l=0

---

## 📄 License

This project is prepared strictly for technical evaluation purposes
based on the requirement document:

Frontend Developer Test (ReactJS_Next.pdf)

You may reuse or modify it for learning and portfolio demonstrations.

---

## Developer

**Sujit Kumar Libi**\
Frontend Engineer --- React \| TypeScript \| Next.js\
Nepal
