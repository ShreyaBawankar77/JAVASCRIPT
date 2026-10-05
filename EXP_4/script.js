// Function Declaration
function checkPalindrome() {

    try {
        // Local scope
        let input = document.getElementById("textInput").value;

        if (input.trim() === "") {
            throw new Error("Please enter a word or sentence.");
        }

        // Arrow Function
        const cleanText = (text) => {
            return text.toLowerCase().replace(/[^a-z0-9]/g, "");
        };

        let text = cleanText(input);

        // Function Expression
        const reverseText = function(str) {
            return str.split("").reverse().join("");
        };

        let reversed = reverseText(text);

        if (text === reversed) {
            document.getElementById("result").innerHTML =
                `"${input}" is a Palindrome.`;
        } else {
            document.getElementById("result").innerHTML =
                `"${input}" is NOT a Palindrome.`;
        }

    } catch (error) {
        document.getElementById("result").innerHTML =
            "Error: " + error.message;
    }
}


// Closure Example
function createCounter() {

    let count = 0;

    return function() {
        count++;
        return count;
    };
}

const counter = createCounter();

console.log("Closure Counter:", counter());
console.log("Closure Counter:", counter());
