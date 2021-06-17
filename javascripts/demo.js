function myFunction() {
  var x = document.getElementById('myTopnav');
  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}

$(function () {
  $('.hobbies img').on('click', function () {
    $(this).width(300);
    $(this).height(400);
  });
});
