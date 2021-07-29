let plaka = null

console.log("script started")
$(document).on('keydown', function() {
  switch(event.keyCode) {
      case 27: //ESC
      CloseApp();
      break;
    }
});


ChangePlate = function() {
  document.getElementById("plate").innerHTML = "tezcan31"
}

$('button').click(function(){
  $('.key > em').toggleClass('active');
});
$('div span').click(function(){
  console.log("3131")
  $('li').each(function(index){
    ceci = $(this);
    ceci.addClass('active');
  });
  setTimeout(function(){
    $('li').each(function(index){
      ceci = $(this);
      ceci.removeClass('active');
    });
  }, 500);
})



$(".kilit").click(function() {
    $.post('http://mbl-carkeysqb/LockVehicle', JSON.stringify({type: "lockVehicle", plaka: plaka}));
});
$(".unlock").click(function() {
  $.post('http://mbl-carkeysqb/LockVehicle', JSON.stringify({type: "unlock", plaka: plaka}));
});
$(".motor").click(function() {
  $.post('http://mbl-carkeysqb/LockVehicle', JSON.stringify({type: "engine", plaka: plaka}));
});




window.addEventListener("message", function (event) {   
  if (event.data.action == "open") {
    console.log("tamm")
    if (event.data.plate != null) {
      console.log("31")
      document.getElementById("plate").innerHTML = event.data.plate
      plaka = event.data.plate
      console.log(plaka)
        setTimeout(function() {
            $(".table").fadeIn(750, function() {
            $(".table").css({"display":"table"})
          });
      }, 10)
    }
  } else if (event.data.action == "close") {
    CloseApp();
  }
});


CloseApp = function() {
  setTimeout(function() {
    $(".table").fadeOut(750, function() {
    $(".table").css({"display":"none"})
    $.post("http://mbl-carkeysqb/close")
  });
}, 10)
}