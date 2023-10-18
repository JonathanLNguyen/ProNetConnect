const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const loginModal = document.getElementById('loginModal');
const registerModal = document.getElementById('registerModal');
const closeBtns = document.querySelectorAll('.close');
const modals = document.querySelectorAll('.modal');

loginBtn.onclick = function() {
    loginModal.style.display = 'block';
}

registerBtn.onclick = function() {
    registerModal.style.display = 'block';
}

// Close the modal when clicking the close button
closeBtns.forEach(function(closeBtn) {
    closeBtn.onclick = function() {
        modals.forEach(function(modal) {
            modal.style.display = 'none';
        });
    }
});

// Close the modal when clicking outside of it
window.onclick = function(event) {
    modals.forEach(function(modal) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
}
