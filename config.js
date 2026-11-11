// Kado App Configuration
// Update this file to change pricing, contact info, and other details across the site

const KadoConfig = {
  // Contact & Support
  supportEmail: "support.kado@balshoo.com",
  websiteUrl: "https://www.balshoo.com",
  instagramUrl: "https://www.instagram.com/kado_health",
  
  // Pricing - THE ONE PLACE TO CHANGE KADO PRICES ON THE WEBSITE.
  // Keep in step with App Store Connect (the price reference) and Google Play.
  // Pages show these through data-kado-price tags (filled in at the bottom of
  // this file); the text inside those tags is only a fallback without JavaScript.
  // Last changed 2026-11-11.
  pricing: {
    symbol: "$",
    individual: { yearly: 39.99, monthly: 5.99, aedYearly: 149.99, aedMonthly: 22.99 },
    family:     { yearly: 59.99, monthly: 8.99, aedYearly: 229.99, aedMonthly: 34.99, maxProfiles: 4 },
    note: "Prices in US dollars. The App Store or Google Play shows the price in your currency, including local taxes."
  },

  // Free trial (yearly plans only, new subscribers; the stores enforce it)
  freeTrial: {
    enabled: true,
    days: 7
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

// Fill every <span data-kado-price="..."> on the page from KadoConfig.pricing.
// Keys: individual.yearly, individual.monthly, individual.aedYearly,
// individual.aedMonthly, the same for family, family.maxProfiles, trial.days, note.
(function () {
  if (typeof document === 'undefined') return;
  function fill() {
    var p = KadoConfig.pricing;
    function usd(v) { return p.symbol + v.toFixed(2); }
    function aed(v) { return 'AED ' + v.toFixed(2); }
    var values = { 'trial.days': String(KadoConfig.freeTrial.days), 'note': p.note };
    ['individual', 'family'].forEach(function (plan) {
      var x = p[plan];
      values[plan + '.yearly'] = usd(x.yearly);
      values[plan + '.monthly'] = usd(x.monthly);
      values[plan + '.aedYearly'] = aed(x.aedYearly);
      values[plan + '.aedMonthly'] = aed(x.aedMonthly);
    });
    values['family.maxProfiles'] = String(p.family.maxProfiles);
    var tags = document.querySelectorAll('[data-kado-price]');
    for (var i = 0; i < tags.length; i++) {
      var v = values[tags[i].getAttribute('data-kado-price')];
      if (v !== undefined) tags[i].textContent = v;
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fill);
  else fill();
})();
