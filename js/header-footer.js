$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop()>100) {
            $('.nav-menu-wrapper').addClass('sticky')
        }
        else{
            $('.nav-menu-wrapper').removeClass('sticky')
        }
    })
})
const dangkyElement = document.querySelector('.dangky');
const dangnhapElement = document.querySelector('.dangnhap');


dangkyElement.addEventListener('click', function () {
    window.location.href = 'dangky_index.html';
})
dangnhapElement.addEventListener('click', function () {
    window.location.href = 'dangnhap_index.html';
})