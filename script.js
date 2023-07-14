function loadContent(section) {
  var content = document.getElementById("content");
  content.innerHTML = "";

  if (section === "home") {
    content.innerHTML = "<h1>Lj Server</h1><p>This has Games, Apps, and more.</p>";
  } else if (section === "games") {
    content.innerHTML = "<h2>Games Section</h2><p>This is the Games section.</p>";
  } else if (section === "apps") {
    content.innerHTML = "<h2>Apps Section</h2><p>This is the Apps section.</p>";
  } else if (section === "proxies") {
    content.innerHTML = "<h2>Proxies Section</h2><p>This is the Proxies section.</p>";
  } else if (section === "settings") {
    content.innerHTML = `
      <h2>Settings Section</h2>
      <div class="theme-option">
        <h3>Theme</h3>
        <label for="background-color">Background Color:</label>
        <input type="color" id="background-color" onchange="changeBackgroundColor()" />
      </div>
      <div class="blank-option">
        <h3>Blank</h3>
        <button onclick="openInBlank()">Open in Blank</button>
      </div>
    `;
  }
}

function changeBackgroundColor() {
  var colorInput = document.getElementById("background-color");
  var body = document.querySelector("body");
  body.style.backgroundColor = colorInput.value;
}

function openInBlank() {
  window.open("", "_blank").document.write("<html><head><meta http-equiv='refresh' content='0; url=" + location.href + "' /></head><body></body></html>");
}
