$(document).ready(function () {
    $('#registrationForm').submit(function (event) {
        event.preventDefault(); // Prevent default form submission
        $.ajax({
            type: 'POST',
            url: 'process.php',
            data: $(this).serialize(),
            success: function (response) {
                $('#successMessage').show();
                $('#registrationForm')[0].reset();
            },
            error: function () {
                alert('An error occurred. Please try again.');
            }
        });
    });
});
