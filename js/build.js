// event listener for the 'submit' button
document.addEventListener('DOMContentLoaded', function(evt) {
  document.getElementById("submit").addEventListener("click", generateForm);
  evt.preventDefault();
});

aa = 'Signup for a Duo Security Account: <a href="https://signup.duo.com">https://signup.duo.com</a>';
ab = '<b>Step 1:</b> Decide which enrollment option(s) best meet your needs: ';
ac = '<a href ="https://www.duo.com/docs/enrolling_users">https://www.duo.com/docs/enrolling_users</a>';
ae = '<b>Step 2:</b> Setup your Application(s)'

inline = '<ul><li>In-Line Self-Enrollment</li><ul><li>Duo\'s self-enrollment process lets users add themselves to Duo. They type their phone number and are given instructions for installing Duo Mobile and adding their account to it.</li><li>Documentation: <a href="https://www.duo.com/docs/enrolling_users">https://www.duo.com/docs/enrolling_users</a></li></ul></ul>';
bulk = '<ul><li>Bulk Email Enrollment</li><ul><li>Use the bulk enrollment tool to send enrollment links to your users. This is helpful if your integration doesn\'t support inline self-enrollment (OpenVPN, RDP, desktop clients, etc.)</li><li>Documentation: <a href="https://www.duo.com/docs/enrolling_users#bulk-self-enrollment">https://www.duo.com/docs/enrolling_users#bulk-self-enrollment</a></li></ul></ul>';
adsy = '<ul><li>AD Sync</li><ul><li>The <b>Enrollment email</b> option determines if imported users will automatically receive an enrollment link email when the sync process completes.</li><li>The <b>Import phones</b> option determines if phone information should be synced from Active Directory</li><li>AD Sync Documentation: <a href="https://www.duo.com/docs/syncing_users_from_active_directory">https://www.duo.com/docs/syncing_users_from_active_directory</a></li></ul></ul>';
api = '<ul><li>API User Provisioning</li><ul><li>You can also use Duo\'s Admin API to create a user and a device, associate them, and generate a Duo Mobile activation link.</li><li>Documentation: <a href="www.duo.com/docs/adminapi">www.duo.com/docs/adminapi</a></li></ul></ul>';
csv = '<ul><li>CSV Import</li><ul><li>Duo provides a Import Users feature that can import user information from a properly formatted comma separated values (CSV) file. </li><li>Documentation: <a href="https://www.duo.com/docs/enrolling_users#csv-user-import">https://www.duo.com/docs/enrolling_users#csv-user-import</a></li></ul></ul>';
manual = '<ul><li>Manual Creation</li><ul><li>You can also add users and phones manually using Duo\'s Administrative Interface. </li><li>Documentation: <a href="https://www.duo.com/docs/enrolling_users#manual-enrollment">https://www.duo.com/docs/enrolling_users#manual-enrollment</a></li></ul></ul>';

