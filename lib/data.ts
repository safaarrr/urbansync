import {
  Globe,
  Camera,
  Video,
  Smartphone,
  Brush,
  Code,
} from "lucide-react";

export const services = [
  {
    title: "Website Development",
    description:
      "Modern, responsive websites built for performance and business growth.",
    icon: Globe,
  },
  {
    title: "Video Production",
    description:
      "Commercials, promotional videos, brand films and cinematic shoots.",
    icon: Camera,
  },
  {
    title: "Video Editing",
    description:
      "Professional editing, color grading and motion graphics.",
    icon: Video,
  },
  {
    title: "WhatsApp Automation",
    description:
      "Automate customer support, bookings and lead generation.",
    icon: Smartphone,
  },
  {
    title: "Brand Identity",
    description:
      "Logo design, brand guidelines and complete visual identity.",
    icon: Brush,
  },
  {
    title: "Custom Development",
    description:
      "Web applications and custom digital solutions tailored to your needs.",
    icon: Code,
  },
];

export const portfolio = [
  {
    title: "Restaurant Video",
    category: "Commercial",
    video: "/videos/resturant.mp4",
    thumbnail: "/images/project1.jpg",
  },
  {
    title: "Wedding-Event Management",
    category: "Wedding",
    video: "/videos/event.mp4",
    thumbnail: "/images/project2.jpg",
  },
  {
    title: "Clothing Store Reel",
    category: "Corporate",
    video: "/videos/clothing.mp4",
    thumbnail: "/images/project3.jpg",
  },
  {
    title: "Cosmetics Shop Video",
    category: "Real Estate",
    video: "/videos/cosmetic.mp4",
    thumbnail: "/images/project4.jpg",
  },
  {
    title: "Product Advertisement Reel",
    category: "Social Media",
    video: "/videos/promotion.mp4",
    thumbnail: "/images/project5.jpg",
  },
  {
    title: "Product Commercial",
    category: "Commercial",
    video: "/videos/project6.mp4",
    thumbnail: "/images/project6.jpg",
  },
];

export const pricing = [
  {
    title: "Starter",
    price: "₹4,999+",
    features: [
      "Basic Video Editing",
      "1 Page Website",
      "Delivery Support",
    ],
  },
  {
    title: "Business",
    price: "Custom",
    featured: true,
    features: [
      "Professional Video Shoot",
      "Premium Editing",
      "Business Website",
      "WhatsApp Automation",
    ],
  },
  {
    title: "Enterprise",
    price: "Let's Talk",
    features: [
      "Complete Branding",
      "Custom Development",
      "Marketing Support",
      "Priority Assistance",
    ],
  },
];

export const company = {
  name: "Urban Sync",
  tagline: "Creative Media & Digital Solutions",

  email: "urbansyncmarketing@gmail.com",
  phone: "+91 98477 99791",

  address: "Thiruvananthapuram, Kerala",

  instagram: "https://instagram.com/urban.sync_",
  linkedin: "https://linkedin.com/company/urbansync",

  whatsapp: "https://wa.me/919847799791",
};
