// Initialize EmailJS - Replace YOUR_USER_ID with your actual EmailJS user ID
(function () {
    emailjs.init("YOUR_USER_ID");
})();

// Parallax effect on scroll
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const backgrounds = document.querySelectorAll('.parallax-bg');
    
    backgrounds.forEach(bg => {
        const section = bg.closest('.parallax-section');
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        // Only apply parallax when section is in viewport
        if (scrolled + window.innerHeight > sectionTop && scrolled < sectionTop + sectionHeight) {
            const speed = parseFloat(bg.dataset.speed) || 0.3;
            const yPos = -(scrolled - sectionTop) * speed;
            bg.style.transform = `translateY(${yPos}px)`;
        }
    });
});

// Toggle sidenav
function toggleNav() {
    const sidenav = document.getElementById('sidenav');
    sidenav.classList.toggle('active');
}

// Modal functions
function openModal() {
    document.getElementById('contactModal').style.display = 'block';
}

function closeModal() {
    const form = document.getElementById('contactForm');
    const hasData = checkFormHasData(form);

    if (hasData) {
        showToast();
        return;
    }
    
    document.getElementById('contactModal').style.display = 'none';
}

// Show toast notification
function showToast() {
    const toast = document.getElementById('toast');
    toast.className = 'toast show';
}

// Hide toast notification
function hideToast() {
    const toast = document.getElementById('toast');
    toast.className = 'toast';
}

// Force close modal (from toast button)
function forceCloseModal() {
    hideToast();
    document.getElementById('contactModal').style.display = 'none';
    document.getElementById('contactForm').reset();
}

// Helper function to check if form has any data
function checkFormHasData(form) {
    // Check text inputs
    const textInputs = form.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"], input[type="date"], input[type="number"]');
    for (let input of textInputs) {
        if (input.value && input.value.trim() !== '') {
            return true;
        }
    }
    
    // Check select
    const selects = form.querySelectorAll('select');
    for (let select of selects) {
        if (select.value && select.value !== '') {
            return true;
        }
    }
    
    // Check textarea
    const textareas = form.querySelectorAll('textarea');
    for (let textarea of textareas) {
        if (textarea.value && textarea.value.trim() !== '') {
            return true;
        }
    }
    
    // Check checkboxes
    const checkboxes = form.querySelectorAll('input[type="checkbox"]:checked');
    if (checkboxes.length > 0) {
        return true;
    }
    
    // Check radio buttons
    const radios = form.querySelectorAll('input[type="radio"]:checked');
    if (radios.length > 0) {
        return true;
    }
    
    return false;
}

// Close modal when clicking outside - with warning
window.onclick = function(event) {
    const modal = document.getElementById('contactModal');
    
    if (event.target == modal) {
        const form = document.getElementById('contactForm');
        const hasData = checkFormHasData(form);

        if (hasData) {
            showToast();
            return;
        }
        
        modal.style.display = 'none';
    }
}

// Toggle pet types visibility
function togglePetTypes(show) {
    document.getElementById('petTypesGroup').style.display = show ? 'block' : 'none';
}

// Form submission with EmailJS
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Collect form data
        const templateParams = {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            email: document.getElementById('email').value,
            mobile: document.getElementById('mobile').value,
            moveInDate: document.getElementById('moveInDate').value,
            location: document.getElementById('location').value,
            priceRange: document.getElementById('priceRange').value,
            bedrooms: Array.from(document.querySelectorAll('input[name="bedrooms"]:checked'))
                .map(cb => cb.value)
                .join(", "),
            hasPets: document.querySelector('input[name="hasPets"]:checked')?.value || 'Not specified',
            petTypes: Array.from(document.querySelectorAll('input[name="petTypes"]:checked'))
                .map(cb => cb.value)
                .join(", "),
            washerDryer: document.querySelector('input[name="washerDryer"]:checked')?.value || 'Not specified',
            floorPreference: Array.from(document.querySelectorAll('input[name="floorPreference"]:checked'))
                .map(cb => cb.value)
                .join(", "),
            comments: document.getElementById('comments').value
        };

        // Send via EmailJS - Replace YOUR_SERVICE_ID and YOUR_TEMPLATE_ID
        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
            .then(function(response) {
                console.log('Email sent successfully!', response);
                alert('Thank you! We received your information and will be in touch soon.');
                closeModalWithoutWarning();
                document.getElementById('contactForm').reset();
            }, function(error) {
                console.error('Email send failed:', error);
                alert('Oops! There was an error sending your information. Please try again later.');
            });
    });
});

// Close modal without warning (for successful submission)
function closeModalWithoutWarning() {
    document.getElementById('contactModal').style.display = 'none';
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});