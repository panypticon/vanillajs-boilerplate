/* eslint-disable max-len */
import { handleCloseModal } from './showcaseModal';

const content = `
    <h2>Contact Information</h2>
    <p>Information in accordance with Section 5 TMG</p>
    <p>Alex Menger
    <br>Könneritzstr. 76
    <br>04229 Leipzig
    <br>hi@alexmenger.me</p>
    <h2>Accountability for content</h2>
    <p>The contents of our pages have been created with the utmost care. However, we cannot guarantee the contents’ accuracy, completeness or topicality. According to statutory provisions, we are furthermore responsible for our own content on these web pages. In this matter, please note that we are not obliged to monitor the transmitted or saved information of third parties, or investigate circumstances pointing to illegal activity. Our obligations to remove or block the use of information under generally applicable laws remain unaffected by this as per §§ 8 to 10 of the Telemedia Act (TMG).</p>
    <h2>Accountability for links</h2>
    <p>Responsibility for the content of external links (to web pages of third parties) lies solely with the operators of the linked pages. No violations were evident to us at the time of linking. Should any legal infringement become known to us, we will remove the respective link immediately.</p>
    <h2>Copyright</h2>
    <p>Our web pages and their contents are subject to German copyright law. Unless expressly permitted by law, every form of utilizing, reproducing or processing works subject to copyright protection on our web pages requires the prior consent of the respective owner of the rights. Individual reproductions of a work are only allowed for private use. The materials from these pages are copyrighted and any unauthorized use may violate copyright laws.</p>
    <h2>Privacy policy</h2>
    <p>Responsible party pursuant to data protection laws, in particular the EU General Data Protection Regulation (GDPR), is</p>
    <p>Alex Menger
    <br>Könneritzstr. 76
    <br>04229 Leipzig</p>
    <h2>Your rights as the data subject</h2>
    <p>You can exercise the following rights at any time using the contact details of our data protection officer:</p>
    <ul>
    <li>Information on your data stored by us and the processing thereof (Art. 15 GDPR), </li>
    <li>Rectification of inaccurate personal data (Art. 16 GDPR), </li>
    <li>Deletion of your data stored by us (Art. 17 GDPR), </li>
    <li>Restriction of the data processing, provided that we may not delete your data due to legal obligations (Art. 18 GDPR), </li>
    <li>Objection to the processing of your data with us (Art. 21 GDPR) and </li>
    <li>Data portability, provide that you have consented to the data processing or have entered into a contract with us (Art. 20 GDPR). </li>
    </ul>
    <p>If you have given us consent, you may withdraw it at any time, which will remain in effect in the future.</p>
    <p>You can contact a supervisory authority with a complaint at any time, e.g. the supervisory authority of the state of your residence or the authority that oversees us as the responsible party.</p>
    <p>You’ll find a list of supervisory authorities (for the non-public area) with their respective addresses at: <a href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html" rel="noopener nofollow" target="_blank" rel="nofollow noopener">https://www.bfdi.bund.de</a>.</p>
    <h2>Collecting general information during a visit to our website </h2>
    <h3>Type and purpose of the processing</h3>
    <p>When you access our website – i.e. if you do not register or submit information – information of a general nature will be collected automatically. This information (server log files) contains the type of web browser, the operating system used, the domain name of your Internet service provider, your IP address and the like.</p>
    <p>It is processed in particular for the following purposes:</p>
    <ul>
    <li>Ensuring an unproblematic website connection</li>
    <li>Ensuring seamless use of our website</li>
    <li>Analysis of system security and stability as well as</li>
    <li>For additional administrative purposes.</li>
    </ul>
    <p>We will not use your data to draw conclusions about your person. This type of information will be statistically analysed by us if necessary to optimise our website and its underlying technology.</p>
    <h3>Legal basis</h3>
    <p>The processing occurs according to Art. 6 Para. 1 (f) GDPR, based on our legitimate interest in improving the stability and functionality of our website.</p>
    <h3>Recipients</h3>
    <p>Recipients of the data may be technical service providers, who work on the operation and maintenance of our website as the processor.</p>
    <h3>Retention period</h3>
    <p>The data will be deleted as soon as they are no longer required for the reason they were collected. This is generally the case, after the respective session has ended, for data that are used to make the website available.</p>
    <h3>Mandatory or required provision</h3>
    <p>The provision of the aforementioned personal data is neither legally nor contractually mandatory. Without the IP address however, the service and functionality of our website are not guaranteed. Furthermore, individual services can be unavailable or limited. For this reason, an objection is excluded.</p>
    <h2>Contact form</h2>
    <h3>Type and purpose of the processing</h3>
    <p>The data you enter are used for individual communication with you. A valid e-mail address and your name are required for this communication, which serves to organize your inquiry and the respective subsequent reply. Providing additional information is optional.</p>
    <h3>Legal basis</h3>
    <p>The processing of the data entered in the contact form occurs on the basis of a legitimate interest (Art. 6 Para. 1 (f) GDPR).</p>
    <p>By providing the contact form, our aim is to facilitate an uncomplicated means for you to contact us. The information you enter will be used to process the inquiry and saved for possible follow-up questions.</p>
    <p>If you contact us to request an offer, the processing of the information provided in the contact form will occur in order to implement pre-contractual measures (Art. 6 Para. 1 (b) GDPR).</p>
    <h3>Recipients</h3>
    <p>Recipients of the data may be processors.</p>
    <h3>Retention period</h3>
    <p>The data will be deleted no later than 6 months after processing the inquiry.</p>
    <p>Provided that we enter into a contract together, we will use the statutory retention periods in the German Commercial Code (Handelsgesetzbuch) and delete your data according to the respective stipulated deadlines.</p>
    <h3>Mandatory or required provision</h3>
    <p>The provision of your personal data is voluntary. However, we can only process your inquiry if you provide us with your name, e-mail address and the reason for your inquiry.</p>
    <h2>Using Google Analytics</h2>
    <h3>Type and purpose of the processing</h3>
    <p>This website uses Google Analytics, a web analytics service of Google LLC, 1600 Amphitheater Parkway, Mountain View, CA 94043 USA (hereinafter: ‘Google’). Google Analytics uses so-called ‘cookies’, i.e. text files that are stored on your computer and allow an analysis of your use of the website. The information generated by the cookie about your use of this website is typically transmitted to a Google server in the U.S. and stored there. However, due to the activation of IP anonymisation on these websites, your IP address will be truncated beforehand by Google within the member states of the European Union or in other contracting states of the Agreement on the European Economic Area. Only in exceptional cases will the full IP address be sent to a Google server in the U.S. and truncated there. On behalf of the operator of this website, Google will use this information to evaluate your use of the website, summarise reports on website activities and provide other services related to website and Internet usage to the website operator. The IP address transferred from your browser as part of Google Analytics will not be combined with other data from Google.</p>
    <p>The data processing purposes are the website-use analysis and the summary of reports on activities on the website. Based on the use of the website and the Internet, other related services will be provided.</p>
    <h3>Legal basis</h3>
    <p>The processing of the data occurs on the basis of the user’s consent (Art. 6 Para. 1 (a) GDPR).</p>
    <h3>Recipients</h3>
    <p>The recipient of the data is Google as the processor. For this, we have entered into the corresponding data-processing contract with Google.</p>
    <h3>Retention period</h3>
    <p>The deletion of the data occurs as soon as they are no longer necessary for our recording-keeping purposes.</p>
    <h3>Third country transfers</h3>
    <p>Google processes your data in the United States of America and is subject to the EU-U.S. Privacy Shield: <a href="https://www.privacyshield.gov/EU-US-Framework" rel="noopener nofollow" target="_blank">https://www.privacyshield.gov/EU-US-Framework</a>. </p>
    <h3>Mandatory or required provision</h3>
    <p>The provision of your personal data is voluntary, based solely on your consent. If you prevent access, this can lead to functional limitations on the website.</p>
    <h3>Revocation of consent</h3>
    <p>You can prevent the storage of cookies by a corresponding setting in your browser software; however, please note that in this case you may not be able to use all the functions of this website in their entirety. Furthermore, you can prevent the collected data generated by the cookie and the data related to your use of the website (including your IP address) being transmitted to Google, as well as the processing of this data by Google, by downloading and installing the browser plug-in available at the following link: <a href="https://tools.google.com/dlpage/gaoptout?hl=en-GB" rel="noopener nofollow" target="_blank">browser add-on to deactivate Google Analytics</a>.</p>
    <p>In addition, or as an alternative to the browser add-on, you can prevent tracking by Google Analytics on our web pages <a title="Google Analytics Opt-Out-Cookie setzen" onClick="gaOptout();alert('Google Analytics is deactivated');" href="#">by clicking this link</a>, which will install an opt-out cookie on your device. This will prevent data collection by Google Analytics for this website and for this browser in the future, as long as the cookie remains installed in your browser.</p>
    <h3>Profiling</h3>
    <p>With the assistance of the tracking tool Google Analytics, the browsing behaviour of the website visitors can be evaluated and their respective interests can be analysed. For this analysis, we create a pseudonymous user profile.</p>
    <h2>Using script libraries (Google Webfonts)</h2>
    <h3>Type and purpose of the processing</h3>
    <p>In order to present our content correctly and graphically appealing across all browsers, we use ‘Google Webfonts’ from Google LLC (1600 Amphitheater Parkway, Mountain View, CA 94043, USA, hereinafter ‘Google’) to display fonts on this website.</p>
    <p>You’ll find the data protection guidelines of the library operator Google here: <a href="https://www.google.com/policies/privacy/" rel="noopener nofollow" target="_blank">https://www.google.com/policies/privacy/</a></p>
    <h3>Legal basis</h3>
    <p>Your consent is the legal basis for the integration of Google Webfonts and the associated data transfer to Google (Art. 6 Para. 1 (a) GDPR).</p>
    <h3>Recipients</h3>
    <p>The use of script libraries or font libraries automatically triggers a connection to the operator of the library. It is theoretically possible – but currently also unclear whether and to what end – that the operator, in this case Google, will collect data.</p>
    <h3>Retention period</h3>
    <p>We do not collect any personal data via the integration of Google Webfonts.</p>
    <p>You’ll find additional information on Google Webfonts at <a href="https://developers.google.com/fonts/faq" rel="noopener nofollow" target="_blank">https://developers.google.com/fonts/faq</a> and in Google’s privacy policy: <a href="https://www.google.com/policies/privacy/" rel="noopener nofollow" target="_blank">https://www.google.com/policies/privacy/</a>.</p>
    <h3>Third country transfers</h3>
    <p>Google processes your data in the United States of America and is subject to the EU-U.S. Privacy Shield: <a href="https://www.privacyshield.gov/EU-US-Framework" rel="noopener nofollow" target="_blank">https://www.privacyshield.gov/EU-US-Framework</a>.</p>
    <h3>Mandatory or required provision</h3>
    <p>The provision of your personal data is neither legally nor contractually required. However, the correct presentation of standard-fonts content is not possible without this provision.</p>
    <h3>Revocation of consent</h3>
    <p>The programming language JavaScript is regularly used to display content. Thus, you can opt out of the data processing by disabling JavaScript execution in your browser or by installing a JavaScript blocker. Please note that this may result in functional limitations on the website.</p>
    <h2>SSL encryption</h2>
    <p>To protect the security of your data during transmission, we use state-of-the-art encryption methods (such as SSL) via HTTPS.</p>
    <h2>Revision of our privacy policy</h2>
    <p>We reserve the right to amend this privacy policy so that it always complies with current legal requirements or to implement changes to our services in the privacy policy, e.g. when introducing new services. Your next visit will be subject to the new privacy policy.</p>
    <h2>Questions for the data protection officer</h2>
    <p>If you have any questions pertaining to data protection, please send us an e-mail or contact the person responsible for data protection in our organization: </p>
`;

