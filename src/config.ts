// Site configuration
// Replace placeholder values with your own content

export interface SiteConfig {
  language: string;
  title: string;
  description: string;
}

export const siteConfig: SiteConfig = {
  language: "en",
  title: "Anubhab Jana | Physics Researcher",
  description: "Portfolio of Anubhab Jana - Physics student specializing in Experimental Condensed Matter Physics, Cryogenics, and Computational Physics.",
};

// Navigation configuration
export interface NavLink {
  label: string;
  href: string;
}

export interface NavigationConfig {
  logo: string;
  links: NavLink[];
  contactLabel: string;
  contactHref: string;
}

export const navigationConfig: NavigationConfig = {
  logo: "/images/logo-black.png",
  links: [
    { label: "About", href: "#about" },
    { label: "Research", href: "#services" },
    { label: "Projects", href: "#portfolio" },
    { label: "Testimonials", href: "#testimonials" },
  ],
  contactLabel: "Contact Me",
  contactHref: "mailto:anubhabjana.vc@gmail.com",
};

// Hero section configuration
export interface HeroConfig {
  name: string;
  roles: string[];
  backgroundImage: string;
}

export const heroConfig: HeroConfig = {
  name: "ANUBHAB JANA",
  roles: ["Physics Researcher", "Cryogenics Specialist", "Experimental Physicist", "ML Enthusiast"],
  backgroundImage: "/images/hero-bg.jpg",
};

// About section configuration
export interface AboutStat {
  value: string;
  label: string;
}

export interface AboutImage {
  src: string;
  alt: string;
}

export interface AboutConfig {
  label: string;
  description: string;
  experienceValue: string;
  experienceLabel: string;
  stats: AboutStat[];
  images: AboutImage[];
}

export const aboutConfig: AboutConfig = {
  label: "About Me",
  description: "I am a passionate Physics student at Ramakrishna Mission Vivekananda Centenary College, Rahara, with a strong focus on Experimental Condensed Matter Physics, Cryogenics, and Computational Physics. My research experience includes developing low-noise cryogenic pre-amplifiers at IACS under Prof. Mintu Mondal. I combine hands-on experimental skills with computational expertise in Python and machine learning to explore the fascinating world of physics.",
  experienceValue: "8.66",
  experienceLabel: "Current CGPA\n(out of 10)",
  stats: [
    { value: "IACS", label: "Research Internship" },
    { value: "3+", label: "Scholarships" },
    { value: "5+", label: "Technical Skills" },
  ],
  images: [
    { src: "/images/profile.jpg", alt: "Anubhab Jana" },
    { src: "/images/about-2.jpg", alt: "Laboratory Equipment" },
    { src: "/images/about-3.jpg", alt: "Cryogenic Equipment" },
    { src: "/images/about-4.jpg", alt: "Computational Physics" },
  ],
};

// Services section configuration
export interface ServiceItem {
  iconName: string;
  title: string;
  description: string;
  image: string;
}

export interface ServicesConfig {
  label: string;
  heading: string;
  services: ServiceItem[];
}

export const servicesConfig: ServicesConfig = {
  label: "Research Areas",
  heading: "My Expertise",
  services: [
    {
      iconName: "Atom",
      title: "Condensed Matter Physics",
      description: "Experimental research in condensed matter systems, focusing on electronic properties and quantum phenomena at low temperatures.",
      image: "/images/service-1.jpg",
    },
    {
      iconName: "Thermometer",
      title: "Cryogenics",
      description: "Hands-on experience with cryogenic setups, liquid nitrogen systems, and low-temperature measurement techniques including Johnson noise thermometry.",
      image: "/images/service-2.jpg",
    },
    {
      iconName: "Brain",
      title: "Machine Learning",
      description: "Developing predictive models using Python and scikit-learn, including a heart disease diagnosis system with data visualization and analysis.",
      image: "/images/service-3.jpg",
    },
    {
      iconName: "Cpu",
      title: "Electronics Design",
      description: "PCB design using KiCad, low-noise amplification circuitry, soldering, and signal processing with lock-in amplifiers and oscilloscopes.",
      image: "/images/service-4.jpg",
    },
  ],
};

// Portfolio section configuration
export interface ProjectItem {
  title: string;
  category: string;
  year: string;
  image: string;
  featured?: boolean;
}

export interface PortfolioCTA {
  label: string;
  heading: string;
  linkText: string;
  linkHref: string;
}

export interface PortfolioConfig {
  label: string;
  heading: string;
  description: string;
  projects: ProjectItem[];
  cta: PortfolioCTA;
  viewAllLabel: string;
}

