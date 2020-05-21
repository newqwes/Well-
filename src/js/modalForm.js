const BUTTON = document.getElementById('headerButton');
const CLOSE_BUTTON = document.getElementById('modalBattonClose');

BUTTON.addEventListener('click', () => {
    const subject = document.getElementById('model__id').value;
    document.getElementById('test').innerText = subject;
    document.getElementById('modalForm').classList.remove('modal__hidden');
    document.getElementById('modalForm').classList.add('modal__active');
});

CLOSE_BUTTON.addEventListener('click', () => {
    document.getElementById('modalForm').classList.remove('modal__active');
    document.getElementById('modalForm').classList.add('modal__hidden');
});