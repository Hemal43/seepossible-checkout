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
  $(".faq-row .faq-question").on("click", function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this).siblings(".faq-answer").slideUp(200);
      $(".faq-row .faq-question h5").removeClass("minus").addClass("plus");
    } else {
      $(".faq-row .faq-question h5").removeClass("minus").addClass("plus");
      $(this).find("h5").removeClass("plus").addClass("minus");
      $(".faq-row .faq-question").removeClass("active");
      $(this).addClass("active");
      $(".faq-answer").slideUp(200);
      $(this).siblings(".faq-answer").slideDown(200);
    }
  });

  $(".faq-header .clsoe-icon").click(function(){
    $(".checkout-faq").hide();
  });
 
  $('.tab-header .tab-option').click(function(){
    var tab_id = $(this).attr('data-tab');
    $('.tab-header .tab-option').removeClass('active');
    $('.tab-content').removeClass('active');
    $(this).addClass('active');
    $("#"+tab_id).addClass('active');
  });

});
