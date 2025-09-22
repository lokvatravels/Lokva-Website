// Page Navigation
function showPage(page) {
    const homepage = document.getElementById('homepage');
    const contactpage = document.getElementById('contactpage');
    
    if (page === 'home') {
        homepage.classList.remove('hidden');
        contactpage.classList.add('hidden');
        // Update active nav link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('text-blue-600');
            link.classList.add('text-gray-700');
        });
        const homeLink = document.querySelector('[onclick="showPage(\'home\')"]');
        if (homeLink) {
          homeLink.classList.add('text-blue-600');
          homeLink.classList.remove('text-gray-700');
        }
    } else if (page === 'contact') {
        homepage.classList.add('hidden');
        contactpage.classList.remove('hidden');
        // Update active nav link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('text-blue-600');
            link.classList.add('text-gray-700');
        });
        const contactLink = document.querySelector('[onclick="showPage(\'contact\')"]');
        if (contactLink) {
          contactLink.classList.add('text-blue-600');
          contactLink.classList.remove('text-gray-700');
        }
    }
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
}

// Carousel functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

// Create dots dynamically
const dotsContainer = document.querySelector('.carousel-dots');
slides.forEach((_, index) => {
    const dot = document.createElement('button');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
        resetInterval(); // reset timer if user clicks
    });
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.carousel-dots button');

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    slides[index].classList.add('active');
    dots[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

// Auto-advance carousel
let slideInterval = setInterval(nextSlide, 3000);

function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 3000);
}

// Testimonials functionality
const testimonials = [
    [
        { name: "Sharan Shetty", location: "Mangalore", initials: "SS", color: "bg-blue-500", text: "Lokva Tours made our European vacation absolutely perfect!", rating: 5 },
        { name: "Piyumi", location: "Australia", initials: "P", color: "bg-green-500", text: "Exceptional service from start to finish! The team helped us plan our dream honeymoon to Maldives.", rating: 4 },
        { name: "Amit Mehta", location: "Bangalore", initials: "AM", color: "bg-purple-500", text: "Professional, reliable, and incredibly helpful! Will definitely use their services again.", rating: 5 }
    ],
    [
        { name: "Sneha Patel", location: "Dubai", initials: "SP", color: "bg-pink-500", text: "Amazing experience with Lokva Tours! Perfectly planned family trip to Japan.", rating: 4 },
        { name: "Vikram Singh", location: "Jaipur", initials: "VS", color: "bg-indigo-500", text: "Outstanding service! Everything was seamless. Made our Australia trip memorable.", rating: 5 },
        { name: "Kavya Reddy", location: "Hyderabad", initials: "KR", color: "bg-teal-500", text: "Highly professional team! Switzerland adventure perfectly planned.", rating: 5 }
    ]
];

let currentTestimonialSet = 0;

function showTestimonials(setIndex) {
    const container = document.getElementById('testimonial-container');
    const testimonialSet = testimonials[setIndex];

    container.classList.add('testimonial-slide-out');

    setTimeout(() => {
        container.innerHTML = testimonialSet.map(testimonial => {
            const stars = `
                ${'<i class="fas fa-star"></i>'.repeat(testimonial.rating)}
                ${'<i class="far fa-star"></i>'.repeat(5 - testimonial.rating)}
            `;
            return `
                <div class="testimonial-card bg-gray-50 rounded-2xl p-8 shadow-lg">
                    <div class="flex items-center mb-4">
                        <div class="flex text-yellow-400">${stars}</div>
                    </div>
                    <p class="text-gray-600 mb-6 italic">"${testimonial.text}"</p>
                    <div class="flex items-center">
                        <div class="w-12 h-12 ${testimonial.color} rounded-full flex items-center justify-center mr-4">
                            <span class="text-white font-semibold">${testimonial.initials}</span>
                        </div>
                        <div>
                            <h4 class="font-semibold">${testimonial.name}</h4>
                            <p class="text-gray-500 text-sm">${testimonial.location}</p>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        container.classList.remove('testimonial-slide-out');
        container.classList.add('testimonial-slide-in');
    }, 300);
}

function nextTestimonial() {
    currentTestimonialSet = (currentTestimonialSet + 1) % testimonials.length;
    showTestimonials(currentTestimonialSet);
}

function prevTestimonial() {
    currentTestimonialSet = (currentTestimonialSet - 1 + testimonials.length) % testimonials.length;
    showTestimonials(currentTestimonialSet);
}

// Initialize first set on page load
document.addEventListener('DOMContentLoaded', () => {
    showTestimonials(currentTestimonialSet);
});


// Contact form handling for Google Forms
let submitted = false;

const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        submitted = true;
        // Form will submit to Google Forms automatically
        // The hidden iframe will handle the response
    });
}

// Function to show success message after form submission
function showSuccessMessage() {
    document.getElementById('success-message').classList.remove('hidden');
    const form = document.getElementById('contact-form');
    if (form) form.reset();
    submitted = false;
    
    // Hide success message after 5 seconds
    setTimeout(() => {
        document.getElementById('success-message').classList.add('hidden');
    }, 5000);
}

// Fade in animation on scroll
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.animationDelay = Math.random() * 0.3 + 's';
            element.classList.add('animate');
        }
    });
}

// Initialize
window.addEventListener('scroll', handleScrollAnimations);
window.addEventListener('load', handleScrollAnimations);

// Set initial active nav link
const initialHomeLink = document.querySelector('[onclick="showPage(\'home\')"]');
if (initialHomeLink) {
    initialHomeLink.classList.add('text-blue-600');
    initialHomeLink.classList.remove('text-gray-700');
}

// Show initial testimonial set (optional)
showTestimonials(currentTestimonialSet);

/* The original extra script (CDN / challenge-platform iframe loader) moved here exactly as in the original file */
(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'982791f754f5a27c',t:'MTc1ODQzNjgxNi4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();
