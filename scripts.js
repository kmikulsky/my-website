function copyToClipboard() {
  var copyText = "kmikulsky21@gmail.com";
  navigator.clipboard.writeText(copyText);
  alert("Copied the text: " + copyText);

  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied: " + copyText;
}

function outFunc() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}