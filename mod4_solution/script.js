

(function() {
    var names = ["Akansha", "Anshuman", "Anjali", "Jason", "darulo", "Marshall", "Mathers"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'a') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();
