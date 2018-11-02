document.addEventListener("DOMContentLoaded", event => {
  /**
   *     Service Worker registration
   */
 /* if (navigator.serviceWorker) {
    navigator.serviceWorker
      .register("sw.js")
      .then(registration => console.log("SW registered", registration))
      .catch(e => console.log("Registration failed :(", e));
  }*/
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('/sw.js').then(function(registration) {
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, function(err) {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
      });
    });
  }
});