juniper = '<b><u>Juniper SSLVPN Setup Requirements</u></b><ul><li>Juniper firmware version 6.x or newer</li><li>Access over Outbound Port 636 from the Juniper\'s internal interface to the Duo Security Hostname</li><li>A Working Juniper Test Realm</li><li>A Test User that can connect to the SSLVPN with primary authentication</li></ul>Documentation: <a href="https://www.duo.com/docs/juniper">www.duo.com/docs/juniper</a><br />Supported Features: In-Line Self-Enrollment, Self-Service, Trusted Devices, Trusted Networks<br />Network Diagram:<br /><img src="https://duo.com/assets/img/documentation/juniper/juniper-network-diagram.png">';
cisco = '<b><u>Cisco SSL VPN Setup Requirements</u></b><ul><li>Cisco IOS firmware version 8.3 or newer</li><li>Access over Outbound Port 636 from the Cisco ASA to the Duo Security Hostname</li><li>Working Cisco Test Connection Profile</li><li>A Test User that can connect to the SSLVPN with primary authentication.</li></ul>Documentation: <a href="https://www.duo.com/docs/cisco">www.duo.com/docs/cisco</a><br />Supported Features: In-Line Self-Enrollment, Self-Service, Trusted Devices, Trusted Networks<br />Network Diagram:<br /><img src="https://duo.com/assets/img/documentation/cisco_asa/cisco-network-diagram.png">';
citrix = '<b><u>Citrix NetScaler Setup Requirements</u></b><ul><li>The Duo Authentication Proxy must be installed on a physical or virtual host and can be installed on either Windows or Linux.<ul><li>Minimum 1 GB RAM and one CPU.</li><li>Windows requirements - we recommend a Windows 2008 R2 or later server.</li><li>Linux requirements - Ensure that OpenSSL, Python 2.6 or 2.7 (including development headers and libraries), and a compiler toolchain are installed.</li></ul></li><li>An Active Directory service account with read only access</li><li>Access over Outbound Port 443 from the Duo Authentication Proxy to the Duo Security Hostname</li><li>A Working Citrix Virtual Server</li><li>A Test User that can connect to the Citrix NetScaler with primary authentication</li></ul>Documentation: <a href="https://www.duo.com/docs/citrix_netscaler">www.duo.com/docs/citrix_netscaler</a><br />Supported Features: In-Line Self-Enrollment, Self-Service, Trusted Devices, Trusted Networks<br />Network Diagram:<br /><img src="https://duo.com/assets/img/documentation/citrixns/netscaler_network_diagram.png">';
palo = '<b><u>Palo Alto Setup Requirements</u></b><ul><li>The Duo Authentication Proxy must be installed on a physical or virtual host and can be installed on either Windows or Linux.<ul><li>Minimum 1GB RAM and one CPU.</li><li>Windows requirements - we recommend a Windows 2008 R2 or later server.</li><li>Linux requirements - Ensure that OpenSSL, Python 2.6 or 2.7 (including development headers and libraries), and a compiler toolchain are installed.</li></ul></li><li>An Active Directory service account with read only access</li><li>Access over Outbound Port 443 from the Duo Authentication Proxy to the Duo Security Hostname</li><li>A Working Global Protect VPN</li><li>A Test User that can connect using Global Protect with primary authentication</li></ul>Documentation: <a href="https://www.duo.com/docs/paloalto">www.duo.com/docs/paloalto</a><br />Network Diagram:<br /><img src="https://duo.com/assets/img/documentation/paloalto/palo_alto_network_diagram.png">';
fortinet = '<b><u>Fortinet Fortigate SSL VPN Setup Requirements</u></b><ul><li>The Duo Authentication Proxy must be installed on a physical or virtual host and can be installed on either Windows or Linux.<ul><li>Minimum 1GB RAM and one CPU.</li><li>Windows requirements - we recommend a Windows 2008 R2 or later server.</li><li>Linux requirements - Ensure that OpenSSL, Python 2.6 or 2.7 (including development headers and libraries), and a compiler toolchain are installed.</li></ul></li><li>An Active Directory service account with read only access</li><li>Access over Outbound Port 443 from the Duo Authentication Proxy to the Duo Security Hostname</li><li>A Working Fortinet SSL VPN Profile</li><li>A Test User that can connect using Fortinet SSL VPN with primary authentication</li></ul>Documentation: <a href="https://www.duo.com/docs/fortinet">www.duo.com/docs/fortinet</a><br />Supported Features: In-Line Self-Enrollment, Self-Service, Trusted Devices, Trusted Networks<br />Network Diagram:<br /><img src="https://duo.com/assets/img/documentation/fortinet/fortinet_network_diagram.png">';
checkpoint = '<b><u>CheckPoint Setup Requirements</u></b><ul><li>The Duo Authentication Proxy must be installed on a physical or virtual host and can be installed on either Windows or Linux.<ul><li>Minimum 1GB RAM and one CPU.</li><li>Windows requirements - we recommend a Windows 2008 R2 or later server.</li><li>Linux requirements - Ensure that OpenSSL, Python 2.6 or 2.7 (including development headers and libraries), and a compiler toolchain are installed.</li></ul></li><li>An Active Directory service account with read only access</li><li>Access over Outbound Port 443 from the Duo Authentication Proxy to the Duo Security Hostname</li><li>A Working CheckPoint Mobile Access VPN</li><li>A Test User that can connect using Mobile Access VPN with primary authentication</li></ul>Documentation: <a href="https://www.duo.com/docs/checkpoint">www.duo.com/docs/checkpoint</a><br />Network Diagram:<br /><img src="https://duo.com/assets/img/documentation/checkpoint/checkpoint_network_diagram.png">';
ssh = '<b><u>SSH / Unix Setup Requirements</u></b><ul><li>Duo can be enabled on any Unix system with the addition of a simple login_duo utility or pam_duo PAM module. The code is open-source and available on GitHub.</li><li>OpenSSL development headers and libraries are required for login_duo, so you\'ll want to install those first. libpam is also a required dependency for pam_duo. When compiling on SUSE/SLES, the zlib package is also necessary as documented here: <br /><a href="https://www.duo.com/docs/duounix#1.-set-up-login_duo">https://www.duo.com/docs/duounix#1.-set-up-login_duo</a></li><li>A Test User that can connect to SSH with primary authentication</li><li>Access over Outbound Port 443 from the Unix host to the Duo Security Hostname</li></ul>Supported Features: Trusted Networks, In-line Self-Enrollment vie terminal URL<br />Documentation: <a href="https://www.duo.com/docs/duounix">www.duo.com/docs/duounix</a>';
rdp = '<b><u>RDP Setup Requirements</u></b><ul><li>Windows host with RDP enabled (Windows Vista, Windows 7, Windows 8, Windows Server 2003, Windows Server 2008, and Windows Server 2012)</li><li>A Test User that can connect to RDP with primary authentication</li><li>Access over Port 443 from the Windows server to the Duo Security Hostname</li></ul>Documentation: <a href="https://www.duo.com/docs/rdp">www.duo.com/docs/rdp</a><br />Supported Features: Trusted Networks, Auto-Push, Local Login<br />Network Diagram:<br /><img src="https://duo.com/assets/img/documentation/rdp/rdp-network-diagram.png">';
owa = '<b><u>Microsoft Outlook Web App</u></b><ul><li>Exchange 2007 64-bit, Exchange 2010 or Exchange 2013 running on Windows 2008 R2 or newer.</li><li>Access to  your Duo Security hostname via Port 443 from your Exchange CAS Server (Client Access Server)</li><li>A working OWA Implementation</li><li>A user that can successfully log into OWA with primary authentication</li></ul>Supported Features: Trusted Networks, In-line Self-Enrollment via terminal URL<br />Documentation: <a href="https://www.duo.com/docs/owa">www.duo.com/docs/owa</a><br />Network Diagram:<br /><img src="https://duo.com/assets/img/documentation/owa/owa_network_diagram.png">';
rdweb = '<b><u>Microsoft RDWeb 2008Rw</u></b><ul><li>RDWeb Version 2008R2 w/ .net 3.5 installed.</li><li>Access to  your Duo Security hostname via Port 443 from your Remote Desktop Gateway and Remote Desktop Web Access servers</li><li>A working RDWeb Implementation</li><li>A user that can successfully log into RDWeb with primary authentication</li></ul>Supported Features: In-line Self-Enrollment, Self-Service, Trusted Devices, Trusted Networks<br />Documentation: <a href="https://www.duo.com/docs/rds">www.duo.com/docs/rds</a><br /><img src="https://www.duo.com/assets/img/documentation/rdweb/RDWeb-architecture.png">';
rdgate = '<b><u>Microsoft RDGateway</u></b><ul><li>RDGateway Version 2008R2 w/ .net 3.5 installed.</li><li>Access to  your Duo Security hostname via Port 443 from your Remote Desktop Gateway</li><li>A working RDGateway Implementation</li><li>A user that can successfully log into RDGateway with primary authentication</li></ul>Documentation: <a href="https://www.duo.com/docs/rds">www.duo.com/docs/rds</a><br /><img src="https://www.duo.com/assets/img/documentation/rdweb/RDGateway-architecture.png">';
rras = '<b><u>Microsoft RRAS</u></b><ul><li>The Duo Authentication Proxy must be installed on a physical or virtual host and can be installed on either Windows or Linux.<ul><li>Minimum 1 GB RAM and one CPU.</li><li>Windows requirements - we recommend a Windows 2008 R2 or later server.</li><li>Linux requirements - Ensure that OpenSSL, Python 2.6 or 2.7 (including development headers and libraries), and a compiler toolchain are installed.</li></ul></li><li>An Active Directory service account with read only access</li><li>Access over Outbound Port 443 from the Duo Authentication Proxy to the Duo Security Hostname</li><li>A Working Microsoft RRAS implementation using RADIUS</li><li>A Test User that can connect to Microsoft RRAS</li></ul>Documentation: <a href="https://www.duo.com/docs/citrix_netscaler">www.duo.com/docs/citrix_netscaler</a><br />Network Diagram:<br /><img src="https://duo.com/assets/img/documentation/rras/rras_network_diagram.png">';
net = '<b><u>NetMotion Wireless Setup Requirements</u></b><ul><li>The Duo Authentication Proxy must be installed on a physical or virtual host and can be installed on either Windows or Linux.<ul><li>Minimum 1 GB RAM and one CPU.</li><li>Windows requirements - we recommend a Windows 2008 R2 or later server.</li><li>Linux requirements - Ensure that OpenSSL, Python 2.6 or 2.7 (including development headers and libraries), and a compiler toolchain are installed.</li></ul></li><li>An Active Directory service account with read only access</li><li>Access over Outbound Port 443 from the Duo Authentication Proxy to the Duo Security Hostname</li><li>Your NetMotion Mobility XE server must be configured to authenticate users using the EAP (PEAP-GTC) mechanism against a RADIUS server. If you are not using RADIUS or do not have a RADIUS server that supports EAP you must deploy one (for example, Microsoft Network Policy Server or FreeRADIUS) before using Duo authentication.</li><li>You will need a certificate and corresponding key file when configuring the Duo Authentication Proxy. The certificate can be issued by your trusted CA. If you\'d like to use a self-signed certificate, you can create one using OpenSSL following the example instructions here.</li><li>A Test User that can connect using the NetMotion client with primary authentication </li></ul>Documentation: <a href="https://www.duo.com/docs/netmotion">www.duo.com/docs/netmotion</a><br />Network Diagram:<br /><img src="https://duo.com/assets/img/documentation/netmotion/netmotion_network_diagram.png">';
f5 = '<b><u>F5 Big IP APM Setup Requirements</u></b><ul><li>The Duo Authentication Proxy must be installed on a physical or virtual host and can be installed on either Windows or Linux.<ul><li>Minimum 1 GB RAM and one CPU.</li><li>Windows requirements - we recommend a Windows 2008 R2 or later server.</li><li>Linux requirements - Ensure that OpenSSL, Python 2.6 or 2.7 (including development headers and libraries), and a compiler toolchain are installed.</li></ul></li><li>An Active Directory service account with read only access</li><li>Access over Outbound Port 443 from the Duo Authentication Proxy to the Duo Security Hostname</li><li>A Working F5 Big APM Access Policy</li><li>A Test User that can connect using the Access Policy with primary authentication</li></ul>Documentation: <a href="https://www.duo.com/docs/f5bigip">www.duo.com/docs/f5bigip</a><br />Supported Features: In-Line Self-Enrollment, Self-Service, Trusted Devices, Trusted Networks<br />Network Diagram:<br /><img src="https://duo.com/assets/img/documentation/f5/f5_network_diagram.png">';
sonic = '<b><u>Sonicwall SRA Setup Requirements</u></b><ul><li>The Duo Authentication Proxy must be installed on a physical or virtual host and can be installed on either Windows or Linux.<ul><li>Minimum 1 GB RAM and one CPU.</li><li>Windows requirements - we recommend a Windows 2008 R2 or later server.</li><li>Linux requirements - Ensure that OpenSSL, Python 2.6 or 2.7 (including development headers and libraries), and a compiler toolchain are installed.</li></ul></li><li>An Active Directory service account with read only access</li><li>Access over Outbound Port 443 from the Duo Authentication Proxy to the Duo Security Hostname</li><li>A Working Sonicwall SRA Portal</li><li>A Test User that can connect using the the Portal with primary authentication</li></ul>Documentation: <a href="https://www.duo.com/docs/sonicwallsra">www.duo.com/docs/sonicwallsra</a><br />Supported Features: In-Line Self-Enrollment, Self-Service, Trusted Devices, Trusted Networks<br />Network Diagram:<br /><img src="https://duo.com/assets/img/documentation/sonicwall/sonicwall_network_diagram.png">';
barra = '<b><u>Barracuda SSL VPN Setup Requirements</u></b><ul><li>The Duo Authentication Proxy must be installed on a physical or virtual host and can be installed on either Windows or Linux.<ul><li>Minimum 1 GB RAM and one CPU.</li><li>Windows requirements - we recommend a Windows 2008 R2 or later server.</li><li>Linux requirements - Ensure that OpenSSL, Python 2.6 or 2.7 (including development headers and libraries), and a compiler toolchain are installed.</li></ul></li><li>An Active Directory service account with read only access</li><li>Access over Outbound Port 443 from the Duo Authentication Proxy to the Duo Security Hostname</li><li>A Working Barracuda SSL VPN Scheme</li><li>A Test User that can connect using the SSL CPN Scheme with primary authentication</li></ul>Documentation: <a href="https://www.duo.com/docs/barracuda">www.duo.com/docs/barracuda</a><br />Supported Features: In-Line Self-Enrollment, Self-Service, Trusted Devices, Trusted Networks';
array = '<b><u>Array Networks Setup Requirements</u></b><ul><li>The Duo Authentication Proxy must be installed on a physical or virtual host and can be installed on either Windows or Linux.<ul><li>Minimum 1 GB RAM and one CPU.</li><li>Windows requirements - we recommend a Windows 2008 R2 or later server.</li><li>Linux requirements - Ensure that OpenSSL, Python 2.6 or 2.7 (including development headers and libraries), and a compiler toolchain are installed.</li></ul></li><li>An Active Directory service account with read only access</li><li>Access over Outbound Port 443 from the Duo Authentication Proxy to the Duo Security Hostname</li><li>A Working Array Virtual Portal</li><li>A Test User that can connect using the Virtual Portal with primary authentication</li></ul>Documentation: <a href="https://www.duo.com/docs/array">www.duo.com/docs/array</a><br />Supported Features: In-Line Self-Enrollment, Self-Service, Trusted Devices, Trusted Networks<br />Network Diagram:<br /><img src="https://duo.com/assets/img/documentation/array/array_network_diagram.png">';
open = '<b><u>OpenVPN Setup Requirements</u></b><ul><li>A working version of OpenVPN</li><li>A Test User that can connect to OpenVPN with primary authentication</li><li>Access to your Duo Security hostname over Outbound Port 443 from OpenVPN</li></ul>Documentation: <a href="https://www.duo.com/docs/openvpn">www.duo.com/docs/openvpn</a><br />Network Diagram:<br /><img src="https://duo.com/assets/img/documentation/openvpn_as/open_vpn_network_diagram.png">';
access = '<b><u>OpenVPN Access Server Setup Requirements</u></b><ul><li>A working version of OpenVPN</li><li>A Test User that can connect to OpenVPN with primary authentication</li><li>Access to your Duo Security hostname over Outbound Port 443 from OpenVPN</li></ul>Documentation: <a href="https://www.duo.com/docs/openvpn_as">www.duo.com/docs/openvpn_as</a><br />Supported Features: In-line Self-Enrollment via terminal URL<br />Network Diagram:<br /><img src="https://duo.com/assets/img/documentation/openvpn_as/open_vpn_network_diagram.png">';
radius = '<b><u>Radius Setup Requirements</u></b><ul><li>The Duo Authentication Proxy must be installed on a physical or virtual host and can be installed on either Windows or Linux.<ul><li>Minimum 1 GB RAM and one CPU.</li><li>Windows requirements - we recommend a Windows 2008 R2 or later server.</li><li>Linux requirements - Ensure that OpenSSL, Python 2.6 or 2.7 (including development headers and libraries), and a compiler toolchain are installed.</li></ul></li><li>An Active Directory service account with read only access</li><li>Access over Outbound Port 443 from the Duo Authentication Proxy to the Duo Security Hostname</li><li>A Working application using RADIUS</li><li>A Test User that can connect to the existing application</li></ul>Documentation: <a href="https://www.duo.com/docs/radius">www.duo.com/docs/radius</a><br />Network Diagram:<br /><img src="https://www.duo.com/assets/img/documentation/authproxy/radius-network-diagram.png">';
ldap = '<b><u>LDAP Setup Requirements</u></b><ul><li>The Duo Authentication Proxy must be installed on a physical or virtual host and can be installed on either Windows or Linux.<ul><li>Minimum 1 GB RAM and one CPU.</li><li>Windows requirements - we recommend a Windows 2008 R2 or later server.</li><li>Linux requirements - Ensure that OpenSSL, Python 2.6 or 2.7 (including development headers and libraries), and a compiler toolchain are installed.</li></ul></li><li>An Active Directory service account with read only access</li><li>Access over Outbound Port 443 from the Duo Authentication Proxy to the Duo Security Hostname</li><li>SSL Certs is using LDAPS</li><li>A Working application using LDAP</li><li>A Test User that can connect to the existing application</li></ul>Documentation: <a href="https://www.duo.com/docs/ldap">www.duo.com/docs/ldap</a><br />Network Diagram:<br /><img src="https://www.duo.com/assets/img/documentation/authproxy/ldap-network-diagram.png">';
people = '<b><u>PeopleSoft</u></b><br />Many customers have used Duo Security to protect acces to PeopleSoft. Several approaches to protecting PeopleSoft include:<ul><li>Duo Security\'s LDAP integration</li><li>Configuring an authentication proxy such as F5 Big IP APM with Duo Security\s integration</li><li>Using a third party PeopleSoft firewall called GreyHeller that has support for Duo Security.</li></ul>LDAP Documentation: <a href="https://www.duo.com/docs/ldap">www.duo.com/docs/ldap</a><br />F5 Documentation: <a href="https://www.duo.com/docs/f5bigip">www.duo.com/docs/f5bigip</a><br />Grey Heller: <a href="http://www.greyheller.com/products/erp-firewall-for-peoplesoft/">http://www.greyheller.com/products/erp-firewall-for-peoplesoft/</a>';
sdk = '<b><u>WebSDK Requirements</u></b><ul><li>Access to your Duo Security hostname over Outbound Port 443 from the Web Application</li><li>A working web application</li><li>A user that can successfully log into the application with primary authentication</li></ul>Supported Features: In-line Self-Enrollment, Self-Service, Trusted Devices, Trusted Networks<br />Documentation: <a href="https://www.duo.com/docs/duoweb">www.duo.com/docs/duoweb</a><br />Client libraries are available on Github for <a href="https://github.com/duosecurity/duo_python">Python</a>, <a href="https://github.com/duosecurity/duo_ruby">Ruby</a>, <a href="https://github.com/duosecurity/duo_classicasp">Classic ASP</a>, <a href="https://github.com/duosecurity/duo_dotnet">ASP.NET</a>, <a href="https://github.com/duosecurity/duo_java">Java</a>, <a href="https://github.com/duosecurity/duo_php">PHP</a>, <a href="https://github.com/duosecurity/duo_nodejs">Node.js</a>, <a href="https://github.com/duosecurity/duo_coldfusion">ColdFusion</a>, and <a href="https://github.com/duosecurity/duo_perl">Perl</a>.<br />Network Diagram:<br /><img src="https://www.duo.com/assets/img/documentation/duoweb/websdk_network_diagram.png">';
press = '<b><u>WordPress Requirements</u></b><ul><li>Access to your Duo Security hostname over Outbound Port 443 from the WordPress site</li><li>A working WordPress site</li><li>A user that can succesfully log into the WordPress site with primary authentication</li></ul>Supported Features: In-line Self-Enrollment, Self-Service, Trusted Devices, Trust Networks<br />Documentation: <a href="https://www.duo.com/docs/wordpress">https://www.duo.com/docs/wordpress</a><br />Network Diagram:<br /><img src="https://duo.com/assets/img/documentation/wordpress/wordpress_network_diagram.png">';
ipsec = '<b><u>Cisco IPSEC VPN Requirements</u></b><ul><li>The Duo Authentication Proxy must be installed on a physical or virtual host and can be installed on either Windows or Linux.<ul><li>Minimum 1 GB RAM and one CPU.</li><li>Windows requirements - we recommend a Windows 2008 R2 or later server.</li><li>Linux requirements - Ensure that OpenSSL, Python 2.6 or 2.7 (including development headers and libraries), and a compiler toolchain are installed.</li></ul></li><li>An Active Directory service account with read only access</li><li>Access over Outbound Port 443 from the Duo Authentication Proxy to the Duo Security Hostname</li><li>A Working application using RADIUS</li><li>A Test User that can connect to the existing application</li></ul>Documentation: <a href="https://www.duo.com/docs/cisco-ipsec">www.duo.com/docs/cisco-ipsec</a>';
jira = '<b><u>Jira Requirements</u></b><ul><li>Access to your Duo Security hostname over Outbound Port 443 from Jira</li><li>A working Jira Implementation</li><li>A user that can successfully log into Jira with primary authentication</li></ul>Supported Features: In-Line Self-Enrollment, Self-Service, Trusted Devices, Trusted Networks<br />Documentation: <a href="https://www.duo.com/docs/jira">www.duo.com/docs/jira</a><br />Network Diagram:<br /><img src="https://duo.com/assets/img/documentation/jira/jira_network_diagram.png">';
shib = '<b><u>Shibboleth Requirements</u></b><ul><li>Access to your Duo Security hostname via Port 443 from Shibboleth</li><li>A working Shibboleth Implementation</li><li>A user that can successfully log into Shibboleth with primary authentication</li></ul>Supported Features: In-Line Self-Enrollment, Self-Service, Trusted Devices, Trusted Networks<br />Documentation: <a href="https://www.duo.com/docs/shibboleth">www.duo.com/docs/shibboleth</a><br />Additional Resources:<br /><a href="https://wiki.shibboleth.net/confluence/display/SHIB2/Duo+2FA+On+Demand">https://wiki.shibboleth.net/confluence/display/SHIB2/Duo+2FA+On+Demand</a><br /><a href="https://spaces.internet2.edu/display/InCAssurance/Multi-Context+Broker">https://spaces.internet2.edu/display/InCAssurance/Multi-Context+Broker</a><br />Network Diagram:<br /><img src="https://duo.com/assets/img/documentation/shibboleth/shibboleth_network_diagram.png">';
drupal = '<b><u>Drupal Requirements</u></b><ul><li>Access to your Duo Security hostname over Outbound Port 443 from Drupal</li><li>A working Drupal site</li><li>A user that can successfully log into Drupal with primary authentication</li></ul>Supported Features: In-Line Self-Enrollment, Self-Service, Trusted Devices, Trusted Networks<br />Documentation: <a href="https://www.duo.com/docs/drupal">www.duo.com/docs/drupal</a><br />Network Diagram:<br /><img src="https://duo.com/assets/img/documentation/drupal/drupal_network_diagram.png">';
splunk = '<b><u>Splunk Requirements</u></b><ul><li>Access to your Duo Security hostname over Outbound Port 443 from Splunk</li><li>A working Splunk Implementation</li><li>A user that can successfully log into Splunk with primary authentication</li></ul>Supported Features: In-Line Self-Enrollment, Self-Service, Trusted Devices, Trusted Networks<br />Documentation: <a href="https://www.duo.com/docs/splunk">www.duo.com/docs/splunk</a>';
last = '<b><u>Lastpass</u></b><ul><li>A Lastpass Account</li><li>A user that can successfully log into Lastpass with primary authentication</li></ul>Supported Features: In-Line Self-Enrollment<br />Documentation: <a href="https://www.duo.com/docs/lastpass">www.duo.com/docs/lastpass</a>';
one = '<b><u>OneLogin</u></b><ul><li>A OneLogin Account</li><li>A user that can successfully log into a OneLogin protected service with primary authentication</li></ul>Supported Features: In-Line Self-Enrollment, Self-Service, Trusted Devices, Trusted Networks<br />Documentation: <a href="https://www.duo.com/docs/onelogin">www.duo.com/docs/onelogin</a>';
okta = '<b><u>Okta</u></b><ul><li>Duo integrates with Okta to add two-factor authentication, complete with inline self-service enrollment and authentication prompt.</li><br />Documentation: <a href="https://www.duo.com/docs/okta">www.duo.com/docs/okta</a>';
adfs = '<b><u>Microsoft ADFS</u></b><ul><li>Access to your Duo Security hostname over Outbound Port 443 from ADFS</li><li>A working ADFS Implementation</li><li>A user that can successfully log into an ADFS protected application with primary authentication</li></ul>Supported Features: In-Line Self-Enrollment, Self-Service, Trusted Devices, Trusted Networks<br />Documentation: <a href="https://www.duo.com/docs/adfs">www.duo.com/docs/adfs</a>';
tmg = '<b><u>Microsoft TMG</u></b><ul><li>The Duo Authentication Proxy must be installed on a physical or virtual host and can be installed on either Windows or Linux.<ul><li>Minimum 1 GB RAM and one CPU.</li><li>Windows requirements - we recommend a Windows 2008 R2 or later server.</li><li>Linux requirements - Ensure that OpenSSL, Python 2.6 or 2.7 (including development headers and libraries), and a compiler toolchain are installed.</li></ul></li><li>An Active Directory service account with read only access</li><li>Access over Outbound Port 443 from the Duo Authentication Proxy to the Duo Security Hostname</li><li>A Working Microsoft TMG implementation using RADIUS</li><li>A Test User that can connect to Microsoft TMG</li></ul>Documentation: <a href="https://www.duo.com/docs/tmg">www.duo.com/docs/tmg</a><br />Network Diagram:<br /><img src="https://duo.com/assets/img/documentation/tmg/tmg_network_diagram.png">';
uag = '<b><u>Microsoft UAG</u></b><ul><li>The Duo Authentication Proxy must be installed on a physical or virtual host and can be installed on either Windows or Linux.<ul><li>Minimum 1 GB RAM and one CPU.</li><li>Windows requirements - we recommend a Windows 2008 R2 or later server.</li><li>Linux requirements - Ensure that OpenSSL, Python 2.6 or 2.7 (including development headers and libraries), and a compiler toolchain are installed.</li></ul></li><li>An Active Directory service account with read only access</li><li>Access over Outbound Port 443 from the Duo Authentication Proxy to the Duo Security Hostname</li><li>A Working Microsoft UAG implementation using RADIUS</li><li>A Test User that can connect to Microsoft UAG</li></ul>Documentation: <a href="https://www.duo.com/docs/uag">www.duo.com/docs/uag</a><br />Network Diagram:<br /><img src="https://duo.com/assets/img/documentation/uag/uag_network_diagram.png">';
vmware = '<b><u>VMware View</u></b><ul><li>The Duo Authentication Proxy must be installed on a physical or virtual host and can be installed on either Windows or Linux.<ul><li>Minimum 1 GB RAM and one CPU.</li><li>Windows requirements - we recommend a Windows 2008 R2 or later server.</li><li>Linux requirements - Ensure that OpenSSL, Python 2.6 or 2.7 (including development headers and libraries), and a compiler toolchain are installed.</li></ul></li><li>An Active Directory service account with read only access</li><li>Access over Outbound Port 443 from the Duo Authentication Proxy to the Duo Security Hostname</li><li>A Working VMware View implementation</li><li>A Test User that can connect to VMware View</li></ul>Documentation: <a href="https://www.duo.com/docs/vmwareview">www.duo.com/docs/vmwareview</a><br />Network Diagram:<br /><img src="https://www.duo.com/assets/img/documentation/vmwareview/vmware_view_network_diagram.png">';
uac = '<b><u>Juniper UAC</u></b><ul><li>The Duo Authentication Proxy must be installed on a physical or virtual host and can be installed on either Windows or Linux.<ul><li>Minimum 1 GB RAM and one CPU.</li><li>Windows requirements - we recommend a Windows 2008 R2 or later server.</li><li>Linux requirements - Ensure that OpenSSL, Python 2.6 or 2.7 (including development headers and libraries), and a compiler toolchain are installed.</li></ul></li><li>An Active Directory service account with read only access</li><li>Access over Outbound Port 443 from the Duo Authentication Proxy to the Duo Security Hostname</li><li>A Working Juniper UAC implementation</li><li>A Test User that can connect Juniper UAC</li></ul>Documentation: <a href="https://www.duo.com/docs/juniper-uac">www.duo.com/docs/juniper-uac</a><br />Network Diagram:<br /><img src="https://www.duo.com/assets/img/documentation/juniper/juniper_uac_network_diagram.png">';
cas = '<b><u>CAS</u></b><br />Many customers have used Duo Security with CAS by leveraging Duo Security API\'s including the Auth and Admin API\'s. Mike Kennedy from UC Riverside has published<br /><a href="https://github.com/highlnd/cas-overlay-duo">https://github.com/highlnd/cas-overlay-duo</a>';

