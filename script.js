document.addEventListener('DOMContentLoaded', function() {

    // ==============================
    // SMOOTH SCROLL FOR NAV LINKS
    // ==============================
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // ==============================
    // HIGHLIGHT ACTIVE NAV LINK
    // ==============================
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(function(section) {
            const sectionTop = section.offsetTop - 120;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(function(link) {
            link.style.color = '#888';
            if (link.getAttribute('href') === '#' + current) {
                link.style.color = '#f5f5f5';
            }
        });
    });

    // ==============================
    // FADE IN SECTIONS ON SCROLL
    // ==============================
    const allSections = document.querySelectorAll('.section');

    allSections.forEach(function(section) {
        section.style.opacity = '0';
        section.style.transform = 'translateY(24px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    const sectionObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.08 });

    allSections.forEach(function(section) {
        sectionObserver.observe(section);
    });

    // ==============================
    // STAGGER REVIEW CARDS
    // ==============================
    const reviewCards = document.querySelectorAll('.review-card');

    reviewCards.forEach(function(card, i) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease ' + (i * 0.08) + 's, transform 0.5s ease ' + (i * 0.08) + 's';
    });

    const reviewObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    reviewCards.forEach(function(card) {
        reviewObserver.observe(card);
    });

    // ==============================
    // STAGGER CLIENT BOXES
    // ==============================
    const clientBoxes = document.querySelectorAll('.client-box');

    clientBoxes.forEach(function(box, i) {
        box.style.opacity = '0';
        box.style.transform = 'translateY(16px)';
        box.style.transition = 'opacity 0.4s ease ' + (i * 0.07) + 's, transform 0.4s ease ' + (i * 0.07) + 's';
    });

    const clientObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    clientBoxes.forEach(function(box) {
        clientObserver.observe(box);
    });

    // ==============================
    // STAGGER PRICING CARDS
    // ==============================
    const pricingCards = document.querySelectorAll('.pricing-card');

    pricingCards.forEach(function(card, i) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease ' + (i * 0.12) + 's, transform 0.5s ease ' + (i * 0.12) + 's';
    });

    const pricingObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    pricingCards.forEach(function(card) {
        pricingObserver.observe(card);
    });

    // ==============================
    // FAQ ACCORDION
    // ==============================
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(function(item) {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const icon = item.querySelector('.faq-icon');

        // Make sure all answers start closed
        answer.style.maxHeight = '0';
        answer.style.overflow = 'hidden';
        answer.style.transition = 'max-height 0.35s ease';

        question.addEventListener('click', function() {
            const isOpen = item.classList.contains('open');

            // Close all items
            faqItems.forEach(function(other) {
                other.classList.remove('open');
                other.querySelector('.faq-answer').style.maxHeight = '0';
                other.querySelector('.faq-icon').style.transform = 'rotate(0deg)';
            });

            // If it was closed, open it
            if (!isOpen) {
                item.classList.add('open');
                answer.style.maxHeight = answer.scrollHeight + 40 + 'px';
                icon.style.transform = 'rotate(45deg)';
            }
        });
    });

    // ==============================
    // CONTACT FORM
    // ==============================
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const submitBtn = contactForm.querySelector('.form-submit');
            submitBtn.textContent = 'Sending...';
            submitBtn.style.opacity = '0.7';
            submitBtn.disabled = true;

            // Simulate send — replace with Formspree/EmailJS for real submissions
            setTimeout(function() {
                contactForm.reset();
                submitBtn.textContent = 'Send Message';
                submitBtn.style.opacity = '1';
                submitBtn.disabled = false;
                if (formSuccess) {
                    formSuccess.classList.add('visible');
                    setTimeout(function() {
                        formSuccess.classList.remove('visible');
                    }, 5000);
                }
            }, 1200);
        });
    }

}); // end DOMContentLoaded