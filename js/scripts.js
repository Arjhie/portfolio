/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Zoomable image modal
window.addEventListener('DOMContentLoaded', event => {
    const modal = document.getElementById("imgModal");
    const modalImg = document.getElementById("modalImage");
    const closeBtn = document.querySelector(".close");
    window.addEventListener('DOMContentLoaded', event => {
        const modal = document.getElementById("imgModal");
        const modalImg = document.getElementById("modalImage");
        const closeBtn = document.querySelector(".close");
    
        document.querySelectorAll(".zoomable").forEach(img => {
            img.addEventListener("click", function () {
                modal.style.display = "block";
                modalImg.src = this.src;
            });
        });
    
        closeBtn.addEventListener("click", function () {
            modal.style.display = "none";
        });
    
        window.addEventListener("click", function (event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    });
    
    // When an image with class 'zoomable' is clicked
    document.querySelectorAll(".zoomable").forEach(img => {
        img.addEventListener("click", function () {
            modal.style.display = "block";
            modalImg.src = this.src;
        });
    });

    // Close modal
    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Also close modal when clicking outside the image
    window.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
window.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('lightboxModal');
    const modalImg = document.getElementById('lightboxImg');
    const closeBtn = document.querySelector('.lightbox-close');

    // Add click event to all zoomable images
    document.querySelectorAll('.zoomable').forEach(img => {
        img.addEventListener('click', () => {
            modal.style.display = 'block';
            modalImg.src = img.src;
            modalImg.alt = img.alt;
        });
    });

    // Close on close button
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close when clicking outside the image
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modal.style.display = 'none';
        }
    });
});


    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
