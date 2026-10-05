function analyzeData() {

    // Get user input
    let email = document.getElementById("email").value.trim();
    let text = document.getElementById("text").value;

    // Email validation using Regex
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let emailResult;

    if (emailPattern.test(email)) {
        emailResult = "Valid Email";
    } else {
        emailResult = "Invalid Email";
    }

    // String functions
    let upperText = text.toUpperCase();
    let lowerText = text.toLowerCase();
    let textLength = text.length;

    // Count words
    let words = text.trim().split(/\s+/);
    let wordCount = text.trim() === "" ? 0 : words.length;

    // Count characters excluding spaces
    let charactersWithoutSpaces = text.replace(/\s/g, "").length;

    // Extract numbers using Regex
    let numbers = text.match(/\d+/g);

    if (numbers === null) {
        numbers = [];
    }

    // Extract email addresses from text
    let emails = text.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g);

    if (emails === null) {
        emails = [];
    }

    // Extract words starting with capital letters
    let capitalWords = text.match(/\b[A-Z][a-z]*\b/g);

    if (capitalWords === null) {
        capitalWords = [];
    }

    // Display result
    document.getElementById("result").innerHTML = `
        <h2>Analysis Result</h2>

        <p><b>Email Validation:</b> ${emailResult}</p>

        <p><b>Original Text:</b> ${text}</p>

        <p><b>Uppercase:</b> ${upperText}</p>

        <p><b>Lowercase:</b> ${lowerText}</p>

        <p><b>Total Characters:</b> ${textLength}</p>

        <p><b>Characters Without Spaces:</b>
        ${charactersWithoutSpaces}</p>

        <p><b>Word Count:</b> ${wordCount}</p>

        <p><b>Numbers Found:</b>
        ${numbers.length > 0 ? numbers.join(", ") : "None"}</p>

        <p><b>Email Addresses Found:</b>
        ${emails.length > 0 ? emails.join(", ") : "None"}</p>

        <p><b>Capitalized Words:</b>
        ${capitalWords.length > 0 ? capitalWords.join(", ") : "None"}</p>
    `;

    // Console output
    console.log("Email:", emailResult);
    console.log("Word Count:", wordCount);
    console.log("Numbers:", numbers);
    console.log("Extracted Emails:", emails);
}
