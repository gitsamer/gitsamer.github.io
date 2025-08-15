// PDFScan Pro - Main JavaScript File

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(102, 126, 234, 0.98)';
        } else {
            navbar.style.background = 'rgba(102, 126, 234, 0.95)';
        }
    });

    // Download button analytics tracking
    const downloadButtons = document.querySelectorAll('.download-btn');
    downloadButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            const store = this.getAttribute('data-store');
            
            // Track download attempt (for future analytics)
            if (typeof gtag !== 'undefined') {
                gtag('event', 'download_attempt', {
                    'store': store,
                    'app_name': 'PDFScan Pro'
                });
            }
            
            // Log for debugging
            console.log(`Download attempted for: ${store}`);
        });
    });

    // Feature card animations on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe feature cards for animation
    const featureCards = document.querySelectorAll('.feature-card, .screenshot-item, .pricing-card, .privacy-item, .faq-item');
    featureCards.forEach((card, index) => {
        // Initial state for animation
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        
        observer.observe(card);
    });

    // FAQ accordion functionality (if needed)
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const header = item.querySelector('h3');
        if (header) {
            header.style.cursor = 'pointer';
            header.addEventListener('click', function() {
                const content = item.querySelector('p');
                if (content) {
                    content.style.display = content.style.display === 'none' ? 'block' : 'none';
                }
            });
        }
    });

    // Screenshot modal functionality
    const screenshots = document.querySelectorAll('.screenshot-item img');
    screenshots.forEach(img => {
        img.addEventListener('click', function() {
            openScreenshotModal(this.src, this.alt);
        });
        img.style.cursor = 'pointer';
    });

    // Mobile menu toggle (if implementing hamburger menu)
    const createMobileMenu = () => {
        const navContainer = document.querySelector('.nav-container');
        const navMenu = document.querySelector('.nav-menu');
        
        // Create hamburger button
        const hamburger = document.createElement('button');
        hamburger.className = 'hamburger';
        hamburger.innerHTML = '☰';
        hamburger.style.display = 'none';
        hamburger.style.background = 'none';
        hamburger.style.border = 'none';
        hamburger.style.color = 'white';
        hamburger.style.fontSize = '1.5rem';
        hamburger.style.cursor = 'pointer';
        
        navContainer.appendChild(hamburger);
        
        // Toggle mobile menu
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('mobile-open');
        });
        
        // Show hamburger on mobile
        const checkMobile = () => {
            if (window.innerWidth <= 768) {
                hamburger.style.display = 'block';
                navMenu.style.display = navMenu.classList.contains('mobile-open') ? 'flex' : 'none';
            } else {
                hamburger.style.display = 'none';
                navMenu.style.display = 'flex';
                navMenu.classList.remove('mobile-open');
            }
        };
        
        window.addEventListener('resize', checkMobile);
        checkMobile();
    };

    createMobileMenu();

    // Form submission handling (for future contact forms)
    const handleFormSubmission = (formElement) => {
        formElement.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });
            
            // Analytics tracking
            if (typeof gtag !== 'undefined') {
                gtag('event', 'form_submit', {
                    'form_type': this.getAttribute('data-form-type') || 'contact'
                });
            }
            
            console.log('Form submitted:', data);
            
            // Show success message
            showNotification('Thank you! We\'ll get back to you soon.', 'success');
        });
    };

    // Notification system
    const showNotification = (message, type = 'info') => {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 1rem 2rem;
            border-radius: 8px;
            color: white;
            z-index: 10000;
            animation: slideInRight 0.3s ease;
        `;
        
        switch(type) {
            case 'success':
                notification.style.background = '#28a745';
                break;
            case 'error':
                notification.style.background = '#dc3545';
                break;
            default:
                notification.style.background = '#007bff';
        }
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    };

    // Screenshot modal
    const openScreenshotModal = (src, alt) => {
        const modal = document.createElement('div');
        modal.className = 'screenshot-modal';
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            cursor: pointer;
        `;
        
        const img = document.createElement('img');
        img.src = src;
        img.alt = alt;
        img.style.cssText = `
            max-width: 90%;
            max-height: 90%;
            border-radius: 8px;
            box-shadow: 0 10px 50px rgba(0, 0, 0, 0.5);
        `;
        
        modal.appendChild(img);
        document.body.appendChild(modal);
        
        modal.addEventListener('click', () => {
            document.body.removeChild(modal);
        });
        
        // Close on escape key
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                document.body.removeChild(modal);
                document.removeEventListener('keydown', handleEscape);
            }
        };
        document.addEventListener('keydown', handleEscape);
    };

    // Performance optimization: Lazy loading for images
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => {
            imageObserver.observe(img);
        });
    }

    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from { transform: translateX(300px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideOutRight {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(300px); opacity: 0; }
        }
        
        .nav-menu.mobile-open {
            display: flex !important;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: rgba(102, 126, 234, 0.98);
            padding: 1rem;
            gap: 1rem;
        }
        
        @media (max-width: 768px) {
            .nav-menu {
                display: none;
            }
        }
    `;
    document.head.appendChild(style);

    console.log('PDFScan Pro website initialized successfully');
});