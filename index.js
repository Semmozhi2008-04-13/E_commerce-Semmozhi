// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {

    const registerForm = document.getElementById("registerForm");
    const registerError = document.getElementById("registerError");

    if (registerForm) {
        registerForm.addEventListener("submit", function(event) {
            // Prevent the form from submitting
            event.preventDefault();
            
            // Clear previous errors
            registerError.textContent = "";

            // Get form values
            const username = document.getElementById("regUsername").value.trim();
            const email = document.getElementById("regEmail").value.trim();
            const password = document.getElementById("regPassword").value;
            const passwordConfirm = document.getElementById("regPasswordConfirm").value;

            // 1. Check for empty fields
            if (!username || !email || !password || !passwordConfirm) {
                registerError.textContent = "All fields are required.";
                return;
            }

            // 2. Check email format (simple regex)
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                registerError.textContent = "Please enter a valid email address.";
                return;
            }

            // 3. Check password length
            if (password.length < 8) {
                registerError.textContent = "Password must be at least 8 characters long.";
                return;
            }

            // 4. Check if passwords match
            if (password !== passwordConfirm) {
                registerError.textContent = "Passwords do not match.";
                return;
            }

            // If all checks pass:
            alert("Registration successful! (Simulated)");
            // In a real app, you would now send this data to your server
            // e.g., fetch('/api/register', { method: 'POST', body: ... })
        });
    }

    // You can add similar validation for the loginForm
    const loginForm = document.getElementById("loginForm");
    const loginError = document.getElementById("loginError");

    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();
            loginError.textContent = "";

            const email = document.getElementById("loginEmail").value.trim();
            const password = document.getElementById("loginPassword").value;

            if (!email || !password) {
                loginError.textContent = "Email and Password are required.";
                return;
            }
            
            alert("Login successful! (Simulated)");
            // In a real app, you'd send this to the server for verification
        });
    }
});
