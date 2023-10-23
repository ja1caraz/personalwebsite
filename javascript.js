

function displayInputvValues() {
    
    // Step One
    // Get the input values
    var name = document.getElementById("nameInput").value;
    var email = document.getElementById("emailInput").value;
    var message = document.getElementById("messageInput").value;

    // Step Two
    // Create a message with the input values
    var outputMessage = "Name: " + name + "\nEmail: " + email + "\nMessage: " + message;

    // Step Three 
    // Display the message
    alert("\nYou entered the following information:\n\n" + outputMessage);
}

// Add an event listener to the form's submit button
var submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", displayInputvValues);
