function logoutUser() {
    localStorage.removeItem("loggedInUser"); // Remove stored user session
    window.location.href = "login.html"; // Redirect to login page
}
