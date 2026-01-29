// Navattic Demo Embed Loader
// Dynamically loads the Navattic embed script and initializes the popup
(function() {
  var script = document.createElement('script');
  script.src = 'https://js.navattic.com/embeds.js';
  script.async = true;
  script.onload = function() {
    if (window.NavatticEmbed) {
      NavatticEmbed.initPopup("https://capture.navattic.com/cmklfh1m1000404laackz1wzh", {
        title: "Universal Accounts Marketing"
      });
    }
  };
  document.head.appendChild(script);
})();

// Global function to open the Navattic demo popup
window.openNavatticDemo = function() {
  if (window.NavatticEmbed) {
    NavatticEmbed.openPopup("https://capture.navattic.com/cmklfh1m1000404laackz1wzh");
  }
};
