// Apply saved theme when page loads
window.onload = function () {

    // Get theme from localStorage
    let savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
        applyTheme(savedTheme);
    }

    // Get session information
    let sessionTheme = sessionStorage.getItem("sessionTheme");

    if (sessionTheme) {
        console.log("Session Theme:", sessionTheme);
    }
};


// Set theme
function setTheme(theme) {

    // Save theme permanently using localStorage
    localStorage.setItem("theme", theme);

    // Save theme for current browser session
    sessionStorage.setItem("sessionTheme", theme);

    // Apply theme
    applyTheme(theme);

    document.getElementById("message").textContent =
        "Theme saved successfully: " + theme;

    console.log("Theme saved in localStorage:", theme);
    console.log("Theme saved in sessionStorage:", theme);
}


// Apply selected theme
function applyTheme(theme) {

    if (theme === "dark") {

        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";

    } else {

        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }
}


// Clear saved preferences
function clearPreferences() {

    localStorage.removeItem("theme");
    sessionStorage.removeItem("sessionTheme");

    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";

    document.getElementById("message").textContent =
        "Theme preferences cleared.";
}
