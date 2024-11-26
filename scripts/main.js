function login(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "katrina" && password === "123456") {
        window.location.href = "landing.html"; // Redirect to landing page
    } else {
        alert("Invalid login credentials!");
    }
}
