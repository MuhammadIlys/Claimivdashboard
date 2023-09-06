// const menuItems = document.querySelectorAll('.menu-item');

// menuItems.forEach((menuItem) => {
//   menuItem.addEventListener('click', function (e) {
//     e.preventDefault();
//     menuItems.forEach((item) => {
//       item.classList.remove('active');
//     });
//     this.classList.add('active');

//   });

// });

// const url = window.location.href;
// const urlParts = url.split('/'); // Split the URL by "/"
// const lastPartWithExtension = urlParts[urlParts.length - 1]; // Get the last part of the URL with the extension
// const lastPart = lastPartWithExtension.split('.')[0]; // Remove the extension by splitting the last part at the dot (.)
//   // Output the last part of the URL without the extension

$(document).ready(function () {
  var currentPage = window.location.pathname.split('/').pop().replace('.html', '');
  $('.menu-item').each(function () {
    var menuItemId = $(this).attr('id');

    if (menuItemId == currentPage){
      var menuClasses = $('#' + menuItemId).attr('class').split(' ');
      $.each(menuClasses,function(index,className){
       if(className != 'active'){
        // console.log('no active class');
        $(menuItemId).addClass('active');
       }else{
        console.log('yes active class');
       }
      });
    }

  });
});