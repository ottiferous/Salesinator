function buildEmail(section) {
  // build template for emails ( refactor into own function? )
  return buildHTML(docText(section));
}

// builds HTML formatting for text
function buildHTML(text) {
  var formattedString = "";
  formattedString += (text['title'] == "" ? "" : "</br><h1><em>" + text['title'] + "</em></h1>");
  formattedString += (text['body'] == "" ? "" : text['body'] + "</br></br>");
  formattedString += (text['link'] == "" ? "" : "More Information: <a href='" + text['link'] + "'>" + text['link'] + "</a></br>");
  formattedString += (text['img'] == "" ? "" : "<img src='" + chrome.extension.getURL(text['img']) + "'></br>")

  return formattedString;
}

// generates the sign-up email information
function signup() {
  return '<em>Step 1:</em>Signup for a Duo Security Account: <a href="https://signup.duo.com">https://signup.duo.com</a> \
   <em>Step 2:</em>Decide which enrollment option(s) best meet your needs: <a href ="https://www.duo.com/docs/enrolling_users">https://www.duo.com/docs/enrolling_users</a> \
   <em>Step 3:</em> Setup your Applications';
}

function docText(integration) {
  // get entry from masterlist of integration information
  var text = {};
  switch(integration) {

    // Getting Started
    case 'gettingstarted':
      text['title'] = "Getting Started With Duo";
      text['body'] = "To get started you will first want to sign up for an account at the link below. Once you have signed up for an account you can begin using all the features of Duo Security for 30 days!";
      text['link'] = "https://signup.duo.com";
      text['img'] = "";
      return text;

    // Enrollment Options Section
    case 'inline':
      text['title'] = "In-Line Self Enrollment";
      text['body']  = "Duo\'s self-enrollment process lets users add themselves to Duo. They type their phone number and are given instructions for installing Duo Mobile and adding their account to it.";
      text['link']  = "https://www.duo.com/docs/enrolling_users";
      text['img']   = "";
      return text;
    case 'bulk':
      text['title'] = "Bulk Email Enrollment";
      text['body']  = "Use the bulk enrollment tool to send enrollment links to your users. This is helpful if your integration doesn\'t support inline self-enrollment (OpenVPN, RDP, desktop clients, etc.)";
      text['link']  = "https://www.duo.com/docs/enrolling_users#bulk-self-enrollment";
      text['img']   = "";
      return text;
    case 'adsync':
      text['title'] = "Active Directory Sync";
      text['body']  = "Duo Security supports organizations that prefer to synchronize users and groups from Active Directory (AD). This is done by configuring Duo Security\'s Directory Sync feature. Active Directory attributes that may already be populated include name, email address, phone numbers, and group memberships. <em>The Directory Sync feature is part of the Duo Enterprise and Platform Editions.<em>";
      text['link']  = "https://www.duo.com/docs/syncing_users_from_active_directory";
      text['img']   = "img/adsync-network-diagram.png";
      return text;
    case 'api':
      text['title'] = "API User Provisioning";
      text['body']  = "The API has methods for creating, retrieving, updating, and deleting the core objects in Duo’s system: users, phones, hardware tokens, admins, and integrations. It also alows reading authentication logs, administrator logs, and telephony logs; read or update account settings; and retrieve reports and other information. Review the API Details to see how to construct your first API request.";
      text['link']  = "www.duo.com/docs/adminapi";
      text['img']   = "";
      return text;
    case 'csv':
      text['title'] = "CSV Import";
      text['body']  = "Duo provides a Import Users feature that can import user information from a properly formatted comma separated values (CSV) file.";
      text['link']  = "https://www.duo.com/docs/enrolling_users#manual-enrollment";
      text['img']   = "";
      return text;
    case 'manual':
      text['title'] = "Manual Creation";
      text['body']  = "You can also add users and phones manually using Duo\'s Administrative Interface online";
      text['link']  = "https://www.duo.com/docs/enrolling_users#manual-enrollment";
      text['img']   = "";
      return text;

    //VPN Integrations section
    case 'juniper':
      text['title'] = "Juniper SSL VPN";
      text['body']  = "Duo integrates with your Juniper Networks Secure Access (SA) or Pulse Secure Connect Secure SSL VPN to add two-factor authentication to any VPN login, complete with inline self-service enrollment and authentication prompt. While these instructions reference the Juniper SA SSL VPN throughout, they also work with the Secure Connect SSL VPN from Pulse Secure. Please see the FAQ for more information about the Pulse transition. See our alternate instructions if you'd like to control the \"failmode\" (how the system will act if network communication with Duo is interrupted) or integrate Duo into a single Juniper sign-in URL with multiple authentication realms.";
      text['link']  = "https://duo.com/docs/juniper";
      text['img']   = "img/juniper-network-diagram.png";
      return text;
    case 'pulseconnet':
      text['title'] = "Pulse Connect Secure SSL VPN";
      text['body']  = "Duo integrates with your Pulse Secure Connect Secure SSL VPN to add two-factor authentication to any VPN login, complete with inline self-service enrollment and authentication prompt. See our alternate instructions if you'd like to control the \"failmode\" (how the system will act if network communication with Duo is interrupted) or integrate Duo into a single Connect Secure sign-in URL with multiple authentication realms.";
      text['link']  = "https://duo.com/docs/pulseconnect";
      text['img']   = "img/pulse-network-diagram.png";
      return text;
    case 'cisco':
      text['title'] = "Cisco SSL VPN";
      text['body']  = "Duo integrates with your Cisco ASA VPN to add two-factor authentication to any VPN login. The SSL VPN configuration supports inline self-service enrollment and authentication prompt. Use the SSL VPN deployment to protect web-based VPN logins and AnyConnect desktop and mobile client connections that use SSL encryption. If you need to protect connections that use Cisco's desktop VPN client (IKE encryption), use our Cisco IPSec instructions.";
      text['link']  = "https://duo.com/docs/cisco";
      text['img']   = "img/cisco-network-diagram.png";
      return text;
    case 'citrix':
      text['title'] = "Citrix NetScaler Gateway";
      text['body']  = "Duo integrates with your Citrix NetScaler Gateway to add two-factor authentication to VPN logins. Duo Security supports inline self-service enrollment and authentication prompt when logging on to the NetScaler using a web browser. For Citrix Receiver connections, Duo Security supports passcodes, phone, and push authentication. If your users need the ability to reset passwords from the NetScaler Gateway, please use the NetScaler Alternate Instructions.";
      text['link']  = "https://duo.com/docs/citrix_netscaler";
      text['img']   = "img/netscaler_network_diagram.png";
      return text;
    case 'paloalto':
      text['title'] = "Palo Alto GlobalProtect";
      text['body']  = "Duo integrates with your Palo Alto GlobalProtect Gateway to add two-factor authentication to VPN logins. To integrate Duo with your Palo Alto, you will need to install a local proxy service on a machine within your network. Before proceeding, you should locate (or set up) a system on which you will install the Duo Authentication Proxy. The proxy supports Windows and Linux systems (in particular, we recommend Windows Server 2012 R2 or later, Red Hat Enterprise Linux 6 or later, CentOS 6 or later, or Debian 6 or later). This Duo proxy server also acts as a RADIUS server — there's no need to deploy a separate RADIUS server to use Duo.";
      text['link']  = "https://duo.com/docs/paloalto";
      text['img']   = "palo_alto_network_diagram.png";
      return text;
    case 'f5bigip':
      text['title'] = "F5 BIG-IP APM";
      text['body']  = "Duo integrates with your F5 BIG-IP APM to add two-factor authentication to any VPN login, complete with inline self-service enrollment and authentication prompt. Check out F5 FirePass SSL VPN if you don't have a BIG-IP APM. The Duo F5 Big-IP configuration with inline enrollment and authentication prompt supports firmware versions 11.4 - 11.6 and 12.0. Refer to our alternate instructions if you want to configure Duo on your BIG-IP with automatic push and phone call authentication.";
      text['link']  = "https://duo.com/docs/f5bigip";
      text['img']   = "img/f5_network_diagram.png";
      return text;
    case 'fortinet':
      text['title'] = "Fortinet FortiGate SSL VPN";
      text['body']  = "Duo integrates with your Fortinet FortiGate SSL VPN to add two-factor authentication to the Forticlient for VPN access. If you are using Fortinet's SSL VPN browser-based access please refer to our SSL VPN Instructions. To integrate Duo with your Fortinet FortiGate SSL VPN, you will need to install a local proxy service on a machine within your network. Before proceeding, you should locate (or set up) a system on which you will install the Duo Authentication Proxy. The proxy supports Windows and Linux systems (in particular, we recommend Windows Server 2012 R2 or later, Red Hat Enterprise Linux 6 or later, CentOS 6 or later, or Debian 6 or later). This Duo proxy server also acts as a RADIUS server — there's no need to deploy a separate RADIUS server to use Duo.";
      text['link']  = "https://duo.com/docs/fortinet";
      text['img']   = "img/fortinet_network_diagram.png";
      return text;
    case 'barracuda':
      text['title'] = "Barracuda SSL VPN";
      text['body']  = "Duo integrates with your Barracuda SSL VPN to add two-factor authentication to any VPN login, complete with inline self-service enrollment and authentication prompt. If you are using the Barracuda VPN Client then see the Alternate VPN Client Instructions to configure the Barracuda device to use Duo Security's automatic push authentication. To integrate Duo with your Barracuda SSL VPN, you will need to install a local proxy service on a machine within your network. Before proceeding, you should locate (or set up) a system on which you will install the Duo Authentication Proxy. The proxy supports Windows and Linux systems (in particular, we recommend Windows Server 2012 R2 or later, Red Hat Enterprise Linux 6 or later, CentOS 6 or later, or Debian 6 or later). This Duo proxy server also acts as a RADIUS server — there's no need to deploy a separate RADIUS server to use Duo.";
      text['link']  = "https://duo.com/docs/barracuda";
      text['img']   = "";
      return text;
    case 'array-ag':
      text['title'] = "Array AG SSL VPN";
      text['body']  = "Duo integrates with your Array AG SSL VPN to add two-factor authentication to any VPN login, complete with inline self-service enrollment and authentication prompt. To integrate Duo with your Array AG SSL VPN, you will need to install a local proxy service on a machine within your network. Before proceeding, you should locate (or set up) a system on which you will install the Duo Authentication Proxy. The proxy supports Windows and Linux systems (in particular, we recommend Windows Server 2012 R2 or later, Red Hat Enterprise Linux 6 or later, CentOS 6 or later, or Debian 6 or later). This Duo proxy server also acts as a RADIUS server — there's no need to deploy a separate RADIUS server to use Duo.";
      text['link']  = "https://duo.com/docs/array-ag";
      text['img']   = "img/array_network_diagram.png";
      return text;
    case 'sonicwallsra':
      text['title'] = "SonicWALL SRA SSL VPN";
      text['body']  = "Duo integrates with your SonicWALL SRA SSL VPN to add two-factor authentication to any browser VPN login, complete with inline self-service enrollment and authentication prompt. If you are using SonicWALL's Global VPN Client using IPsec or the SonicWALL Mobile Connect app then see the Alternate VPN Instructions to configure the SonicWALL device to use Duo Security's push authentication. Other types of SonicWALL devices (such as the NSA series or Aventail) may also work with Duo's RADIUS Application. To integrate Duo with your SonicWALL SRA SSL VPN, you will need to install a local proxy service on a machine within your network. Before proceeding, you should locate (or set up) a system on which you will install the Duo Authentication Proxy. The proxy supports Windows and Linux systems (in particular, we recommend Windows Server 2012 R2 or later, Red Hat Enterprise Linux 6 or later, CentOS 6 or later, or Debian 6 or later). This Duo proxy server also acts as a RADIUS server — there's no need to deploy a separate RADIUS server to use Duo.";
      text['link']  = "https://duo.com/docs/sonicwallsra";
      text['img']   = "img/sonicwall_network_diagram.png";
      return text;
    case 'openvpn':
      text['title'] = "OpenVPN";
      text['body']  = "This configuration is for the OpenVPN Community Open Source Software Project. Refer to the OpenVPN AS documentation if you're using OpenVPN Access Server.";
      text['link']  = "https://duo.com/docs/openvpn";
      text['img']   = "img/open_vpn_network_diagram.png";
      return text;
    case 'openvpnas':
      text['title'] = "OpenVPN Access Server";
      text['body']  = "These instructions will enable you to add Duo two-factor authentication to an OpenVPN Access Server installation. If you wish to use Duo with the OpenVPN Community Open Source Software Project, refer to the OpenVPN instructions instead.";
      text['link']  = "https://duo.com/docs/openvpn_as";
      text['img']   = "img/open_vpn_network_diagram.png";
      return text;
    case 'netmotion':
      text['title'] = "NetMotion Mobility XE";
      text['body']  = "Duo integrates with your NetMotion Mobility XE VPN software to add two-factor authentication to any VPN login. Duo two-factor authentication for NetMotion supports using the EAP (PEAP-GTC) mechanism against a RADIUS server using Duo's Authentication Proxy radius_client primary authentication or against an Active Directory domain controller using Duo's ad_client primary authentication. If you are not using Active Directory and do not have a RADIUS server that supports EAP you must deploy one (for example, Microsoft Network Policy Server or FreeRADIUS) before using Duo authentication. If using RADIUS as the primary authenticator with NetMotion EAP, the RADIUS server must permit use of PAP encryption. You will need a certificate and corresponding key file when configuring the Duo Authentication Proxy. The certificate can be issued by your trusted CA. If you'd like to use a self-signed certificate, you can create one using OpenSSL following the example instructions here.";
      text['link']  = "https://duo.com/docs/netmotion";
      text['img']   = "img/netmotion_network_diagram.png";
      return text;
    case 'checkpoint':
      text['title'] = "Check Point Mobile Access";
      text['body']  = "Duo integrates with Check Point Mobile Access to add two-factor authentication to any SSL VPN login. This configuration has been tested from a web browser SSL VPN session (with and without SSL Network Extender), the Check Point Mobile Enterprise app, the Check Point Mobile VPN app, and the preinstalled Check Point VPN client in Windows 8.1. See the Check Point Support Center for a list of Remote Access solutions that support SSL. To integrate Duo with your Check Point Mobile Access VPN, you will need to install a local proxy service on a machine within your network. Before proceeding, you should locate (or set up) a system on which you will install the Duo Authentication Proxy. The proxy supports Windows and Linux systems (in particular, we recommend Windows Server 2012 R2 or later, Red Hat Enterprise Linux 6 or later, CentOS 6 or later, or Debian 6 or later). This Duo proxy server also acts as a RADIUS server — there's no need to deploy a separate RADIUS server to use Duo.";
      text['link']  = "https://duo.com/docs/checkpoint";
      text['img']   = "img/checkpoint_network_diagram.png";
      return text;
    case 'radius':
      text['title'] = "RADIUS";
      text['body']  = "Duo integrates with almost any device or system that supports using RADIUS for authentication. In this type of configuration, users will append Duo passcodes — or factor names like phone or push — to their existing passwords when logging in.";
      text['link']  = "https://duo.com/docs/radius";
      text['img']   = "img/radius-network-diagram.png";
      return text;
    case 'authproxy':
      text['title'] = "Authentication Proxy";
      text['body']  = "Many of Duo's integrations do not require any local components. However, certain integrations do require that a local Authentication Proxy service be installed. This document contains a comprehensive reference of the advanced configuration options available for the proxy. Quick-start guides for installing and configuring the proxy can be found in each of the specific application documentation pages (e.g. Palo Alto, Citrix Netscaler, or F5). We recommend starting there, and then using this page if you need advanced configuration options.";
      text['link']  = "https://duo.com/docs/authproxy-overview";
      text['img']   = "img/radius-network-diagram.png";
      return text;

    // Microsoft Integrations section
    case 'owa':
      text['title'] = "Outlook Web App (OWA)";
      text['body']  = "Duo integrates with Microsoft Outlook Web App (previously Outlook Web Access) to add two-factor authentication to OWA logins, complete with inline self-service enrollment and authentication prompt.";
      text['link']  = "https://duo.com/docs/owa";
      text['img']   = "img/owa_network_diagram.png";
      return text;
    case 'o365':
      text['title'] = "Duo Protection for Office 365";
      text['body']  = "Duo offers a variety of methods for adding two-factor authentication and flexible security policies to Office 365 SSO logins, complete with inline self-service enrollment and authentication prompt. As business applications move from on-premises to cloud hosted solutions, users experience password fatigue due to disparate logons for different applications. Single sign-on (SSO) technologies seek to unify identities across systems and reduce the number of different credentials a user has to remember or input to gain access to resources. While SSO is convenient for users, it presents new security challenges. If a user's primary password is compromised, attackers may be able to gain access to multiple resources. In addition, as sensitive information makes its way to cloud-hosted services it is even more important to secure access by implementing two-factor authentication.";
      text['link']  = "https://duo.com/docs/o365";
      text['img']   = "img/dag-diagram.png";
      return text;
    case 'rdp':
      text['title'] = "Duo Authentication for Windows Logon and RDP";
      text['body']  = "Duo integrates with Microsoft Windows client and server operating systems to add two-factor authentication to Remote Desktop and local logons.";
      text['link']  = "https://duo.com/docs/rdp";
      text['img']   = "img/rdp-network-diagram.png";
      return text;
    case 'adfs-30':
      text['title'] = "Microsoft AD FS 3.0";
      text['body']  = "Duo integrates with Microsoft AD FS 3.0 to add two-factor authentication to services using browser-based federated logins, complete with inline self-service enrollment and authentication prompt. The Duo AD FS module supports relying parties that use Microsoft's WS-Federation protocol, like Office 365, as well as SAML 2.0 federated logons for cloud apps like Google Apps and salesforce.com. The AD FS application is part of Duo Enterprise and Platform Editions. The Duo AD FS 3.0 integration has been tested with AD FS 3.0 on Windows Server 2012 R2. To protect AD FS on Windows Server 2012 or 2008 R2 use the AD FS 2.x integration.";
      text['link']  = "https://duo.com/docs/adfs-30";
      text['img']   = "img/adfs_network_diagram.png";
      return text;
    case 'rds':
      text['title'] = "Duo Authentication for Microsoft Remote Desktop Services";
      text['body']  = "Duo integrates with Remote Desktop Web Access (formerly Terminal Services Web Access or TS Web Access) or Remote Desktop Gateway (formerly Terminal Services Gateway or TS Gateway) to add two-factor authentication to RD Web and RD Gateway logons. Duo Authentication v2.2.0 for RD Web and RD Gateway supports Windows Server 2008 R2, 2012, and 2012 R2. If you want to enforce two-factor authentication for all your clients, you should ensure that they must connect through RD Web Access and RD Gateway. If users can establish a direct connection on port 3389 to your RD Connection Broker and/or Session Host(s), then they may be able to bypass two­-factor authentication.";
      text['link']  = "https://duo.com/docs/rds";
      text['img']   = "img/RDWeb-architecture.png";
      return text;
    case 'tmg':
      text['title'] = "Microsoft TMG";
      text['body']  = "Duo integrates with your Microsoft TMG Server to add two-factor authentication to any published web server or SSL VPN Connections. To integrate Duo with your Microsoft TMG server, you will need to install a local proxy service on a machine within your network. Before proceeding, you should locate (or set up) a system on which you will install the Duo Authentication Proxy. The proxy supports Windows and Linux systems (in particular, we recommend Windows Server 2012 R2 or later, Red Hat Enterprise Linux 6 or later, CentOS 6 or later, or Debian 6 or later). This Duo proxy server also acts as a RADIUS server — there's no need to deploy a separate RADIUS server to use Duo.";
      text['link']  = "https://duo.com/docs/tmg";
      text['img']   = "img/tmg_network_diagram.png";
      return text;
    case 'uag':
      text['title'] = "Microsoft Forefront Unified Access Gateway (UAG)";
      text['body']  = "Duo integrates with your Microsoft UAG Gateway to add two-factor authentication to portal logins. To integrate Duo with your Microsoft UAG server, you will need to install a local proxy service on a machine within your network. Before proceeding, you should locate (or set up) a system on which you will install the Duo Authentication Proxy. The proxy supports Windows and Linux systems (in particular, we recommend Windows Server 2012 R2 or later, Red Hat Enterprise Linux 6 or later, CentOS 6 or later, or Debian 6 or later). This Duo proxy server also acts as a RADIUS server — there's no need to deploy a separate RADIUS server to use Duo.";
      text['link']  = "https://duo.com/docs/uag";
      text['img']   = "img/uag_network_diagram.png";
      return text;
    case 'rras':
      text['title'] = "Microsoft RRAS";
      text['body']  = "Duo integrates with your Microsoft Routing and Remote Access Server (RRAS) to add two-factor authentication to VPN Connections. To integrate Duo with your Microsoft RRAS server, you will need to install a local proxy service on a machine within your network. Before proceeding, you should locate (or set up) a system on which you will install the Duo Authentication Proxy. The proxy supports Windows and Linux systems (in particular, we recommend Windows Server 2012 R2 or later, Red Hat Enterprise Linux 6 or later, CentOS 6 or later, or Debian 6 or later). This Duo proxy server also acts as a RADIUS server — there's no need to deploy a separate RADIUS server to use Duo.";
      text['link']  = "https://duo.com/docs/rras";
      text['img']   = "img/rras_network_diagram.png";
      return text;

    // Duo Web integrations
    case 'duoweb':
      text['title'] = "Duo Web";
      text['body']  = "Duo Web makes it easy to add strong two-factor authentication to your web application. Client libraries are available for Python, Ruby, Classic ASP, ASP.NET, Java, PHP, Node.js, ColdFusion, and Perl. Implementing Duo two-factor authentication into your site involves simply adding a second login page and splitting your login handler into two parts. You should be familiar with your web application's programming language and authentication process.";
      text['link']  = "https://duo.com/docs/duoweb";
      text['img']   = "img/websdk_network_diagram.png";
      return text;
    case 'wordpress':
      text['title'] = "Duo for WordPress";
      text['body']  = "Duo's WordPress plugin enables two-factor authentication for WordPress logins, complete with inline self-service enrollment and authentication prompt. The code is open-source and available on GitHub.";
      text['link']  = "https://duo.com/docs/wordpress";
      text['img']   = "img/wordpress_network_diagram.png";
      return text;
    case 'confluence':
      text['title'] = "";
      text['body']  = "Duo integrates with Atlassian Confluence to add two-factor authentication to your wiki logins, complete with inline self-service enrollment and authentication prompt. The code is open-source and available on GitHub. This project has been tested with Confluence 4.2, 5.1, 5.4, and 5.6 - 5.10. It is not compatible with Confluence 4.1. Check your Confluence version before installing Duo. Also note the location of your Confluence installation directory.";
      text['link']  = "https://duo.com/docs/confluence";
      text['img']   = "img/confluence_network_diagram.png";
      return text;
    case 'jira':
      text['title'] = "Duo for JIRA Software";
      text['body']  = "Duo integrates with the on-premises Atlassian JIRA Software project and issue tracking application to add two-factor authentication to your logins, complete with inlineself-service enrollment and authentication prompt. The code is open-source and available on GitHub. Duo for JIRA Software has been tested against JIRA 6.1, 6.4, and 7.0 - 7.2. Onlyon-premises installations of JIRA Software are supported. Mobile browsers may experience issues logging on with two-factor and are not currently supported. Check your JIRA version beforeinstalling Duo. Also note the location of your JIRA installation directory.";
      text['link']  = "https://duo.com/docs/jira";
      text['img']   = "img/jira_network_diagram.png";
      return text;
    case 'drupal':
      text['title'] = "Duo for Drupal";
      text['body']  = "Duo integrates with for Drupal 6.x/7.x sites to add two-factor authentication to your logins, complete with inline self-service enrollment and authentication prompt. Thecode is open-source and available on GitHub. This application is not compatible with Drupal 8. If you'd like to be notified when Duo releases login protection for Drupal 8, please contactSupport.";
      text['link']  = "https://duo.com/docs/drupal";
      text['img']   = "img/drupal_network_diagram.png";
      return text;
    case 'splunk':
      text['title'] = "Splunk";
      text['body']  = "Duo integrates with Splunk to add two-factor authentication to your Splunk logins, complete with inline self-service enrollment and authentication prompt. Before startingto add two-factor authentication to Splunk, make sure that Duo is compatible with your Splunk install. Log into Splunk's web interface and click the about link in the top right corner.Splunk 6.5 and later natively includes Duo Security MFA. Users of Splunk 6.5 do not need to download and install the Duo plugin from Duo. If you're using Splunk 6.4 or earlier, you'llneed to download and install a Duo plugin. Instructions for Splunk versions 6.4 and earlier";
      text['link']  = "https://duo.com/docs/splunk";
      text['img']   = "img/splunk-network-diagram.png";
      return text;
    case 'shibboleth':
      text['title'] = "Duo for Shibboleth Identity Provider v3";
      text['body']  = "Duo integrates with Shibboleth to add two-factor authentication for Shibboleth identity providers, complete with inline self-service enrollment and authentication prompt.The code is open-source and available on GitHub. This plugin has been tested with Shibboleth Identity Provider 3.1.1.";
      text['link']  = "https://duo.com/docs/shibboleth";
      text['img']   = "img/shibboleth_network_diagram.png";
      return text;
    case 'cas':
      text['title'] = "Central Authentication Server (CAS)";
      text['body']  = "Duo Security's two-factor authentication is able to secure access to Central Authentication Server (CAS) deployments, complete with self-service enrollment andauthentication prompt. Duo Security does not provide a native CAS integration. Unicon includes support for Duo in their third-party multifactor module for CAS. See Unicon's CAS-MFAproject wiki for additional information.";
      text['link']  = "https://duo.com/docs/cas";
      text['img']   = "img/";
      return text;
    case 'oam':
      text['title'] = "Duo for Oracle Access Manager";
      text['body']  = "Duo integrates with Oracle Access Manager to add two-factor authentication to your single sign-on logins, complete with inline self-service enrollment and authenticationprompt. Duo for Oracle Access Manager has been tested on Oracle Access Manager 11.1.2.3.0 running with WebLogic 10.3.6.0.";
      text['link']  = "https://duo.com/docs/oam";
      text['img']   = "";
      return text;
    case 'lastpass':
      text['title'] = "LastPass";
      text['body']  = "LastPass has partnered with Duo Security to bring two-factor authentication to LastPass logins, complete with inline self-service enrollment and authentication prompt.";
      text['link']  = "This document takes you through configuring your LastPass Free, Premium, or Enterprise account to use Duo Push. You'll sign up for a Duo account, set up LastPass to useyour new Duo account, and enroll your LastPass username and your device for use with Duo's service. Once you complete this process, Duo Security’s two-factor authentication platformprotects access to your LastPass data by requiring approval when logging in to your LastPass Vault.";
      text['img']   = "";
      return text;
    case '1password':
      text['title'] = "1Password";
      text['body']  = "AgileBits has partnered with Duo Security to bring two-factor authentication to 1Password for Teams logins, complete with inline self-service enrollment andauthentication prompt. This document takes you through configuring your 1Password for Teams account to use Duo Push. You'll sign up for a Duo account, set up 1Password to use your new Duoaccount, and enroll your 1Password username and your device for use with Duo's service. Once you complete this process, Duo Security’s two-factor authentication platform protects accessto your 1Password data by requiring approval when logging in to your 1Password for Teams account.";
      text['link']  = "https://duo.com/docs/1password";
      text['img']   = "";
      return text;

      // Cloud / SAML integrations
      case 'asana':
        text['title'] = "Duo Protection for Asana";
        text['body']  = "Duo offers a variety of methods for adding two-factor authentication and flexible security policies to Asana SSO logins, complete with inline self-service enrollment and authentication prompt.";
        text['link']  = "https://duo.com/docs/asana";
        text['img']   = "img/dag-diagram.png";
        return text;
      case 'adobe-documentlcoud':
        text['title'] = "Duo Protection for Adobe Document Cloud (Formerly EchoSign)";
        text['body']  = "Duo offers a variety of methods for adding two-factor authentication and flexible security policies to Adobe Document Cloud SSO logins, complete with inline self-service enrollment and authentication prompt.";
        text['link']  = "https://duo.com/docs/adobe-documentcloud";
        text['img']   = "img/dag-diagram.png";
        return text;
      case 'aws':
        text['title'] = "Duo Protection for Amazon Web Services (AWS)";
        text['body']  = "Duo offers a variety of methods for adding two-factor authentication and flexible security policies to Amazon Web Services (AWS) SSO logins, complete with inline self-service enrollment and authentication prompt.";
        text['link']  = "https://duo.com/docs/aws";
        text['img']   = "img/dag-diagram.png";
        return text;
      case 'bamboohr':
        text['title'] = "Duo Protection for BambooHR";
        text['body']  = "Duo offers a variety of methods for adding two-factor authentication and flexible security policies to BambooHR SSO logins, complete with inline self-service enrollment and authentication prompt.";
        text['link']  = "https://duo.com/docs/bamboohr";
        text['img']   = "img/dag-diagram.png";
        return text;
      case 'bluejeans':
        text['title'] = "Duo Protection for BlueJeans";
        text['body']  = "Duo offers a variety of methods for adding two-factor authentication and flexible security policies to BlueJeans SSO logins, complete with inline self-service enrollment and authentication prompt.";
        text['link']  = "https://duo.com/docs/bluejeans";
        text['img']   = "img/dag-diagram.png";
        return text;
      case 'bomgar-sso':
        text['title'] = "Duo Protection for Bomgar";
        text['body']  = "Duo offers a variety of methods for adding two-factor authentication and flexible security policies to Bomgar SSO logins, complete with inline self-service enrollment and authentication prompt.";
        text['link']  = "https://duo.com/docs/bomgar-sso";
        text['img']   = "img/dag-diagram.png";
        return text;
      case 'bonusly':
        text['title'] = "Duo Protection for Bonusly";
        text['body']  = "Duo offers a variety of methods for adding two-factor authentication and flexible security policies to Bonusly SSO logins, complete with inline self-service enrollment and authentication prompt. Note: Bonusly requires Duo Access Gateway version 1.2.1 or greater. Please upgrade your Duo Access Gateway before attempting to use Bonusly.";
        text['link']  = "https://duo.com/docs/bonusly";
        text['img']   = "img/dag-diagram.png";
        return text;
      case 'box':
        text['title'] = "Duo Protection for box";
        text['body']  = "Duo offers a variety of methods for adding two-factor authentication and flexible security policies to Box SSO logins, complete with inline self-service enrollment and authentication prompt.";
        text['link']  = "https://duo.com/docs/box";
        text['img']   = "img/dag-diagram.png";
        return text;
      case 'canvas':
        text['title'] = "Duo Protection for Canvas";
        text['body']  = "Duo offers a variety of methods for adding two-factor authentication and flexible security policies to Canvas SSO logins, complete with inline self-service enrollment and authentication prompt.";
        text['link']  = "https://duo.com/docs/canvas";
        text['img']   = "img/dag-diagram.png";
        return text;
      case 'clarizen':
        text['title'] = "Duo Protection for Clarizen";
        text['body']  = "Duo offers a variety of methods for adding two-factor authentication and flexible security policies to Clarizen SSO logins, complete with inline self-service enrollment and authentication prompt. Note: Clarizen requires Duo Access Gateway version 1.2.1 or greater. Please upgrade your Duo Access Gateway before attempting to use Clarizen.";
        text['link']  = "https://duo.com/docs/clarizen";
        text['img']   = "img/dag-diagram.png";
        return text;
      case 'cloudlock':
        text['title'] = "Duo Protection for CloudLock";
        text['body']  = "Duo offers a variety of methods for adding two-factor authentication and flexible security policies to CloudLock SSO logins, complete with inline self-service enrollment and authentication prompt.";
        text['link']  = "https://duo.com/docs/cloudlock";
        text['img']   = "img/dag-diagram.png";
        return text;
      case 'confluencesso':
        text['title'] = "Duo Protection for Confluence SSO";
        text['body']  = "Duo offers a variety of methods for adding two-factor authentication and flexible security policies to Confluence SSO logins, complete with inline self-service enrollment and authentication prompt. If you're looking to protect non-SAML logins to your Confluence service, please see our Confluence plugin documentation.";
        text['link']  = "https://duo.com/docs/confluencesso";
        text['img']   = "img/dag-diagram.png";
        return text;
      case 'crashplan':
        text['title'] = "Duo Protection for CrashPlan";
        text['body']  = "Duo offers a variety of methods for adding two-factor authentication and flexible security policies to CrashPlan SSO logins, complete with inline self-service enrollment and authentication prompt. Note: Duo Protection for CrashPlan has been tested on CrashPlan Server 5.1.0 and 5.3.0. CrashPlan requires Duo Access Gateway version 1.3.0 or greater. Please upgrade your Duo Access Gateway before attempting to use CrashPlan.";
        text['link']  = "https://duo.com/docs/crashplan";
        text['img']   = "img/dag-diagram.png";
        return text;
      case 'datadog':
        text['title'] = "Duo Protection for Datadog";
        text['body']  = "Duo offers a variety of methods for adding two-factor authentication and flexible security policies to Datadog SSO logins, complete with inline self-service enrollment and authentication prompt. Note: Datadog requires Duo Access Gateway version 1.3.0 or greater. Please upgrade your Duo Access Gateway before attempting to use Datadog.";
        text['link']  = "https://duo.com/docs/datadog";
        text['img']   = "img/dag-diagram.png";
        return text;
      case 'desk':
        text['title'] = "Duo Protection for Desk";
        text['body']  = "Duo offers a variety of methods for adding two-factor authentication and flexible security policies to Desk SSO logins, complete with inline self-service enrollment and authentication prompt.";
        text['link']  = "https://duo.com/docs/desk";
        text['img']   = "img/dag-diagram.png";
        return text;
      case 'docusign':
        text['title'] = "Duo Protection for DocuSign";
        text['body']  = "Duo offers a variety of methods for adding two-factor authentication and flexible security policies to DocuSign SSO logins, complete with inline self-service enrollment and authentication prompt.";
        text['link']  = "https://duo.com/docs/docusign";
        text['img']   = "img/dag-diagram.png";
        return text;
      case 'dropbox':
        text['title'] = "Duo Protection for Dropbox";
        text['body']  = "Duo offers a variety of methods for adding two-factor authentication and flexible security policies to Dropbox SSO logins, complete with inline self-service enrollment and authentication prompt.";
        text['link']  = "https://duo.com/docs/dropbox";
        text['img']   = "img/dag-diagram.png";
        return text;
      case 'egnyte':
        text['title'] = "Duo Protection for Egnyte";
        text['body']  = "Duo offers a variety of methods for adding two-factor authentication and flexible security policies to Egnyte SSO logins, complete with inline self-service enrollment and authentication prompt.";
        text['link']  = "https://duo.com/docs/egnyte";
        text['img']   = "img/dag-diagram.png";
        return text;
      case 'evernote':
        text['title'] = "Duo Protection for Evernote";
        text['body']  = "Duo offers a variety of methods for adding two-factor authentication and flexible security policies to Evernote SSO logins, complete with inline self-service enrollment and authentication prompt.";
        text['link']  = "https://duo.com/docs/evernote";
        text['img']   = "img/dag-diagram.png";
        return text;
      case 'expensify':
        text['title'] = "Duo Protection for Expensify";
        text['body']  = "Duo offers a variety of methods for adding two-factor authentication and flexible security policies to Expensify SSO logins, complete with inline self-service enrollment and authentication prompt.";
        text['link']  = "https://duo.com/docs/expensify";
        text['img']   = "img/dag-diagram.png";
        return text;
      case 'freshdesk':
        text['title'] = "Duo Protection for Freshdesk";
        text['body']  = "Duo offers a variety of methods for adding two-factor authentication and flexible security policies to Freshdesk SSO logins, complete with inline self-service enrollment and authentication prompt.";
        text['link']  = "https://duo.com/docs/freshdesk";
        text['img']   = "img/dag-diagram.png";
        return text;
      case 'github-enterprise':
        text['title'] = "Duo Protection for GitHub Enterprise";
        text['body']  = "Duo offers a variety of methods for adding two-factor authentication and flexible security policies to GitHub Enterprise SSO logins, complete with inline self-service enrollment and authentication prompt.";
        text['link']  = "https://duo.com/docs/github-enterprise";
        text['img']   = "img/dag-diagram.png";
        return text;
      case 'gotomeeting':
        text['title'] = "Duo Protection for GoToMeeting";
        text['body']  = "Duo offers a variety of methods for adding two-factor authentication and flexible security policies to GoToMeeting SSO logins, complete with inline self-service enrollment and authentication prompt.";
        text['link']  = "https://duo.com/docs/gotomeeting";
        text['img']   = "img/dag-diagram.png";
        return text;
      case 'greenhouse':
        text['title'] = "Duo Protection for Greenhouse";
        text['body']  = "Duo offers a variety of methods for adding two-factor authentication and flexible security policies to Greenhouse SSO logins, complete with inline self-service enrollment and authentication prompt.";
        text['link']  = "https://duo.com/docs/greenhouse";
        text['img']   = "img/dag-diagram.png";
        return text;
      case 'gapps':
        text['title'] = "Duo Protection for G Suite (Formerly Google Apps)";
        text['body']  = "Duo offers a variety of methods for adding two-factor authentication and flexible security policies to G Suite SSO logins, complete with inline self-service enrollment and authentication prompt.";
        text['link']  = "https://duo.com/docs/gapps";
        text['img']   = "img/dag-diagram.png";
        return text;
      case 'hackerone':
        text['title'] = "Duo Protection for HackerOne";
        text['body']  = "Duo offers a variety of methods for adding two-factor authentication and flexible security policies to HackerOne SSO logins, complete with inline self-service enrollment and authentication prompt.";
        text['link']  = "https://duo.com/docs/hackerone";
        text['img']   = "img/dag-diagram.png";
        return text;
      case 'heroku':
        text['title'] = "Duo Protection for Heroku";
        text['body']  = "Duo offers a variety of methods for adding two-factor authentication and flexible security policies to Heroku SSO logins, complete with inline self-service enrollment and authentication prompt.";
        text['link']  = "https://duo.com/docs/heroku";
        text['img']   = "img/dag-diagram.png";
        return text;
      case 'intacct':
        text['title'] = "Duo Protection for Intacct";
        text['body']  = "Duo offers a variety of methods for adding two-factor authentication and flexible security policies to Intacct SSO logins, complete with inline self-service enrollment and authentication prompt.";
        text['link']  = "https://duo.com/docs/intacct";
        text['img']   = "img/dag-diagram.png";
        return text;
      case 'jamf-jss':
        text['title'] = "Duo Protection for JAMF JSS";
        text['body']  = "Duo offers a variety of methods for adding two-factor authentication and flexible security policies to JAMF JSS SSO logins, complete with inline self-service enrollment and authentication prompt. Duo Protection for JAMF Software Server (JSS) is compatible with JAMF Cloud and JAMF JSS 9.93 or greater. Note: JAMF JSS requires Duo Access Gateway version 1.3.0 or greater. Please upgrade your Duo Access Gateway before attempting to use JAMF JSS.";
        text['link']  = "https://duo.com/docs/jamf-jss";
        text['img']   = "img/dag-diagram.png";
        return text;
      case 'jitbit':
        text['title'] = "Duo Protection for Jitbit";
        text['body']  = "Duo offers a variety of methods for adding two-factor authentication and flexible security policies to Jitbit SSO logins, complete with inline self-service enrollment and authentication prompt.";
        text['link']  = "https://duo.com/docs/jitbit";
        text['img']   = "img/dag-diagram.png";
        return text;
      case 'jirasso':
        text['title'] = "Duo Protection for JIRA SSO";
        text['body']  = "Duo offers a variety of methods for adding two-factor authentication and flexible security policies to JIRA SSO logins, complete with inline self-service enrollment and authentication prompt. Note: If you're looking to protect non-SAML logins to your JIRA service, please see our JIRA plugin documentation.";
        text['link']  = "https://duo.com/docs/jirasso";
        text['img']   = "img/dag-diagram.png";
        return text;
      case 'looker':
        text['title'] = "Duo Protection for Looker";
        text['body']  = "Duo offers a variety of methods for adding two-factor authentication and flexible security policies to Looker SSO logins, complete with inline self-service enrollment and authentication prompt.";
        text['link']  = "https://duo.com/docs/looker";
        text['img']   = "img/dag-diagram.png";
        return text;
      case 'marketo':
        text['title'] = "Duo Protection for Marketo";
        text['body']  = "Duo offers a variety of methods for adding two-factor authentication and flexible security policies to Marketo SSO logins, complete with inline self-service enrollment and authentication prompt. Note: Marketo requires Duo Access Gateway version 1.2.1 or greater. Please upgrade your Duo Access Gateway before attempting to use Marketo.";
        text['link']  = "https://duo.com/docs/marketo";
        text['img']   = "img/dag-diagram.png";
        return text;
      case 'meraki':
        text['title'] = "Duo Protection for Meraki";
        text['body']  = "Duo offers a variety of methods for adding two-factor authentication and flexible security policies to Meraki SSO logins, complete with inline self-service enrollment and authentication prompt.";
        text['link']  = "https://duo.com/docs/meraki";
        text['img']   = "img/dag-diagram.png";
        return text;
      case 'namely':
        text['title'] = "Duo Protection for Namely";
        text['body']  = "Duo offers a variety of methods for adding two-factor authentication and flexible security policies to Namely SSO logins, complete with inline self-service enrollment and authentication prompt.";
        text['link']  = "https://duo.com/docs/namely";
        text['img']   = "img/dag-diagram.png";
        return text;
      case 'new-relic':
        text['title'] = "Duo Protection for New Relic";
        text['body']  = "Duo offers a variety of methods for adding two-factor authentication and flexible security policies to New Relic SSO logins, complete with inline self-service enrollment and authentication prompt.";
        text['link']  = "https://duo.com/docs/new-relic";
        text['img']   = "img/dag-diagram.png";
        return text;
      case 'o365':
        text['title'] = "Duo Protection for Office 365";
        text['body']  = "Duo offers a variety of methods for adding two-factor authentication and flexible security policies to Office 365 SSO logins, complete with inline self-service enrollment and authentication prompt.";
        text['link']  = "https://duo.com/docs/o365";
        text['img']   = "img/dag-diagram.png";
        return text;
      case 'opendns':
        text['title'] = "Duo Protection for OpenDNS";
        text['body']  = "Duo offers a variety of methods for adding two-factor authentication and flexible security policies to OpenDNS SSO logins, complete with inline self-service enrollment and authentication prompt.";
        text['link']  = "https://duo.com/docs/opendns";
        text['img']   = "img/dag-diagram.png";
        return text;
      case 'pagerduty':
        text['title'] = "Duo Protection for PagerDuty";
        text['body']  = "Duo offers a variety of methods for adding two-factor authentication and flexible security policies to PagerDuty SSO logins, complete with inline self-service enrollment and authentication prompt.";
        text['link']  = "https://duo.com/docs/pagerduty";
        text['img']   = "img/dag-diagram.png";
        return text;
      case 'remedyforce':
        text['title'] = "Duo Protection for BMC Remedyforce";
        text['body']  = "Duo offers a variety of methods for adding two-factor authentication and flexible security policies to Remedyforce single sign-on logins, complete with inline self-service enrollment and authentication prompt.";
        text['link']  = "https://duo.com/docs/remedyforce";
        text['img']   = "img/dag-diagram.png";
        return text;
      case 'ringcentral':
        text['title'] = "Duo Protection for RingCentral";
        text['body']  = "Duo offers a variety of methods for adding two-factor authentication and flexible security policies to RingCentral SSO logins, complete with inline self-service enrollment and authentication prompt. Note: RingCentral requires Duo Access Gateway version 1.2.1 or greater. Please upgrade your Duo Access Gateway before attempting to use RingCentral.";
        text['link']  = "https://duo.com/docs/ringcentral";
        text['img']   = "img/dag-diagram.png";
        return text;
      case 'robin':
        text['title'] = "Duo Protection for Robin";
        text['body']  = "Duo offers a variety of methods for adding two-factor authentication and flexible security policies to Robin SSO logins, complete with inline self-service enrollment and authentication prompt.";
        text['link']  = "https://duo.com/docs/robin";
        text['img']   = "img/dag-diagram.png";
        return text;
      case 'salesforce':
        text['title'] = "Duo Protection for Salesforce";
        text['body']  = "Duo offers a variety of methods for adding two-factor authentication and flexible security policies to Salesforce single sign-on logins, complete with inline self-service enrollment and authentication prompt.";
        text['link']  = "https://duo.com/docs/salesforce";
        text['img']   = "img/dag-diagram.png";
        return text;
      case 'samanage':
        text['title'] = "Duo Protection for Samanage";
        text['body']  = "Duo offers a variety of methods for adding two-factor authentication and flexible security policies to Samanage SSO logins, complete with inline self-service enrollment and authentication prompt.";
        text['link']  = "https://duo.com/docs/samanage";
        text['img']   = "img/dag-diagram.png";
        return text;
      case 'saucelabs':
        text['title'] = "Duo Protection for Sauce Labs";
        text['body']  = "Duo offers a variety of methods for adding two-factor authentication and flexible security policies to Sauce Labs SSO logins, complete with inline self-service enrollment and authentication prompt.";
        text['link']  = "https://duo.com/docs/saucelabs";
        text['img']   = "img/dag-diagram.png";
        return text;
      case 'sharefile':
        text['title'] = "Duo Protection for ShareFile";
        text['body']  = "Duo offers a variety of methods for adding two-factor authentication and flexible security policies to ShareFile SSO logins, complete with inline self-service enrollment and authentication prompt.";
        text['link']  = "https://duo.com/docs/sharefile";
        text['img']   = "img/dag-diagram.png";
        return text;
      case 'signalsciences':
        text['title'] = "Duo Protection for Signal Sciences";
        text['body']  = "Duo offers a variety of methods for adding two-factor authentication and flexible security policies to Signal Sciences SSO logins, complete with inline self-service enrollment and authentication prompt.";
        text['link']  = "https://duo.com/docs/signalsciences";
        text['img']   = "img/dag-diagram.png";
        return text;
      case 'slack':
        text['title'] = "Duo Protection for Slack";
        text['body']  = "Duo offers a variety of methods for adding two-factor authentication and flexible security policies to Slack SSO logins, complete with inline self-service enrollment and authentication prompt.";
        text['link']  = "https://duo.com/docs/slack";
        text['img']   = "img/dag-diagram.png";
        return text;
      case 'smartsheet':
        text['title'] = "Duo Protection for Smartsheet";
        text['body']  = "Duo offers a variety of methods for adding two-factor authentication and flexible security policies to Smartsheet SSO logins, complete with inline self-service enrollment and authentication prompt. Note: Smartsheet requires Duo Access Gateway version 1.2.0 or greater. Please upgrade your Duo Access Gateway before attempting to use Smartsheet.";
        text['link']  = "https://duo.com/docs/smartsheet";
        text['img']   = "img/dag-diagram.png";
        return text;
      case 'statuspageio':
        text['title'] = "Duo Protection for StatusPage.io";
        text['body']  = "Duo offers a variety of methods for adding two-factor authentication and flexible security policies to StatusPage.io SSO logins, complete with inline self-service enrollment and authentication prompt.";
        text['link']  = "https://duo.com/docs/statuspageio";
        text['img']   = "img/dag-diagram.png";
        return text;
      case 'sugarcrm':
        text['title'] = "Duo Protection for SugarCRM";
        text['body']  = "Duo offers a variety of methods for adding two-factor authentication and flexible security policies to SugarCRM SSO logins, complete with inline self-service enrollment and authentication prompt.";
        text['link']  = "https://duo.com/docs/sugarcrm";
        text['img']   = "img/dag-diagram.png";
        return text;
      case 'sumologic':
        text['title'] = "Duo Protection for Sumo Logic";
        text['body']  = "Duo offers a variety of methods for adding two-factor authentication and flexible security policies to Sumo Logic SSO logins, complete with inline self-service enrollment and authentication prompt. Note: Sumo Logic requires Duo Access Gateway version 1.2.1 or greater. Please upgrade your Duo Access Gateway before attempting to use Sumo Logic.";
        text['link']  = "https://duo.com/docs/sumologic";
        text['img']   = "img/dag-diagram.png";
        return text;
      case 'syncplicity':
        text['title'] = "Duo Protection for Syncplicity";
        text['body']  = "Duo offers a variety of methods for adding two-factor authentication and flexible security policies to Syncplicity SSO logins, complete with inline self-service enrollment and authentication prompt.";
        text['link']  = "https://duo.com/docs/syncplicity";
        text['img']   = "img/dag-diagram.png";
        return text;
      case 'udemy':
        text['title'] = "Duo Protection for Udemy";
        text['body']  = "Duo offers a variety of methods for adding two-factor authentication and flexible security policies to Udemy SSO logins, complete with inline self-service enrollment and authentication prompt.";
        text['link']  = "https://duo.com/docs/udemy";
        text['img']   = "img/dag-diagram.png";
        return text;
      case 'uservoice':
        text['title'] = "Duo Protection for UserVoice";
        text['body']  = "Duo offers a variety of methods for adding two-factor authentication and flexible security policies to UserVoice SSO logins, complete with inline self-service enrollment and authentication prompt.";
        text['link']  = "https://duo.com/docs/uservoice";
        text['img']   = "img/dag-diagram.png";
        return text;
      case 'webex':
        text['title'] = "Duo Protection for WebEx";
        text['body']  = "Duo offers a variety of methods for adding two-factor authentication and flexible security policies to WebEx SSO logins, complete with inline self-service enrollment and authentication prompt.";
        text['link']  = "https://duo.com/docs/webex";
        text['img']   = "img/dag-diagram.png";
        return text;
      case 'facebookatwork':
        text['title'] = "Duo Protection for Workplace by Facebook (Formerly Facebook at Work)";
        text['body']  = "Duo offers a variety of methods for adding two-factor authentication and flexible security policies to Workplace by Facebook SSO logins, complete with inline self-service enrollment and authentication prompt.";
        text['link']  = "https://duo.com/docs/facebookatwork";
        text['img']   = "img/dag-diagram.png";
        return text;
      case 'zendesk':
        text['title'] = "Duo Protection for Zendesk";
        text['body']  = "Duo offers a variety of methods for adding two-factor authentication and flexible security policies to Zendesk SSO logins, complete with inline self-service enrollment and authentication prompt.";
        text['link']  = "https://duo.com/docs/zendesk";
        text['img']   = "img/dag-diagram.png";
        return text;
      case 'zoom':
        text['title'] = "Duo Protection for Zoom";
        text['body']  = "Duo offers a variety of methods for adding two-factor authentication and flexible security policies to Zoom SSO logins, complete with inline self-service enrollment and authentication prompt.";
        text['link']  = "https://duo.com/docs/zoom";
        text['img']   = "img/dag-diagram.png";
        return text;
      case 'onelogin':
        text['title'] = "OneLogin";
        text['body']  = "Duo integrates with OneLogin to add two-factor authentication, complete with inline self-service enrollment and authentication prompt.";
        text['link']  = "https://duo.com/docs/onelogin";
        text['img']   = "";
        return text;
      case 'okta':
        text['title'] = "Okta";
        text['body']  = "Duo integrates with Okta to add two-factor authentication, complete with inline self-service enrollment and authentication prompt.";
        text['link']  = "https://duo.com/docs/okta";
        text['img']   = "";
        return text;
      case 'pingfederate':
        text['title'] = "PingFederate";
        text['body']  = "Ping Identity has partnered with Duo Security to provide two-factor authentication for PingFederate® logins, complete with self-service enrollment and authentication prompt. PingFederate® is a full-featured federation server that provides identity management, web single sign-on, and API security for customers, partners, and employees. Users can securely access the applications they require with a single identity using any device. PingFederate® supports all of the current identity standards including SAML, WS-Federation, WS-Trust, OAuth, and OpenID Connect. Note: Duo's two-factor authentication is now available for PingFederate SSO user logins.";
        text['link']  = "https://duo.com/docs/pingfederate";
        text['img']   = "";
        return text;

      // Other Applications section
      case 'epic':
        text['title'] = "Duo Authentication for Epic";
        text['body']  = "Duo integrates with Epic Hyperspace to add two-factor authentication to Epic Hyperspace e-Prescription workflows.";
        text['link']  = "https://duo.com/docs/epic";
        text['img']   = "img/epic-network-diagram.png";
        return text;
      case 'awsworkspaces':
        text['title'] = "Amazon WorkSpaces";
        text['body']  = "Duo integrates with Amazon WorkSpaces to add two-factor authentication to WorkSpaces client logins.";
        text['link']  = "https://duo.com/docs/awsworkspaces";
        text['img']   = "img/awsws-network-diagram.png";
        return text;
      case 'peoplesoft':
        text['title'] = "Two-Factor Authentication for PeopleSoft";
        text['body']  = "Duo integrates with your PeopleSoft application to add two-factor authentication to portal logins by protecting LDAP connections. In this type of configuration, users will receive an automatic push or phone callback during login. Users who need to use a passcode have the option to append it to their existing password when logging in. Looking for multifactor protection for PeopleSoft logins with Duo's inline self-service enrollment and authentication prompt? Duo integrates with GreyHeller's ERP Firewall - a rules-based engine for securing PeopleSoft access.";
        text['link']  = "https://duo.com/docs/peoplesoft";
        text['img']   = "img/peoplesoft-network-diagram.png";
        return text;
      case 'juniper-uac':
        text['title'] = "Juniper Networks Unified Access Control (UAC)";
        text['body']  = "Duo integrates with your Juniper Networks Unified Access Control (UAC) to add two-factor authentication to VPN login.";
        text['link']  = "https://duo.com/docs/juniper-uac";
        text['img']   = "juniper_uac_network_diagram.png";
        return text;
      case 'vmwareview':
        text['title'] = "VMware Horizon View";
        text['body']  = "Duo integrates with VMware Horizon View 5.1 and newer to add two-factor authentication with passcodes to VMware View client login. This configuration allows use of passcodes to authenticate to VMWare View, as well as Duo's push and phone call authentication and SMS.";
        text['link']  = "https://duo.com/docs/vmwareview";
        text['img']   = "img/vmware_view_network_diagram.png";
        return text;
      case 'bomgar':
        text['title'] = "Bomgar Remote Support";
        text['body']  = "Duo integrates with your Bomgar Remote Support appliance to add two-factor authentication to web and console logins.";
        text['link']  = "https://duo.com/docs/bomgar";
        text['img']   = "img/bomgar-network-diagram.png";
        return text;
      case 'thycotic':
        text['title'] = "Thycotic Secret Server";
        text['body']  = "Thycotic Secret Server now includes Duo Security's two-factor authentication, complete with self-service enrollment and authentication prompt.";
        text['link']  = "https://duo.com/docs/thycotic";
        text['img']   = "img/thycotic_network_diagram.png";
        return text;
      case 'ldap':
        text['title'] = "LDAP";
        text['body']  = "Duo can be integrated with almost any device or system that supports using LDAP for authentication. In this type of configuration, users will receive an automatic push or phone callback during login. Users who need to use a passcode have the option to append it to their existing password when logging in.";
        text['link']  = "https://duo.com/docs/ldap";
        text['img']   = "img/ldap-network-diagram.png";
        return text;
      case 'radius':
        text['title'] = "RADIUS";
        text['body']  = "Duo integrates with almost any device or system that supports using RADIUS for authentication. In this type of configuration, users will append Duo passcodes — or factor names like phone or push — to their existing passwords when logging in.";
        text['link']  = "https://duo.com/docs/radius";
        text['img']   = "img/radius-network-diagram.png";
        return text;
      case 'duounix':
        text['title'] = "Duo Unix - Two-Factor Authentication for SSH with PAM Support (pam_duo)";
        text['body']  = "Duo can be easily added to any Unix system to protect remote (SSH) or local logins with the addition of a simple pam_duo PAM module. It has been tested on Linux (RedHat, Fedora, CentOS, Debian, Ubuntu, Amazon Linux), BSD (FreeBSD, NetBSD, OpenBSD), Solaris, HP-UX, and AIX. The code is open-source and available on GitHub.";
        text['link']  = "https://duo.com/docs/duounix";
        text['img']   = "img/unix_network_diagram.png";
        return text;

      // API Integrations 
      case 'samosas':
        text['title'] = "";
        text['body']  = "";
        text['link']  = "";
        text['img']   = "";
        return text;
      case 'samosas':
        text['title'] = "";
        text['body']  = "";
        text['link']  = "";
        text['img']   = "";
        return text;





    // efault case to catch empty entries
      default:
        text['title'] = "";
        text['body']  = "";
        text['link']  = "";
        text['img']   = "";
        return text;


 }
}



