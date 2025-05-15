/**
 * Portfolio GSAP Animations
 * This file contains all GSAP animations for the portfolio website
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Check if GSAP is loaded
    if (typeof gsap === 'undefined') {
        console.error('GSAP not loaded! Please make sure to include GSAP library.');
        return;
    }

    // Register necessary plugins
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, TextPlugin);

    // Initialize animations
    initLoaderAnimation();
    initHeroAnimation();
    initScrollAnimations();
    initHoverAnimations();
    initCustomCursor();
    initInfiniteAnimations();
    initTextAnimations();
    initMenuAnimations();
});

/**
 * Loader Animation
 */
function initLoaderAnimation() {
    const tl = gsap.timeline();
    
    tl.to('.loading-animation div', {
        scale: 1.2,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.inOut',
        repeat: 2,
        yoyo: true
    });
    
    tl.to('#loading-overlay', {
        opacity: 0,
        duration: 0.8,
        ease: 'power2.inOut',
        onComplete: () => {
            gsap.set('#loading-overlay', { display: 'none' });
        }
    });
}

/**
 * Hero Section Animation
 */
function initHeroAnimation() {
    const heroTl = gsap.timeline();
    
    heroTl.from('.inline-block.bg-primary', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'back.out(1.7)'
    });
    
    heroTl.from('h1 span', {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out'
    }, '-=0.4');
    
    heroTl.from('.hero-image-container', {
        opacity: 0,
        x: 40,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.6');
    
    heroTl.from('#hero p, #hero a', {
        opacity: 0,
        y: 20,
        stagger: 0.2,
        duration: 0.6,
        ease: 'power2.out'
    }, '-=0.6');
    
    // Animated background grid
    gsap.to('.hero-image-container .grid-cols-4 div', {
        opacity: (i) => 0.1 + (i % 4) * 0.1,
        stagger: {
            each: 0.1,
            from: 'random',
            grid: 'auto'
        },
        repeat: -1,
        yoyo: true,
        duration: 3,
        ease: 'sine.inOut'
    });
}

/**
 * Scroll-triggered animations
 */
function initScrollAnimations() {
    // Navbar animation
    gsap.to('#navbar', {
        scrollTrigger: {
            trigger: 'body',
            start: 'top -80',
            toggleActions: 'play none none reverse'
        },
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
        padding: '0.5rem 0',
        duration: 0.3,
        ease: 'power2.out'
    });
    
    // About section animation
    gsap.from('#about h2, #about p', {
        scrollTrigger: {
            trigger: '#about',
            start: 'top 80%'
        },
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power2.out'
    });
    
    // Skill bars animation
    gsap.from('.w-[90%], .w-[75%], .w-[65%], .w-[45%]', {
        scrollTrigger: {
            trigger: '.about-image-container',
            start: 'top 80%'
        },
        width: '0%',
        duration: 1.5,
        stagger: 0.2,
        ease: 'power2.out'
    });
    
    // Projects section animation
    gsap.from('#projects h2', {
        scrollTrigger: {
            trigger: '#projects',
            start: 'top 80%'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
    });
    
    // Certificate section animation
    gsap.from('#certificates h2', {
        scrollTrigger: {
            trigger: '#certificates',
            start: 'top 80%'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
    });
    
    // Contact section animation
    gsap.from('#contact h2, #contact p, #contact .space-y-6 > div', {
        scrollTrigger: {
            trigger: '#contact',
            start: 'top 80%'
        },
        y: 30,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power2.out'
    });
    
    // Footer animation
    gsap.from('footer .grid', {
        scrollTrigger: {
            trigger: 'footer',
            start: 'top 90%'
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
    });
    
    // Animate projects when they appear
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 90%'
            },
            y: 30,
            opacity: 0,
            duration: 0.6,
            ease: 'power2.out'
        });
    });
    
    // Animate certificates when they appear
    const certificateCards = document.querySelectorAll('.certificate-card');
    certificateCards.forEach((card) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 90%'
            },
            y: 30,
            opacity: 0,
            duration: 0.6,
            ease: 'power2.out'
        });
    });
}

