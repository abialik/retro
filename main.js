document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === '' || password === '') {
        alert('Please fill in both fields.');
    } else {
        alert('Form submitted successfully!');
        // Add further processing logic here
}
});