// event listener for the 'submit' button
document.addEventListener('DOMContentLoaded', function(evt) {
  document.getElementById("submit").addEventListener("click", getSalesinatorOptions);
  evt.preventDefault();
});

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
  return false;
}
