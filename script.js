/* =========================================================
   Runwal Realty Clone JavaScript
   Interactive Behaviors & Component Logic
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {
    initHeaderScroll();
    initMenuOverlay();
    initPhoneDrawer();
    initCounters();
    initOngoingProjectsSlider();
    initTestimonialsSlider();
    initMediaSlider();
    initFAQAccordion();
    initEditorialReadMore();
    initModals();
    initDisclaimerPopup();
    initBackToTop();
});

/* 1. Header Sticky on Scroll */
function initHeaderScroll() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 120) {
            header.classList.add('is-sticky');
        } else {
            header.classList.remove('is-sticky');
        }
    });
}

/* 2. Fullscreen Menu Overlay */
function initMenuOverlay() {
    const trigger = document.getElementById('menuTrigger');
    const overlay = document.getElementById('navOverlay');
    const closeBtn = document.getElementById('overlayCloseBtn');

    if (!trigger || !overlay) return;

    trigger.addEventListener('click', () => {
        overlay.classList.add('is-active');
        document.body.style.overflow = 'hidden';
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            overlay.classList.remove('is-active');
            document.body.style.overflow = '';
        });
    }

    // Close on clicking links
    overlay.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            overlay.classList.remove('is-active');
            document.body.style.overflow = '';
        });
    });
}

/* 3. Sticky Phone Drawer */
function initPhoneDrawer() {
    const phoneSlider = document.getElementById('stickyPhoneSlider');
    if (!phoneSlider) return;

    phoneSlider.addEventListener('click', () => {
        phoneSlider.classList.toggle('is-expanded');
    });
}

/* 4. Animated Counters */
function initCounters() {
    const counters = document.querySelectorAll('.counter-number');
    let started = false;

    function countUp() {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            let count = 0;
            const step = Math.ceil(target / 40);

            const timer = setInterval(() => {
                count += step;
                if (count >= target) {
                    counter.innerText = target + '+';
                    clearInterval(timer);
                } else {
                    counter.innerText = count;
                }
            }, 35);
        });
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !started) {
                started = true;
                countUp();
            }
        });
    }, { threshold: 0.3 });

    const counterSection = document.querySelector('.counters-grid');
    if (counterSection) observer.observe(counterSection);
}

/* 5. Ongoing Projects Tabs & Slider */
function initOngoingProjectsSlider() {
    const tabs = document.querySelectorAll('.category-tabs li');
    const tracks = document.querySelectorAll('.projects-slider-track');
    const prevBtn = document.getElementById('projectSliderPrev');
    const nextBtn = document.getElementById('projectSliderNext');

    let currentTab = 'residential';
    let currentPositions = {
        residential: 0,
        commercial: 0,
        retail: 0
    };

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('is-active'));
            tab.classList.add('is-active');

            currentTab = tab.getAttribute('data-category');

            tracks.forEach(track => {
                if (track.getAttribute('data-category') === currentTab) {
                    track.style.display = 'flex';
                } else {
                    track.style.display = 'none';
                }
            });
        });
    });

    function getCardWidth() {
        const card = document.querySelector('.project-card');
        return card ? card.offsetWidth + 24 : 330;
    }

    function getMaxScroll(track) {
        const totalWidth = track.scrollWidth;
        const visibleWidth = track.parentElement.offsetWidth;
        return Math.max(0, totalWidth - visibleWidth);
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            const activeTrack = document.querySelector(`.projects-slider-track[data-category="${currentTab}"]`);
            if (!activeTrack) return;

            const cardWidth = getCardWidth();
            const maxScroll = getMaxScroll(activeTrack);

            currentPositions[currentTab] = Math.min(currentPositions[currentTab] + cardWidth, maxScroll);
            activeTrack.style.transform = `translateX(-${currentPositions[currentTab]}px)`;
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            const activeTrack = document.querySelector(`.projects-slider-track[data-category="${currentTab}"]`);
            if (!activeTrack) return;

            const cardWidth = getCardWidth();

            currentPositions[currentTab] = Math.max(currentPositions[currentTab] - cardWidth, 0);
            activeTrack.style.transform = `translateX(-${currentPositions[currentTab]}px)`;
        });
    }
}

/* 6. Testimonials Slider */
function initTestimonialsSlider() {
    const track = document.getElementById('testimonialsTrack');
    const prevBtn = document.getElementById('testimonialPrev');
    const nextBtn = document.getElementById('testimonialNext');
    if (!track || !prevBtn || !nextBtn) return;

    let position = 0;

    function getCardWidth() {
        const card = track.querySelector('.testimonial-card');
        return card ? card.offsetWidth + 24 : 330;
    }

    nextBtn.addEventListener('click', () => {
        const cardWidth = getCardWidth();
        const maxScroll = Math.max(0, track.scrollWidth - track.parentElement.offsetWidth);
        position = Math.min(position + cardWidth, maxScroll);
        track.style.transform = `translateX(-${position}px)`;
    });

    prevBtn.addEventListener('click', () => {
        const cardWidth = getCardWidth();
        position = Math.max(position - cardWidth, 0);
        track.style.transform = `translateX(-${position}px)`;
    });
}

