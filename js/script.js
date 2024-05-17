$(function () {
  const $menu = $('.gnb > li ');
  const $submenu = $('.submenu');
  const duration = 300;

  $menu.on('mouseenter', function () {
    $(this).find($submenu).stop().slideDown(duration);

    $(this).addClass('on');
  });

  $menu.on('mouseleave', function () {
    $submenu.slideUp(duration);
    $menu.removeClass('on');
  });
});
