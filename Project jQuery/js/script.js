$(function(){
  console.log('jquery loaded')

  $('a[href^="#"]').on('click', function(){
    const target = $(this).attr('href');
    console.log(target);
    if($(target).length >0){
      const top = $(target).offset().top;
      console.log(top);
      $('body, html').animate({
        'scrollTop': top
      },500);
    }else{
      $('body, html').animate({
        'scrollTop': 0
      },500);
    }
  });

  $('form').on('submit', function(event){
    event.preventDefault();
    function myFunction() {
      let checkbox = document.getElementById("#checkbox");
      if(checkbox.checked == true){
        alert("yeeey");
      }else{
        $('#message').css('border-color', 'red');
      }
    }
  });

  $("#submit").hide();

  $("#checkbox").on("click", function(){
    if($("#checkbox").is(":checked")){
      $("#submit").show();
    }else{
      $("#submit").hide();
    }
  })

});