/**
 * Hover Animations
 */
function initHoverAnimations() {
    // Project cards hover effect
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        const image = card.querySelector('img');
        const details = card.querySelector('.p-4');
        
        card.addEventListener('mouseenter', () => {
            gsap.to(image, {
                scale: 1.1,
                duration: 0.4,
                ease: 'power2.out'
            });
            gsap.to(details, {
                y: -10,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(image, {
                scale: 1,
                duration: 0.4,
                ease: 'power2.out'
            });
            gsap.to(details, {
                y: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
    
    // Nav links hover effect
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            gsap.to(link, {
                color: '#3A56D4',
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        link.addEventListener('mouseleave', () => {
            if (!link.classList.contains('active')) {
                gsap.to(link, {
                    color: '',
                    duration: 0.3,
                    ease: 'power2.out'
                });
            }
        });
    });
    
    // Buttons hover effect
    const buttons = document.querySelectorAll('a.bg-primary, button.bg-primary, a.border-2.border-primary');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            gsap.to(button, {
                scale: 1.05,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        button.addEventListener('mouseleave', () => {
            gsap.to(button, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
}

/**
 * Custom Cursor
 */
function initCustomCursor() {
    // Create cursor elements
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    
    const cursorDot = document.createElement('div');
    cursorDot.className = 'cursor-dot';
    
    const cursorCircle = document.createElement('div');
    cursorCircle.className = 'cursor-circle';
    
    cursor.appendChild(cursorDot);
    cursor.appendChild(cursorCircle);
    document.body.appendChild(cursor);
    
    // Add cursor styles
    const style = document.createElement('style');
    style.innerHTML = `
        .custom-cursor {
            position: fixed;
            top: 0;
            left: 0;
            z-index: 9999;
            pointer-events: none;
        }
        .cursor-dot {
            position: absolute;
            top: -4px;
            left: -4px;
            width: 8px;
            height: 8px;
            background-color: #3A56D4;
            border-radius: 50%;
        }
        .cursor-circle {
            position: absolute;
            top: -24px;
            left: -24px;
            width: 48px;
            height: 48px;
            border: 2px solid rgba(58, 86, 212, 0.5);
            border-radius: 50%;
            transition: transform 0.2s;
        }
        a, button, input, textarea, .project-card, .certificate-card, .project-filter {
            cursor: none !important;
        }
        a:hover ~ .custom-cursor .cursor-circle,
        button:hover ~ .custom-cursor .cursor-circle,
        input:hover ~ .custom-cursor .cursor-circle,
        textarea:hover ~ .custom-cursor .cursor-circle,
        .project-card:hover ~ .custom-cursor .cursor-circle,
        .certificate-card:hover ~ .custom-cursor .cursor-circle,
        .project-filter:hover ~ .custom-cursor .cursor-circle {
            transform: scale(1.5);
            background-color: rgba(58, 86, 212, 0.1);
        }
    `;
    document.head.appendChild(style);
    
    // Move cursor with mouse
    document.addEventListener('mousemove', (e) => {
        gsap.to(cursorDot, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.1,
            ease: 'power1.out'
        });
        
        gsap.to(cursorCircle, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
    
    // Handle cursor on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, .project-card, .certificate-card, .project-filter');
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            gsap.to(cursorCircle, {
                scale: 1.5,
                backgroundColor: 'rgba(58, 86, 212, 0.1)',
                duration: 0.3
            });
        });
        
        el.addEventListener('mouseleave', () => {
            gsap.to(cursorCircle, {
                scale: 1,
                backgroundColor: 'transparent',
                duration: 0.3
            });
        });
    });
    
    // Hide cursor when leaving window
    document.addEventListener('mouseleave', () => {
        gsap.to([cursorDot, cursorCircle], {
            opacity: 0,
            duration: 0.3
        });
    });
    
    document.addEventListener('mouseenter', () => {
        gsap.to([cursorDot, cursorCircle], {
            opacity: 1,
            duration: 0.3
        });
    });
}

/**
 * Infinite Animations
 */
function initInfiniteAnimations() {
    // Navbar logo animation
    gsap.to('.navbar .h-6.w-6.bg-primary', {
        rotate: 360,
        duration: 10,
        repeat: -1,
        ease: 'linear'
    });
    
    // Floating animation for hero image
    gsap.to('.hero-image-container', {
        y: 15,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    });
    
    // Pattern animation in about section
    gsap.to('.about-image-container .grid-cols-6 div', {
        opacity: (i) => Math.random() * 0.7 + 0.3,
        stagger: {
            each: 0.5,
            from: 'random',
            grid: 'auto',
            repeat: -1,
            yoyo: true
        },
        duration: 3,
        ease: 'sine.inOut'
    });
    
    // Scroll indicator pulse
    gsap.to('#scroll-indicator', {
        opacity: 0.6,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    });
    
    // Back to top button pulse
    gsap.to('#back-to-top', {
        boxShadow: '0 0 15px rgba(58, 86, 212, 0.7)',
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    });
}

/**
 * Text Animations
 */
function initTextAnimations() {
    // Split text animation for headings
    const headings = document.querySelectorAll('h1, h2');
    
    headings.forEach(heading => {
        // Create a data attribute for the original text
        heading.setAttribute('data-text', heading.innerHTML);
        
        // Animation for when heading enters viewport
        ScrollTrigger.create({
            trigger: heading,
            start: 'top 80%',
            onEnter: () => animateHeading(heading)
        });
    });
    
    function animateHeading(heading) {
        const originalHTML = heading.getAttribute('data-text');
        
        // If heading has already been animated, don't animate again
        if (heading.getAttribute('data-animated') === 'true') return;
        
        // Mark as animated
        heading.setAttribute('data-animated', 'true');
        
        // Create text animation timeline
        const tl = gsap.timeline();
        
        // Reset text
        heading.innerHTML = '';
        heading.style.opacity = 1;
        
        // Animate each word separately
        const words = originalHTML.split(' ');
        
        words.forEach((word, i) => {
            const wordSpan = document.createElement('span');
            wordSpan.innerHTML = word + ' ';
            wordSpan.style.display = 'inline-block';
            wordSpan.style.opacity = 0;
            heading.appendChild(wordSpan);
            
            tl.to(wordSpan, {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: 'power2.out'
            }, i * 0.1);
        });
    }
    
    // Typing effect for contact heading
    const contactHeading = document.querySelector('#contact h2');
    
    gsap.timeline({
        scrollTrigger: {
            trigger: contactHeading,
            start: 'top 80%'
        }
    })
    .from(contactHeading, {
        text: {
            value: '',
            delimiter: ' '
        },
        duration: 1.5,
        ease: 'none'
    });
}

/**
 * Menu Animation
 */
function initMenuAnimations() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    mobileMenuButton.addEventListener('click', () => {
        if (mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.remove('hidden');
            gsap.fromTo(mobileMenu, 
                { height: 0, opacity: 0 },
                { height: 'auto', opacity: 1, duration: 0.5, ease: 'power2.out' }
            );
            
            gsap.fromTo('#mobile-menu li', 
                { x: -20, opacity: 0 },
                { x: 0, opacity: 1, stagger: 0.1, duration: 0.4, ease: 'power2.out', delay: 0.2 }
            );
        } else {
            gsap.to(mobileMenu, {
                height: 0,
                opacity: 0,
                duration: 0.5,
                ease: 'power2.in',
                onComplete: () => {
                    mobileMenu.classList.add('hidden');
                    gsap.set(mobileMenu, { height: 'auto' });
                }
            });
        }
    });
}