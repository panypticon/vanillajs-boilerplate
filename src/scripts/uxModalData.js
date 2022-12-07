import tfwImage from '../images/what_tfw_detail.png';
import ch24Image from '../images/what_ch24_detail.png';
import dciImage from '../images/what_dci_detail.png';
import shoreImage1 from '../images/what_shore_detail_1.png';
import shoreImage2 from '../images/what_shore_detail_2.png';
import shoreImage3 from '../images/what_shore_detail_3.png';

const uxModalData = {
    tfw: {
        category: 'UX // Concept',
        company: 'TFW',
        summary: 'Vacation rental management software',
        content:
            // eslint-disable-next-line max-len
            '<h2>My work</h2><p>As UX and concept designer, I employed a cooperative, user-centric design toolset to help our customer better understand product requirements and user needs.</p><p>Once the project’s core principles were fleshed out, I designed its basic user experience, creating the core interaction patterns and UI components for a desktop-centric web app.</p><p>In parallel, I supported our UI designers in compiling an Atomic Design-based pattern library in Sketch.</p><h2>Weapons of choice</h2><p>Axure RP, paper, sticky notes</p>',
        image: {
            url: tfwImage,
            caption: 'Rental offer generation workflow in a desktop-centric web app (hi-fi mockups)'
        }
    },
    ch24: {
        category: 'UX // Product',
        company: 'CHECK24',
        summary: 'Price/feature comparison for insurance products',
        content:
            // eslint-disable-next-line max-len
            '<h2>My work</h2><p>As a UX-centric product manager, my goal was to improve the user experience of a data-driven, high-volume B2C product throughout its entire customer journey.</p><p>Via iterative improvements to the core product and associated processes (landing pages, e-mail communication, documents) and extensive quantitative testing, we were able to improve both conversion and overall customer satisfaction.</p><p>In addition, I created the experience for several smaller, niche-oriented comparison products, and did the foundational work for universal UI components that were used in a company-wide relaunch.</p><h2>Weapons of choice</h2><p>Balsamiq, paper, sticky notes</p>',
        image: {
            url: ch24Image,
            caption: 'Desktop- and mobile-centric flows for insurance comparisons'
        }
    },
    shore: {
        category: 'UX // UI',
        company: 'Shore',
        summary: 'Customer and appointment management for SMBs',
        content:
            // eslint-disable-next-line max-len
            '<h2>My work</h2><p>As Senior UX Manager, I accompanied the product development cycle from concept to prototype to final release.</p><p>Together with POs, I conducted user tests and iterated upon my designs to meet user expectations.</p><p>With our visual designers, I created final comps for development and compiled an Atomic Design-based pattern library in Sketch.</p><h2>Weapons of choice</h2><p>Sketch, Invision, paper, sticky notes</p>',
        carousel: [
            {
                url: shoreImage1,
                caption: 'Mobile-first appointment booking flow, easily integratable into SMB websites (hi-fi mockups)'
            },
            {
                url: shoreImage2,
                caption:
                    'Mobile-first appointment booking flow, easily integratable into SMB websites, ctd. (hi-fi mockups)'
            },
            {
                url: shoreImage3,
                caption: 'Self-signup and initial product configuration process (high-fidelity mockups)'
            }
        ]
    },
    dci: {
        category: 'Cooperative Design',
        company: 'Methodolody',
        summary: 'Design sprints & design thinking',
        content:
            // eslint-disable-next-line max-len
            '<h2>My work</h2><p>I believe in interdisciplinary design. If we are able to integrate the perspectives of customers, business stakeholders, designers and developers into one process, new products can become truly unique.</p><p>Design sprints and design thinking are valuable, lightning-fast frameworks for kickstarting and accompanying a cooperative design workflow.</p><p>Within such an environment, my primary responsibility is not that of an expert on software design and user experience. Rather, I try to act as a facilitator – helping others inject their unique knowledge into the design process.</p><h2>Weapons of choice</h2><p>Paper, sticky notes, Keynote or Axure RP</p>',
        image: {
            url: dciImage,
            caption: 'Ideation and brainstorming during a one-week design sprint'
        }
    }
};

export default uxModalData;
