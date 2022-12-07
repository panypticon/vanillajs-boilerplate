import { handleCloseModal } from './showcaseModal';

const handleSubmit = async evt => {
    evt.preventDefault();
    const {
        name: { value: name },
        email: { value: email },
        message: { value: message }
    } = evt.target.elements;
    const button = document.querySelector('.modal__form button[type="submit"]');
    button.innerHTML = '<i class="bi bi-send jump"></i> Sending…';
    button.disabled = true;
    try {
        const res = await fetch('https://formspree.io/f/mdoyqorn', {
            method: 'POST',
            body: JSON.stringify({ name, email, message }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!res.ok) throw new Error();
        evt.target.removeEventListener('submit', handleSubmit);
        const modalContent = document.querySelector('.modal__content');
        modalContent.innerHTML = `
        <div class="modal__text modal__sent">
            <h2>Message Sent</h2>
            <i class="bi bi-check-circle"></i>
            <p>Hang in there, I'll get back to you ASAP.</p>
            <button class="btn btn--primary can-close">Close</button>
        </div>
        `;
    } catch (err) {
        const errorContainer = document.querySelector('.modal__form .error-container');
        errorContainer.innerHTML =
            '<i class="bi bi-exclamation-octagon-fill"></i> Oops, looks like something went wrong. Please try again in a few minutes.';
    }
};

const createModal = () => {
    const modalBackground = document.createElement('div');
    modalBackground.classList.add('modal__background', 'can-close');

    const modalBox = document.createElement('article');
    modalBox.classList.add('modal__box', 'fade-in-up');

    const modalHeader = document.createElement('div');
    modalHeader.classList.add('modal__header');

    const modalHeaderHeading = document.createElement('span');
    modalHeaderHeading.classList.add('modal__header-heading');
    modalHeaderHeading.innerText = "Let's Get in Touch";

    const modalHeaderClose = document.createElement('i');
    modalHeaderClose.classList.add('bi', 'bi-x-lg', 'can-close');

    const modalContent = document.createElement('section');
    modalContent.classList.add('modal__content');

    const modalForm = document.createElement('form');
    modalForm.classList.add('modal__form', 'modal__text');
    modalForm.addEventListener('submit', handleSubmit);

    modalForm.insertAdjacentHTML(
        'beforeend',
        `
    <p>Drop me a note, and I'll get back to you as soon as I can.</p>
    <div class="modal__form--grid">
        <div class="input-wrapper">
            <input type="text" id="name" name="name" placeholder="name" required>
            <label for="name">Name</label>
        </div>
        <div class="input-wrapper">
            <input type="email" id="email" name="email" placeholder="email" required>
            <label for="email">E-mail</label>
        </div>
        <div class="input-wrapper textarea">
            <textarea id="message" name="message" placeholder="message" required></textarea>
            <label for="message">Message</label>
        </div>
    </div>
    <div class="btn-wrapper">
        <button type="submit" class="btn btn--primary">Send message</button>
        <span class="error-container"></span>
    </div>
    `
    );

    modalHeader.appendChild(modalHeaderHeading);
    modalHeader.appendChild(modalHeaderClose);
    modalBox.appendChild(modalHeader);
    modalContent.appendChild(modalForm);
    modalBox.appendChild(modalContent);
    modalBackground.appendChild(modalBox);
    document.body.appendChild(modalBackground);

    const firstInput = modalForm.querySelector('input');
    firstInput.focus();

    modalBackground.addEventListener('click', handleCloseModal);
};

export const handleOpenForm = evt => {
    evt.preventDefault();
    createModal();
    document.body.classList.add('no-scroll');
    window.addEventListener('keyup', handleCloseModal);
};
