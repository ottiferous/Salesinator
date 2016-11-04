function getSalesinatorOptions() {
  optionsList =  document.getElementByTagName("select");
  finalHTML = ""
  for entry in optionsList {
    // if the option is found add it to the HTML list
    finalHTML += (entry == "" ? "" : buildEmail(entry));
  }

  return finalHTML;
}
