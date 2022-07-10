var open_menu = document.getElementById('Hamburguer-click-open')
var close_menu = document.getElementById('Hamburguer-click-close')
var menu_mobile = document.getElementById('menu-mobile')
var close_mobile = document.getElementById('close-mobile')

open_menu.addEventListener('click', function () {
  close_mobile.style.display = 'none'
  menu_mobile.style.display = 'block'
  menu_mobile.style.transition = ' all 0.5s 0.7s ease-out'
})

close_menu.addEventListener('click', function () {
  close_mobile.style.display = 'block'
  menu_mobile.style.display = 'none'
})
