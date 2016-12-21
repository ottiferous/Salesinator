// event listener for the 'submit' button
document.addEventListener('DOMContentLoaded', function(evt) {
  document.getElementById("submit").addEventListener("click", getSalesinatorOptions);
  motd();
  evt.preventDefault();
  document.getElementById("")

});

// event listener for the close button in overlay
document.addEventListener('DOMContentLoaded', function(evt) {
  document.getElementById("navclose").addEventListener("click", closeNav);
  document.getElementById('foobar').style.height - "0%";
})

/*
iterate through the 'select' elements within page.html and build new HTML to inject
ToDo:
      -build logic to have more control over the order things are appended into the HTML

*/
function getSalesinatorOptions() {
  optionsList =  document.getElementsByTagName("select");
  finalHTML = "";

  for (i = 0; i < optionsList.length; i++) {
    try {
      // if the option is found add it to the HTML list
      if (optionsList[i] != null) {
        key = optionsList[i].value;
        finalHTML = finalHTML + (key == null ? "" : buildEmail(key));
      } else { console.log("Null Entry"); }
    } catch(e){
      if(e){
        // log any errors to the console
        console.log(e);
      }
    }
  }
  //console.log("FINALHTML: " + finalHTML);
  document.getElementById('foobar').innerHTML += finalHTML;
  document.getElementById('foobar').style.width = "100%";
  return false;
}

function openNAV() {
  document.getElementById('foobar').style.height = "100%";
}
function closeNav() {
  document.getElementById('foobar').style.height - "0%";
}

function motd() {
  // generate a somewhat sensical message to show below the title
  // There is no real reason for this other than it is fun.
  // Isn't that reason enough?

  let wordlist = [
    "Generating documentation since 2016!",
    "How do you turn this thing on?",
    "Help! I'm trapped in a sandbox!",
    "Would I lie? Can I lie?",
    "Because we can't say RTFM",
    "Save the whales!",
    "So Long! And thanks for all the fish.",
    "If at first you don't succeed, skydiving is not for you.",
    "Duct tape is like THE FORCE; it has a light side & a dark side, and it holds the universe together.",
    "Anything is possible if you don't know what you're talking about.",
    "File that under 'Never'.",
    "Oh hello there. I didn't see you. Probably from a lack of eyes.",
    "<insert funny quote here>",
    "Well I think you're stunning, brave, and beautiful.",
    "Salesinator was recently updated. It now nows how to experience love!",
    "I saw a turtle!",
    "SELECT ALL THE THINGS!",
    "It sounds like English, but I can't understand a word you're saying.",
    "Life's true gift is the capacity to enjoy enjoyment."
  ];
  document.getElementById('motd').innerHTML += wordlist[Math.floor(Math.random()*wordlist.length)];
  return false;
}