/* 7. Media & News Slider */
function initMediaSlider() {
    const track = document.getElementById('mediaTrack');
    const prevBtn = document.getElementById('mediaPrev');
    const nextBtn = document.getElementById('mediaNext');
    if (!track || !prevBtn || !nextBtn) return;

    let position = 0;

    function getCardWidth() {
        const card = track.querySelector('.media-card');
        return card ? card.offsetWidth + 24 : 330;
    }

    nextBtn.addEventListener('click', () => {
        const cardWidth = getCardWidth();
        const maxScroll = Math.max(0, track.scrollWidth - track.parentElement.offsetWidth);
        position = Math.min(position + cardWidth, maxScroll);
        track.style.transform = `translateX(-${position}px)`;
    });

    prevBtn.addEventListener('click', () => {
        const cardWidth = getCardWidth();
        position = Math.max(position - cardWidth, 0);
        track.style.transform = `translateX(-${position}px)`;
    });
}

/* 8. FAQ Accordion */
function initFAQAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const header = item.querySelector('.faq-header');
        header.addEventListener('click', () => {
            const isOpen = item.classList.contains('is-open');

            // Close all
            faqItems.forEach(i => i.classList.remove('is-open'));

            // Toggle clicked
            if (!isOpen) {
                item.classList.add('is-open');
            }
        });
    });
}

/* 9. Editorial Read More */
function initEditorialReadMore() {
    const btn = document.getElementById('readMoreEditorialBtn');
    const moreText = document.getElementById('moreEditorialText');
    if (!btn || !moreText) return;

    btn.addEventListener('click', () => {
        if (moreText.style.display === 'block') {
            moreText.style.display = 'none';
            btn.innerHTML = 'Read More <span class="arrow">↓</span>';
        } else {
            moreText.style.display = 'block';
            btn.innerHTML = 'Read Less <span class="arrow">↑</span>';
        }
    });
}

/* 10. Modals (Enquiry + Video) */
function initModals() {
    // Enquiry Modal
    const enquireModal = document.getElementById('enquireModal');
    const enquireBtns = document.querySelectorAll('.open-enquire-modal');
    const closeEnquire = document.getElementById('closeEnquireModal');
    const enquireForm = document.getElementById('enquiryForm');

    enquireBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            if (enquireModal) {
                enquireModal.classList.add('is-visible');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    if (closeEnquire && enquireModal) {
        closeEnquire.addEventListener('click', () => {
            enquireModal.classList.remove('is-visible');
            document.body.style.overflow = '';
        });
    }

    if (enquireForm) {
        enquireForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for contacting Runwal Realty! Our sales advisor will connect with you shortly.');
            enquireForm.reset();
            enquireModal.classList.remove('is-visible');
            document.body.style.overflow = '';
        });
    }

    // Video Modal
    const videoModal = document.getElementById('videoModal');
    const videoFrame = document.getElementById('videoIframe');
    const closeVideo = document.getElementById('closeVideoModal');
    const videoTriggers = document.querySelectorAll('.video-thumb-wrap');

    videoTriggers.forEach(wrap => {
        wrap.addEventListener('click', () => {
            const videoId = wrap.getAttribute('data-youtube-id') || 'Y38bHN5z9ao';
            if (videoFrame) {
                videoFrame.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
            }
            if (videoModal) {
                videoModal.classList.add('is-visible');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    if (closeVideo && videoModal) {
        closeVideo.addEventListener('click', () => {
            if (videoFrame) videoFrame.src = '';
            videoModal.classList.remove('is-visible');
            document.body.style.overflow = '';
        });
    }

    // Close on clicking backdrop
    window.addEventListener('click', (e) => {
        if (enquireModal && e.target === enquireModal) {
            enquireModal.classList.remove('is-visible');
            document.body.style.overflow = '';
        }
        if (videoModal && e.target === videoModal) {
            if (videoFrame) videoFrame.src = '';
            videoModal.classList.remove('is-visible');
            document.body.style.overflow = '';
        }
    });
}

/* 11. Disclaimer Popup */
function initDisclaimerPopup() {
    const disclaimer = document.getElementById('disclaimerPopup');
    const acceptBtn = document.getElementById('acceptDisclaimerBtn');
    const closeBtn = document.getElementById('closeDisclaimerBtn');

    if (!disclaimer) return;

    const seen = sessionStorage.getItem('runwalDisclaimerSeen');
    if (!seen) {
        disclaimer.classList.add('is-visible');
    }

    function dismissDisclaimer() {
        sessionStorage.setItem('runwalDisclaimerSeen', 'true');
        disclaimer.classList.remove('is-visible');
    }

    if (acceptBtn) acceptBtn.addEventListener('click', dismissDisclaimer);
    if (closeBtn) closeBtn.addEventListener('click', dismissDisclaimer);
}

/* 12. Back to Top */
function initBackToTop() {
    const btn = document.getElementById('backToTopBtn');
    if (!btn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            btn.classList.add('is-visible');
        } else {
            btn.classList.remove('is-visible');
        }
    });

    btn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}
