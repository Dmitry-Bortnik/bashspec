$('[type="checkbox"]').on('click', function() {

    var $this = $(this);

    $($this).closest('label').toggleClass('active');

});
