// chat.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('chat-form');
    const chatBox = document.getElementById('chat-box');
    const nameInput = document.getElementById('name');
    const messageInput = document.getElementById('message');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = nameInput.value.trim();
        const message = messageInput.value.trim();

        if (name === '') {
            alert('Por favor, ingresa tu nombre.');
            return;
        }

        if (message === '') {
            alert('El mensaje no puede estar vacío.');
            return;
        }

        const messageElement = document.createElement('p');
        messageElement.textContent = `${name}: ${message}`;
        chatBox.appendChild(messageElement);

        // Limpiar los campos del formulario
        nameInput.value = '';
        messageInput.value = '';

        // Desplazar hacia abajo el chat
        chatBox.scrollTop = chatBox.scrollHeight;
    });
});
