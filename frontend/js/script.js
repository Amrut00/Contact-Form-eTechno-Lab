document.getElementById("submitForm").addEventListener("submit", async function(event) {
    event.preventDefault();
    const form = this;
    const loader = form.querySelector('.loader');
    const submitBtn = form.querySelector('button[type="submit"]');

    submitBtn.disabled = true;
    loader.style.display = 'block';

    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        mobile: document.getElementById("mobile").value,
        dob: document.getElementById("dob").value,
        message: document.getElementById("message").value
    };

    try {
        const response = await fetch("http://localhost:3000/api/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        });

        const result = await response.json();
        alert(result.message);
        form.reset();
    } catch (error) {
        alert("Error submitting the form.");
        console.error(error);
    } finally {
        submitBtn.disabled = false;
        loader.style.display = 'none';
    }
});