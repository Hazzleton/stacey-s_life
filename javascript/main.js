$(document).ready(function(){

  $(".asiaword").hide();
  $("#pond").mouseenter(function(){
      $("#pondword").show();
  });

  $("#pond").mouseleave(function(){
      $("#pondword").hide();
  });
  $("#tokyo").mouseenter(function(){
      $("#tokyoword").show();
  });

  $("#tokyo").mouseleave(function(){
      $("#tokyoword").hide();
  });



});
