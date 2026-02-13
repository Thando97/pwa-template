const status = document.getElementById("status");
const btn = document.getElementById("actionBtn");

btn.addEventListener("click", () => {
  status.textContent = "Button tapped 👆";
});

// Register Service Worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then(() => console.log("Service Worker registered"))
    .catch(err => console.error("SW failed", err));
}