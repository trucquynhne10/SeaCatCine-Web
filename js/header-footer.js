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

let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

$(document).ready(function() {
  $(document).on("click", "#gopy-btm", function() {
    alert("Cảm ơn quý khách đã góp ý cho dịch vụ của chúng tôi.\nChúc quý khách có những trải nghiệm tuyệt vời tại SEACAT!");
    $("#gopy").val("");
  })
})

$(document).ready(function() {
  $(document).on("click", "#gopy-btm1", function() {
    alert("Cảm ơn quý khách đã đăng ký nhận thông báo mới từ chúng tôi!");
    $("#gopy1").val("");
  })
})