$(document).ready(function () {
    $("#signup-form").validate({
        rules: {
            fname: {
                required: true
            },
            sname: {
                required: true
            },
            "snd-name": {
                required: true,
                email: true
            },
            "scnd-name": {
                required: true,
                minlength: 6
            },
            gender: {
                required: true
            },
            "birthday-day": {
                required: true
            },
            "birthday-month": {
                required: true
            },
            "birthday-year": {
                required: true
            }
        },
        messages: {
            fname: "Please enter your first name",
            sname: "Please enter your surname",
            "snd-name": "Please enter a valid email address or mobile number",
            "scnd-name": "Please enter a password with at least 6 characters",
            gender: "Please select your gender",
            "birthday-day": "Please select your birth day",
            "birthday-month": "Please select your birth month",
            "birthday-year": "Please select your birth year"
        }
    });
});
