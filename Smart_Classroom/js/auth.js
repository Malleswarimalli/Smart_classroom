document.getElementById("login-form")?.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Retrieve stored user details
    const storedUser = localStorage.getItem("user");
    const storedPass = localStorage.getItem("pass");

    if (username === storedUser && password === storedPass) {
        localStorage.setItem("isLoggedIn", "true");
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid Credentials! Please try again.");
    }
});

document.getElementById("signup-form")?.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("signup-username").value;
    const password = document.getElementById("signup-password").value;

    // Store user credentials
    localStorage.setItem("user", username);
    localStorage.setItem("pass", password);

    alert("Signup Successful! Now, please log in.");
    window.location.href = "login.html";
});

// Logout functionality
document.getElementById("logout")?.addEventListener("click", function () {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "login.html";
});
