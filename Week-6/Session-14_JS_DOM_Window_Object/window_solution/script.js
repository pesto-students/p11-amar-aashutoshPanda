function displayWindowProperties() {
  console.log("User Agent:", window.navigator.userAgent);
  console.log("Screen Width:", window.screen.width);
  console.log("Screen Height:", window.screen.height);
  console.log("Current URL:", window.location.href);
  console.log("Current Path:", window.location.pathname);

  // Store data in sessionStorage
  window.sessionStorage.setItem("key", "Session Storage Value");
  console.log("Session Storage:", window.sessionStorage.getItem("key"));

  // Store data in localStorage
  window.localStorage.setItem("key", "Local Storage Value");
  console.log("Local Storage:", window.localStorage.getItem("key"));
}

window.onload = displayWindowProperties;
