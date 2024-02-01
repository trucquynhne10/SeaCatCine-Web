document.addEventListener('DOMContentLoaded', function() {
    var loginButton = document.querySelector('.button-dang-nhap');

    loginButton.addEventListener('click', function(event) {
        event.preventDefault(); 

        var usernameInput = document.getElementById('nhap-ten').value;
        var passwordInput = document.getElementById('pass').value;

        if (usernameInput !== '' && passwordInput !== '') {
            window.location.href = 'account.html'; 
        } else {
            alert('Vui lòng điền đầy đủ thông tin đăng nhập!');
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    var registerButton = document.querySelector('.button-dang-ky');
    var confirmCheckbox = document.querySelector('.confirmTick');

    registerButton.addEventListener('click', function(event) {
        event.preventDefault(); 

        var usernameInput = document.getElementById('nhap-ten').value;
        var emailInput = document.getElementById('Eamil').value;
        var isChecked = confirmCheckbox.checked;

        if (usernameInput !== '' && emailInput !== '' && isChecked) {
            alert('Đăng ký thành công!');
            window.location.href = 'account.html'; 
        } else {
            alert('Vui lòng điền đầy đủ thông tin đăng ký!');
        }
    });
});