/* fake case for easily adding another row
      case 'samosas':
        text['title'] = "";
        text['body']  = "";
        text['link']  = "";
        text['img']   = "";
        return text;
      case 'samosas':
        text['title'] = "";
        text['body']  = "";
        text['link']  = "";
        text['img']   = "";
        return text;
      case 'samosas':
        text['title'] = "";
        text['body']  = "";
        text['link']  = "";
        text['img']   = "";
        return text;
      case 'samosas':
        text['title'] = "";
        text['body']  = "";
        text['link']  = "";
        text['img']   = "";
        return text;
      case 'samosas':
        text['title'] = "";
        text['body']  = "";
        text['link']  = "";
        text['img']   = "";
        return text;
      case 'samosas':
        text['title'] = "";
        text['body']  = "";
        text['link']  = "";
        text['img']   = "";
        return text;
*/

self = '<b><u>Self-Service Portal</u></b><br />Help your users help themselves. All Duo web integrations can now be enabled with the Self-Service Portal. A single checkbox in the Admin Panel adds a fully-featured management portal that users can access after completing primary and secondary authentication.<br /><img src="https://www.duo.com/static/images/blog/ssp-enable.png">';
dev = '<b><u>Trusted Devices</u></b><br />In the Duo administrative interface, an administrator can enable the \"trusted devices\" support on a per-integration basis. Users will then see a checkbox in their login screen that will allow them to opt-in to remembering their device. If a user completes Duo authentication and selects that checkbox, they will not be prompted for two-factor again for the preset number of days when logging in from the same browser/device.<br />This feature is currently supported in all our web-based integrations (eg. SSL VPNs, Outlook Web Access, Shibboleth, WordPress, etc).<br /><img style="height:125px" src="https://duo.com/assetsimg/documentation/creating_applications/application-trusted-devices_2x.png"><br />Documentation: <a href="https://duo.com/docs/trusted_devices">https://duo.com/docs/trusted_devices</a>';
networks = '<b><u>Trusted Networks</u></b><br />Your organization may have policies in place that mandate strong authentication only for untrusted, Internet-originated access to company services. For example, you may want to enforce two-factor on your VPN endpoint for remote employees, while allowing local employees plugged in via an 802.1x-authenticated wired port to access internal resources without a two-factor challenge.<br />For this use case, a Duo administrator can now specify \"trusted networks\" by IP addresses or CIDR blocks. If a user originates from one of the defined trusted networks, they will not be prompted for Duo\'s two-factor authentication.<br /><img src="https://duo.com/assetsimg/documentation/creating_applications/application-trusted-networks_2x.png"><br />Documentation: <a href="https://duo.com/docs/trusted_devices">https://duo.com/docs/trusted_devices</a>';
adsync = '<b><u>Active Directory Synchronization (AD Sync) Setup Requirements</u></b><ul><li>This integration requires the Duo Authentication Proxy installed on a physical or virtual windows host. Ensure that the destination server has at minimum 1 GB RAM and one CPU.</li><li>Active Directory server hostname or IP address</li><li>LDAP or LDAPS port</li><li>Active Directory Base DN</li><li>LDAPS or STARTTLS information and certificate for providing local network security, if desired</li><li>A Windows system for running the Duo Authentication Proxy software (we recommend a Windows 2008 R2 or later server, joined to the AD domain to be synced)</li><li>Access over Outbound Port 443 from the Duo Authentication Proxy to the Duo Security Hostname</li></ul>Documentation: <a href="https://www.duo.com/docs/syncing_users_from_active_directory">https://www.duo.com/docs/syncing_users_from_active_directory</a><br />Network Diagram<br /><img src="https://www.duo.com/assetsimg/documentation/authproxy/adsync-network-diagram.png">';
support = '<b><u>Support</u></b><br />It is our belief that good support should be prioritized and simple. All of our processes and procedures are extensively documented, but when that isn\'t enough, we offer methods of support convenient for you.<br />Documentation: <a href="https://www.duo.com/support">https://www.duo.com/support</a><br /><img src="https://www.duo.com/static/images/email/support.png">';
group = '<b><u>Group Management</u></b><br />You can use groups to organize and manage users in Duo. For example, a group can be associated with a particular integration and configured so that only users who are members of that group can use that integration. You can change the status of a group to quickly enable or disable multiple users at once. You might also find groups useful for reporting and logging purposes, such as viewing authentication activity only for members of a particular group.<br />Your group memberships in Duo do not have to be mutually exclusive. Suppose that you have one integration for standard use and another integration for network administrator use. A network administrator could be a member of two groups, each associated with one of these integrations.<br /><img src="https://www.duo.com/assetsimg/documentation/new-group-button.png"><br />Documentation: <a href="https://www.duo.com/docs/using_groups">https://www.duo.com/docs/using_groups</a>';
factor = '<b><u>Factor Control</u></b><br />Users are able to use Duo Push, Duo Mobile passcodes, SMS passcodes,or phone callback, for a second factor of authentication. If required by your organization, you can disable certain methods by simply unchecking them. For example, If you disable phone callback as follows:<br /><img src="https://www.duo.com/assetsimg/documentation/administration/authentication_methods.png">';

