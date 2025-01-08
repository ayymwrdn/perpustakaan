// Sample book data
const books = ['The Great Gatsby', '1984', 'To Kill a Mockingbird'];

document.getElementById('loginForm').addEventListener('submit'), function(event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous error messages
    document.getElementById('usernameError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('successMessage').textContent = '';

    // Get form values
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    let valid = true;

    // Validate username
    if (username === '') {
        document.getElementById('usernameError').textContent = 'Username is required.';
        valid = false;
    }

    // Validate password
    if (password === '') {
        document.getElementById('passwordError').textContent = 'Password is required.';
        valid = false;
    }
}