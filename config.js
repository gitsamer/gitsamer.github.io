// Kado App Configuration
// Update this file to change pricing, contact info, and other details across the site

const KadoConfig = {
  // Contact & Support
  supportEmail: "support.kado@balshoo.com",
  websiteUrl: "https://www.balshoo.com",
  instagramUrl: "https://www.instagram.com/kado_health",
  
  // Pricing (in USD)
  pricing: {
    premium: {
      monthly: null, // Not offered
      yearly: 15,
      currency: "$",
      billingCycle: "year"
    },
    premiumFamily: {
      monthly: null,
      yearly: 40,
      maxProfiles: 4,
      currency: "$",
      billingCycle: "year"
    }
  },
  
  // Free Trial
  freeTrial: {
    enabled: false,
    days: 0
  },
  
  // App Store Links
  storeLinks: {
    playStore: "https://play.google.com/store/apps/details?id=com.balshoo.kado", // Update when published
    appStore: "coming-soon", // Will be updated when published
    playStoreAvailable: true,
    appStoreAvailable: false
  },
  
  // Premium Features
  premiumFeatures: [
    "Custom health scoring based on your conditions",
    "Personal health info tracking",
    "Advanced ingredient analysis with AI",
    "Search by category",
    "Detailed nutrition breakdown",
    "Unlimited scans",
    "Ad-free experience"
  ],
  
  // Free Features
  freeFeatures: [
    "Barcode scanning",
    "Basic nutrition scoring",
    "Ingredient list viewing",
    "Product alternatives",
    "Scan history (limited)"
  ],
  
  // Databases
  databases: {
    open: {
      name: "Open Database",
      description: "Comprehensive global food database with millions of products contributed by users worldwide",
      access: "All users"
    },
    community: {
      name: "Community Database",
      description: "Our curated database serving as a backup for products not yet in the Open Database",
      access: "All users"
    }
  },
  
  // App Info
  appInfo: {
    name: "Kado",
    tagline: "Your Personal Food Health Analyzer",
    category: "Health & Fitness",
    version: "1.0.0",
    size: {
      app: "~250 MB",
      data: "~100 MB",
      cache: "~22 MB"
    },
    ageRating: "4+",
    languages: ["English"],
    lastUpdated: "January 2025"
  },
  
  // Key Differentiators (vs Yuka)
  uniqueFeatures: [
    "Personalized scoring based on YOUR health conditions",
    "AI-powered ingredient analysis",
    "Custom health profiles for family members",
    "Emphasis-based scoring (e.g., reduce sugar for diabetes)"
  ]
};

// Export for use in HTML pages
if (typeof module !== 'undefined' && module.exports) {
  module.exports = KadoConfig;
}