self = '<b><u>Self-Service Portal</u></b><br />Help your users help themselves. All Duo web integrations can now be enabled with the Self-Service Portal. A single checkbox in the Admin Panel adds a fully-featured management portal that users can access after completing primary and secondary authentication.<br /><img src="https://www.duo.com/static/images/blog/ssp-enable.png">';
dev = '<b><u>Trusted Devices</u></b><br />In the Duo administrative interface, an administrator can enable the \"trusted devices\" support on a per-integration basis. Users will then see a checkbox in their login screen that will allow them to opt-in to remembering their device. If a user completes Duo authentication and selects that checkbox, they will not be prompted for two-factor again for the preset number of days when logging in from the same browser/device.<br />This feature is currently supported in all our web-based integrations (eg. SSL VPNs, Outlook Web Access, Shibboleth, WordPress, etc).<br /><img style="height:125px" src="https://duo.com/assets/img/documentation/creating_applications/application-trusted-devices_2x.png"><br />Documentation: <a href="https://duo.com/docs/trusted_devices">https://duo.com/docs/trusted_devices</a>';
networks = '<b><u>Trusted Networks</u></b><br />Your organization may have policies in place that mandate strong authentication only for untrusted, Internet-originated access to company services. For example, you may want to enforce two-factor on your VPN endpoint for remote employees, while allowing local employees plugged in via an 802.1x-authenticated wired port to access internal resources without a two-factor challenge.<br />For this use case, a Duo administrator can now specify \"trusted networks\" by IP addresses or CIDR blocks. If a user originates from one of the defined trusted networks, they will not be prompted for Duo\'s two-factor authentication.<br /><img src="https://duo.com/assets/img/documentation/creating_applications/application-trusted-networks_2x.png"><br />Documentation: <a href="https://duo.com/docs/trusted_devices">https://duo.com/docs/trusted_devices</a>';
adsync = '<b><u>Active Directory Synchronization (AD Sync) Setup Requirements</u></b><ul><li>This integration requires the Duo Authentication Proxy installed on a physical or virtual windows host. Ensure that the destination server has at minimum 1 GB RAM and one CPU.</li><li>Active Directory server hostname or IP address</li><li>LDAP or LDAPS port</li><li>Active Directory Base DN</li><li>LDAPS or STARTTLS information and certificate for providing local network security, if desired</li><li>A Windows system for running the Duo Authentication Proxy software (we recommend a Windows 2008 R2 or later server, joined to the AD domain to be synced)</li><li>Access over Outbound Port 443 from the Duo Authentication Proxy to the Duo Security Hostname</li></ul>Documentation: <a href="https://www.duo.com/docs/syncing_users_from_active_directory">https://www.duo.com/docs/syncing_users_from_active_directory</a><br />Network Diagram<br /><img src="https://www.duo.com/assets/img/documentation/authproxy/adsync-network-diagram.png">';
support = '<b><u>Support</u></b><br />It is our belief that good support should be prioritized and simple. All of our processes and procedures are extensively documented, but when that isn\'t enough, we offer methods of support convenient for you.<br />Documentation: <a href="https://www.duo.com/support">https://www.duo.com/support</a><br /><img src="https://www.duo.com/static/images/email/support.png">';
group = '<b><u>Group Management</u></b><br />You can use groups to organize and manage users in Duo. For example, a group can be associated with a particular integration and configured so that only users who are members of that group can use that integration. You can change the status of a group to quickly enable or disable multiple users at once. You might also find groups useful for reporting and logging purposes, such as viewing authentication activity only for members of a particular group.<br />Your group memberships in Duo do not have to be mutually exclusive. Suppose that you have one integration for standard use and another integration for network administrator use. A network administrator could be a member of two groups, each associated with one of these integrations.<br /><img src="https://www.duo.com/assets/img/documentation/new-group-button.png"><br />Documentation: <a href="https://www.duo.com/docs/using_groups">https://www.duo.com/docs/using_groups</a>';
factor = '<b><u>Factor Control</u></b><br />Users are able to use Duo Push, Duo Mobile passcodes, SMS passcodes,or phone callback, for a second factor of authentication. If required by your organization, you can disable certain methods by simply unchecking them. For example, If you disable phone callback as follows:<br /><img src="https://www.duo.com/assets/img/documentation/administration/authentication_methods.png">';

