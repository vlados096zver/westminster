$(document).ready(function() {

  $('.mobile-wrap').on('click', function() {
    $('.line-burger').toggleClass('line-active');
    $('.main-header__list').slideToggle();
  });

  $(window).resize(function() {
    if ($(document).width() > 780) {
      $('.main-header__list').attr('style', '');
      $('.line-burger').removeClass('line-active');
    }
  })

  $('a[href^="#"]').click(function() {
    var target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 800);
    return false;
  });

  if(window.Swiper) {
    const swiper = new Swiper('.swiper', {
      loop: false,
      spaceBetween: 80,
      slidesPerView: 7,
      autoplay: {
       delay: 2000,
      },
      breakpoints: {
        340: {
          slidesPerView: 2,
        },
        480: {
          slidesPerView: 3,
        },
        740: {
          slidesPerView: 4,
        },
        1050: {
          slidesPerView: 5,
          spaceBetween: 40,
        },
        1250: {
          slidesPerView: 6,
        },
        1350: {
          slidesPerView: 7,
        },
      }
    });

  }

  function validate(input, length, regExp, error, phone) {

    $(input).on('blur keyup', function() {
      var value = $(this).val();
      var that = $(this);

      regExp = regExp == '' ? /./ : regExp;

      if (phone === true) {
        bool_reg = !regExp.test(value);
      } else {
        bool_reg = regExp.test(value);
      }

      if (value.length > length && value !== '' && bool_reg) {
        that.removeClass('form-fail').addClass('form-done');
        $(error).slideUp();
      } else {
        that.removeClass('form-done').addClass('form-fail');
        $(error).slideDown();
      }
    });

  }

  // деакцивация кнопки если есть поле с ошибкой

  function disBtn(input, btn, bool) {
    var input = $(input);
    input.on('blur keyup', function() {

      if (input.hasClass('form-fail') || bool == true) {
        $(btn).attr('disabled', 'disabled');
      } else {
        $(btn).removeAttr('disabled');
      }

    });

  }

  // для проверки при нажатии

  function valClick(input, length, regExp, error, phone) {
    var value = $(input).val();

    regExp = regExp == '' ? /./ : regExp;

    if (phone === true) {
      bool_reg = regExp.test(value);
    } else {
      bool_reg = !regExp.test(value);
    }

    if (value.length < length || value === '' || bool_reg) {
      $(input).addClass('form-fail');
      $(error).slideDown();
    }
  }

  //  деакцивация кнопки при нажатии

  function disBtnClick(input, btn) {
    var input = $(input);

    if (input.hasClass('form-fail')) {
      $(btn).attr('disabled', 'disabled');
      return false;
    } else {
      return true;
    }

  }

  $('input[type="tel"]').mask("+38 (999) 999-99-99");

  var regName = /^[a-zA-Zа-яА-ЯёЁIi]+/;
  var regPhone = /[_]/i;

  validate('#c_name', 1, regName, '.contacts__error--name');
  validate('#c_phone', 1, regPhone, '.contacts__error--phone', true);
  disBtn('#c_name, #c_phone', '.btn--contacts');

});
