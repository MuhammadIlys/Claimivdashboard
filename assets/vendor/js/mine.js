    <script>

  $(document).ready(function() {
    $('.menu-item').click(function(e) {
    // e.preventDefault(); // Prevent the default behavior of the link
      
    // Remove the "active" class from all menu items
    $('.menu-item').removeClass('active');
    
    // Add the "active" class to the clicked menu item
    $(this).addClass('active');
  });
});

</script>