ss = '<b><u>Duo Security Purchasing Options</u></b><br />Duo Security can be purchased for up to 500 users using the billing tab in the administrative panel. If you have more than 500 users, no problem. Contact our sales team for multi-year discounts and invoiced billing Just call 1-866-760-4247 or email sales@duo.com<br /><br />Step 1: Click on the Billing Tab<br /><img src="https://www.duo.com/static/images/email/billing.png"><br /><br />Step 2: Select a billing tab and add your credit card<br /><img src="https://www.duo.com/static/images/email/billing2.png">';
invoice = '<b><u>Duo Security Purchasing Options</u></b><br />Duo Security can be purchased for up to 500 users using the billing tab in the administrative panel. If you have more than 500 users, no problem. Contact our sales team for multi-year discounts and invoiced billing Just call 1-866-760-4247 or email sales@duo.com';
dag = '<b><u>Duo Access Gateway</u></b><br />Duo Access Gateway secures access to cloud applications with your users� existing Microsoft Active Directory (AD) credentials using the Security Assertion Markup Language (SAML) 2.0 authentication standard. SAML delegates authentication from a service provider to an identity provider, and is used for single sign-on solutions (SSO).<br />Documentation: <a href="https://www.duo.com/docs/dag">https://www.duo.com/docs/dag</a><br />Network Diagram<br /><img src="https://www.duo.com/assets/img/documentation/dag/dag-diagram.png">';
policy = '<b><u>Policy & Control</u></b><br />Duo&rsquo;s Platform Edition lets you reduce risks by enforcing precise policies and controls. Enable your team to define and enforce rules on who can access what applications � under what conditions. Define access policies by user group and per application to increase security without compromising end-user experience.<br />Documentation: <a href="https://www.duo.com/docs/policy">https://https://www.duo.com/docs/policy</a><br />Network Diagram<br /><img src="https://www.duo.com/assets/img/documentation/policy/policies_2x.png">';
geolocation = '<b><u>User Location</u></b><br />The user location looks up the geographical origin of a user�s IP address, and can then enforce policy based on that location. You can deny all access from certain countries, or require two-factor authentication for access requests from a country.<br />Documentation: <a href="https://www.duo.com/docs/policy#user-location">https://www.duo.com/docs/policy#user-location</a><br />Network Diagram<br /><img src="https://www.duo.com/assets/img/documentation/policy/user-location-policy_2x.png">';
anonymousnetworks = '<b><u>Anonymous Network</u></b><br />Duo can help you monitor and optionally prevent authentication attempts originated from known anonymous IP addresses, such as those provided by TOR and I2P, HTTP/HTTPS proxies, or anonymous VPNs.<br />Documentation: <a href="https://www.duo.com/docs/policy#anonymous-networks">https://www.duo.com/docs/policy#anonymous-networks</a><br />Network Diagram<br /><img src="https://www.duo.com/assets/img/documentation/policy/anonymous-networks_2x.png">';
deviceinsight = '<b><u>Device Insight</u></b><br />Decentralization of device management and the rise of BYOD (Bring Your Own Device) can leave administrators wondering how users are accessing resources. The Mobile Devices and Laptops & Desktops dashboards show which platforms, devices, and browsers connect to your Duo protected applications and services.<br />Documentation: <a href="https://www.duo.com/docs/insight">https://www.duo.com/docs/insight</a><br />Network Diagram<br /><img src="https://www.duo.com/assets/img/documentation/insight/mobile-insight_2x.png">';
ratecard = '<b><u>Telephony Rate Card</u></b><br />Duo�s main authentication methods�Duo Push and Duo Mobile-generated passcodes�are app-based and have no telephony cost, but require a smartphone or other mobile device. Duo also supports telephony-based authentication via phone calls and SMS messages. Each authentication call or SMS message is debited against your telephony credit balance (as per rate card).<br />Documentaion: <a href="https://www.duo.com/docs/telephony_credits">https://www.duo.com/docs/telephony_credits</a><br />';
userguide = '<b><u>End User Guide</u></b><br /><br />Documentaion: <a href="https://guide.duo.com/">https://guide.duo.com/</a><br />';
authproxyreference = '<b><u>Authentication Proxy Reference Guide</u></b><br /><br />Documentaion: <a href="https://www.duo.com/docs/authproxy_reference">https://www.duo.com/docs/authproxy_reference</a><br />';
deploypoc = '<b><u>Deploying a proof of Concept</u></b><br /><br />Documentaion: <a href="https://www.duo.com/docs/deploying_a_proof_of_concept">https://www.duo.com/docs/deploying_a_proof_of_concept</a><br />';
productsecurity = '<b><u>Security & Reliability</u></b><br /><br />Documentaion: <a href="https://www.duo.com/product/security">https://www.duo.com/product/security</a><br />';
privacy = '<b><u>Privacy</u></b><br /><br />Documentaion: <a href="https://www.duo.com/legal/privacy">https://www.duo.com/legal/privacy</a><br />';
demo = '<b><u>Demo Page</u></b><br /><br />Documentaion: <a href="http://demo.duo.com/">http://demo.duo.com/</a><br />';
pricingpage = '<b><u>Editions and Pricing</u></b><br /><br />Documentaion: <a href="https://www.duo.com/pricing">https://www.duo.com/pricing</a><br />';

