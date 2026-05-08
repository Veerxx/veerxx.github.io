async function handleSubmit(e) {

    e.preventDefault();

    const form = e.target;
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

            submitBtn.innerHTML = 'Failed';

        }

    } catch (error) {

        submitBtn.innerHTML = 'Error';

    }

    setTimeout(() => {
        submitBtn.innerHTML = originalBtn;
        submitBtn.disabled = false;
    }, 3000);
}
