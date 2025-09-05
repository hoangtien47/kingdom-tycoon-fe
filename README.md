# Tycoon Kingdom - Landing Page

A static Next.js website for the Tycoon Kingdom blockchain game. Built with modern web technologies and optimized for both desktop and mobile devices.

## 🎮 About Tycoon Kingdom

From ashes of ruin, a new kingdom rises. Tycoon Kingdom is an immersive kingdom-building game that combines strategic gameplay with blockchain technology, allowing players to truly own their in-game assets and participate in a sustainable token economy.

## 🚀 Features

- **Responsive Design**: Optimized for desktop and mobile devices
- **Smooth Navigation**: Single-page application with smooth scrolling between sections
- **Fantasy Theme**: Medieval/fantasy-inspired design with modern aesthetics
- **SEO Optimized**: Meta tags and structured content for better search visibility
- **Static Export**: Fully static website that can be deployed anywhere

## 🛠️ Technology Stack

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Static Export**: No server required for deployment

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main homepage
│   └── globals.css         # Global styles and Tailwind imports
└── components/
    ├── Navigation.tsx      # Fixed navigation bar
    ├── HeroSection.tsx     # Landing page hero
    ├── StorySection.tsx    # Game story narrative
    ├── ConceptSection.tsx  # Game features and concept
    ├── TokenSection.tsx    # $TKD token information
    ├── RoadmapSection.tsx  # Development roadmap
    ├── ContactSection.tsx  # Contact information and social links
    └── Footer.tsx          # Website footer
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone or download the project
2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

To create a static export:

```bash
npm run build
```

This will generate a `out/` directory with all static files ready for deployment.

## 📱 Sections Overview

### 1. Landing Page (Hero)
- **Title**: Tycoon Kingdom
- **Tagline**: "From ashes of ruin, a new kingdom rises."
- **Call-to-action buttons**: Play Now & Learn More

### 2. Story
- Narrative about monster waves, hunters, and kingdom restoration
- Sets the game's lore and context

### 3. Game Concept
- **7 Key Features**:
  - Game Concept
  - Gameplay mechanics
  - Character System
  - Management System
  - Equipment & Materials
  - Recruitment System
  - NFT Town integration

### 4. Token Implementation
- **$TKD Utility Token** details
- How tokens are earned and spent
- Economic sustainability mechanisms
- Utility and governance features

### 5. Growth Potential & Roadmap
- **Team Achievements**: Past successes and experience
- **4-Phase Roadmap**: From foundation to expansion
- **Market Potential**: Gaming and blockchain market size

### 6. Contact Us
- **Contact Information**:
  - Email: hello@tycounkingdom.com
  - Website: tycounkingdom.com
- **Social Media Links**:
  - Telegram, X (Twitter), Facebook, YouTube, TikTok
- **Newsletter Signup**

## 🎨 Design Features

### Color Scheme
- **Primary**: Orange/amber tones (#ed7611, #f19533)
- **Secondary**: Blue tones (#0ea5e9, #0284c7)
- **Background**: Dark theme with gradients
- **Text**: White and gray variations

### Typography
- **Headers**: Cinzel (fantasy font)
- **Special**: Uncial Antiqua (medieval font)
- **Body**: Inter (clean, readable)

### Animations
- Fade-in animations on scroll
- Hover effects on interactive elements
- Smooth transitions throughout

## 🌐 Deployment

The project is configured for static export and can be deployed to:

- **Vercel**: Connect your GitHub repository
- **Netlify**: Drag and drop the `out/` folder
- **GitHub Pages**: Upload the `out/` folder contents
- **Any static hosting**: Upload the `out/` folder

### Deployment Commands

```bash
# Build and export
npm run build

# The static files will be in the 'out' directory
```

## 📝 Content Customization

### Updating Content
- Edit component files in `src/components/` to modify section content
- Update contact information in `ContactSection.tsx`
- Modify roadmap phases in `RoadmapSection.tsx`
- Adjust token features in `TokenSection.tsx`

### Adding Images
- Place images in `public/images/`
- Update component references to use your actual images
- Consider optimizing images for web performance

### SEO Optimization
- Update meta tags in `src/app/layout.tsx`
- Add structured data if needed
- Ensure all images have alt text

## 🔧 Customization Guide

### Changing Colors
Edit `tailwind.config.ts` to modify the color scheme:

```typescript
colors: {
  primary: {
    // Your primary colors
  },
  secondary: {
    // Your secondary colors
  }
}
```

### Adding New Sections
1. Create a new component in `src/components/`
2. Import and add it to `src/app/page.tsx`
3. Add navigation link in `Navigation.tsx`

### Mobile Responsiveness
The site uses Tailwind's responsive utilities:
- `sm:` - Small screens (640px+)
- `md:` - Medium screens (768px+)
- `lg:` - Large screens (1024px+)

## 📄 License

This project is created for Tycoon Kingdom. All rights reserved.

## 🤝 Contributing

For questions or contributions, please contact:
- Email: hello@tycounkingdom.com
- Telegram: @tycounkingdom

---

**Note**: This is a landing page template. Replace placeholder content, images, and contact information with actual project details before deployment.
