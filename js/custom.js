function checkForInput(element) {
  const $label = $(element).siblings('label');

  if ($(element).val().length > 0) {
    $label.addClass('active');
    $label.parent().addClass('active');
  } else {
    $label.removeClass('active');
    $label.parent().removeClass('active');
  }
}
$('input').each(function() {
  checkForInput(this);
});
$('input').on('change keyup', function() {
  checkForInput(this);  
});



$(document).ready(function() {


   $('.tab-header .tab-option').click(function(){
    var tab_id = $(this).attr('data-tab');
    $('.tab-header .tab-option').removeClass('active');
    $('.tab-content').removeClass('active');
    $(this).addClass('active');
    $("#"+tab_id).addClass('active');
  });

});