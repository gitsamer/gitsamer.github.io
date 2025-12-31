# Kado Website Files - Upload Instructions

## 📁 Folder Structure

```
balshoo.com/
├── index.html              # Main homepage (Kado as primary app)
├── styles.css              # Global stylesheet
├── config.js               # Configuration file (prices, emails, URLs)
├── assets/                 # Main site assets
│   └── pdfscan-icon.png    # PDFScan Pro icon (to be added)
│
└── kado/                   # Kado app folder
    ├── index.html          # Kado app main page
    ├── privacy.html        # Privacy Policy
    ├── terms.html          # Terms & Conditions
    ├── data-security.html  # Data Security page
    ├── support.html        # Help Center/Support
    └── assets/
        ├── kado-icon.png              # App icon (1024x1024)
        ├── google-play-badge.png      # Download badge
        ├── app-store-badge.png        # Download badge
        ├── screenshots/               # App screenshots
        │   ├── product-scoring.jpg
        │   ├── ingredients.jpg
        │   ├── alternatives.jpg
        │   ├── health-conditions.jpg
        │   ├── search.jpg
        │   ├── history.jpg
        │   └── premium-features.jpg
        └── store-assets/              # Store submission assets
            ├── play-store/
            └── app-store/
```

## 🚀 Step-by-Step Upload to GitHub

### Step 1: Download Store Badge Images

Before uploading, you need to download official store badges:

1. **Google Play Badge:**
   - Visit: https://play.google.com/intl/en_us/badges/
   - Download the PNG badge
   - Rename to: `google-play-badge.png`
   - Place in: `kado/assets/`

2. **App Store Badge:**
   - Visit: https://developer.apple.com/app-store/marketing/guidelines/
   - Download the "Download on the App Store" badge
   - Rename to: `app-store-badge.png`
   - Place in: `kado/assets/`

### Step 2: Add PDFScan Pro Icon (Optional)

- Create or add the PDFScan Pro icon
- Rename to: `pdfscan-icon.png`
- Place in: `assets/`
- Size: 512x512px or 1024x1024px PNG

### Step 3: Upload to GitHub

**Option A: Using GitHub Web Interface**

1. Go to: https://github.com/gitsamer/gitsamer.github.io
2. Click "Add file" → "Upload files"
3. Drag and drop ALL files/folders from the package
4. Ensure folder structure is maintained
5. Add commit message: "Add Kado app website"
6. Click "Commit changes"

**Option B: Using Git Command Line**

```bash
# Clone your repository
git clone https://github.com/gitsamer/gitsamer.github.io.git
cd gitsamer.github.io

# Copy all files from the package to this directory
# Ensure folder structure matches exactly

# Add all files
git add .

# Commit
git commit -m "Add Kado app website with legal pages"

# Push to GitHub
git push origin main
```

### Step 4: Verify the Website

After uploading, visit:
- Main site: https://www.balshoo.com
- Kado page: https://www.balshoo.com/kado/
- Privacy: https://www.balshoo.com/kado/privacy.html
- Terms: https://www.balshoo.com/kado/terms.html

GitHub Pages may take 5-10 minutes to update.

## 🔧 Updating Configuration

To update prices, emails, or URLs, edit `config.js`:

```javascript
// Example: Change Premium pricing
pricing: {
  premium: {
    yearly: 15,  // Change this value
    ...
  }
}

// Example: Update support email
supportEmail: "support.kado@balshoo.com",  // Change this

// Example: Update Play Store link
storeLinks: {
  playStore: "https://play.google.com/store/apps/details?id=YOUR_PACKAGE_NAME",
  ...
}
```

After editing `config.js`, push the changes to GitHub and the site will update automatically.

## 📱 For App Store Submissions

### Play Store Required Links:
- **Privacy Policy:** `https://www.balshoo.com/kado/privacy.html`
- **Terms & Conditions:** `https://www.balshoo.com/kado/terms.html`
- **Support Email:** `support.kado@balshoo.com`
- **Website:** `https://www.balshoo.com/kado/`

### App Store Required Links (when ready):
- Same as above
- **App Support URL:** `https://www.balshoo.com/kado/support.html`
- **Marketing URL:** `https://www.balshoo.com/kado/`

## 🖼️ Store Assets Information

The screenshots in `kado/assets/screenshots/` are ready for store submissions:
- **Current format:** JPEG
- **Recommended for stores:** May need resizing/conversion

### Play Store Requirements:
- **Phone screenshots:** Min 320px, Max 3840px
- **Recommended:** 1080 x 1920px or 1080 x 2340px
- **Format:** PNG or JPEG
- **Quantity:** 2-8 screenshots

### App Store Requirements:
- **iPhone 6.7":** 1290 x 2796px
- **iPhone 6.5":** 1284 x 2778px
- **Format:** PNG or JPEG
- **Quantity:** 1-10 screenshots per device

**Note:** You may need to resize the current screenshots using tools like:
- Figma
- Photoshop
- Online tools (like screenshot.guru)

## 🎨 Customization Tips

### Changing Colors:
Edit `styles.css` and modify the CSS variables:
```css
:root {
  --primary-green: #4CAF50;  /* Main brand color */
  --dark-green: #2E7D32;     /* Darker shade */
  ...
}
```

### Adding More Features:
Edit `kado/index.html` and add to the features grid section.

### Updating Legal Pages:
Edit the respective HTML files:
- `kado/privacy.html`
- `kado/terms.html`
- `kado/data-security.html`

## ✅ Checklist Before Publishing

- [ ] Downloaded and added Google Play badge
- [ ] Downloaded and added App Store badge (for future)
- [ ] Added PDFScan Pro icon (optional)
- [ ] Uploaded all files to GitHub
- [ ] Verified website loads at balshoo.com
- [ ] Tested all links work correctly
- [ ] Updated config.js with correct Play Store URL (after publishing)
- [ ] Verified privacy policy link works
- [ ] Verified terms & conditions link works
- [ ] Tested on mobile devices
- [ ] Checked that Instagram link works

## 📞 Support

If you have questions about the website files:
- Check this README
- Review the code comments in each file
- Test locally before uploading

For App Store/Play Store specific requirements, refer to:
- Google Play: https://play.google.com/console/about/
- App Store: https://developer.apple.com/app-store/submissions/

---

**Created:** January 2025
**Version:** 1.0
