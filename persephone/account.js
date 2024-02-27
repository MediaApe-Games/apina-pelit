// requires tools.js, timeme.js

const account = getCookie("apinaPelitToken");

function trackTime() {
  TimeMe.initialize({
    currentPageName: window.location.href,
    idleTimeoutInSeconds: 1000
  });

}

function submit() {
  var email = $('#email').text();
  var user = $('#name').text();
  var pass = $('#password').text();
}