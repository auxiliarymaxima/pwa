self.addEventListener('install', event => {
  // Send a message back to the page
  self.clients.matchAll().then(clients => {
    clients.forEach(client => {
      client.postMessage("Service worker installed!");
    });
  });
});
