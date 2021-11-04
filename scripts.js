function copyToClipboard() {
  var email = "kmikulsky21@gmail.com";
  navigator.clipboard.writeText(email);
  alert("Copied the text: " + email);

  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied: " + email;
}

function outFunc() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}