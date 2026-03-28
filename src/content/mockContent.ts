import { SiteContent } from "../types/content";

export const mockContent: SiteContent = {
  settings: {
    title: "Juraj Žáček | Senior Graphic Designer & Content Specialist",
    ownerName: "Juraj Žáček",
    email: "jurajzacek13@gmail.com",
    location: "Bratislava, Slovakia",
    seo: {
      description: "Personal portfolio of Juraj Žáček, a senior graphic designer based in Bratislava. Specializing in high-performance social media content, motion graphics, and AI-driven visuals for global brands.",
      keywords: ["Graphic Design", "Motion Graphics", "AI Visuals", "Social Media Content", "Bratislava", "Slovakia"],
      ogImage: "/assets/og-image.jpg"
    }
  },
  navigation: [
    { id: "showreel", label: "Showreel", visible: true, order: 1 },
    { id: "work", label: "Selected Work", visible: true, order: 2 },
    { id: "about", label: "About", visible: true, order: 3 },
    { id: "services", label: "Services", visible: true, order: 4 },
    { id: "ar", label: "AR Filters", visible: true, order: 5 },
    { id: "collaboration", label: "Collaboration", visible: true, order: 6 },
    { id: "contact", label: "Contact", visible: true, order: 7 },
  ],
  hero: {
    eyebrow: "Senior Graphic Designer & Content Specialist",
    title: "High-performance content for global brands.",
    description: "I help brands and agencies create impactful social media content, motion graphics, and AI-assisted visuals that drive engagement and results.",
    ctaPrimary: { label: "Let's collaborate", href: "#contact" },
    ctaSecondary: { label: "View selected work", href: "#work" },
    stats: [
      { label: "Years Experience", value: "8+" },
      { label: "Projects Delivered", value: "200+" },
      { label: "Global Brands", value: "15+" },
    ]
  },
  showreel: {
    eyebrow: "Motion & Events Showreel",
    title: "Large-format motion design for global events.",
    description: "I specialize in creating high-impact visual content for large-scale conferences, stage screens, and immersive event environments. My experience includes on-site visual adaptation and designing for complex screen layouts that command attention in live production settings.",
    highlights: [
      "Conference Visuals",
      "Stage Screens",
      "Event Motion Design",
      "Large-format Content",
      "On-site Adaptation"
    ],
    poster: "/assets/showreel/poster.jpg",
    videoUrl: "/assets/showreel/reel.mp4",
    cta: { label: "Watch Showreel", href: "#showreel" },
    featured: true
  },
  projects: [
    {
      id: "biedronka-social",
      slug: "biedronka-social",
      title: "Biedronka Social Media Content",
      client: "Biedronka",
      agency: "MAYER/McCANN",
      category: "Social Media Graphics",
      type: "Social Content",
      shortDescription: "High-performance social media graphics and carousels for Poland's largest supermarket chain.",
      deliverables: ["Social Media Graphics", "Carousel Design", "Campaign Visuals"],
      mediaType: "image",
      status: "ready",
      year: "2024-2025",
      platforms: ["TikTok", "Facebook"],
      poster: "/assets/work/biedronka/poster.jpg",
      previewImages: [
        "/assets/work/biedronka/preview-01.jpg",
        "/assets/work/biedronka/preview-02.jpg",
        "/assets/work/biedronka/preview-03.jpg"
      ],
      featured: true,
      order: 1
    },
    {
      id: "google-educational",
      slug: "google-educational",
      title: "Google Educational Graphics",
      client: "Google",
      category: "Campaign Visuals",
      type: "Graphic Design",
      shortDescription: "Educational and campaign graphics designed for Google's internal and external initiatives.",
      deliverables: ["Educational Graphics", "Campaign Assets", "Digital Design"],
      mediaType: "image",
      status: "ready",
      year: "2023",
      platforms: ["Web", "Internal"],
      poster: "/assets/work/google/poster.jpg",
      previewImages: [
        "/assets/work/google/preview-01.jpg",
        "/assets/work/google/preview-02.jpg"
      ],
      featured: true,
      order: 2
    },
    {
      id: "molicare-social",
      slug: "molicare-social",
      title: "Hartmann / MoliCare Campaigns",
      client: "Hartmann / MoliCare",
      category: "Social Media Campaigns",
      type: "Visual Production",
      shortDescription: "Comprehensive social media campaign visuals for healthcare and hygiene products.",
      deliverables: ["Social Media Visuals", "Key Visuals", "Campaign Strategy"],
      mediaType: "image",
      status: "ready",
      year: "2024",
      platforms: ["TikTok", "Facebook", "LinkedIn"],
      poster: "/assets/work/molicare/poster.jpg",
      previewImages: [
        "/assets/work/molicare/preview-01.jpg",
        "/assets/work/molicare/preview-02.jpg",
        "/assets/work/molicare/preview-03.jpg"
      ],
      featured: true,
      order: 3
    },
    {
      id: "tv-markiza-motion",
      slug: "tv-markiza-motion",
      title: "TV Markíza Motion & Video",
      client: "TV Markíza",
      category: "Motion Graphics",
      type: "Video & Motion",
      shortDescription: "Dynamic motion graphics and video content for social media and broadcast promotion.",
      deliverables: ["Motion Graphics", "Video Editing", "Social Content"],
      mediaType: "video",
      status: "ready",
      year: "2024",
      platforms: ["TV", "TikTok"],
      poster: "/assets/work/markiza/poster.jpg",
      previewVideo: "/assets/work/markiza/preview.mp4",
      featured: true,
      order: 4
    },
    {
      id: "ai-visual-production",
      slug: "ai-visual-production",
      title: "AI-Assisted Visual Production",
      client: "Personal / R&D",
      category: "AI Visuals",
      type: "Video & Motion",
      shortDescription: "Exploring the intersection of AI-assisted imagery and commercial motion design.",
      deliverables: ["AI Imagery", "Concept Art", "Production Workflows"],
      mediaType: "video",
      status: "ready",
      year: "2025",
      platforms: ["Personal"],
      poster: "/assets/work/motion/poster.jpg",
      previewVideo: "/assets/work/motion/preview.mp4",
      featured: true,
      order: 5
    }
  ],
  arItems: [
    {
      id: "tiktok-filter-1",
      title: "TikTok Interactive Effect",
      platform: "TikTok",
      status: "ready",
      link: "https://www.tiktok.com/...",
      featured: true,
      order: 1
    },
    {
      id: "tiktok-filter-2",
      title: "TikTok Brand Experience",
      platform: "TikTok",
      status: "coming_soon",
      link: "#",
      featured: true,
      order: 2
    }
  ],
  services: {
    title: "Expertise & Services",
    description: "Specialized visual solutions for modern digital platforms.",
    items: [
      {
        id: "social",
        title: "Social Media Graphics",
        description: "Static and carousel content optimized for high engagement and brand consistency across all platforms.",
        icon: "Layout",
        order: 1
      },
      {
        id: "motion",
        title: "Reels & Motion Content",
        description: "Dynamic video content and motion graphics designed to capture attention in the first seconds.",
        icon: "Play",
        order: 2
      },
      {
        id: "ai",
        title: "AI-Assisted Production",
        description: "Leveraging cutting-edge AI tools to accelerate visual production and create unique, high-end imagery.",
        icon: "Cpu",
        order: 3
      },
      {
        id: "ar",
        title: "AR Filters",
        description: "Interactive Augmented Reality experiences for TikTok that boost brand interaction.",
        icon: "Sparkles",
        order: 4
      }
    ]
  },
  collaboration: {
    title: "How we work",
    description: "A structured approach to delivering high-quality visual content.",
    steps: [
      {
        id: "brief",
        title: "Briefing & Strategy",
        description: "Understanding your goals, target audience, and platform requirements.",
        icon: "MessageSquare",
        order: 1
      },
      {
        id: "concept",
        title: "Concept & Moodboard",
        description: "Developing the visual direction and creative concepts for approval.",
        icon: "Palette",
        order: 2
      },
      {
        id: "production",
        title: "Production & Motion",
        description: "Executing the designs, motion graphics, or AI-assisted visuals.",
        icon: "Zap",
        order: 3
      },
      {
        id: "delivery",
        title: "Review & Delivery",
        description: "Refining the assets based on feedback and delivering final production-ready files.",
        icon: "CheckCircle",
        order: 4
      }
    ]
  },
  contact: {
    title: "Let's create",
    subtitle: "something",
    highlight: "iconic.",
    description: "Whether you're an agency looking for a reliable partner or a brand needing high-end content, I'm here to help.",
    cta: "Start a project",
    status: "Available for new projects",
    email: "jurajzacek13@gmail.com",
    socials: [
      { name: "LinkedIn", url: "#", icon: "Linkedin" },
      { name: "TikTok", url: "#", icon: "Video" },
      { name: "Behance", url: "#", icon: "ExternalLink" }
    ]
  },
  about: {
    title: "Focused on the intersection of design, motion, and technology.",
    description: "Based in Bratislava, I work with leading agencies and brands to deliver high-quality visual content. My approach combines traditional graphic design principles with modern AI tools and motion graphics to create content that stands out in today's fast-paced digital landscape.",
    expertise: [
      "Social Media Strategy & Design",
      "Motion Graphics & Reels Production",
      "AI-Assisted Visual Creation",
      "TikTok AR Filters (Effect House)",
      "Campaign Visuals & Key Visuals"
    ],
    experience: [
      {
        icon: "Briefcase",
        title: "Senior Graphic Designer",
        desc: "Specializing in high-performance social media content and motion graphics for global brands."
      },
      {
        icon: "Zap",
        title: "AI Visual Specialist",
        desc: "Integrating cutting-edge AI tools into creative workflows to accelerate production and enhance visual quality."
      },
      {
        icon: "Sparkles",
        title: "TikTok AR Specialist",
        desc: "Creating interactive augmented reality experiences exclusively for TikTok (Effect House)."
      }
    ],
    tools: [
      {
        name: "Adobe Creative Cloud",
        level: "Expert",
        desc: "Photoshop, Illustrator, After Effects, Premiere Pro."
      },
      {
        name: "AI Production Stack",
        level: "Advanced",
        desc: "Midjourney, Stable Diffusion, Runway Gen-2, Magnific AI."
      },
      {
        name: "AR Development",
        level: "Expert",
        desc: "Effect House (TikTok) specialist."
      },
      {
        name: "Motion Design",
        level: "Expert",
        desc: "High-end reels, kinetic typography, and brand animations."
      }
    ]
  }
};
