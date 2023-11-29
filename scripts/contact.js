// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

// Get a reference to the submit-button element
const submitButton = document.getElementById("submit-button");

// Add a click event listener to the submit-button
submitButton.addEventListener("click", function() {
  // Get a reference to the contact-page element
  const contactPage = document.getElementById("contact-page");

  // Create a new <p> element for the thank you message
  const thankYouMessage = document.createElement("p");
  thankYouMessage.textContent = "Thank you for your message!";
  thankYouMessage.style.fontSize = "24px";

  // Replace the contents of the contact-page with the thank you message
  contactPage.innerHTML = ""; // Clear the existing content
  contactPage.appendChild(thankYouMessage);
});
