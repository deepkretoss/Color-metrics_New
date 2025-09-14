document.addEventListener("DOMContentLoaded", () => {
    // if the current page is inside /pages, fetch without "pages/"
    fetch("navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar").innerHTML = data;
        })
        .catch(err => console.error("Error loading navbar:", err));
});
