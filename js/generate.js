// event listener for the 'submit' button and some helper functions when DOM is loaded
document.addEventListener('DOMContentLoaded', function(evt) {
  document.getElementById("submit").addEventListener("click", getSalesinatorOptions);
  motd();

  /* dynamically geneate the drop down menus */
  buildHowTo();
  buildOptionList(generateIntro(), 'introduction');
  buildOptionList(generatePlatformFeatures(), 'platform_features');
  buildOptionList(generateEnterpriseFeatures(), 'enterprise_features');
  buildOptionList(generateAdministration(), 'administration');

  buildOptionList(generateVPN(), 'vpn');
  buildOptionList(generateMicrosoft(), 'microsoft');
  buildOptionList(generateWeb(), 'web');
  buildOptionList(generateOther(), 'other');

  buildOptionList(generateCloud(), 'cloud');
  buildOptionList(generateAPI(), 'api');
  buildOptionList(generateReference(), 'reference');

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

function buildHowTo() {
  let text = "Select the information for the customer from the drop-down menus below, and then click on 'submit'. </br> \
  This will generate an overlay with the text you can copy and paste into an email. </br> \
  Click 'clear' if you want to start over.";

  document.getElementById('howto').innerHTML += text;
  return false;
}

/* helper function to format the <option> tag */
function buildOptionHTML(key, value) {
  return "<option value=\"" + key + "\">" + value + "</option>\n"
}

/* builds the Intro Section based on a passed Dictionary */
function buildOptionList(list, section) {

  /* how many elements to create */
  let maxCount = 3;
  var finalHTML = "";

  for ( x = 0; x < maxCount; x++ ) {
    finalHTML += "<select id=\"" + section + x + "\">";
    finalHTML += "<option label=\" \"></option>\n";
    for (var key in list) {
      if(list.hasOwnProperty(key)) {
        /* pass along the id and the text to helper function */
        finalHTML += buildOptionHTML(key, list[key]);
      }
    }
    finalHTML += "</select>"
  }
  document.getElementById(section).innerHTML += finalHTML;
  return false;
}

/*
  Helper functions to build the <option> list through a dictionary
*/
function generateIntro() {
  return {
    "guide" : "Guide",
    "getting_started" : "Getting Started",
    "administration" : "Administration",
    "creating_applications" : "Creating Applications",
    "enrolling_users" : "Enrolling Users",
    "deploying_a_proof_of_concept" : "Deploying a Proof of Concept"
  };
}
function generatePlatformFeatures() {
  return {
    "platform_overview" : "Platform Overview",
    "policy" : "Policy & Control",
    "insights" : "Device Insight",
    "endpoints" : "Endpoints",
    "dag" : "Duo Access Gateway"
  };
}
function generateEnterpriseFeatures() {
  return {
    "admin-roles" : "Administration Roles",
    "self-service-portal" : "Self Service Portal",
    "syncing_users_from_active_directory" : "Directory Sync",
    "trusted_devices" : "Trusted Devices & Networks",
    "device-management" : "Device Management Portal"
  };
}
function generateAdministration() {
  return {
    "administration-settings" : "Changing Settings",
    "administration-users" : "Managing Users",
    "administration-devices" : "Managing Devices",
    "telephony_credits" : "Telephony Credits",
    "accessibility" : "Accessibility",
    "labs-features" : "Labs Features"
  };
}
function generateVPN() {
  return {
    "juniper" : "juniper",
    "pulseconnect" : "Pulse Secure",
    "cisco" : "Cisco",
    "citrix" : "Citrix NetScaler",
    "paloalto" : "Palo Alto",
    "f5bigip" : "F5",
    "fortinet" : "Fortinet",
    "barracuda" : "Barracuda",
    "array-ag" : "Array Networks",
    "sonicwallsra" : "Sonicwall SRA",
    "openvpn" : "OpenVPN",
    "openvpnas" : "OpenVPN AS",
    "netmotion" : "NetMotion Wireless",
    "checkpoint" : "Checkpoint",
    "radius" : "RADIUS",
    "authproxy" : "Auth Proxy"
  };
}
function generateMicrosoft() {
  return {
    "owa" : "Outlook Web App",
    "o365" : "Office 365",
    "rdp" : "Windows Local Login & RDP",
    "adfs-30" : "Active Directory Federation Services",
    "rds" : "Remote Desktop Services",
    "tmg" : "Threat Management Gateway",
    "uag" : "Unified Access Gateway",
    "rras" : "RRAS"
  };
}
function generateWeb() {
  return {
    "duoweb" : "Duo Web SDK",
    "wordpress" : "WordPress",
    "confluence" : "Confluence (local)",
    "jira" : "JIRA (local)",
    "drupal" : "Drupal",
    "splunk" : "Splunk",
    "shibboleth" : "Shibboleth",
    "oam" : "Oracle Access Manager",
    "lastpass" : "LastPass",
    "1password" : "1Password"
  };
}
function generateOther() {
  return {
    "epic" : "Epic",
    "awsworkspaces" : "Amazon WorkSpaces",
    "peoplesoft" : "Oracle PeopleSoft",
    "juniper-uac" : "Juniper Unified Access Control",
    "vmwareview" : "VMWare Horizon View",
    "bomgar" : "Bomgar",
    "thycotic" : "Thycotic Secret Server",
    "ldap" : "LDAP",
    "radius" : "RADIUS",
    "duounix" : "Unix & SSH (PAM)"
  };
}
function generateCloud() {
  return {
    "asana" : "Asana",
    "adobe-documentcloud" : "Adobe Document Cloud",
    "aws" : "Amazon Web Services",
    "bamboohr" : "BambooHR",
    "bluejeans" : "BlueJeans",
    "bomgar-soo" : "Bomgar SSO",
    "bonusly" : "Bonusly",
    "box" : "Box",
    "canvas" : "Canvas",
    "clarizen" : "Clarizen",
    "cloudlock" : "CloudLock",
    "confluencesso" : "Confluence SSO",
    "crashplan" : "CrashPlan",
    "datadog" : "Datadog",
    "desk" : "Desk",
    "docusign" : "DocuSign",
    "dropbox" : "Dropbox",
    "egnyte" : "Egnyte",
    "evernote" : "Evernote",
    "expensify" : "Expensify",
    "freshdesk" : "Freshdesk",
    "github-enterprise" : "Github",
    "gotomeeting" : "GoToMeeting",
    "greenhouse" : "Greenhouse",
    "gapps" : "G Suite (Google Apps)",
    "hackerone" : "HackerOne",
    "heroku" : "Heroku",
    "intacct" : "Intacct",
    "jamf-jss" : "JAMF Software",
    "jitbit" : "JitBit",
    "jirasso" : "Jira SSO",
    "looker" : "Looker",
    "marketo" : "Marketo",
    "meraki" : "Meraki",
    "namely" : "Namely",
    "new-relic" : "New Relic",
    "o365" : "Office 365",
    "opendns" : "OpenDNS",
    "pagerduty" : "Pagerduty",
    "remedyforce" : "Remedyforce",
    "ringcentral" : "RingCentral",
    "robin" : "Robin",
    "salesforce" : "Salesforce",
    "samanage" : "Samanage",
    "saucelabs" : "SauceLabs",
    "sharefile" : "ShareFile",
    "signalsciences" : "Signal Sciences",
    "slack" : "Slack",
    "smartsheet" : "Smartsheet",
    "statuspageio" : "StatusPage.io",
    "sugarcrm" : "SugarCRM",
    "sumologic" : "Sumologic",
    "syncplicity" : "Syncplicity",
    "udemy" : "Udemy",
    "Uservoice" : "User Voice",
    "webex" : "WebEx",
    "facebookatwork" : "Facebook at Work",
    "zendesk" : "Zendesk",
    "zoom" : "Zoom",
    "onelogin" : "One Login",
    "okta" : "Okta",
    "pingfederate" : "Ping Federate"
  };
}
function generateAPI() {
  return {
    "duoweb" : "DuoWeb SDK",
    "authapi" : "Auth API",
    "adminapi" : "Administration API"
  };
}
function generateReference() {
  return {
    "authrpoxy" : "Authproxy",
    "duo_help_desk_guide" : "Duo Help Desk Guide",
    "guide_to_business_continuity_preparedness" : "Business Continuity Preparedness",
    "promoting_push" : "Promoting Push Guide",
    "checksums" : "Checksums"
  };
}
