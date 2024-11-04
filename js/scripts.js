document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('感谢您的留言，我们会尽快回复您！');
            form.reset();
        });
    }
});