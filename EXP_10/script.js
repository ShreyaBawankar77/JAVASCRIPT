// JSON API URL
const apiURL = "https://jsonplaceholder.typicode.com/users";


// Display data in table
function displayData(users) {

    const tableBody = document.getElementById("tableBody");

    // Clear existing data
    tableBody.innerHTML = "";

    // Loop through JSON data
    users.forEach(function(user) {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.address.city}</td>
        `;

        tableBody.appendChild(row);
    });
}


// Load JSON using fetch()
function loadWithFetch() {

    fetch(apiURL)
        .then(function(response) {

            if (!response.ok) {
                throw new Error("Failed to load data");
            }

            return response.json();
        })
        .then(function(data) {

            displayData(data);

            console.log("Data loaded using fetch():", data);
        })
        .catch(function(error) {

            console.error("Error:", error);
        });
}


// Load JSON using jQuery $.getJSON()
function loadWithJQuery() {

    $.getJSON(apiURL)

        .done(function(data) {

            displayData(data);

            console.log("Data loaded using jQuery:", data);
        })

        .fail(function() {

            console.error("Failed to load JSON data.");
        });
}