function generateForm() {

   var a = document.getElementById("trial");
   var b = document.getElementById("foobar");
   var c = document.getElementById("int1");
   var d = document.getElementById("int2");
   var e = document.getElementById("int3");
   var f = document.getElementById("int4");
   var g = document.getElementById("ent1");
   var h = document.getElementById("ent2");
   var i = document.getElementById("ent3");
   var j = document.getElementById("ent4");
   var k = document.getElementById("purchase");
   var l = document.getElementById("enrolloptions1");
   var m = document.getElementById("enrolloptions2");
   var n = document.getElementById("enrolloptions3");
   var o = document.getElementById("enrolloptions4");
   var p = document.getElementById("plat1");
   var q = document.getElementById("plat2");
   var r = document.getElementById("plat3");
   var s = document.getElementById("plat4");
   var t = document.getElementById("hlink1");
   var u = document.getElementById("hlink2");
   var v = document.getElementById("hlink3");
   var w = document.getElementById("hlink4");


   if (a.value == 'y') {
       b.innerHTML += '<br /><br />';
       b.innerHTML += aa;
   };

   b.innerHTML += '<br /><br />';
   b.innerHTML += ab;
   b.innerHTML += ac;
   b.innerHTML += '<br />';

   if(l.value == 'inline'){
       b.innerHTML += inline;
   } else if(l.value == 'bulk') {
       b.innerHTML += bulk;
   } else if(l.value == 'adsy') {
       b.innerHTML += adsy;
   } else if(l.value == 'api') {
       b.innerHTML += api;
   } else if(l.value == 'csv') {
       b.innerHTML += csv;
   } else if(l.value == 'manual') {
       b.innerHTML += manual;
   } else {
   }

   if(m.value == 'inline'){
       b.innerHTML += inline;
   } else if(m.value == 'bulk') {
       b.innerHTML += bulk;
   } else if(m.value == 'adsy') {
       b.innerHTML += adsy;
   } else if(m.value == 'api') {
       b.innerHTML += api;
   } else if(m.value == 'csv') {
       b.innerHTML += csv;
   } else if(m.value == 'manual') {
       b.innerHTML += manual;
   } else {
   }

   if(n.value == 'inline'){
       b.innerHTML += inline;
   } else if(n.value == 'bulk') {
       b.innerHTML += bulk;
   } else if(n.value == 'adsy') {
       b.innerHTML += adsy;
   } else if(n.value == 'api') {
       b.innerHTML += api;
   } else if(n.value == 'csv') {
       b.innerHTML += csv;
   } else if(n.value == 'manual') {
       b.innerHTML += manual;
   } else {
   }

   if(o.value == 'inline'){
       b.innerHTML += inline;
   } else if(o.value == 'bulk') {
       b.innerHTML += bulk;
   } else if(o.value == 'adsy') {
       b.innerHTML += adsy;
   } else if(o.value == 'api') {
       b.innerHTML += api;
   } else if(o.value == 'csv') {
       b.innerHTML += csv;
   } else if(o.value == 'manual') {
       b.innerHTML += manual;
   } else {
   }


   b.innerHTML += ae;
   b.innerHTML += '<br /><br />';

   if (c.value == 'juniper') {
       b.innerHTML += juniper;
       b.innerHTML += '<br /><br /><br />';
   } else if(c.value == 'cisco') {
       b.innerHTML += cisco;
       b.innerHTML += '<br /><br /><br />';
   } else if(c.value == 'citrix') {
       b.innerHTML += citrix;
       b.innerHTML += '<br /><br /><br />';
   } else if(c.value == 'palo') {
       b.innerHTML += palo;
       b.innerHTML += '<br /><br /><br />';
   } else if(c.value == 'fortinet') {
       b.innerHTML += fortinet;
       b.innerHTML += '<br /><br /><br />';
   } else if(c.value == 'check'){
       b.innerHTML += checkpoint;
       b.innerHTML += '<br /><br /><br />';
   } else if(c.value == 'ssh'){
       b.innerHTML += ssh;
       b.innerHTML += '<br /><br /><br />';
   } else if(c.value == 'rdp'){
       b.innerHTML += rdp;
       b.innerHTML += '<br /><br /><br />';
   } else if(c.value == 'owa'){
       b.innerHTML += owa;
       b.innerHTML += '<br /><br /><br />';
   } else if(c.value == 'rdweb'){
       b.innerHTML += rdweb;
       b.innerHTML += '<br /><br /><br />';
   } else if(c.value == 'rdgate'){
       b.innerHTML += rdgate;
       b.innerHTML += '<br /><br /><br />';
   } else if(c.value == 'rras'){
       b.innerHTML += rras;
       b.innerHTML += '<br /><br /><br />';
   } else if(c.value == 'net'){
       b.innerHTML += net;
       b.innerHTML += '<br /><br /><br />';
   } else if(c.value == 'f5'){
       b.innerHTML += f5;
       b.innerHTML += '<br /><br /><br />';
   } else if(c.value == 'sonic'){
       b.innerHTML += sonic;
       b.innerHTML += '<br /><br /><br />';
   } else if(c.value == 'barra'){
       b.innerHTML += barra;
       b.innerHTML += '<br /><br /><br />';
   } else if(c.value == 'array'){
       b.innerHTML += array;
       b.innerHTML += '<br /><br /><br />';
   } else if(c.value == 'open'){
       b.innerHTML += open;
       b.innerHTML += '<br /><br /><br />';
   } else if(c.value == 'access'){
       b.innerHTML += access;
       b.innerHTML += '<br /><br /><br />';
   } else if(c.value == 'radius'){
       b.innerHTML += radius;
       b.innerHTML += '<br /><br /><br />';
   } else if(c.value == 'ldap'){
       b.innerHTML += ldap;
       b.innerHTML += '<br /><br /><br />';
   } else if(c.value == 'people'){
       b.innerHTML += people;
       b.innerHTML += '<br /><br /><br />';
   } else if(c.value == 'sdk'){
       b.innerHTML += sdk;
       b.innerHTML += '<br /><br /><br />';
   } else if(c.value == 'press'){
       b.innerHTML += press;
       b.innerHTML += '<br /><br /><br />';
   } else if(c.value == 'ipsec'){
       b.innerHTML += ipsec;
       b.innerHTML += '<br /><br /><br />';
   } else if(c.value == 'jira'){
       b.innerHTML += jira;
       b.innerHTML += '<br /><br /><br />';
   } else if(c.value == 'shib'){
       b.innerHTML += shib;
       b.innerHTML += '<br /><br /><br />';
   } else if(c.value == 'drupal'){
       b.innerHTML += drupal;
       b.innerHTML += '<br /><br /><br />';
   } else if(c.value == 'splunk'){
       b.innerHTML += splunk;
       b.innerHTML += '<br /><br /><br />';
   } else if(c.value == 'last'){
       b.innerHTML += last;
       b.innerHTML += '<br /><br /><br />';
   } else if(c.value == 'one'){
       b.innerHTML += one;
       b.innerHTML += '<br /><br /><br />';
   } else if(c.value == 'okta'){
       b.innerHTML += okta;
       b.innerHTML += '<br /><br /><br />';
   } else if(c.value == 'adfs'){
       b.innerHTML += adfs;
       b.innerHTML += '<br /><br /><br />';
   } else if(c.value == 'tmg'){
       b.innerHTML += tmg;
       b.innerHTML += '<br /><br /><br />';
   } else if(c.value == 'uag'){
       b.innerHTML += uag;
       b.innerHTML += '<br /><br /><br />';
   } else if(c.value == 'vmware'){
       b.innerHTML += vmware;
       b.innerHTML += '<br /><br /><br />';
   } else if(c.value == 'uac'){
       b.innerHTML += uac;
       b.innerHTML += '<br /><br /><br />';
   } else if(c.value == 'cas'){
       b.innerHTML += cas;
       b.innerHTML += '<br /><br /><br />';
   } else {

   }

   if (d.value == 'juniper') {
       b.innerHTML += juniper;
       b.innerHTML += '<br /><br /><br />';
   } else if(d.value == 'cisco') {
       b.innerHTML += cisco;
       b.innerHTML += '<br /><br /><br />';
   } else if(d.value == 'citrix') {
       b.innerHTML += citrix;
       b.innerHTML += '<br /><br /><br />';
   } else if(d.value == 'palo') {
       b.innerHTML += palo;
       b.innerHTML += '<br /><br /><br />';
   } else if(d.value == 'fortinet') {
       b.innerHTML += fortinet;
       b.innerHTML += '<br /><br /><br />';
   } else if(d.value == 'check'){
       b.innerHTML += checkpoint;
       b.innerHTML += '<br /><br /><br />';
   } else if(d.value == 'ssh'){
       b.innerHTML += ssh;
       b.innerHTML += '<br /><br /><br />';
   } else if(d.value == 'rdp'){
       b.innerHTML += rdp;
       b.innerHTML += '<br /><br /><br />';
   } else if(d.value == 'owa'){
       b.innerHTML += owa;
       b.innerHTML += '<br /><br /><br />';
   } else if(d.value == 'rdweb'){
       b.innerHTML += rdweb;
       b.innerHTML += '<br /><br /><br />';
   } else if(d.value == 'rdgate'){
       b.innerHTML += rdgate;
       b.innerHTML += '<br /><br /><br />';
   } else if(d.value == 'rras'){
       b.innerHTML += rras;
       b.innerHTML += '<br /><br /><br />';
   } else if(d.value == 'net'){
       b.innerHTML += net;
       b.innerHTML += '<br /><br /><br />';
   } else if(d.value == 'f5'){
       b.innerHTML += f5;
       b.innerHTML += '<br /><br /><br />';
   } else if(d.value == 'sonic'){
       b.innerHTML += sonic;
       b.innerHTML += '<br /><br /><br />';
   } else if(d.value == 'barra'){
       b.innerHTML += barra;
       b.innerHTML += '<br /><br /><br />';
   } else if(d.value == 'array'){
       b.innerHTML += array;
       b.innerHTML += '<br /><br /><br />';
   } else if(d.value == 'open'){
       b.innerHTML += open;
       b.innerHTML += '<br /><br /><br />';
   } else if(d.value == 'access'){
       b.innerHTML += access;
       b.innerHTML += '<br /><br /><br />';
   } else if(d.value == 'radius'){
       b.innerHTML += radius;
       b.innerHTML += '<br /><br /><br />';
   } else if(d.value == 'ldap'){
       b.innerHTML += ldap;
       b.innerHTML += '<br /><br /><br />';
   } else if(d.value == 'people'){
       b.innerHTML += people;
       b.innerHTML += '<br /><br /><br />';
   } else if(d.value == 'sdk'){
       b.innerHTML += sdk;
       b.innerHTML += '<br /><br /><br />';
   } else if(d.value == 'press'){
       b.innerHTML += press;
       b.innerHTML += '<br /><br /><br />';
   } else if(d.value == 'ipsec'){
       b.innerHTML += ipsec;
       b.innerHTML += '<br /><br /><br />';
   } else if(d.value == 'jira'){
       b.innerHTML += jira;
       b.innerHTML += '<br /><br /><br />';
   } else if(d.value == 'shib'){
       b.innerHTML += shib;
       b.innerHTML += '<br /><br /><br />';
   } else if(d.value == 'drupal'){
       b.innerHTML += drupal;
       b.innerHTML += '<br /><br /><br />';
   } else if(d.value == 'splunk'){
       b.innerHTML += splunk;
       b.innerHTML += '<br /><br /><br />';
   } else if(d.value == 'last'){
       b.innerHTML += last;
       b.innerHTML += '<br /><br /><br />';
   } else if(d.value == 'one'){
       b.innerHTML += one;
       b.innerHTML += '<br /><br /><br />';
   } else if(d.value == 'okta'){
       b.innerHTML += okta;
       b.innerHTML += '<br /><br /><br />';
   } else if(d.value == 'adfs'){
       b.innerHTML += adfs;
       b.innerHTML += '<br /><br /><br />';
   } else if(d.value == 'tmg'){
       b.innerHTML += tmg;
       b.innerHTML += '<br /><br /><br />';
   } else if(d.value == 'uag'){
       b.innerHTML += uag;
       b.innerHTML += '<br /><br /><br />';
   } else if(d.value == 'vmware'){
       b.innerHTML += vmware;
       b.innerHTML += '<br /><br /><br />';
   } else if(d.value == 'uac'){
       b.innerHTML += uac;
       b.innerHTML += '<br /><br /><br />';
   } else if(d.value == 'cas'){
       b.innerHTML += cas;
       b.innerHTML += '<br /><br /><br />';
   } else {

   }

   if (e.value == 'juniper') {
       b.innerHTML += juniper;
       b.innerHTML += '<br /><br /><br />';
   } else if(e.value == 'cisco') {
       b.innerHTML += cisco;
       b.innerHTML += '<br /><br /><br />';
   } else if(e.value == 'citrix') {
       b.innerHTML += citrix;
       b.innerHTML += '<br /><br /><br />';
   } else if(e.value == 'palo') {
       b.innerHTML += palo;
       b.innerHTML += '<br /><br /><br />';
   } else if(e.value == 'fortinet') {
       b.innerHTML += fortinet;
       b.innerHTML += '<br /><br /><br />';
   } else if(e.value == 'check'){
       b.innerHTML += checkpoint;
       b.innerHTML += '<br /><br /><br />';
   } else if(e.value == 'ssh'){
       b.innerHTML += ssh;
       b.innerHTML += '<br /><br /><br />';
   } else if(e.value == 'rdp'){
       b.innerHTML += rdp;
       b.innerHTML += '<br /><br /><br />';
   } else if(e.value == 'owa'){
       b.innerHTML += owa;
       b.innerHTML += '<br /><br /><br />';
   } else if(e.value == 'rdweb'){
       b.innerHTML += rdweb;
       b.innerHTML += '<br /><br /><br />';
   } else if(e.value == 'rdgate'){
       b.innerHTML += rdgate;
       b.innerHTML += '<br /><br /><br />';
   } else if(e.value == 'rras'){
       b.innerHTML += rras;
       b.innerHTML += '<br /><br /><br />';
   } else if(e.value == 'net'){
       b.innerHTML += net;
       b.innerHTML += '<br /><br /><br />';
   } else if(e.value == 'f5'){
       b.innerHTML += f5;
       b.innerHTML += '<br /><br /><br />';
   } else if(e.value == 'sonic'){
       b.innerHTML += sonic;
       b.innerHTML += '<br /><br /><br />';
   } else if(e.value == 'barra'){
       b.innerHTML += barra;
       b.innerHTML += '<br /><br /><br />';
   } else if(e.value == 'array'){
       b.innerHTML += array;
       b.innerHTML += '<br /><br /><br />';
   } else if(e.value == 'open'){
       b.innerHTML += open;
       b.innerHTML += '<br /><br /><br />';
   } else if(e.value == 'access'){
       b.innerHTML += access;
       b.innerHTML += '<br /><br /><br />';
   } else if(e.value == 'radius'){
       b.innerHTML += radius;
       b.innerHTML += '<br /><br /><br />';
   } else if(e.value == 'ldap'){
       b.innerHTML += ldap;
       b.innerHTML += '<br /><br /><br />';
   } else if(e.value == 'people'){
       b.innerHTML += people;
       b.innerHTML += '<br /><br /><br />';
   } else if(e.value == 'sdk'){
       b.innerHTML += sdk;
       b.innerHTML += '<br /><br /><br />';
   } else if(e.value == 'press'){
       b.innerHTML += press;
       b.innerHTML += '<br /><br /><br />';
   } else if(e.value == 'ipsec'){
       b.innerHTML += ipsec;
       b.innerHTML += '<br /><br /><br />';
   } else if(e.value == 'jira'){
       b.innerHTML += jira;
       b.innerHTML += '<br /><br /><br />';
   } else if(e.value == 'shib'){
       b.innerHTML += shib;
       b.innerHTML += '<br /><br /><br />';
   } else if(e.value == 'drupal'){
       b.innerHTML += drupal;
       b.innerHTML += '<br /><br /><br />';
   } else if(e.value == 'splunk'){
       b.innerHTML += splunk;
       b.innerHTML += '<br /><br /><br />';
   } else if(e.value == 'last'){
       b.innerHTML += last;
       b.innerHTML += '<br /><br /><br />';
   } else if(e.value == 'one'){
       b.innerHTML += one;
       b.innerHTML += '<br /><br /><br />';
   } else if(e.value == 'okta'){
       b.innerHTML += okta;
       b.innerHTML += '<br /><br /><br />';
   } else if(e.value == 'adfs'){
       b.innerHTML += adfs;
       b.innerHTML += '<br /><br /><br />';
   } else if(e.value == 'tmg'){
       b.innerHTML += tmg;
       b.innerHTML += '<br /><br /><br />';
   } else if(e.value == 'uag'){
       b.innerHTML += uag;
       b.innerHTML += '<br /><br /><br />';
   } else if(e.value == 'vmware'){
       b.innerHTML += vmware;
       b.innerHTML += '<br /><br /><br />';
   } else if(e.value == 'uac'){
       b.innerHTML += uac;
       b.innerHTML += '<br /><br /><br />';
   } else if(e.value == 'cas'){
       b.innerHTML += cas;
       b.innerHTML += '<br /><br /><br />';
   } else {

   }

   if (f.value == 'juniper') {
       b.innerHTML += juniper;
       b.innerHTML += '<br /><br /><br />';
   } else if(f.value == 'cisco') {
       b.innerHTML += cisco;
       b.innerHTML += '<br /><br /><br />';
   } else if(f.value == 'citrix') {
       b.innerHTML += citrix;
       b.innerHTML += '<br /><br /><br />';
   } else if(f.value == 'palo') {
       b.innerHTML += palo;
       b.innerHTML += '<br /><br /><br />';
   } else if(f.value == 'fortinet') {
       b.innerHTML += fortinet;
       b.innerHTML += '<br /><br /><br />';
   } else if(f.value == 'check'){
       b.innerHTML += checkpoint;
       b.innerHTML += '<br /><br /><br />';
   } else if(f.value == 'ssh'){
       b.innerHTML += ssh;
       b.innerHTML += '<br /><br /><br />';
   } else if(f.value == 'rdp'){
       b.innerHTML += rdp;
       b.innerHTML += '<br /><br /><br />';
   } else if(f.value == 'owa'){
       b.innerHTML += owa;
       b.innerHTML += '<br /><br /><br />';
   } else if(f.value == 'rdweb'){
       b.innerHTML += rdweb;
       b.innerHTML += '<br /><br /><br />';
   } else if(f.value == 'rdgate'){
       b.innerHTML += rdgate;
       b.innerHTML += '<br /><br /><br />';
   } else if(f.value == 'rras'){
       b.innerHTML += rras;
       b.innerHTML += '<br /><br /><br />';
   } else if(f.value == 'net'){
       b.innerHTML += net;
       b.innerHTML += '<br /><br /><br />';
   } else if(f.value == 'f5'){
       b.innerHTML += f5;
       b.innerHTML += '<br /><br /><br />';
   } else if(f.value == 'sonic'){
       b.innerHTML += sonic;
       b.innerHTML += '<br /><br /><br />';
   } else if(f.value == 'barra'){
       b.innerHTML += barra;
       b.innerHTML += '<br /><br /><br />';
   } else if(f.value == 'array'){
       b.innerHTML += array;
       b.innerHTML += '<br /><br /><br />';
   } else if(f.value == 'open'){
       b.innerHTML += open;
       b.innerHTML += '<br /><br /><br />';
   } else if(f.value == 'access'){
       b.innerHTML += access;
       b.innerHTML += '<br /><br /><br />';
   } else if(f.value == 'radius'){
       b.innerHTML += radius;
       b.innerHTML += '<br /><br /><br />';
   } else if(f.value == 'ldap'){
       b.innerHTML += ldap;
       b.innerHTML += '<br /><br /><br />';
   } else if(f.value == 'people'){
       b.innerHTML += people;
       b.innerHTML += '<br /><br /><br />';
   } else if(f.value == 'sdk'){
       b.innerHTML += sdk;
       b.innerHTML += '<br /><br /><br />';
   } else if(f.value == 'press'){
       b.innerHTML += press;
       b.innerHTML += '<br /><br /><br />';
   } else if(f.value == 'ipsec'){
       b.innerHTML += ipsec;
       b.innerHTML += '<br /><br /><br />';
   } else if(f.value == 'jira'){
       b.innerHTML += jira;
       b.innerHTML += '<br /><br /><br />';
   } else if(f.value == 'shib'){
       b.innerHTML += shib;
       b.innerHTML += '<br /><br /><br />';
   } else if(f.value == 'drupal'){
       b.innerHTML += drupal;
       b.innerHTML += '<br /><br /><br />';
   } else if(f.value == 'splunk'){
       b.innerHTML += splunk;
       b.innerHTML += '<br /><br /><br />';
   } else if(f.value == 'last'){
       b.innerHTML += last;
       b.innerHTML += '<br /><br /><br />';
   } else if(f.value == 'one'){
       b.innerHTML += one;
       b.innerHTML += '<br /><br /><br />';
   } else if(f.value == 'okta'){
       b.innerHTML += okta;
       b.innerHTML += '<br /><br /><br />';
   } else if(f.value == 'adfs'){
       b.innerHTML += adfs;
       b.innerHTML += '<br /><br /><br />';
   } else if(f.value == 'tmg'){
       b.innerHTML += tmg;
       b.innerHTML += '<br /><br /><br />';
   } else if(f.value == 'uag'){
       b.innerHTML += uag;
       b.innerHTML += '<br /><br /><br />';
   } else if(f.value == 'vmware'){
       b.innerHTML += vmware;
       b.innerHTML += '<br /><br /><br />';
   } else if(f.value == 'uac'){
       b.innerHTML += uac;
       b.innerHTML += '<br /><br /><br />';
   } else if(f.value == 'cas'){
       b.innerHTML += cas;
       b.innerHTML += '<br /><br /><br />';
   } else {

   }

   if(g.value == 'self') {
       b.innerHTML += self;
       b.innerHTML += '<br /><br /><br />';
   } else if(g.value == 'dev') {
       b.innerHTML += dev;
       b.innerHTML += '<br /><br /><br />';
   } else if(g.value == 'networks') {
       b.innerHTML += networks;
       b.innerHTML += '<br /><br /><br />';
   } else if(g.value == 'adsync') {
       b.innerHTML += adsync;
       b.innerHTML += '<br /><br /><br />';
   } else if(g.value == 'support') {
       b.innerHTML += support;
       b.innerHTML += '<br /><br /><br />';
   } else if(g.value == 'group') {
       b.innerHTML += group;
       b.innerHTML += '<br /><br /><br />';
   } else if(g.value == 'factor') {
       b.innerHTML += factor;
       b.innerHTML += '<br /><br /><br />';
   } else {

   }

   if(h.value == 'self') {
       b.innerHTML += self;
       b.innerHTML += '<br /><br /><br />';
   } else if(h.value == 'dev') {
       b.innerHTML += dev;
       b.innerHTML += '<br /><br /><br />';
   } else if(h.value == 'networks') {
       b.innerHTML += networks;
       b.innerHTML += '<br /><br /><br />';
   } else if(h.value == 'adsync') {
       b.innerHTML += adsync;
       b.innerHTML += '<br /><br /><br />';
   } else if(h.value == 'support') {
       b.innerHTML += support;
       b.innerHTML += '<br /><br /><br />';
   } else if(h.value == 'group') {
       b.innerHTML += group;
       b.innerHTML += '<br /><br /><br />';
   } else if(h.value == 'factor') {
       b.innerHTML += factor;
       b.innerHTML += '<br /><br /><br />';
   } else {

   }

   if(i.value == 'self') {
       b.innerHTML += self;
       b.innerHTML += '<br /><br /><br />';
   } else if(i.value == 'dev') {
       b.innerHTML += dev;
       b.innerHTML += '<br /><br /><br />';
   } else if(i.value == 'networks') {
       b.innerHTML += networks;
       b.innerHTML += '<br /><br /><br />';
   } else if(i.value == 'adsync') {
       b.innerHTML += adsync;
       b.innerHTML += '<br /><br /><br />';
   } else if(i.value == 'support') {
       b.innerHTML += support;
       b.innerHTML += '<br /><br /><br />';
   } else if(i.value == 'group') {
       b.innerHTML += group;
       b.innerHTML += '<br /><br /><br />';
   } else if(i.value == 'factor') {
       b.innerHTML += factor;
       b.innerHTML += '<br /><br /><br />';
   } else {

   }

   if(j.value == 'self') {
       b.innerHTML += self;
       b.innerHTML += '<br /><br /><br />';
   } else if(j.value == 'dev') {
       b.innerHTML += dev;
       b.innerHTML += '<br /><br /><br />';
   } else if(j.value == 'networks') {
       b.innerHTML += networks;
       b.innerHTML += '<br /><br /><br />';
   } else if(j.value == 'adsync') {
       b.innerHTML += adsync;
       b.innerHTML += '<br /><br /><br />';
   } else if(j.value == 'support') {
       b.innerHTML += support;
       b.innerHTML += '<br /><br /><br />';
   } else if(j.value == 'group') {
       b.innerHTML += group;
       b.innerHTML += '<br /><br /><br />';
   } else if(j.value == 'factor') {
       b.innerHTML += factor;
       b.innerHTML += '<br /><br /><br />';
   } else {

   }

   if(p.value == 'dag') {
       b.innerHTML += dag;
       b.innerHTML += '<br /><br /><br />';
   } else if(p.value == 'policy') {
       b.innerHTML += policy;
       b.innerHTML += '<br /><br /><br />';
   } else if(p.value == 'geolocation') {
       b.innerHTML += geolocation;
       b.innerHTML += '<br /><br /><br />';
   } else if(p.value == 'anonymousnetworks') {
       b.innerHTML += anonymousnetworks;
       b.innerHTML += '<br /><br /><br />';
   } else if(p.value == 'deviceinsight') {
       b.innerHTML += deviceinsight;
       b.innerHTML += '<br /><br /><br />';
   } else {

   }

   if(q.value == 'dag') {
       b.innerHTML += dag;
       b.innerHTML += '<br /><br /><br />';
   } else if(q.value == 'policy') {
       b.innerHTML += policy;
       b.innerHTML += '<br /><br /><br />';
   } else if(q.value == 'geolocation') {
       b.innerHTML += geolocation;
       b.innerHTML += '<br /><br /><br />';
   } else if(q.value == 'anonymousnetworks') {
       b.innerHTML += anonymousnetworks;
       b.innerHTML += '<br /><br /><br />';
   } else if(q.value == 'deviceinsight') {
       b.innerHTML += deviceinsight;
       b.innerHTML += '<br /><br /><br />';
   } else {

   }

   if(r.value == 'dag') {
       b.innerHTML += dag;
       b.innerHTML += '<br /><br /><br />';
   } else if(r.value == 'policy') {
       b.innerHTML += policy;
       b.innerHTML += '<br /><br /><br />';
   } else if(r.value == 'geolocation') {
       b.innerHTML += geolocation;
       b.innerHTML += '<br /><br /><br />';
   } else if(r.value == 'anonymousnetworks') {
       b.innerHTML += anonymousnetworks;
       b.innerHTML += '<br /><br /><br />';
   } else if(r.value == 'deviceinsight') {
       b.innerHTML += deviceinsight;
       b.innerHTML += '<br /><br /><br />';
   } else {

   }

   if(s.value == 'dag') {
       b.innerHTML += dag;
       b.innerHTML += '<br /><br /><br />';
   } else if(s.value == 'policy') {
       b.innerHTML += policy;
       b.innerHTML += '<br /><br /><br />';
   } else if(s.value == 'geolocation') {
       b.innerHTML += geolocation;
       b.innerHTML += '<br /><br /><br />';
   } else if(s.value == 'anonymousnetworks') {
       b.innerHTML += anonymousnetworks;
       b.innerHTML += '<br /><br /><br />';
   } else if(s.value == 'deviceinsight') {
       b.innerHTML += deviceinsight;
       b.innerHTML += '<br /><br /><br />';
   } else {

}

   if(t.value == 'ratecard') {
       b.innerHTML += ratecard;
       b.innerHTML += '<br /><br /><br />';
   } else if(t.value == 'userguide') {
       b.innerHTML += userguide;
       b.innerHTML += '<br /><br /><br />';
   } else if(t.value == 'authproxyreference') {
       b.innerHTML += authproxyreference;
       b.innerHTML += '<br /><br /><br />';
   } else if(t.value == 'deploypoc') {
       b.innerHTML += deploypoc;
       b.innerHTML += '<br /><br /><br />';
   } else if(t.value == 'productsecurity') {
       b.innerHTML += productsecurity;
       b.innerHTML += '<br /><br /><br />';
   } else if(t.value == 'privacy') {
       b.innerHTML += privacy;
       b.innerHTML += '<br /><br /><br />';
   } else if(t.value == 'demo') {
       b.innerHTML += demo;
       b.innerHTML += '<br /><br /><br />';
   } else if(t.value == 'pricingpage') {
       b.innerHTML += pricingpage;
       b.innerHTML += '<br /><br /><br />';
   } else {

}

   if(u.value == 'ratecard') {
       b.innerHTML += ratecard;
       b.innerHTML += '<br /><br /><br />';
   } else if(u.value == 'userguide') {
       b.innerHTML += userguide;
       b.innerHTML += '<br /><br /><br />';
   } else if(u.value == 'authproxyreference') {
       b.innerHTML += authproxyreference;
       b.innerHTML += '<br /><br /><br />';
   } else if(u.value == 'deploypoc') {
       b.innerHTML += deploypoc;
       b.innerHTML += '<br /><br /><br />';
   } else if(u.value == 'productsecurity') {
       b.innerHTML += productsecurity;
       b.innerHTML += '<br /><br /><br />';
   } else if(u.value == 'privacy') {
       b.innerHTML += privacy;
       b.innerHTML += '<br /><br /><br />';
   } else if(u.value == 'demo') {
       b.innerHTML += demo;
       b.innerHTML += '<br /><br /><br />';
   } else if(u.value == 'pricingpage') {
       b.innerHTML += pricingpage;
       b.innerHTML += '<br /><br /><br />';
   } else {

}

   if(v.value == 'ratecard') {
       b.innerHTML += ratecard;
       b.innerHTML += '<br /><br /><br />';
   } else if(v.value == 'userguide') {
       b.innerHTML += userguide;
       b.innerHTML += '<br /><br /><br />';
   } else if(v.value == 'authproxyreference') {
       b.innerHTML += authproxyreference;
       b.innerHTML += '<br /><br /><br />';
   } else if(v.value == 'deploypoc') {
       b.innerHTML += deploypoc;
       b.innerHTML += '<br /><br /><br />';
   } else if(v.value == 'productsecurity') {
       b.innerHTML += productsecurity;
       b.innerHTML += '<br /><br /><br />';
   } else if(v.value == 'privacy') {
       b.innerHTML += privacy;
       b.innerHTML += '<br /><br /><br />';
   } else if(v.value == 'demo') {
       b.innerHTML += demo;
       b.innerHTML += '<br /><br /><br />';
   } else if(v.value == 'pricingpage') {
       b.innerHTML += pricingpage;
       b.innerHTML += '<br /><br /><br />';
   } else {

}

   if(w.value == 'ratecard') {
       b.innerHTML += ratecard;
       b.innerHTML += '<br /><br /><br />';
   } else if(w.value == 'userguide') {
       b.innerHTML += userguide;
       b.innerHTML += '<br /><br /><br />';
   } else if(w.value == 'authproxyreference') {
       b.innerHTML += authproxyreference;
       b.innerHTML += '<br /><br /><br />';
   } else if(w.value == 'deploypoc') {
       b.innerHTML += deploypoc;
       b.innerHTML += '<br /><br /><br />';
   } else if(w.value == 'productsecurity') {
       b.innerHTML += productsecurity;
       b.innerHTML += '<br /><br /><br />';
   } else if(w.value == 'privacy') {
       b.innerHTML += privacy;
       b.innerHTML += '<br /><br /><br />';
   } else if(w.value == 'demo') {
       b.innerHTML += demo;
       b.innerHTML += '<br /><br /><br />';
   } else if(w.value == 'pricingpage') {
       b.innerHTML += pricingpage;
       b.innerHTML += '<br /><br /><br />';
   } else {

   }

   if(k.value == 'ss'){
       b.innerHTML += ss;
       b.innerHTML += '<br /><br /><br />';
   } else if(k.value == 'invoice') {
       b.innerHTML += invoice;
       b.innerHTML += '<br /><br /><br />';
   } else {

   }
return false;
}
