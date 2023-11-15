$(window).on('load', function () {
  const menuLastItem = document.querySelector('.menu__arrow')
  const menu = document.querySelector('.menu')
  if (menuLastItem) {
    menuLastItem.addEventListener('click', () => {
      menu.classList.toggle('active')
    })
  }
  // const forgetMe = document.querySelectorAll(".forgetBtn");
  // const forgetBtn = document.querySelector(".modal__forgetPass-customBtn");
  // if(forgetMe){
  //     forgetMe.forEach((elem) => {
  //         elem.addEventListener('click', (e) =>{
  //             e.preventDefault();
  //             e.stopPropagation();
  //             forgetBtn.classList.toggle('active');
  //             // forgetBtn.forEach(btn => btn.classList.toggle('active'));

  //         })
  //     })
  // }
  const forgetMe = document.querySelectorAll('.forgetBtn')
  const forgetBtn = document.querySelectorAll('.modal__forgetPass-customBtn')
  if (forgetMe) {
    forgetMe.forEach((elem, index) => {
      elem.addEventListener('click', (e) => {
        forgetBtn[index].classList.toggle('active')
        e.preventDefault()
        e.stopPropagation()
      })
    })
  }

  $.fn.setCursorPosition = function (pos) {
    if ($(this).get(0).setSelectionRange) {
      $(this).get(0).setSelectionRange(pos, pos)
    } else if ($(this).get(0).createTextRange) {
      var range = $(this).get(0).createTextRange()
      range.collapse(true)
      range.moveEnd('character', pos)
      range.moveStart('character', pos)
      range.select()
    }
  }
  if (document.querySelector('[name="phone"]')) {
    $('[name="phone"]')
      .click(function () {
        $(this).setCursorPosition(4)
      })
      .mask('+7 (999) 999-99-99', {
        placeholder: '',
        autoclear: false,
      })
  }

  let closeMess = document.querySelectorAll('.lastPath__first-messageClose')
  let mess = document.querySelectorAll('.lastPath__first-message')
  closeMess.forEach((el, index) => {
    el.addEventListener('click', () => {
      mess[index].classList.add('lastPath__first-message--opacity')
      setTimeout(() => {
        mess[index].classList.add('lastPath__first-message--display')
      }, 400)
    })
  })

  $('.modal__input-select').select2({
    placeholder: `Промышленность`,
    dropdownParent: $('.selectParent'),
  })
  $('.modalMetro__wrap-selectItem').select2({
    placeholder: `Промышленность`,
    dropdownParent: $('.modalMetro__wrap-select'),
  })
  // document.querySelector('.fancybox-content').addEventListener('click', (e) =>{
  //     e.preventDefault();
  //     e.stopPropagation();
  // })

  if (document.querySelector('.infoAcc__middle-swiper')) {
    const projectsSwiper = new Swiper('.infoAcc__middle-swiper', {
      slidesPerView: 1,
      spaceBetween: 10,
      speed: 10000,
      loop: true,
      autoplay: {
        delay: 1,
      },
      allowTouchMove: false,
      // autoplay: true,
    })
  }

  if (document.querySelector('.modalNews__info')) {
    let targetMap = document.querySelectorAll('[data-tab]'),
      map = document.querySelectorAll('.modalNews__info')
    targetMap?.forEach((elem) => {
      elem.addEventListener('click', function (e) {
        e.preventDefault()
        let target = this.getAttribute('data-tab')
        map.forEach((elem) => {
          elem.classList.remove('modalNews__info--opacity', 'modalNews__info--display')
        })
        targetMap.forEach((elem) => {
          elem.classList.remove('active')
        })
        this.classList.add('active')
        let cat = document.querySelector('[data-info ="' + target + '"]')
        cat.classList.add('modalNews__info--display')
        setTimeout(() => {
          cat.classList.add('modalNews__info--opacity')
        }, 400)
      })
    })
  }

  $('.modal__formReg-wrap').submit(function (event) {
    console.log('hi')
    var form = $(this)
    var field = []
    form.find('input[data-validate]').each(function () {
      field.push('input[data-validate]')
      console.log(field)

      var value = $(this).val(),
        line = $(this).closest('.valEntry')
      for (var i = 0; i < field.length; i++) {
        if (!value) {
          line.addClass('valEntry--required')
          setTimeout(
            function () {
              line.removeClass('valEntry--required')
            }.bind(this),
            1000
          )
          event.preventDefault()
        }
      }
    })
  })
  Fancybox.bind('[data-fancybox]', {
    closeButton: false,
    contentClick: 'next',
    hideScrollbar: false,
    backdrop: {
      // show: true,
      opacity: 0, // Устанавливаем прозрачность фона в 0
    },
  })
  $('#toRegist').click(() => {
    Fancybox.close()
  })

  $('#toSignIn').click(() => {
    Fancybox.close()
  })

  let lol = document.querySelectorAll('.modalNews__close')
  let lol2 = document.querySelector('.modalMetro__close')
  lol.forEach((e) => {
    e.addEventListener('click', (ev) => {
      Fancybox.close()
      ev.preventDefault()
      ev.stopPropagation()
    })
  })
  lol2.addEventListener('click', (ev) => {
    Fancybox.close()
    ev.preventDefault()
    ev.stopPropagation()
  })
  $('.modalNews__card-type--fs14').click(() => {
    Fancybox.close()
  })
})