const createModal = () => {
    const modalBackground = document.createElement('div');
    modalBackground.classList.add('modal__background', 'can-close');

    const modalBox = document.createElement('article');
    modalBox.classList.add('modal__box', 'fade-in-up');

    const modalHeader = document.createElement('div');
    modalHeader.classList.add('modal__header');

    const modalHeaderHeading = document.createElement('span');
    modalHeaderHeading.classList.add('modal__header-heading');
    modalHeaderHeading.innerText = 'Legal';

    const modalHeaderClose = document.createElement('i');
    modalHeaderClose.classList.add('bi', 'bi-x-lg', 'can-close');

    const modalContent = document.createElement('section');
    modalContent.classList.add('modal__content');

    const modalText = document.createElement('div');
    modalText.classList.add('modal__text');
    modalText.innerHTML = content;

    modalHeader.appendChild(modalHeaderHeading);
    modalHeader.appendChild(modalHeaderClose);
    modalBox.appendChild(modalHeader);
    modalContent.appendChild(modalText);
    modalBox.appendChild(modalContent);
    modalBackground.appendChild(modalBox);
    document.body.appendChild(modalBackground);
    modalBackground.addEventListener('click', handleCloseModal);
};

export const handleOpenLegal = evt => {
    evt.preventDefault();
    createModal();
    document.body.classList.add('no-scroll');
    window.addEventListener('keyup', handleCloseModal);
};
