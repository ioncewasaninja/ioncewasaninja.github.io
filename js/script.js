{\rtf1\ansi\ansicpg1252\cocoartf2821
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue0;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c0;}
\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs24 \cf2 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 /* js/script.js */\
document.addEventListener('DOMContentLoaded', () => \{\
    // Smooth scrolling\
    document.querySelectorAll('nav a').forEach(anchor => \{\
        anchor.addEventListener('click', function(e) \{\
            e.preventDefault();\
            document.querySelector(this.getAttribute('href')).scrollIntoView(\{\
                behavior: 'smooth',\
                block: 'start'\
            \});\
            if (window.innerWidth <= 768) \{\
                document.querySelector('.nav-menu').classList.remove('active');\
            \}\
        \});\
    \});\
\uc0\u8232 \
    // Mobile menu toggle\
    const navToggle = document.querySelector('.nav-toggle');\
    const navMenu = document.querySelector('.nav-menu');\
    navToggle.addEventListener('click', () => \{\
        navMenu.classList.toggle('active');\
    \});\
\uc0\u8232 \
    // Animate elements on scroll\
    const observer = new IntersectionObserver((entries) => \{\
        entries.forEach(entry => \{\
            if (entry.isIntersecting) \{\
                entry.target.classList.add('animate-in');\
                if (entry.target.classList.contains('service-box')) \{\
                    entry.target.style.animationDelay = `$\{Math.random() * 0.3\}s`;\
                \}\
            \}\
        \});\
    \}, \{ threshold: 0.2 \});\
\uc0\u8232 \
    document.querySelectorAll('section, .service-box, .contact-info').forEach(el => \{\
        observer.observe(el);\
    \});\
\uc0\u8232 \
    // Nav scroll effect\
    const nav = document.querySelector('nav');\
    window.addEventListener('scroll', () => \{\
        if (window.scrollY > 100) \{\
            nav.classList.add('scrolled');\
        \} else \{\
            nav.classList.remove('scrolled');\
        \}\
    \});\
\uc0\u8232 \
    // Random color hover effect\
    const serviceBoxes = document.querySelectorAll('.service-box');\
    const colors = ['#ffeaa7', '#55efc4', '#81ecec', '#ff7675'];\
    serviceBoxes.forEach(box => \{\
        box.addEventListener('mouseenter', () => \{\
            box.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];\
        \});\
        box.addEventListener('mouseleave', () => \{\
            box.style.backgroundColor = '#fff';\
        \});\
    \});\
\});\
}