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
    content.innerHTML = "<h2>Settings Section</h2><p>This is the Settings section.</p>";
  }
}
