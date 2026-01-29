document.getElementById('btn').addEventListener('click', () => {
  document.getElementById('status').textContent = 'JS works';
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js');
}