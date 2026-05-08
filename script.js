// script.js
document.addEventListener('DOMContentLoaded', function () {

    console.log('Portfolio loaded');

    const form = document.querySelector('.contact-form');

    if (form) {
        form.addEventListener('submit', async function (e) {

            e.preventDefault();

            const submitBtn = form.querySelector('.form-submit');
            const originalBtn = submitBtn.innerHTML;

            submitBtn.innerHTML = 'Sending...';
            submitBtn.disabled = true;

            const formData = new FormData(form);

            try {

                const response = await fetch('https://formspree.io/f/mreoaenj', {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {

                    submitBtn.innerHTML = 'Message Sent ✓';
                    form.reset();

                } else {

                    submitBtn.innerHTML = 'Failed to Send';

                }

            } catch (error) {

                submitBtn.innerHTML = 'Error Occurred';

            }

            setTimeout(() => {
                submitBtn.innerHTML = originalBtn;
                submitBtn.disabled = false;
            }, 3000);

        });
    }

});
