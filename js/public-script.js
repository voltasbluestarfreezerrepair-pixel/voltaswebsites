document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.mobicallbtn-call-buttons a');
    buttons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            if (this.getAttribute('href') === '#') {
                event.preventDefault();
            }
        });
    });
});
