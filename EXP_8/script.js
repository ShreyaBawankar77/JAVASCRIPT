// Access form fields
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const ageInput = document.getElementById("age");
const membershipInput = document.getElementById("membership");

// Live validation for Name
nameInput.addEventListener("input", function () {

    if (nameInput.value.trim() === "") {
        document.getElementById("nameError").textContent =
            " Name is required";
    } else {
        document.getElementById("nameError").textContent =
            " ✓";
    }
});


// Live validation for Email
emailInput.addEventListener("input", function () {

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailInput.value)) {
        document.getElementById("emailError").textContent =
            " Invalid email";
    } else {
        document.getElementById("emailError").textContent =
            " ✓";
    }
});


// Live validation for Phone
phoneInput.addEventListener("input", function () {

    const phonePattern = /^[0-9]{10}$/;

    if (!phonePattern.test(phoneInput.value)) {
        document.getElementById("phoneError").textContent =
            " Enter 10 digit phone number";
    } else {
        document.getElementById("phoneError").textContent =
            " ✓";
    }
});


// Live validation for Age
ageInput.addEventListener("input", function () {

    let age = Number(ageInput.value);

    if (age < 16 || age > 70) {
        document.getElementById("ageError").textContent =
            " Age must be between 16 and 70";
    } else {
        document.getElementById("ageError").textContent =
            " ✓";
    }
});


// Form submission event
document.getElementById("gymForm").addEventListener(
    "submit",
    function (event) {

        event.preventDefault();

        let name = nameInput.value.trim();
        let email = emailInput.value.trim();
        let phone = phoneInput.value.trim();
        let age = Number(ageInput.value);
        let membership = membershipInput.value;

        // Final validation
        if (
            name === "" ||
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
            !/^[0-9]{10}$/.test(phone) ||
            age < 16 ||
            age > 70 ||
            membership === ""
        ) {
            alert("Please enter valid details.");
            return;
        }

        document.getElementById("success").textContent =
            "Gym admission successful! Welcome, " + name + ".";

        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Phone:", phone);
        console.log("Age:", age);
        console.log("Membership:", membership);
    }
);