export const portfolioConfig: PortfolioConfig = {
  label: "Projects",
  heading: "Research & Projects",
  description: "A showcase of my research work, technical projects, and contributions to the field of physics and computational science.",
  projects: [
    {
      title: "Cryogenic Pre-amplifier Design",
      category: "Research",
      year: "2024",
      image: "/images/portfolio-1.jpg",
      featured: true,
    },
    {
      title: "Heart Disease Prediction ML",
      category: "Machine Learning",
      year: "2024",
      image: "/images/portfolio-2.jpg",
    },
    {
      title: "Signal Processing with Lock-in Amplifiers",
      category: "Experimental Physics",
      year: "2024",
      image: "/images/portfolio-3.jpg",
    },
    {
      title: "PCB Design with KiCad",
      category: "Electronics",
      year: "2024",
      image: "/images/portfolio-4.jpg",
    },
    {
      title: "PIMORDIUM - Physics Fest",
      category: "Event Organization",
      year: "2024",
      image: "/images/portfolio-5.jpg",
    },
  ],
  cta: {
    label: "Let's Collaborate",
    heading: "Have a Research Idea?",
    linkText: "Get in Touch",
    linkHref: "mailto:anubhabjana.vc@gmail.com",
  },
  viewAllLabel: "View All Projects",
};

// Testimonials section configuration
export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
  rating: number;
}

export interface TestimonialsConfig {
  label: string;
  heading: string;
  testimonials: TestimonialItem[];
}

export const testimonialsConfig: TestimonialsConfig = {
  label: "Testimonials",
  heading: "What Mentors Say",
  testimonials: [
    {
      quote: "Anubhab demonstrated exceptional dedication and technical aptitude during his summer internship. His work on the cryogenic pre-amplifier showed remarkable attention to detail and understanding of low-noise electronics.",
      author: "Prof. Mintu Mondal",
      role: "Principal Investigator",
      company: "IACS",
      image: "/images/testimonial-1.jpg",
      rating: 5,
    },
    {
      quote: "His ability to combine experimental skills with computational approaches is impressive. Anubhab's passion for physics and willingness to learn make him an outstanding student researcher.",
      author: "Dr. Sunita Das",
      role: "Faculty Member",
      company: "RKMVCC",
      image: "/images/testimonial-2.jpg",
      rating: 5,
    },
    {
      quote: "Anubhab's machine learning project on heart disease prediction showcased his ability to apply physics-based thinking to interdisciplinary problems. A promising young researcher with a bright future.",
      author: "Dr. Arun Kumar",
      role: "Research Supervisor",
      company: "Science Club",
      image: "/images/testimonial-3.jpg",
      rating: 5,
    },
  ],
};

// CTA section configuration
export interface CTAConfig {
  tags: string[];
  heading: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  email: string;
  backgroundImage: string;
}

export const ctaConfig: CTAConfig = {
  tags: ["Physics Researcher", "Cryogenics Specialist", "ML Developer"],
  heading: "Let's Explore the Universe Together",
  description: "I'm always excited to collaborate on research projects, discuss physics ideas, or contribute to innovative scientific endeavors. Reach out and let's create something extraordinary.",
  buttonText: "Send Email",
  buttonHref: "mailto:anubhabjana.vc@gmail.com",
  email: "anubhabjana.vc@gmail.com",
  backgroundImage: "/images/cta-bg.jpg",
};

// Footer section configuration
export interface FooterLinkColumn {
  title: string;
  links: { label: string; href: string }[];
}

export interface SocialLink {
  iconName: string;
  href: string;
  label: string;
}

export interface FooterConfig {
  logo: string;
  description: string;
  columns: FooterLinkColumn[];
  socialLinks: SocialLink[];
  newsletterHeading: string;
  newsletterDescription: string;
  newsletterButtonText: string;
  newsletterPlaceholder: string;
  copyright: string;
  credit: string;
}

export const footerConfig: FooterConfig = {
  logo: "/images/logo-black.png",
  description: "Physics student passionate about experimental condensed matter physics, cryogenics, and computational research. Exploring the fundamental laws of nature through hands-on experimentation and data-driven analysis.",
  columns: [
    {
      title: "Quick Links",
      links: [
        { label: "About Me", href: "#about" },
        { label: "Research Areas", href: "#services" },
        { label: "Projects", href: "#portfolio" },
        { label: "Testimonials", href: "#testimonials" },
      ],
    },
    {
      title: "Education",
      links: [
        { label: "RKMVCC - B.Sc Physics", href: "#" },
        { label: "IACS Summer Internship", href: "#" },
        { label: "Scholarships", href: "#" },
        { label: "Workshops", href: "#" },
      ],
    },
    {
      title: "Contact",
      links: [
        { label: "anubhabjana.vc@gmail.com", href: "mailto:anubhabjana.vc@gmail.com" },
        { label: "Kolkata, West Bengal", href: "#" },
        { label: "LinkedIn", href: "#" },
        { label: "GitHub", href: "#" },
      ],
    },
  ],
  socialLinks: [
    { iconName: "Linkedin", href: "https://linkedin.com", label: "LinkedIn" },
    { iconName: "Github", href: "https://github.com", label: "GitHub" },
    { iconName: "Twitter", href: "https://twitter.com", label: "Twitter" },
    { iconName: "Mail", href: "mailto:anubhabjana.vc@gmail.com", label: "Email" },
  ],
  newsletterHeading: "Stay Updated",
  newsletterDescription: "Subscribe to receive updates about my research and projects.",
  newsletterButtonText: "Subscribe",
  newsletterPlaceholder: "Enter your email",
  copyright: "© 2025 Anubhab Jana. All rights reserved.",
  credit: "Designed with passion for physics",
};
