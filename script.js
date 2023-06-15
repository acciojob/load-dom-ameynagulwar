//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
  // Clear the body tag
  document.body.innerHTML = "";

  // Create a new text node
  var textNode = document.createTextNode("DOM load success");

  // Append the text node to the body tag
  document.body.appendChild(textNode);
});