ss = '<b><u>Duo Security Purchasing Options</u></b><br />Duo Security can be purchased for up to 500 users using the billing tab in the administrative panel. If you have more than 500 users, no problem. Contact our sales team for multi-year discounts and invoiced billing Just call 1-866-760-4247 or email sales@duo.com<br /><br />Step 1: Click on the Billing Tab<br /><img src="https://www.duo.com/static/images/email/billing.png"><br /><br />Step 2: Select a billing tab and add your credit card<br /><img src="https://www.duo.com/static/images/email/billing2.png">';
invoice = '<b><u>Duo Security Purchasing Options</u></b><br />Duo Security can be purchased for up to 500 users using the billing tab in the administrative panel. If you have more than 500 users, no problem. Contact our sales team for multi-year discounts and invoiced billing Just call 1-866-760-4247 or email sales@duo.com';
dag = '<b><u>Duo Access Gateway</u></b><br />Duo Access Gateway secures access to cloud applications with your users� existing Microsoft Active Directory (AD) credentials using the Security Assertion Markup Language (SAML) 2.0 authentication standard. SAML delegates authentication from a service provider to an identity provider, and is used for single sign-on solutions (SSO).<br />Documentation: <a href="https://www.duo.com/docs/dag">https://www.duo.com/docs/dag</a><br />Network Diagram<br /><img src="https://www.duo.com/assetsimg/documentation/dag/dag-diagram.png">';
policy = '<b><u>Policy & Control</u></b><br />Duo&rsquo;s Platform Edition lets you reduce risks by enforcing precise policies and controls. Enable your team to define and enforce rules on who can access what applications � under what conditions. Define access policies by user group and per application to increase security without compromising end-user experience.<br />Documentation: <a href="https://www.duo.com/docs/policy">https://https://www.duo.com/docs/policy</a><br />Network Diagram<br /><img src="https://www.duo.com/assetsimg/documentation/policy/policies_2x.png">';
geolocation = '<b><u>User Location</u></b><br />The user location looks up the geographical origin of a user�s IP address, and can then enforce policy based on that location. You can deny all access from certain countries, or require two-factor authentication for access requests from a country.<br />Documentation: <a href="https://www.duo.com/docs/policy#user-location">https://www.duo.com/docs/policy#user-location</a><br />Network Diagram<br /><img src="https://www.duo.com/assetsimg/documentation/policy/user-location-policy_2x.png">';
anonymousnetworks = '<b><u>Anonymous Network</u></b><br />Duo can help you monitor and optionally prevent authentication attempts originated from known anonymous IP addresses, such as those provided by TOR and I2P, HTTP/HTTPS proxies, or anonymous VPNs.<br />Documentation: <a href="https://www.duo.com/docs/policy#anonymous-networks">https://www.duo.com/docs/policy#anonymous-networks</a><br />Network Diagram<br /><img src="https://www.duo.com/assetsimg/documentation/policy/anonymous-networks_2x.png">';
deviceinsight = '<b><u>Device Insight</u></b><br />Decentralization of device management and the rise of BYOD (Bring Your Own Device) can leave administrators wondering how users are accessing resources. The Mobile Devices and Laptops & Desktops dashboards show which platforms, devices, and browsers connect to your Duo protected applications and services.<br />Documentation: <a href="https://www.duo.com/docs/insight">https://www.duo.com/docs/insight</a><br />Network Diagram<br /><img src="https://www.duo.com/assetsimg/documentation/insight/mobile-insight_2x.png">';
ratecard = '<b><u>Telephony Rate Card</u></b><br />Duo�s main authentication methods�Duo Push and Duo Mobile-generated passcodes�are app-based and have no telephony cost, but require a smartphone or other mobile device. Duo also supports telephony-based authentication via phone calls and SMS messages. Each authentication call or SMS message is debited against your telephony credit balance (as per rate card).<br />Documentaion: <a href="https://www.duo.com/docs/telephony_credits">https://www.duo.com/docs/telephony_credits</a><br />';
userguide = '<b><u>End User Guide</u></b><br /><br />Documentaion: <a href="https://guide.duo.com/">https://guide.duo.com/</a><br />';
authproxyreference = '<b><u>Authentication Proxy Reference Guide</u></b><br /><br />Documentaion: <a href="https://www.duo.com/docs/authproxy_reference">https://www.duo.com/docs/authproxy_reference</a><br />';
deploypoc = '<b><u>Deploying a proof of Concept</u></b><br /><br />Documentaion: <a href="https://www.duo.com/docs/deploying_a_proof_of_concept">https://www.duo.com/docs/deploying_a_proof_of_concept</a><br />';
productsecurity = '<b><u>Security & Reliability</u></b><br /><br />Documentaion: <a href="https://www.duo.com/product/security">https://www.duo.com/product/security</a><br />';
privacy = '<b><u>Privacy</u></b><br /><br />Documentaion: <a href="https://www.duo.com/legal/privacy">https://www.duo.com/legal/privacy</a><br />';
demo = '<b><u>Demo Page</u></b><br /><br />Documentaion: <a href="http://demo.duo.com/">http://demo.duo.com/</a><br />';
pricingpage = '<b><u>Editions and Pricing</u></b><br /><br />Documentaion: <a href="https://www.duo.com/pricing">https://www.duo.com/pricing</a><br />';
