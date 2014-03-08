$("#mc-embedded-subscribe").click(function() {
    // This sends us an event every time a user clicks the button
    mixpanel.track("Button clicked");
});

$(document).ready(function() {
  mixpanel.track("Page viewed")
});

$("#twitter_link").click(function() {
    mixpanel.track("Twitter clicked");
});

$("#facebook_link").click(function() {
    mixpanel.track("Facebook clicked");
});
